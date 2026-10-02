export const guideSlug = "best-rv-battery-for-fifth-wheel";
export const guideTitle = "2 Best RV Battery For Fifth Wheel in 2026";
export const metaTitle = "Best RV Battery For Fifth Wheel in 2026";
export const metaDescription = "Two Redodo LiFePO4 Group 31 batteries for fifth wheel RVs, 165Ah and a self-heating 100Ah, compared on energy, price per Wh and cold charging.";
export const mainKeyword = "best rv battery for fifth wheel";
export const introParagraphs = [
  "Fifth wheels usually have roomier battery trays than small trailers and heavier house loads: a residential fridge, slide-outs, an inverter. That makes capacity and cold behavior the key decisions. Both picks here are Redodo LiFePO4 batteries in the same Group 31 case, so fit is identical and the choice comes down to energy versus cold-weather charging."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31JwstCdc5L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-rv-battery-for-fifth-wheel-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Redodo 12V 165Ah LiFePO4 Battery",
    "price": "$429.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31JwstCdc5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HGFJ2RZH?tag=hardcastlesrv-20",
    "description": "The Redodo 165Ah is a 12.8V Group 31 LiFePO4 battery with 2112Wh of rated energy and a 165A BMS. It lists Bluetooth monitoring, IP65 ABS case at 13 x 6.77 x 8.5 inches, and 4000 cycles. It costs $429.99.\n\nIt is $150.00 more than the Redodo 100Ah, about 20 cents per Wh versus 22 cents for the 100Ah. Pick this for a fifth wheel with a residential fridge and inverter. Caveat: low-temperature protection stops charging at 32°F, and it has no heater.",
    "specs": [
      "12.8V 165Ah, 2112Wh",
      "165A BMS, Bluetooth",
      "Group 31, IP65 case"
    ],
    "pros": [
      "2112Wh in one Group 31 case",
      "165A BMS supports up to 2112W output",
      "Bluetooth lets you check battery status from your phone"
    ],
    "cons": [
      "Charging stops at 32°F with no heater",
      "Costs $429.99, a bigger upfront spend"
    ],
    "bestFor": "Residential fridge and inverter loads"
  },
  {
    "id": "best-rv-battery-for-fifth-wheel-2",
    "rank": 2,
    "badge": "Best for Cold Weather",
    "name": "Redodo 12V 100Ah LiFePO4 Battery",
    "price": "$279.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Y8dEQCXiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HGFCYHQQ?tag=hardcastlesrv-20",
    "description": "The Redodo 100Ah Heated is a 12.8V LiFePO4 battery with 1280Wh, a 100A BMS and self-heating. The heating needs at least 10A charging current and extends charging from -4°F to 122°F. It weighs 23.32 lb in the same Group 31 case. Price is $279.99.\n\nIt is $150.00 below the Redodo 165Ah, but gives 832Wh less energy. Pick this if the rig sits in freezing weather. Caveat: heating requires a charger that can supply 10A, and 1280Wh will not run an inverter long.",
    "specs": [
      "12.8V 100Ah, 1280Wh",
      "Self-heating, -4°F charging",
      "Group 31, 23.32 lb"
    ],
    "pros": [
      "Self-heating allows charging down to -4°F",
      "Weighs 23.32 lb in a Group 31 case",
      "Can expand to 4 parallel and 4 series"
    ],
    "cons": [
      "Heating needs at least 10A charging current",
      "1280Wh runs out fast with an inverter"
    ],
    "bestFor": "Winter fifth wheel stays"
  }
];

