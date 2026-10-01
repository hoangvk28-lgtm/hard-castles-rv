export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNav: NavItem[] = [
  {
    label: "RV Guides",
    href: "/guide",
    children: [
      { label: "Power & Electrical", href: "/power-electrical", description: "Power stations, generators and solar" },
      { label: "Water & Plumbing", href: "/water-plumbing", description: "Washers, dishwashers and water gear" },
      { label: "Towing & Leveling", href: "/towing-leveling", description: "Hitches, levelers and chocks" },
      { label: "RV Care", href: "/rv-care", description: "Moisture control and upkeep" },
      { label: "Interior & Comfort", href: "/interior-comfort", description: "Kitchen, heating and cooling" },
      { label: "Camping & Travel", href: "/camping-travel", description: "Campsite power and travel gear" },
    ],
  },
  { label: "How We Review", href: "/how-we-review" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  categories: [
    { label: "Power & Electrical", href: "/power-electrical" },
    { label: "Water & Plumbing", href: "/water-plumbing" },
    { label: "Towing & Leveling", href: "/towing-leveling" },
    { label: "RV Care", href: "/rv-care" },
    { label: "Interior & Comfort", href: "/interior-comfort" },
    { label: "Camping & Travel", href: "/camping-travel" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "How We Review", href: "/how-we-review" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

// ── Hardcastle's RV editorial navigation ──────────────────────────────────
// Primary departments are topical. Reviews / Buying Guides / Deals are content
// formats and live in the secondary nav only.
export const departmentNav: { label: string; href: string; description: string }[] = [
  { label: "Power & Electrical", href: "/power-electrical", description: "Power stations, generators and solar" },
  { label: "Water & Plumbing", href: "/water-plumbing", description: "Washers, dishwashers and water gear" },
  { label: "Towing & Leveling", href: "/towing-leveling", description: "Hitches, levelers and chocks" },
  { label: "RV Care", href: "/rv-care", description: "Moisture control and upkeep" },
  { label: "Interior & Comfort", href: "/interior-comfort", description: "Kitchen, heating and cooling" },
  { label: "Camping & Travel", href: "/camping-travel", description: "Campsite power and travel gear" },
];

export const secondaryNav: { label: string; href: string }[] = [
  { label: "All Guides", href: "/guide" },
];

export const companyNav: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "How We Review", href: "/how-we-review" },
  { label: "Editorial Policy", href: "/how-we-review#editorial-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/privacy-policy#terms" },
];
