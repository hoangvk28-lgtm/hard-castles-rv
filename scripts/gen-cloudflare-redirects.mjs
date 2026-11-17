#!/usr/bin/env node
/**
 * Generates public/_redirects, the Cloudflare redirect map that sends every
 * buying guide and informational article on hardcastlesrv.com to its
 * counterpart on rvgearlab.com.
 *
 * Why this exists: the article content moved to RV Gear Lab. This site is now a
 * static export (no Node server, see next.config.ts), so next.config's
 * redirects() does nothing and Cloudflare reads public/_redirects instead.
 *
 * Mapping strategy, in priority order:
 *   1. An explicit rule per slug whose silo differs between the two sites, or
 *      that RV Gear Lab does not have at all (MANUAL_TARGETS below). These must
 *      come first in the file: Cloudflare applies the first matching rule.
 *   2. One wildcard rule per shared silo, for the ~1,600 articles that kept
 *      both their slug and their silo. These land on the final URL with no
 *      extra hop.
 *   3. A wildcard for the legacy /guide/<slug> form, pointing at RV Gear Lab's
 *      own /guide/<slug>, which self-canonicalizes to the right silo. A single
 *      wildcard cannot know each slug's silo, and these URLs already went
 *      through an internal redirect on this site, so this is not a regression.
 *
 * Usage: node scripts/gen-cloudflare-redirects.mjs [path-to-rvgearlab-checkout]
 */
import fs from "fs";
import path from "path";

const HERE = path.join(import.meta.dirname, "..");
const RV = process.argv[2] ?? path.join(HERE, "..", "RVGearLab");
const TARGET_ORIGIN = "https://www.rvgearlab.com";

// Silos that exist on both sites. An article that kept its slug and sits in one
// of these on both sides is covered by a wildcard, not an explicit rule.
const SHARED_SILOS = [
  "power-electrical",
  "water-plumbing",
  "towing-leveling",
  "rv-care",
  "interior-comfort",
  "camping-travel",
];

// Silos that only exist on RV Gear Lab. A slug that moved into one of these
// needs an explicit rule.
const RV_ONLY_SILOS = [
  "tents-shelter",
  "sleep-gear",
  "camp-kitchen",
  "camp-power",
  "camp-furniture",
  "campsite-gear",
  "packs-hiking",
  "clothing-footwear",
];

const ALL_RV_SILOS = new Set([...SHARED_SILOS, ...RV_ONLY_SILOS]);

// Slugs RV Gear Lab never published. Each maps to the closest guide it does
// have, chosen by hand: a near-identical product, or the generic guide covering
// the same product with the qualifier dropped.
const MANUAL_TARGETS = {
  "best-35-ft-rv-sewer-hose": "best-rv-sewer-hose",
  "best-40-ft-rv-sewer-hose": "best-rv-sewer-hose",
  "best-clear-rv-roof-coating": "best-rv-roof-coating",
  "best-eternabond-tape-for-fiberglass-rv-roof": "best-eternabond-tape-for-tpo-rv-roof",
  "best-lightweight-weight-distribution-hitch": "best-weight-distribution-hitch",
  "best-rv-leveler-for-triple-axle-trailer": "best-leveling-blocks-for-triple-axle-rv",
  "best-rv-wash-and-wax-for-aluminum-siding": "best-rv-wash-and-wax",
  "best-stainless-steel-rv-accumulator-tank": "best-rv-water-pump-accumulator-tank",
};

// ─── Parsing ─────────────────────────────────────────────────────────────────
// Both registries are hand-maintained TypeScript literals, so they are read with
// a regex rather than imported: importing would mean compiling the whole 50k-line
// module (and, on this side, pulling in files this build no longer ships).

/** slug -> silo, from a data/guides.ts buying-guide registry. */
function readGuideRegistry(file) {
  const text = fs.readFileSync(file, "utf8");
  const re = /slug:\s*"([^"]+)",\s*\n\s*categorySlug:\s*"([^"]*)",\s*\n\s*subcategorySlug:\s*"([^"]*)"/g;
  const out = new Map();
  for (const [, slug, cat, sub] of text.matchAll(re)) {
    const silo = ALL_RV_SILOS.has(sub) ? sub : ALL_RV_SILOS.has(cat) ? cat : null;
    if (silo) out.set(slug, silo);
  }
  return out;
}

