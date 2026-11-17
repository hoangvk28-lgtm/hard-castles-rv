import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { silos } from "@/data/silos";
import { authors } from "@/data/authors";

// Prerendered at build time. Required by output: "export", which has no
// server to generate this file per request.
export const dynamic = "force-static";


// Only the pages this site still serves belong here.
//
// Every buying guide and informational article was moved to rvgearlab.com and
// now 301-redirects there (see public/_redirects), so listing those URLs would
// hand Google a sitemap full of redirects. RV Gear Lab's own sitemap covers
// them at their new addresses.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/how-we-review`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/affiliate-disclosure`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const siloPages: MetadataRoute.Sitemap = silos.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const authorPages: MetadataRoute.Sitemap = authors.map((a) => ({
    url: `${SITE_URL}/author/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  return [...staticPages, ...siloPages, ...authorPages];
}