export const howWeEvaluated = [
  {
    "title": "Usable energy",
    "description": "We compared rated watt-hours and BMS discharge limits against fifth wheel loads."
  },
  {
    "title": "Cold behavior",
    "description": "We checked low-temperature charge limits and heating."
  },
  {
    "title": "Fit",
    "description": "We checked case size, group and terminals."
  },
  {
    "title": "Price per Wh",
    "description": "We calculated cost per watt-hour."
  }
];

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Camping Season",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Year-round with freezing nights",
          "Redodo 100Ah Heated",
          "Heating allows charging down to -4°F."
        ],
        [
          "Warm weather, big loads",
          "Redodo 165Ah",
          "2112Wh runs a fridge and inverter longer."
        ],
        [
          "Boondocking in mild climates",
          "Redodo 165Ah",
          "Best price per Wh."
        ],
        [
          "Shore power mostly",
          "Redodo 100Ah Heated",
          "Lower cost and heating at the pedestal."
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "$270 to $280",
          "Redodo 100Ah Heated"
        ],
        [
          "$420 to $430",
          "Redodo 165Ah"
        ]
      ]
    }
  },
  {
    "subheading": "Capacity vs Cold Charging",
    "cards": [
      {
        "label": "More capacity",
        "text": "Redodo 165Ah delivers 2112Wh but stops charging at 32°F."
      },
      {
        "label": "Self-heating",
        "text": "Redodo 100Ah Heated charges to -4°F but holds 1280Wh."
      }
    ],
    "note": "Default to the 165Ah unless you camp below freezing."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Recommended",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $300",
          "Redodo 100Ah Heated"
        ],
        [
          "Over $400, maximum energy",
          "Redodo 165Ah"
        ]
      ]
    }
  },
  {
    "subheading": "For Residential Fridge Fifth Wheels Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "At least 2000Wh and a BMS rated above your inverter draw."
      },
      {
        "label": "In this comparison",
        "text": "Redodo 165Ah provides 2112Wh and a 165A BMS."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "if you run an inverter, the $429.99 Redodo 165Ah gives 832Wh more than the Redodo 100Ah Heated."
      },
      {
        "label": "Save if",
        "text": "if you camp in freezing weather with shore power, the $279.99 Redodo 100Ah Heated costs $150.00 less."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Rated energy in watt-hours",
    "explanation": "Watt-hours equal volts times amp-hours, so 12.8V x 165Ah is about 2112Wh. A residential fridge draws roughly 1 to 2 kWh a day. Compare Wh to daily use."
  },
  {
    "criterion": "BMS continuous discharge",
    "explanation": "The BMS cuts power above its limit. The Redodo 165Ah lists 165A, about 2112W. Add your inverter and appliance loads."
  },
  {
    "criterion": "Cold charging behavior",
    "explanation": "LiFePO4 should not charge below 32°F. The Redodo 100Ah Heated charges to -4°F with 10A of charging current. Check charge limits on the listing."
  },
  {
    "criterion": "Group size and tray fit check",
    "explanation": "Both picks share a Group 31 case of 13 x 6.77 x 8.5 inches. Measure your tray before ordering. A tray that is even half an inch short forces cable bends that stress the M8 terminals."
  },
  {
    "criterion": "Parallel and series expansion rules",
    "explanation": "Both list up to 4 in parallel and 4 in series. Use matching batteries and confirm wiring. Mixing a 165Ah and a 100Ah battery in one bank is a bad idea because uneven voltage and resistance cause imbalance."
  }
];

export const faq = [
  {
    "q": "Which Redodo is better for a fifth wheel?",
    "a": "The 165Ah suits big loads. The 100Ah Heated suits freezing weather."
  },
  {
    "q": "Does the 165Ah heat itself?",
    "a": "No. The listing describes low-temperature protection that stops charging at 32°F."
  },
  {
    "q": "How much energy do I need?",
    "a": "Add up daily watt-hours of your fridge, lights and inverter loads. Compare that to 2112Wh and 1280Wh."
  },
  {
    "q": "Do both fit a Group 31 tray?",
    "a": "Both list a 13 x 6.77 x 8.5 inch case. Check terminal clearance."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Battery Box For Lithium Batteries",
    "href": "/power-electrical/best-rv-battery-box-for-lithium-batteries"
  },
  {
    "title": "Best RV Battery For Motorhome",
    "href": "/power-electrical/best-rv-battery-for-motorhome"
  },
  {
    "title": "Best RV Battery For Pop Up Camper",
    "href": "/power-electrical/best-rv-battery-for-pop-up-camper"
  },
  {
    "title": "Best RV Battery For Travel Trailer",
    "href": "/power-electrical/best-rv-battery-for-travel-trailer"
  }
];
