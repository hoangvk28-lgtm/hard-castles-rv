// Stage A of the best-guide pipeline (zero LLM tokens).
// Usage: node scripts/stage-a.mjs <slugs-file "Cluster|slug" per line> <out-dir> [--fresh]
// For each slug: builds queries from the slug, searches Amazon (cached), filters off-topic/mismatched numbers,
// picks 6 diverse priced products not used anywhere else, and writes <out-dir>/<slug>.json containing a compact
// fact sheet + the slug's content-gap entry, so the writer only has to read ONE small file.
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";

const [slugsFile, outDir] = process.argv.slice(2);
mkdirSync(outDir, { recursive: true });
const GAP = process.env.GAP || "Guide Best Plan/HardcastlesRV-P2-P3-Content-Gap.md";
const TMP = process.env.RV_TMP || (process.env.TEMP || "/tmp") + "/claude/rv";
for (const l of readFileSync(".env.local", "utf8").split("\n")) { const i = l.indexOf("="); if (i > 0 && !process.env[l.slice(0, i)]) process.env[l.slice(0, i)] = l.slice(i + 1).trim(); }
const M = "www.amazon.com", TAG = process.env.AMAZON_PAAPI_PARTNER_TAG;
const tok = (await (await fetch("https://api.amazon.com/auth/o2/token", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ grant_type: "client_credentials", client_id: process.env.AMAZON_PAAPI_ACCESS_KEY, client_secret: process.env.AMAZON_PAAPI_SECRET_KEY, scope: "creatorsapi::default" }) })).json()).access_token;
if (!tok) { console.error("token failed"); process.exit(1); }