/** slug -> silo, from an informational-guides registry (JSON-style keys). */
function readInformationalRegistry(file) {
  if (!fs.existsSync(file)) return new Map();
  const text = fs.readFileSync(file, "utf8");
  const re = /"slug":\s*"([^"]+)",\s*\n\s*"silo":\s*"([^"]+)"/g;
  return new Map([...text.matchAll(re)].map(([, slug, silo]) => [slug, silo]));
}

function merge(...maps) {
  const out = new Map();
  for (const m of maps) for (const [k, v] of m) out.set(k, v);
  return out;
}

const hc = merge(
  readGuideRegistry(path.join(HERE, "data", "guides.ts")),
  readInformationalRegistry(path.join(HERE, "data", "informational-guides.ts")),
);
const rv = merge(
  readGuideRegistry(path.join(RV, "data", "guides.ts")),
  readInformationalRegistry(path.join(RV, "data", "informational-guides.ts")),
  readInformationalRegistry(path.join(RV, "data", "informational-guides.camping.generated.ts")),
);

if (rv.size === 0) {
  console.error(`No RV Gear Lab registry found under ${RV}. Pass its path as the first argument.`);
  process.exit(1);
}

// ─── Build the rule list ─────────────────────────────────────────────────────

const explicit = [];
const stats = { wildcard: 0, moved: 0, manual: 0, unresolved: [] };

for (const [slug, hcSilo] of [...hc].sort(([a], [b]) => (a < b ? -1 : 1))) {
  let targetSlug = slug;
  let rvSilo = rv.get(slug);

  if (!rvSilo) {
    const fallback = MANUAL_TARGETS[slug];
    if (!fallback) {
      stats.unresolved.push(slug);
      continue;
    }
    targetSlug = fallback;
    rvSilo = rv.get(fallback);
    if (!rvSilo) {
      stats.unresolved.push(`${slug} (fallback ${fallback} not on RV Gear Lab either)`);
      continue;
    }
    stats.manual++;
  } else if (rvSilo === hcSilo) {
    // Covered by the silo wildcard below; no explicit rule needed.
    stats.wildcard++;
    continue;
  } else {
    stats.moved++;
  }

  const to = `${TARGET_ORIGIN}/${rvSilo}/${targetSlug}`;
  // Both URL forms this site served the article at.
  explicit.push(`/${hcSilo}/${slug} ${to} 301`);
  explicit.push(`/guide/${slug} ${to} 301`);
}

const lines = [
  "# Cloudflare redirect map. GENERATED FILE - do not edit by hand.",
  "# Regenerate with: node scripts/gen-cloudflare-redirects.mjs [path-to-rvgearlab-checkout]",
  "#",
  "# Every buying guide and informational article that used to live on this site",
  "# now lives on rvgearlab.com. Cloudflare applies the FIRST matching rule, so",
  "# the per-slug rules below must stay ahead of the wildcards.",
  "",
  `# Articles whose silo changed on RV Gear Lab (${stats.moved}), plus ${stats.manual} that`,
  "# RV Gear Lab never published and are sent to their closest equivalent.",
  ...explicit,
  "",
  "# Keep this site's own silo hub pages reachable at their canonical path.",
  ...SHARED_SILOS.map((s) => `/${s}/ /${s} 301`),
  "",
  "# The guide index moved too; there is no per-article index here any more.",
  `/guide ${TARGET_ORIGIN}/guide 301`,
  `/guide/all ${TARGET_ORIGIN}/guide 301`,
  "",
  `# Everything else in a shared silo kept its slug and its silo (${stats.wildcard} articles).`,
  ...SHARED_SILOS.map((s) => `/${s}/* ${TARGET_ORIGIN}/${s}/:splat 301`),
  "",
  "# Legacy /guide/<slug> form. RV Gear Lab redirects it to the article's silo.",
  `/guide/* ${TARGET_ORIGIN}/guide/:splat 301`,
  "",
];

const outFile = path.join(HERE, "public", "_redirects");
fs.writeFileSync(outFile, lines.join("\n"));

const dynamicCount = SHARED_SILOS.length + 1;
console.log(`Wrote ${outFile}`);
console.log(`  articles mapped       : ${stats.wildcard + stats.moved + stats.manual}`);
console.log(`    via silo wildcard   : ${stats.wildcard}`);
console.log(`    moved to a new silo : ${stats.moved}`);
console.log(`    hand-mapped         : ${stats.manual}`);
console.log(`  static rules          : ${explicit.length + SHARED_SILOS.length + 2} (Cloudflare limit 2000)`);
console.log(`  wildcard rules        : ${dynamicCount} (Cloudflare limit 100)`);
if (stats.unresolved.length) {
  console.error(`\nUNRESOLVED (${stats.unresolved.length}) - add to MANUAL_TARGETS:`);
  for (const s of stats.unresolved) console.error(`  ${s}`);
  process.exit(1);
}
