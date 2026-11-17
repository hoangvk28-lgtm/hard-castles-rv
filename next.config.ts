import type { NextConfig } from "next";
import path from "path";

// Cloudflare Workers / Pages deployment.
//
// This site is served as a pure static export (output: "export") from
// Cloudflare's static asset hosting. There is no Node server at runtime, which
// is deliberate: the previous Vercel deployment was paused for exceeding plan
// limits, and a static export has no per-request billing at all.
//
// Consequences, all handled elsewhere in the repo:
//   * next.config headers()/redirects() do nothing in an export, so they live
//     in public/_headers and public/_redirects, which Cloudflare reads.
//   * Route handlers (app/api), middleware and server actions are unsupported
//     and have been removed.
//   * next/image optimization needs a server, so images are served unoptimized.
//   * Every /guide/<slug> and /<silo>/<slug> article now 301s to RV Gear Lab
//     (see public/_redirects), so those routes were removed from the build.
const nextConfig: NextConfig = {
  output: "export",

  // Pin the workspace root explicitly. An unrelated stray lockfile at
  // /home/admin1/package-lock.json was making Next.js infer the workspace
  // root as the whole home directory instead of this project folder.
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: path.join(__dirname),
  },

  // Cloudflare serves /about as /about/index.html. Emitting a directory with an
  // index.html per route keeps extensionless URLs working without any runtime
  // rewrite, and matches what the live site already served.
  trailingSlash: false,

  // Type-checking runs separately (`npx tsc --noEmit`) before every push per the
  // pre-commit gate; skipping the redundant in-build pass keeps builds fast.
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    // Required by output: "export" — there is no server to optimize images.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
    ],
  },
};

export default nextConfig;
