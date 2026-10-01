export interface Category {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  subcategories: string[];
  /**
   * Optional list of underlying guide categorySlug/subcategorySlug values this
   * category aggregates. When present, guide matching uses this array instead
   * of a single exact `categorySlug === slug` check. Existing categories that
   * omit this keep their original single-slug matching behavior unchanged.
   */
  matchSlugs?: string[];
}

export const categories: Category[] = [
  {
    slug: "power-electrical",
    name: "Power & Electrical",
    description: "Power stations, generators, solar and shore power.",
    shortDescription: "Power stations, generators, solar and shore power.",
    icon: "Truck",
    color: "brand",
    subcategories: ["power-electrical"],
    matchSlugs: ["power-electrical"],
  },
  {
    slug: "water-plumbing",
    name: "Water & Plumbing",
    description: "Fresh water, laundry and the gear that uses it.",
    shortDescription: "Fresh water, laundry and the gear that uses it.",
    icon: "Truck",
    color: "brand",
    subcategories: ["water-plumbing"],
    matchSlugs: ["water-plumbing"],
  },
  {
    slug: "towing-leveling",
    name: "Towing & Leveling",
    description: "Hitches, levelers, chocks and safe setup.",
    shortDescription: "Hitches, levelers, chocks and safe setup.",
    icon: "Truck",
    color: "brand",
    subcategories: ["towing-leveling"],
    matchSlugs: ["towing-leveling"],
  },
  {
    slug: "rv-care",
    name: "RV Care",
    description: "Moisture control, cleaning and upkeep.",
    shortDescription: "Moisture control, cleaning and upkeep.",
    icon: "Truck",
    color: "brand",
    subcategories: ["rv-care"],
    matchSlugs: ["rv-care"],
  },
  {
    slug: "interior-comfort",
    name: "Interior & Comfort",
    description: "Compact kitchens, climate control and living space.",
    shortDescription: "Compact kitchens, climate control and living space.",
    icon: "Truck",
    color: "brand",
    subcategories: ["interior-comfort"],
    matchSlugs: ["interior-comfort"],
  },
  {
    slug: "camping-travel",
    name: "Camping & Travel",
    description: "Off-grid power, campsite gear and life on the road.",
    shortDescription: "Off-grid power, campsite gear and life on the road.",
    icon: "Truck",
    color: "brand",
    subcategories: ["camping-travel"],
    matchSlugs: ["camping-travel"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
