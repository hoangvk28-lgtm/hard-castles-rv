// ── Homepage presentation mapping (HardcastlesRV) ───────────────────────
// PRESENTATION CONFIG ONLY. Every entry references an EXISTING guide or
// product by slug — nothing here creates records or content. Missing slugs are
// skipped at render time, and a guide is never shown twice on the page.
//
// FALLBACK NOTE: "mostRead" is an editorial selection, not analytics-driven —
// replace with real pageview ranking once a data source exists.

export type ArticleFormat = "Buying Guide" | "Review" | "Explainer" | "Ideas" | "How-To";

export interface HomepageArticleRef {
  slug: string;
  /** Optional eyebrow override; otherwise derived from the guide. */
  format?: ArticleFormat;
}

export const homepageEditorial = {
  /** First slug that exists wins. */
  featured: {
    candidates: ["best-power-stations-for-rvs", "best-solar-generator-for-rv", "best-quiet-portable-generator-for-rv"],
    eyebrow: "Featured Guide",
    headline: "The Best Power Stations for Your RV",
    dek: "We compare battery capacity, inverter output, 30-amp compatibility and solar charging so you can match a power station to the loads you actually run, from the fridge to the roof AC.",
    byline: "HardcastlesRV Editors",
  },
  latest: [
    { slug: "best-solar-generator-to-run-rv-ac", format: "Buying Guide" },
    { slug: "best-portable-air-conditioners-for-rvs", format: "Buying Guide" },
    { slug: "best-power-stations-for-van-life", format: "Buying Guide" },
  ] as HomepageArticleRef[],
  mostRead: [
    { slug: "best-quietest-portable-generator-for-rv" },
    { slug: "best-50-amp-rv-generator-transfer-switch" },
    { slug: "best-portable-washing-machines-for-rvs" },
    { slug: "best-dehumidifiers-for-rvs" },
    { slug: "best-travel-router-for-rv" },
  ] as HomepageArticleRef[],
  departments: [
    {
      id: "power-electrical",
      title: "Power & Electrical",
      href: "/power-electrical",
      topics: ["Power Stations", "Inverter Generators", "Solar Generators", "Transfer Switches", "30/50 Amp"],
      articles: [
        { slug: "best-solar-generator-for-rv-30-amp", format: "Buying Guide" },
        { slug: "best-portable-power-station-with-30-amp-rv-plug" },
        { slug: "best-50-amp-solar-generator-for-rv" },
        { slug: "best-inverter-generators" },
        { slug: "best-lifepo4-portable-power-stations" },
      ] as HomepageArticleRef[],
    },
    {
      id: "interior-comfort",
      title: "Interior & Comfort",
      href: "/interior-comfort",
      topics: ["Microwaves", "Air Fryers", "Ice Makers", "Heaters", "Air Conditioners"],
      articles: [
        { slug: "best-microwaves-for-rvs", format: "Buying Guide" },
        { slug: "best-air-fryers-for-rvs" },
        { slug: "best-ice-makers-for-rvs" },
        { slug: "best-space-heaters-for-rvs" },
        { slug: "best-toaster-ovens-for-rvs" },
      ] as HomepageArticleRef[],
    },
    {
      id: "water-plumbing",
      title: "Water & Plumbing",
      href: "/water-plumbing",
      topics: ["Compact Washers", "Washer-Dryer Combos", "Dishwashers"],
      articles: [
        { slug: "best-washer-dryer-combos-for-rvs" },
        { slug: "best-compact-washers-for-rvs" },
        { slug: "best-countertop-dishwashers-for-rvs" },
        { slug: "best-portable-dishwashers-for-rvs" },
      ] as HomepageArticleRef[],
    },
  ],
  workspaceIdeas: {
    title: "Camping & Travel",
    href: "/camping-travel",
    articles: [
      { slug: "best-solar-generators-for-camping", format: "Buying Guide" },
      { slug: "best-quiet-generators-for-camping" },
      { slug: "best-power-banks-for-camping" },
      { slug: "best-projectors-for-camping" },
    ] as HomepageArticleRef[],
  },
  workBetter: {
    title: "Off-Grid Power",
    href: "/power-electrical",
    articles: [
      { slug: "best-off-grid-portable-power-station" },
      { slug: "best-solar-generator-for-off-grid-living" },
      { slug: "best-portable-solar-panels-for-power-stations" },
      { slug: "best-portable-power-stations-for-cpap" },
    ] as HomepageArticleRef[],
  },
  /** Product-level picks are added once review pages exist. */
  editorsPicksFallback: [] as { slug: string; useCase: string }[],
};

export const shoppingCategories = [
  { icon: "battery", label: "Power Stations", note: "Portable, LiFePO4, 30 amp", href: "/power-electrical" },
  { icon: "plug", label: "Generators", note: "Inverter, quiet, dual fuel", href: "/power-electrical" },
  { icon: "drop", label: "Water & Laundry", note: "Washers, dishwashers", href: "/water-plumbing" },
  { icon: "hitch", label: "Towing & Leveling", note: "Hitches, blocks, chocks", href: "/towing-leveling" },
  { icon: "wrench", label: "RV Care", note: "Dehumidifiers, upkeep", href: "/rv-care" },
  { icon: "flame", label: "Interior & Comfort", note: "Kitchen, heat, cooling", href: "/interior-comfort" },
  { icon: "tent", label: "Camping & Travel", note: "Solar kits, campsite gear", href: "/camping-travel" },
] as const;

export type CategoryIconName = (typeof shoppingCategories)[number]["icon"];
