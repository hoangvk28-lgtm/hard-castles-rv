
export type InformationalSilo = "power-electrical" | "water-plumbing" | "towing-leveling" | "rv-care" | "interior-comfort" | "camping-travel";

export interface InformationalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface InformationalGuide {
  slug: string;
  silo: InformationalSilo;
  title: string;
  metaTitle: string;
  description: string;
  dek: string;
  directAnswer: string;
  readTime: string;
  lastUpdated: string;
  keyTakeaways: string[];
  sections: InformationalSection[];
  faq: { question: string; answer: string }[];
  sources: { label: string; href: string }[];
  related: { title: string; href: string }[];
  /** Full long-form Markdown stored under public/content/informational. */
  contentFile?: string;
  /** Original editorial diagram used for social sharing and in-article context. */
  heroImage?: string;
}


export const informationalGuides: InformationalGuide[] = [
  {
    "slug": "how-rv-house-batteries-work",
    "silo": "power-electrical",
    "title": "How RV House Batteries Work",
    "metaTitle": "How RV House Batteries Work",
    "description": "How RV House Batteries Work: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "How RV House Batteries Work becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "13 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Separate the house bank from the chassis battery",
      "Follow energy from a charger to the battery and then to 12-volt loads",
      "Recognize the roles of the converter, solar controller, alternator charger and inverter",
      "Understand amp-hours, watt-hours, voltage and current",
      "Identify fuses, disconnects, busbars and the negative return path"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "RV Battery Types Explained: Flooded, AGM and Lithium",
        "href": "/power-electrical/rv-battery-types-explained"
      },
      {
        "title": "How to Size an RV Battery Bank",
        "href": "/power-electrical/how-to-size-rv-battery-bank"
      },
      {
        "title": "How to Read an RV Battery Monitor",
        "href": "/power-electrical/read-rv-battery-monitor"
      }
    ],
    "contentFile": "how-rv-house-batteries-work.md",
    "heroImage": "/images/informational/rv-batteries/how-rv-house-batteries-work-1.svg"
  },
  {
    "slug": "rv-battery-types-explained",
    "silo": "power-electrical",
    "title": "RV Battery Types Explained: Flooded, AGM and Lithium",
    "metaTitle": "RV Battery Types Explained",
    "description": "Flooded, AGM and lithium RV batteries compared: usable capacity, charging needs, cold weather, weight and total cost for RV owners.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "RV Battery Types Explained: Flooded, AGM and Lithium becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Compare usable capacity instead of the label alone",
      "Account for ventilation and routine maintenance",
      "Match the charger profile to the battery chemistry",
      "Compare weight, cycle life and cold-weather behavior",
      "Understand why lithium needs a battery management system"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "How to Size an RV Battery Bank",
        "href": "/power-electrical/how-to-size-rv-battery-bank"
      },
      {
        "title": "How to Read an RV Battery Monitor",
        "href": "/power-electrical/read-rv-battery-monitor"
      },
      {
        "title": "How to Test an RV Battery With a Multimeter",
        "href": "/power-electrical/test-rv-battery-multimeter"
      }
    ],
    "contentFile": "rv-battery-types-explained.md",
    "heroImage": "/images/informational/rv-batteries/rv-battery-types-explained-1.svg"
  },
  {
    "slug": "how-to-size-rv-battery-bank",
    "silo": "power-electrical",
    "title": "How to Size an RV Battery Bank",
    "metaTitle": "How to Size an RV Battery Bank",
    "description": "How to Size an RV Battery Bank: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "How to Size an RV Battery Bank becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "List every 12-volt and inverter-powered load",
      "Convert appliance watts into battery amp-hours",
      "Separate daily energy use from short high-current demand",
      "Choose a realistic allowable depth of discharge",
      "Include inverter and wiring losses"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "How to Read an RV Battery Monitor",
        "href": "/power-electrical/read-rv-battery-monitor"
      },
      {
        "title": "How to Test an RV Battery With a Multimeter",
        "href": "/power-electrical/test-rv-battery-multimeter"
      },
      {
        "title": "Why an RV Battery Drains Overnight",
        "href": "/power-electrical/rv-battery-drains-overnight"
      }
    ],
    "contentFile": "how-to-size-rv-battery-bank.md",
    "heroImage": "/images/informational/rv-batteries/how-to-size-rv-battery-bank-1.svg"
  },
  {
    "slug": "read-rv-battery-monitor",
    "silo": "power-electrical",
    "title": "How to Read an RV Battery Monitor",
    "metaTitle": "How to Read an RV Battery Monitor",
    "description": "How to Read an RV Battery Monitor: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "How to Read an RV Battery Monitor becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Interpret state of charge without trusting one number blindly",
      "Read current direction and instantaneous power",
      "Understand consumed amp-hours and time remaining",
      "Confirm that every load passes through the shunt",
      "Synchronize the monitor only after a verified full charge"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "How to Test an RV Battery With a Multimeter",
        "href": "/power-electrical/test-rv-battery-multimeter"
      },
      {
        "title": "Why an RV Battery Drains Overnight",
        "href": "/power-electrical/rv-battery-drains-overnight"
      },
      {
        "title": "How to Find Parasitic Draw in an RV",
        "href": "/power-electrical/find-parasitic-draw-rv"
      }
    ],
    "contentFile": "read-rv-battery-monitor.md",
    "heroImage": "/images/informational/rv-batteries/read-rv-battery-monitor-1.svg"
  },
  {
    "slug": "test-rv-battery-multimeter",
    "silo": "power-electrical",
    "title": "How to Test an RV Battery With a Multimeter",
    "metaTitle": "How to Test an RV Battery With a Multimeter",
    "description": "How to Test an RV Battery With a Multimeter: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "How to Test an RV Battery With a Multimeter becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "13 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Set the meter for DC voltage before touching the probes",
      "Measure at the posts rather than only at cable lugs",
      "Compare open-circuit voltage with voltage under load",
      "Allow surface charge to dissipate before interpretation",
      "Check voltage drop across cables and connections"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "Why an RV Battery Drains Overnight",
        "href": "/power-electrical/rv-battery-drains-overnight"
      },
      {
        "title": "How to Find Parasitic Draw in an RV",
        "href": "/power-electrical/find-parasitic-draw-rv"
      },
      {
        "title": "RV Battery State of Charge Explained",
        "href": "/power-electrical/rv-battery-state-of-charge"
      }
    ],
    "contentFile": "test-rv-battery-multimeter.md",
    "heroImage": "/images/informational/rv-batteries/test-rv-battery-multimeter-1.svg"
  },
  {
    "slug": "rv-battery-drains-overnight",
    "silo": "power-electrical",
    "title": "Why an RV Battery Drains Overnight",
    "metaTitle": "Why an RV Battery Drains Overnight",
    "description": "Why an RV Battery Drains Overnight: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "Why an RV Battery Drains Overnight becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Confirm the battery was actually full before sunset",
      "Measure standby current with every obvious load switched off",
      "Check propane detectors, stereos, routers and control boards",
      "Isolate circuits one fuse at a time",
      "Inspect an inverter that was left on with no useful load"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "How to Find Parasitic Draw in an RV",
        "href": "/power-electrical/find-parasitic-draw-rv"
      },
      {
        "title": "RV Battery State of Charge Explained",
        "href": "/power-electrical/rv-battery-state-of-charge"
      },
      {
        "title": "How Long RV Batteries Last in Real Use",
        "href": "/power-electrical/how-long-rv-batteries-last"
      }
    ],
    "contentFile": "rv-battery-drains-overnight.md",
    "heroImage": "/images/informational/rv-batteries/rv-battery-drains-overnight-1.svg"
  },
  {
    "slug": "find-parasitic-draw-rv",
    "silo": "power-electrical",
    "title": "How to Find Parasitic Draw in an RV",
    "metaTitle": "How to Find Parasitic Draw in an RV",
    "description": "How to Find Parasitic Draw in an RV: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "How to Find Parasitic Draw in an RV becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "13 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Use a shunt or clamp meter before opening circuits",
      "Establish a normal standby baseline",
      "Turn off chargers so they do not hide the draw",
      "Remove DC fuses systematically and log each change",
      "Check directly connected accessories outside the fuse panel"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "RV Battery State of Charge Explained",
        "href": "/power-electrical/rv-battery-state-of-charge"
      },
      {
        "title": "How Long RV Batteries Last in Real Use",
        "href": "/power-electrical/how-long-rv-batteries-last"
      },
      {
        "title": "How to Charge RV Batteries From Shore Power",
        "href": "/power-electrical/charge-rv-batteries-shore-power"
      }
    ],
    "contentFile": "find-parasitic-draw-rv.md",
    "heroImage": "/images/informational/rv-batteries/find-parasitic-draw-rv-1.svg"
  },
  {
    "slug": "rv-battery-state-of-charge",
    "silo": "power-electrical",
    "title": "RV Battery State of Charge Explained",
    "metaTitle": "RV Battery State of Charge Explained",
    "description": "RV Battery State of Charge Explained: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "RV Battery State of Charge Explained becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "13 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Distinguish state of charge from state of health",
      "Understand why voltage tables depend on chemistry and resting conditions",
      "Use specific gravity only for serviceable flooded batteries",
      "Use a shunt for lithium batteries with a flat voltage curve",
      "Account for loads and charging sources during a reading"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "How Long RV Batteries Last in Real Use",
        "href": "/power-electrical/how-long-rv-batteries-last"
      },
      {
        "title": "How to Charge RV Batteries From Shore Power",
        "href": "/power-electrical/charge-rv-batteries-shore-power"
      },
      {
        "title": "How Alternator Charging Works in an RV",
        "href": "/power-electrical/alternator-charging-rv"
      }
    ],
    "contentFile": "rv-battery-state-of-charge.md",
    "heroImage": "/images/informational/rv-batteries/rv-battery-state-of-charge-1.svg"
  },
  {
    "slug": "how-long-rv-batteries-last",
    "silo": "power-electrical",
    "title": "How Long RV Batteries Last in Real Use",
    "metaTitle": "How Long RV Batteries Last in Real Use",
    "description": "How Long RV Batteries Last in Real Use: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "How Long RV Batteries Last in Real Use becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Separate runtime per trip from total service life",
      "Track depth of discharge and time spent partly charged",
      "Consider heat, vibration and storage conditions",
      "Recognize the effect of chronic undercharging on lead-acid batteries",
      "Avoid charging lithium below its permitted temperature"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "How to Charge RV Batteries From Shore Power",
        "href": "/power-electrical/charge-rv-batteries-shore-power"
      },
      {
        "title": "How Alternator Charging Works in an RV",
        "href": "/power-electrical/alternator-charging-rv"
      },
      {
        "title": "DC-to-DC Chargers Explained for RV Owners",
        "href": "/power-electrical/dc-to-dc-chargers-rv"
      }
    ],
    "contentFile": "how-long-rv-batteries-last.md",
    "heroImage": "/images/informational/rv-batteries/how-long-rv-batteries-last-1.svg"
  },
  {
    "slug": "charge-rv-batteries-shore-power",
    "silo": "power-electrical",
    "title": "How to Charge RV Batteries From Shore Power",
    "metaTitle": "How to Charge RV Batteries From Shore Power",
    "description": "How to Charge RV Batteries From Shore Power: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "How to Charge RV Batteries From Shore Power becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Trace shore power through the breaker panel to the converter",
      "Verify pedestal voltage and polarity before plugging in",
      "Confirm converter output at the battery terminals",
      "Match charging mode to battery chemistry",
      "Account for DC loads that share converter output"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "How Alternator Charging Works in an RV",
        "href": "/power-electrical/alternator-charging-rv"
      },
      {
        "title": "DC-to-DC Chargers Explained for RV Owners",
        "href": "/power-electrical/dc-to-dc-chargers-rv"
      },
      {
        "title": "How to Upgrade an RV Converter for Lithium Batteries",
        "href": "/power-electrical/upgrade-rv-converter-lithium"
      }
    ],
    "contentFile": "charge-rv-batteries-shore-power.md",
    "heroImage": "/images/informational/rv-batteries/charge-rv-batteries-shore-power-1.svg"
  },
  {
    "slug": "alternator-charging-rv",
    "silo": "power-electrical",
    "title": "How Alternator Charging Works in an RV",
    "metaTitle": "How Alternator Charging Works in an RV",
    "description": "How Alternator Charging Works in an RV: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "How Alternator Charging Works in an RV becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Distinguish motorhome charging from seven-pin trailer charging",
      "Protect both chassis and house batteries with proper isolation",
      "Account for smart alternator voltage changes",
      "Limit current demanded by a low-resistance lithium bank",
      "Size cable and overcurrent protection for the full route"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "DC-to-DC Chargers Explained for RV Owners",
        "href": "/power-electrical/dc-to-dc-chargers-rv"
      },
      {
        "title": "How to Upgrade an RV Converter for Lithium Batteries",
        "href": "/power-electrical/upgrade-rv-converter-lithium"
      },
      {
        "title": "RV Battery Cable Size and Voltage Drop Explained",
        "href": "/power-electrical/rv-battery-cable-size"
      }
    ],
    "contentFile": "alternator-charging-rv.md",
    "heroImage": "/images/informational/rv-batteries/alternator-charging-rv-1.svg"
  },
  {
    "slug": "dc-to-dc-chargers-rv",
    "silo": "power-electrical",
    "title": "DC-to-DC Chargers Explained for RV Owners",
    "metaTitle": "DC-to-DC Chargers Explained for RV Owners",
    "description": "DC-to-DC Chargers Explained for RV Owners: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "DC-to-DC Chargers Explained for RV Owners becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Regulate alternator input into a battery-safe charging profile",
      "Limit current to protect wiring and the alternator",
      "Support smart alternators that reduce output voltage",
      "Select an output current the vehicle can sustain",
      "Place fuses near both energy sources when required"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "How to Upgrade an RV Converter for Lithium Batteries",
        "href": "/power-electrical/upgrade-rv-converter-lithium"
      },
      {
        "title": "RV Battery Cable Size and Voltage Drop Explained",
        "href": "/power-electrical/rv-battery-cable-size"
      },
      {
        "title": "How to Connect RV Batteries in Series and Parallel",
        "href": "/power-electrical/series-parallel-rv-batteries"
      }
    ],
    "contentFile": "dc-to-dc-chargers-rv.md",
    "heroImage": "/images/informational/rv-batteries/dc-to-dc-chargers-rv-1.svg"
  },
  {
    "slug": "upgrade-rv-converter-lithium",
    "silo": "power-electrical",
    "title": "How to Upgrade an RV Converter for Lithium Batteries",
    "metaTitle": "How to Upgrade an RV Converter for Lithium",
    "description": "How to upgrade an RV converter for lithium batteries: charge profiles, ratings, cable and fuse checks, and testing after the install.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "How to Upgrade an RV Converter for Lithium Batteries becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Identify the existing converter model and distribution panel",
      "Compare its charge profile with the battery maker requirements",
      "Decide between a deck-mount replacement and a complete power center",
      "Confirm AC input and DC output ratings",
      "Inspect battery cable size and fuse protection"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "RV Battery Cable Size and Voltage Drop Explained",
        "href": "/power-electrical/rv-battery-cable-size"
      },
      {
        "title": "How to Connect RV Batteries in Series and Parallel",
        "href": "/power-electrical/series-parallel-rv-batteries"
      },
      {
        "title": "How to Balance a Multi-Battery RV Bank",
        "href": "/power-electrical/balance-multi-battery-rv-bank"
      }
    ],
    "contentFile": "upgrade-rv-converter-lithium.md",
    "heroImage": "/images/informational/rv-batteries/upgrade-rv-converter-lithium-1.svg"
  },
  {
    "slug": "rv-battery-cable-size",
    "silo": "power-electrical",
    "title": "RV Battery Cable Size and Voltage Drop Explained",
    "metaTitle": "RV Battery Cable Size and Voltage Drop Explained",
    "description": "RV Battery Cable Size and Voltage Drop Explained: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "RV Battery Cable Size and Voltage Drop Explained becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Calculate current from the actual load or charger rating",
      "Measure the round-trip conductor length",
      "Choose an acceptable voltage-drop target",
      "Check ampacity as well as voltage drop",
      "Use fine-strand flexible cable suited to mobile installations"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "How to Connect RV Batteries in Series and Parallel",
        "href": "/power-electrical/series-parallel-rv-batteries"
      },
      {
        "title": "How to Balance a Multi-Battery RV Bank",
        "href": "/power-electrical/balance-multi-battery-rv-bank"
      },
      {
        "title": "Safe RV Battery Storage for Winter",
        "href": "/power-electrical/store-rv-batteries-winter"
      }
    ],
    "contentFile": "rv-battery-cable-size.md",
    "heroImage": "/images/informational/rv-batteries/rv-battery-cable-size-1.svg"
  },
  {
    "slug": "series-parallel-rv-batteries",
    "silo": "power-electrical",
    "title": "How to Connect RV Batteries in Series and Parallel",
    "metaTitle": "How to Connect RV Batteries in Series and",
    "description": "How to Connect RV Batteries in Series and Parallel: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "How to Connect RV Batteries in Series and Parallel becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Use series connections to increase voltage",
      "Use parallel connections to increase amp-hour capacity",
      "Never exceed the voltage rating of RV equipment",
      "Use matched batteries in the same bank",
      "Place protection close to each battery string when appropriate"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "How to Balance a Multi-Battery RV Bank",
        "href": "/power-electrical/balance-multi-battery-rv-bank"
      },
      {
        "title": "Safe RV Battery Storage for Winter",
        "href": "/power-electrical/store-rv-batteries-winter"
      },
      {
        "title": "How Temperature Affects Lithium RV Batteries",
        "href": "/power-electrical/temperature-affects-lithium-rv-batteries"
      }
    ],
    "contentFile": "series-parallel-rv-batteries.md",
    "heroImage": "/images/informational/rv-batteries/series-parallel-rv-batteries-1.svg"
  },
  {
    "slug": "balance-multi-battery-rv-bank",
    "silo": "power-electrical",
    "title": "How to Balance a Multi-Battery RV Bank",
    "metaTitle": "How to Balance a Multi-Battery RV Bank",
    "description": "How to Balance a Multi-Battery RV Bank: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "How to Balance a Multi-Battery RV Bank becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Make resistance similar across parallel battery paths",
      "Use equal cable lengths and conductor sizes",
      "Take system positive and negative from opposite ends or busbars",
      "Avoid stacking many lugs on battery posts",
      "Measure current sharing under charge and load"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "Safe RV Battery Storage for Winter",
        "href": "/power-electrical/store-rv-batteries-winter"
      },
      {
        "title": "How Temperature Affects Lithium RV Batteries",
        "href": "/power-electrical/temperature-affects-lithium-rv-batteries"
      },
      {
        "title": "RV Battery Low-Voltage Cutoffs Explained",
        "href": "/power-electrical/rv-battery-low-voltage-cutoff"
      }
    ],
    "contentFile": "balance-multi-battery-rv-bank.md",
    "heroImage": "/images/informational/rv-batteries/balance-multi-battery-rv-bank-1.svg"
  },
  {
    "slug": "store-rv-batteries-winter",
    "silo": "power-electrical",
    "title": "Safe RV Battery Storage for Winter",
    "metaTitle": "Safe RV Battery Storage for Winter",
    "description": "Safe RV Battery Storage for Winter: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "Safe RV Battery Storage for Winter becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Fully charge lead-acid batteries before storage",
      "Disconnect hidden loads that cause slow discharge",
      "Choose a maintenance charger compatible with the chemistry",
      "Protect lithium batteries from prohibited low-temperature charging",
      "Check flooded electrolyte levels before charging"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "How Temperature Affects Lithium RV Batteries",
        "href": "/power-electrical/temperature-affects-lithium-rv-batteries"
      },
      {
        "title": "RV Battery Low-Voltage Cutoffs Explained",
        "href": "/power-electrical/rv-battery-low-voltage-cutoff"
      },
      {
        "title": "Why an RV Battery Will Not Hold a Charge",
        "href": "/power-electrical/rv-battery-wont-hold-charge"
      }
    ],
    "contentFile": "store-rv-batteries-winter.md",
    "heroImage": "/images/informational/rv-batteries/store-rv-batteries-winter-1.svg"
  },
  {
    "slug": "temperature-affects-lithium-rv-batteries",
    "silo": "power-electrical",
    "title": "How Temperature Affects Lithium RV Batteries",
    "metaTitle": "How Temperature Affects Lithium RV Batteries",
    "description": "How Temperature Affects Lithium RV Batteries: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "How Temperature Affects Lithium RV Batteries becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Separate discharge limits from charge limits",
      "Understand why charging frozen cells can cause damage",
      "Use a BMS with low-temperature charge cutoff",
      "Place batteries in a protected but ventilated compartment",
      "Avoid relying on a heating pad without controls"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "RV Battery Low-Voltage Cutoffs Explained",
        "href": "/power-electrical/rv-battery-low-voltage-cutoff"
      },
      {
        "title": "Why an RV Battery Will Not Hold a Charge",
        "href": "/power-electrical/rv-battery-wont-hold-charge"
      },
      {
        "title": "How RV House Batteries Work",
        "href": "/power-electrical/how-rv-house-batteries-work"
      }
    ],
    "contentFile": "temperature-affects-lithium-rv-batteries.md",
    "heroImage": "/images/informational/rv-batteries/temperature-affects-lithium-rv-batteries-1.svg"
  },
  {
    "slug": "rv-battery-low-voltage-cutoff",
    "silo": "power-electrical",
    "title": "RV Battery Low-Voltage Cutoffs Explained",
    "metaTitle": "RV Battery Low-Voltage Cutoffs Explained",
    "description": "RV Battery Low-Voltage Cutoffs Explained: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "RV Battery Low-Voltage Cutoffs Explained becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Distinguish an inverter cutoff from a battery BMS shutdown",
      "Set thresholds for the battery chemistry and cable drop",
      "Avoid nuisance shutdown during short surge loads",
      "Measure voltage at both the battery and the appliance",
      "Include reconnection hysteresis in the plan"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "Why an RV Battery Will Not Hold a Charge",
        "href": "/power-electrical/rv-battery-wont-hold-charge"
      },
      {
        "title": "How RV House Batteries Work",
        "href": "/power-electrical/how-rv-house-batteries-work"
      },
      {
        "title": "RV Battery Types Explained: Flooded, AGM and Lithium",
        "href": "/power-electrical/rv-battery-types-explained"
      }
    ],
    "contentFile": "rv-battery-low-voltage-cutoff.md",
    "heroImage": "/images/informational/rv-batteries/rv-battery-low-voltage-cutoff-1.svg"
  },
  {
    "slug": "rv-battery-wont-hold-charge",
    "silo": "power-electrical",
    "title": "Why an RV Battery Will Not Hold a Charge",
    "metaTitle": "Why an RV Battery Will Not Hold a Charge",
    "description": "Why an RV Battery Will Not Hold a Charge: a practical RV owner's guide with safe checks, measurements, common mistakes and when to call a technician.",
    "dek": "An owner-focused explainer from our RV Batteries & Charging series.",
    "directAnswer": "Why an RV Battery Will Not Hold a Charge becomes manageable when you treat the battery as part of a complete energy system rather than an isolated box. Start with the battery manufacturer\u2019s limits, identify every charging source and load, measure at the correct points, and document what happens under real operating conditions. This guide explains the process in plain language and shows where owners most often misread the evidence.",
    "readTime": "12 min",
    "lastUpdated": "2026-10-01",
    "keyTakeaways": [
      "Verify that the charger reaches the battery",
      "Separate self-discharge from an RV parasitic load",
      "Inspect connections before condemning the battery",
      "Check resting voltage after a full charge",
      "Perform a controlled capacity or load test"
    ],
    "sections": [],
    "faq": [],
    "sources": [
      {
        "label": "Mortons on the Move \u2014 alternator charging case study",
        "href": "https://www.mortonsonthemove.com/truck-camper-lithium-alternator-charging/"
      },
      {
        "label": "Mortons on the Move \u2014 lithium conversion considerations",
        "href": "https://www.mortonsonthemove.com/how-to-switch-to-lithium-rv-batteries/"
      },
      {
        "label": "Mortons on the Move \u2014 RV converter guide",
        "href": "https://www.mortonsonthemove.com/rv-power-converter/"
      },
      {
        "label": "Progressive Dynamics \u2014 converter service resources",
        "href": "https://www.progressivedyn.com/service/"
      },
      {
        "label": "Progressive Dynamics \u2014 selectable battery profiles",
        "href": "https://www.progressivedyn.com/pd9300/"
      },
      {
        "label": "Victron Energy \u2014 technical documentation",
        "href": "https://www.victronenergy.com/support-and-downloads/manuals"
      },
      {
        "label": "Trojan Battery \u2014 battery maintenance resources",
        "href": "https://www.trojanbattery.com/resources/"
      },
      {
        "label": "Blue Sea Systems \u2014 circuit protection resources",
        "href": "https://www.bluesea.com/resources"
      }
    ],
    "related": [
      {
        "title": "How RV House Batteries Work",
        "href": "/power-electrical/how-rv-house-batteries-work"
      },
      {
        "title": "RV Battery Types Explained: Flooded, AGM and Lithium",
        "href": "/power-electrical/rv-battery-types-explained"
      },
      {
        "title": "How to Size an RV Battery Bank",
        "href": "/power-electrical/how-to-size-rv-battery-bank"
      }
    ],
    "contentFile": "rv-battery-wont-hold-charge.md",
    "heroImage": "/images/informational/rv-batteries/rv-battery-wont-hold-charge-1.svg"
  }
];

export function getInformationalGuide(slug: string) {
  return informationalGuides.find((guide) => guide.slug === slug);
}

export function getInformationalGuidesBySilo(silo: string) {
  return informationalGuides.filter((guide) => guide.silo === silo);
}
