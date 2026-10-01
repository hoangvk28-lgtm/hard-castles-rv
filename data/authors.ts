export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  avatarUrl?: string;
  isPerson?: boolean; // true → Person schema; false/undefined → Organization
  expertise: string[];
  credentials: { label: string; value: string }[];
  social: { platform: string; url: string; label: string }[];
  editorial: {
    process: string;
    independence: string;
  };
}

export const authors: Author[] = [
  {
    slug: "hardcastlesrv-editors",
    name: "HardcastlesRV Editors",
    role: "Editorial team",
    isPerson: false,
    bio: "The HardcastlesRV editorial team researches RV and camping gear using published specifications, included hardware, compatibility details and warranty terms.",
    longBio:
      "HardcastlesRV publishes buying guides for RV power and electrical, water and plumbing, towing and leveling, RV care, interior comfort and camping travel.\n\nOur comparisons are based on published specifications, included hardware, compatibility details and warranty terms. We do not claim hands-on testing unless a guide says so explicitly.",
    expertise: ["Portable power and generators", "RV appliances", "Towing and leveling gear", "Camping equipment"],
    credentials: [],
    social: [],
    editorial: {
      process: "Guides compare published specifications, compatibility, warranty terms and buyer-feedback patterns, and state trade-offs plainly.",
      independence: "Affiliate commissions never decide which products we recommend or how they are ranked.",
    },
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find(
    (a) => a.name.toLowerCase() === name.toLowerCase()
  );
}

export function authorToSlug(name: string): string {
  const match = getAuthorByName(name);
  if (match) return match.slug;
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
