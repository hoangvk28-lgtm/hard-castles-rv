import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Prerendered at build time. Required by output: "export", which has no
// server to generate this file per request.
export const dynamic = "force-static";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/", "/_next/image"],
        disallow: ["/_next/"],
      },
      // AI crawlers: allow full indexing so content surfaces in AI search results
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      // Bytespider (ByteDance) and CCBot (Common Crawl) crawl aggressively for
      // AI-training data without sending real user traffic back. Blocked outright.
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
