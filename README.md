# Hardcastle's RV (hardcastlesrv.com)

A Next.js 16 site deployed to **Cloudflare** as a static export.

The buying guides and informational articles that used to live here were moved to
**RV Gear Lab** (`rvgearlab.com`). This site keeps its homepage, its six silo hub
pages, its author page and its editorial/legal pages; every article URL now
301-redirects to the matching page on RV Gear Lab.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build and deploy

```bash
npm run build        # Next.js static export -> ./out
npm run preview      # serve ./out through the real Cloudflare runtime, port 8787
npm run deploy       # build, then wrangler deploy
```

`npm run preview` and `npm run deploy` run wrangler with `--env-file .env.cloudflare`
(an intentionally empty file). Wrangler otherwise picks up `.env.local` and uploads
the Amazon API keys in it as Worker secrets. This site has no Worker code and needs
no secrets.

### Deploying from GitHub instead

In the Cloudflare dashboard, create a **Worker** connected to this repository with:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Path / root directory | repository root |

Set `NEXT_PUBLIC_SITE_URL` to `https://www.hardcastlesrv.com` as a build-time
environment variable. Nothing else is needed: `.env.local` is gitignored, so a
CI build has no secrets to leak.

## Why a static export

The previous Vercel deployment was paused for exceeding plan limits. A static
export has no per-request server cost at all, so Cloudflare serves it from its
asset hosting for free. The trade-offs this imposes, and where each one is
handled:

| Not available in a static export | Where it lives now |
|---|---|
| `next.config.ts` `headers()` | `public/_headers` |
| `next.config.ts` `redirects()` | `public/_redirects` |
| Route handlers (`app/api/**`) | removed |
| Middleware (`middleware.ts`) | removed; bot filtering belongs in Cloudflare's WAF |
| `next/image` optimization | `images.unoptimized: true` |
| ISR / `export const revalidate` | removed; pages are prerendered at build time |

`app/sitemap.ts` and `app/robots.ts` both declare `export const dynamic = "force-static"`,
which the export requires.

## One step Cloudflare cannot take from this repo

The non-www to www 301 used to be a host-matching rule in `next.config.ts`.
`public/_redirects` cannot match on hostname, so after the first deploy add a
**Redirect Rule** in the Cloudflare dashboard (Rules -> Redirect Rules):

* When incoming requests match: `Hostname equals hardcastlesrv.com`
* Then: dynamic redirect to `concat("https://www.hardcastlesrv.com", http.request.uri.path)`, status 301, preserve query string

Without it, both hostnames serve the site and `www` is only canonical because of
the `<link rel="canonical">` tags.

## The redirect map

`public/_redirects` is generated, not hand-edited:

```bash
npm run redirects                                      # assumes ../RVGearLab
node scripts/gen-cloudflare-redirects.mjs /path/to/rvgearlab
```

It reads both sites' registries and emits, in the order Cloudflare evaluates them:

1. **Per-slug rules** for the 33 articles RV Gear Lab filed under a different silo
   (`camping-travel` split into `camp-power`, `camp-furniture`, `camp-kitchen` and
   `campsite-gear`), plus the 8 slugs RV Gear Lab never published, which are sent to
   their closest equivalent (`MANUAL_TARGETS` in the script).
2. **Trailing-slash rules** so this site's own six hub pages stay reachable.
3. **One wildcard per shared silo**, covering the 1,597 articles that kept both their
   slug and their silo. These reach their final URL with no extra hop.
4. **A wildcard for the legacy `/guide/<slug>` form**, pointing at RV Gear Lab's own
   `/guide/<slug>`, which self-canonicalizes to the right silo. A single wildcard
   cannot know each slug's silo, and these URLs already went through an internal
   redirect here, so this costs nothing that was not already being paid.

That is 90 static rules and 7 wildcards, against Cloudflare's limits of 2,000 and 100.

The script exits non-zero and names any slug it cannot resolve, so adding guides to
either site and re-running it will not silently drop a redirect.

## Content rules

Editorial, SEO and affiliate-compliance rules for this project are in `CLAUDE.md`.