const CL = {
  "Inverter Generators": { q: (k) => [k, k.replace("inverter generator", "quiet inverter generator RV ready"), k.replace("inverter generator", "portable inverter generator")], must: /generator/i, ban: /adapter|cord|cover|inlet|transfer switch|lock|wheel kit|parallel kit|solar generator|power station|oil|tank/i },
  "Lithium RV Batteries": { q: (k) => [k, k.replace("lithium rv battery", "LiFePO4 battery 12V RV"), k + " LiFePO4"], must: /lifepo4|lithium/i, ban: /charger only|tester|terminal|cable|cover|monitor|isolator|switch|tray|jump starter|golf cart only/i },
  "RV Surge Protectors": { q: (k) => [k, k + " 30 amp", k + " 50 amp"], must: /surge|protector|ems|watchdog/i, ban: /cord only|extension cord|power strip|adapter only|dogbone/i },
  "RV Battery Monitors": { q: (k) => [k, k.replace("battery monitor", "battery monitor shunt"), k.replace("battery monitor", "battery monitor bluetooth")], must: /monitor|shunt|meter/i, ban: /tire|camera|car alarm|blood|heart/i },
  "RV Converters": { q: (k) => [k, k + " 12V deck mount", k.replace(/converter/, "converter charger lithium")], must: /convert|charger|power center|power supply/i, ban: /adapter|cable|fuse|breaker|inverter|extension|cover|panel|solar|generator|wire|plug/i },
  "RV Solar": { q: (k) => [k, k + " kit with charge controller", k + " monocrystalline 12V"], must: /solar|panel|pv/i, ban: /bracket|mount(?!ed)|connector|extension|cable|light|lamp|fan|battery charger only|cleaner|cover/i },
  "RV Generators": { q: (k) => [k, k.replace("rv generator", "inverter generator rv ready"), k + " 30 amp quiet", k.replace("rv generator","portable generator"), k.replace(/for (\d+) amp rv/, "generator $1 amp RV outlet").replace("best ",""), k.replace("rv generator","dual fuel generator")], must: /generator/i, ban: /adapter|cord|cover|inlet|transfer switch|tent|kit only|lock|wheel kit|parallel kit|solar generator|power station|oil|tank/i },
  "Portable Power Stations": { q: (k) => [k, k.replace("portable power station", "power station LiFePO4"), k.replace("portable power station", "solar generator"), k.replace("portable power station","power station LiFePO4 camping"), k.replace("portable power station","battery generator")], must: /power station|solar generator|portable power|powerhouse/i, ban: /air conditioner|\bAC unit|cable|cover|panel only|adapter|bag|case|expansion|accessory/i },
  "RV Batteries": { q: (k) => [k, k + " 12V", k.replace("rv battery", "battery for RV camper")], must: /batter/i, ban: /charger only|tester|terminal|cable|box|cover|monitor|isolator|switch|tray|jump starter/i },
  "RV Water Pressure Regulators": { q: (k) => [k, k.replace("rv water pressure regulator", "water pressure regulator RV brass lead free"), k.replace("rv water pressure regulator", "RV water pressure regulator with gauge adjustable"), k.replace("rv water pressure regulator", "camper water pressure reducer valve"), k + " 3/4 inch garden hose"], must: /regulat|reducer|pressure valve/i, ban: /filter cartridge only|hose only|gauge only|pump|softener|replacement filter|tank|drip|irrigation|sprinkler/i, req: [[/adjustable/, /adjust/i], [/gauge/, /gauge/i], [/lead-free/, /lead.?free/i], [/fixed/, /^(?!.*adjust)/i], [/high-flow/, /hi(gh)?.?flow/i], [/filter/, /filter/i], [/city-water-inlet/, /inlet/i]] },
  "RV Water Filters": { q: (k) => [k, k.replace("rv water filter", "RV water filter system canister"), k + " camper", k.replace(/rv |for rv/g, "") + " RV", ...(/4-stage|reverse-osmosis|portable/.test(k.replace(/ /g, "-")) ? [k.replace("rv ", "") + " system", k.replace("rv ", "RV camper ") + " canister housing", k + " travel"] : [])], must: /filter|purif|reverse osmosis/i, ban: /refill|replacement|filter set|shower|whole house|cartridges? \d+ ?pack|pitcher|fridge|refrigerator|shower ?head|aerator|straw|bottle|pool|aquarium|air filter|fuel|wrench only|replacement cartridges? only|faucet filter/i, req: [[/2-stage/, /2.?stage|two.?stage|dual/i], [/3-stage/, /3.?stage|three.?stage/i], [/4-stage/, /4.?stage|four.?stage/i], [/uv-/, /\buv\b|ultraviolet/i], [/inline/, /in.?line|hose/i], [/under-sink/, /under.?sink|undersink/i], [/canister/, /canister|housing|10"|10 inch|big blue/i], [/pressure-regulator/, /regulat/i], [/with-pump/, /pump/i], [/with-stand/, /stand|bracket|mount/i], [/reverse-osmosis/, /reverse osmosis|\bRO\b/i], [/garden-hose/, /hose/i], [/sediment/, /sediment/i], [/high-flow/, /flow/i], [/portable/, /portable/i], [/system/, /system|stage|canister|housing/i]] },
  "Trailer Brake Controllers": { q: (k) => [k, k.replace("trailer brake controller", "electric brake controller trailer"), k + " Tekonsha CURT", k.replace("trailer brake controller", "brake control wiring harness"), ...(/hydraulic/.test(k) ? ["electric over hydraulic brake controller Prodigy", "EOH trailer brake controller actuator compatible", "brake controller electric hydraulic mode"] : []), ...(/compact/.test(k) ? ["small trailer brake controller under dash", "mini electric brake controller"] : [])], must: /brake control/i, ban: /brake (pad|shoe|rotor|caliper|drum|assembly|magnet)|actuator|breakaway kit only|tester|tail ?light|led light/i, req: [[/wireless/, /wireless|bluetooth|\bapp\b/i], [/bluetooth/, /bluetooth|\bapp\b|wireless/i], [/proportional/, /proportional|inertia/i], [/time-delayed/, /time.?delay|time.?based|primus|voyager/i], [/7-pin/, /7.?(pin|way|blade)/i], [/knob/, /knob|dial|rotary/i], [/-kit/, /kit|harness|wiring/i], [/ford-f150/, /ford|f.?150/i], [/silverado/, /chevy|chevrolet|silverado|gm\b/i], [/ram-1500/, /\bram\b|dodge/i], [/jeep/, /jeep|gladiator/i], [/frontier/, /nissan|frontier/i], [/tacoma/, /toyota|tacoma/i], [/tundra/, /toyota|tundra/i], [/tesla/, /wireless|bluetooth|\bapp\b|tesla/i], [/qx80/, /infiniti|qx80|nissan/i], [/oem-style/, /oem|integrated|dash|in.?dash/i], [/compact/, /compact|mini|small|slim/i], [/1-to-4-axles/, /1.?(to|-).?4 axle|4 axle|1-4/i]] },
  "Sway Control Hitches": { q: (k) => [k, k.replace("sway control hitch", "weight distribution hitch with sway control"), k + " trailer", k.replace("sway control hitch", "friction sway control bar kit"), ...(/2 5 inch|class 5/.test(k) ? ["weight distribution hitch 2-1/2 inch shank sway control", "2.5 inch receiver weight distribution hitch", "heavy duty weight distribution hitch 2-1/2 shank 15000 lb"] : []), ...(/without weight/.test(k) ? ["friction sway control kit trailer", "trailer sway control bar", "anti sway bar trailer friction"] : [])], must: /sway|weight distribut/i, ban: /hitch pin|hitch lock|receiver cover|tow strap|bike rack|cargo carrier|sway bar link|stabilizer jack|wiper/i, req: [[/4-point/, /4.?point|four.?point/i], [/friction/, /friction|sway (bar|control) (kit|unit)/i], [/dual-cam/, /dual.?cam|cam/i], [/without-weight/, /^(?!.*weight distribut)/i], [/2-5-inch/, /2.?1\/2|2\.5|2 1\/2/i], [/class-5/, /class (v|5)|class-v|2.?1\/2|2\.5/i], [/6-inch-drop/, /6.?(in\b|inch|")|6" drop/i], [/8-inch-drop/, /8.?(in\b|inch|")|8" drop/i], [/lifted/, /drop|rise|lift|adjustable/i], [/sway-bar/, /sway (bar|control)/i]] },
  "RV Electrical Management Systems": { q: (k) => [k, k.replace("rv ems", "RV surge protector EMS"), k.replace("rv ems", "electrical management system RV") , k + " Progressive Industries"], must: /surge|\bems\b|protect|watchdog|management/i, ban: /cord only|extension cord|adapter only|dogbone|power strip|usb/i, req: [[/hardwired/, /hard.?wire|hardwire|\bhw\b/i]] },
  "RV TPMS": { q: (k) => [k, k.replace(/rv tpms|tpms/, "RV tire pressure monitoring system"), k + " trailer sensors", k.replace(/rv tpms|tpms/, "TPMS RV trailer repeater")], must: /tpms|tire pressure monitor/i, ban: /valve stem only|tool kit|inflator|compressor|gauge only|replacement battery/i, req: [[/4-sensor/, /4 sensors?|4.?pack|4 tires?|4pcs/i], [/8-sensor/, /8 sensors?|8.?pack|8 tires?|8pcs/i], [/internal/, /internal|inner|in.?tire/i], [/sensors/, /sensor/i]] },
  "RV Inverters": { q: (k) => [k, k.replace(/rv /, "") + " pure sine wave 12V", k + " charger transfer switch"], must: /inverter/i, ban: /generator|cable|fuse|remote only|cover|solar panel kit|car inverter 150|usb/i },
};

function numTokens(slug) {
  const out = [];
  let m;
  const re = /(\d+)-(watt|amp|volt|ah)\b|(\d+)ah\b/g;
  while ((m = re.exec(slug))) out.push({ n: Number(m[1] || m[3]), u: m[2] || "ah" });
  return out;
}
function matchesNum(title, tk) {
  const t = title.toLowerCase().replace(/,/g, "");
  const { n, u } = tk;
  const pat = {
    watt: new RegExp(`\\b${n}\\s*-?\\s*(w\\b|watt)`),
    amp: new RegExp(`\\b${n}\\s*-?\\s*(a\\b|amp)`),
    volt: new RegExp(`\\b${n}\\s*-?\\s*(v\\b|volt)`),
    ah: new RegExp(`\\b${n}\\s*-?\\s*ah\\b`),
  }[u];
  return pat.test(t);
}

async function search(q) {
  const cache = resolve(TMP, "qcache");
  mkdirSync(cache, { recursive: true });
  const f = resolve(cache, Buffer.from(q).toString("hex").slice(0, 100) + ".json");
  if (existsSync(f)) return JSON.parse(readFileSync(f, "utf8"));
  let items = [];
  for (let t = 0; t < 3; t++) {
    const r = await fetch("https://creatorsapi.amazon/catalog/v1/searchItems", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${tok}`, "x-marketplace": M }, body: JSON.stringify({ keywords: q, marketplace: M, partnerTag: TAG, itemCount: 10, resources: ["images.primary.large", "itemInfo.title", "itemInfo.features", "itemInfo.byLineInfo", "offersV2.listings.price"] }) });
    const d = await r.json();
    if (r.ok) { items = (d.searchResult?.items || []).map((i) => ({ asin: i.asin, title: i.itemInfo?.title?.displayValue, brand: i.itemInfo?.byLineInfo?.brand?.displayValue, price: i.offersV2?.listings?.[0]?.price?.money?.amount ?? null, img: i.images?.primary?.large?.url, features: i.itemInfo?.features?.displayValues || [] })); break; }
    await new Promise((s) => setTimeout(s, 1500));
  }
  writeFileSync(f, JSON.stringify(items));
  await new Promise((s) => setTimeout(s, 1100));
  return items;
}

// ASINs used anywhere already
const used = new Set();
for (const f of readdirSync("data/guides")) { if (!f.endsWith(".ts")) continue; for (const m of readFileSync("data/guides/" + f, "utf8").matchAll(/\/dp\/([A-Z0-9]{10})/g)) used.add(m[1]); }
for (const f of readdirSync("scripts/p2-content")) for (const m of readFileSync("scripts/p2-content/" + f, "utf8").matchAll(/asin: "([A-Z0-9]{10})"/g)) used.add(m[1]);

const gap = readFileSync(GAP, "utf8");
const p2 = gap.slice(gap.indexOf("# P2 articles"));
function gapEntry(slug) {
  const i = p2.indexOf("/" + slug + "/");
  if (i < 0) return "";
  const start = p2.lastIndexOf("### ", i), end = p2.indexOf("\n### ", i);
  return p2.slice(start, end < 0 ? undefined : end).split("\n").filter((l) => !/Competitor pattern|Evidence to collect|Internal-link parent/.test(l)).join("\n");
}
function clusterNote(cluster) {
  const key = cluster;
  const i = gap.indexOf("### " + key + " (");
  if (i < 0) return "";
  return gap.slice(i, gap.indexOf("\n### ", i + 5)).trim();
}

const lines = readFileSync(slugsFile, "utf8").split("\n").map((l) => l.trim()).filter(Boolean);
const taken = new Set();
for (const line of lines) {
  const [cluster, slug] = line.split("|");
  const cfg = CL[cluster];
  const kw = slug.replace(/^best-/, "").replace(/-/g, " ");
  const bestKw = "best " + kw;
  const raw = [];
  for (const q of cfg.q(kw)) raw.push(...(await search(q)));
  const seen = new Set();
  let cands = raw.filter((i) => i.asin && !seen.has(i.asin) && seen.add(i.asin) && i.price != null && i.title);
  cands = cands.filter((i) => cfg.must.test(i.title) && !cfg.ban.test(i.title));
  for (const [sp, tp] of cfg.req || []) if (sp.test(slug)) cands = cands.filter((i) => tp.test(process.env.LOOSE ? i.title + " " + i.features.join(" ") : i.title));
  const toks = numTokens(slug);
  let numOk = cands;
  if (toks.length) numOk = cands.filter((i) => toks.every((tk) => matchesNum(process.env.LOOSE ? i.title + ' ' + i.features.join(' ') : i.title, tk)));
  const usedIn = {};
  if (process.env.ALLOW_USED) for (const f of readdirSync("data/guides")) { if (!f.endsWith(".ts")) continue; for (const m of readFileSync("data/guides/" + f, "utf8").matchAll(/\/dp\/([A-Z0-9]{10})/g)) (usedIn[m[1]] ??= new Set()).add(f); }
  let pool = numOk.filter((i) => !taken.has(i.asin) && (process.env.ALLOW_USED || !used.has(i.asin)));
  const reuse = pool.length < 6 ? numOk.filter((i) => taken.has(i.asin) && !used.has(i.asin)).slice(0, Math.min(2, 6 - pool.length)) : [];
  pool.sort((a, b) => (used.has(a.asin) ? 1 : 0) - (used.has(b.asin) ? 1 : 0));
  // diversify: max 2 per brand, spread over price
  if (!process.env.ALLOW_USED) pool.sort((a, b) => a.price - b.price);
  const picks = [];
  const bc = {};
  const step = process.env.ALLOW_USED ? 1 : Math.max(1, Math.floor(pool.length / 6));
  for (let k = 0; k < pool.length && picks.length < 6; k += 1) {
    const it = pool[(k * step) % pool.length];
    if (picks.includes(it)) continue;
    if (process.env.ALLOW_USED && usedIn[it.asin]) { const cnt = {}; let over = false; for (const p of picks) for (const g of usedIn[p.asin] || []) cnt[g] = (cnt[g] || 0) + 1; for (const g of usedIn[it.asin]) if ((cnt[g] || 0) >= 2) over = true; if (over) continue; }
    const b = (it.brand || "x").toLowerCase();
    if ((bc[b] || 0) >= 2) continue;
    bc[b] = (bc[b] || 0) + 1; picks.push(it);
  }
  for (const it of pool) { if (picks.length >= 6) break; if (!picks.includes(it) && (bc[(it.brand || "x").toLowerCase()] || 0) < 3) { picks.push(it); bc[(it.brand || "x").toLowerCase()] = (bc[(it.brand || "x").toLowerCase()] || 0) + 1; } }
  for (const it of reuse) if (picks.length < 6) picks.push(it);
  picks.sort((a, b) => b.price - a.price);
  picks.forEach((p) => taken.add(p.asin));
  const out = {
    slug, cluster, keyword: bestKw, numericClaim: toks.map((t) => `${t.n} ${t.u}`),
    status: picks.length >= 5 ? "ok" : "THIN",
    candidatesAfterFilter: numOk.length, availableUnused: pool.length,
    gap: gapEntry(slug), clusterFinding: clusterNote(cluster),
    picks: picks.map((p) => ({ asin: p.asin, brand: p.brand, price: p.price, title: p.title.slice(0, 170), features: p.features.slice(0, 5).map((f) => f.replace(/\s+/g, " ").slice(0, 200)) })),
  };
  writeFileSync(resolve(outDir, slug + ".json"), JSON.stringify(out, null, 1));
  console.log(`${out.status.padEnd(4)} ${slug}  picks=${picks.length} filtered=${numOk.length} unused=${pool.length}`);
}
