// Topic-first top-level sections for HardcastlesRV. Each is a real route
// (e.g. /power-electrical) that lists its guides and hosts /<section>/<slug> pages.

export interface Silo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
}

export const silos: Silo[] = [
  { slug: "power-electrical", name: "Power & Electrical", tagline: "Power stations, generators, solar and shore power",
    description: "Buying guides for portable power stations, inverter generators, solar generators, transfer switches and 30/50-amp hookups, matched to the loads you actually run on the road." },
  { slug: "water-plumbing", name: "Water & Plumbing", tagline: "Fresh water, laundry and the gear that uses it",
    description: "Guides to RV water gear and water-hungry appliances: compact washers, washer-dryer combos and portable dishwashers sized for tanks, hookups and tight bays." },
  { slug: "towing-leveling", name: "Towing & Leveling", tagline: "Hitches, levelers, chocks and safe setup",
    description: "Guides to hitches, sway control, leveling blocks, wheel chocks and stabilizers for setting up a rig safely and quickly at every site." },
  { slug: "rv-care", name: "RV Care", tagline: "Moisture control, cleaning and upkeep",
    description: "Guides to dehumidifiers, covers, cleaners and maintenance gear that keep an RV dry, clean and road-ready between trips." },
  { slug: "interior-comfort", name: "Interior & Comfort", tagline: "Compact kitchens, climate control and living space",
    description: "Guides to RV-sized microwaves, air fryers, ice makers, heaters, fans and portable air conditioners chosen around limited space and limited power." },
  { slug: "camping-travel", name: "Camping & Travel", tagline: "Off-grid power, campsite gear and life on the road",
    description: "Guides to camping generators, solar kits, power banks, travel routers and campsite gear for weekend trips, boondocking and van life." },
];

// Kept for compatibility with components that expect aggregate hubs.
export const departmentHubs: Silo[] = [];

export function getSiloBySlug(slug: string): Silo | undefined {
  return silos.find((s) => s.slug === slug) ?? departmentHubs.find((s) => s.slug === slug);
}
