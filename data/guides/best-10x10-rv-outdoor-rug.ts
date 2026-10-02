export const guideSlug = "best-10x10-rv-outdoor-rug";
export const guideTitle = "3 Best 10x10 RV Outdoor Rug in 2026";
export const metaTitle = "Best 10x10 RV Outdoor Rug in 2026";
export const metaDescription = "Three 10x10 ft RV outdoor rugs in reversible HDPE mesh, compared on weight, stakes, drainage and grass-friendly weave for campsite patios.";
export const mainKeyword = "best 10x10 rv outdoor rug";
export const introParagraphs = [
  "A 10 by 10 foot mat covers the space under most awnings, and mesh weave decides whether it drains and dries or traps water. All three picks are reversible HDPE mesh in the same blue-gray pattern. Differences come down to fabric weight, stakes and storage."
];
export const lastUpdated = "2026-10-02";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/51mKfzKlJcL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    "id": "best-10x10-rv-outdoor-rug-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "10x10FT RV Outdoor Rug Camping Mat Reversible 280GSM HDPE RV Patio Mat",
    "price": "$56.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51mKfzKlJcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H1L96D64?tag=hardcastlesrv-20",
    "description": "The MEANCHEN 10 by 10 ft mat uses 280GSM HDPE mesh with reinforced rust-resistant aluminum grommets and heavy-duty metal stakes with protective washers. It folds into an included carry bag and is reversible with the same blue-gray pattern on both sides.\n\nCompared with the Vocray and Witbthry at 240GSM, it is the heaviest fabric here, so it lies flatter and resists curling. It suits owners who want the sturdiest mat.",
    "specs": [
      "280GSM HDPE mesh",
      "Aluminum grommets",
      "Carry bag included"
    ],
    "pros": [
      "Heavier 280GSM mesh lies flat on grass",
      "Stakes include washers to protect edges",
      "Carry bag keeps it compact in storage"
    ],
    "cons": [
      "Heavier to carry than 240GSM mats",
      "Blue-gray is the only pattern"
    ],
    "bestFor": "Long-term campsite use"
  },
  {
    "id": "best-10x10-rv-outdoor-rug-2",
    "rank": 2,
    "badge": "Best Breathable Mat",
    "name": "Vocray 10x10FT RV Outdoor Rug Reversible Blue-Gray 240GSM HDPE RV Patio Mat",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/5131X0tr4eL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GZNMLT7P?tag=hardcastlesrv-20",
    "description": "The Vocray 10 by 10 ft mat uses 240GSM HDPE mesh that lets water and air pass through, with no puddles and faster drying. It is described as grass friendly, and four reinforced aluminum grommets plus metal stakes hold it on grass, dirt or gravel.\n\nAgainst the MEANCHEN, it is lighter to handle, and the permeable weave keeps grass breathing. It suits campers who move often.",
    "specs": [
      "240GSM HDPE mesh",
      "Four aluminum grommets",
      "Reversible design"
    ],
    "pros": [
      "Mesh weave drains rain and dries quickly",
      "Grass-friendly permeable construction",
      "Flip it over when one side is dirty"
    ],
    "cons": [
      "Lighter fabric may curl at edges",
      "Fewer grommets than stake-heavy mats"
    ],
    "bestFor": "Frequent campers on grass"
  },
  {
    "id": "best-10x10-rv-outdoor-rug-3",
    "rank": 3,
    "badge": "Best Stake Set",
    "name": "Witbthry RV Mat 10x10 Ft Outdoor Camping Rug Blue Gray Double-Sided",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51HXxBwpsBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H13XL91W?tag=hardcastlesrv-20",
    "description": "The Witbthry 10 by 10 ft mat uses 240GSM virgin HDPE in a warp-knitted construction for durability and flexibility. It includes 9 galvanized carbon steel stakes with wide flat heads and plastic washers.\n\nNext to the Vocray, it ships with a generous set of nine stakes, which helps in wind. It suits campers who camp in breezy spots.",
    "specs": [
      "240GSM virgin HDPE",
      "Nine galvanized stakes",
      "Warp-knitted mesh"
    ],
    "pros": [
      "Nine stakes hold the mat in wind",
      "Warp-knitted mesh stays flexible",
      "Open weave drains and dries fast"
    ],
    "cons": [
      "Lighter weight than MEANCHEN",
      "Stakes add storage bulk"
    ],
    "bestFor": "Windy campsites"
  }
];

export const howWeEvaluated = [
  {
    "title": "Fabric weight",
    "description": "We compared GSM ratings as a proxy for how flat each mat lies."
  },
  {
    "title": "Drainage",
    "description": "We evaluated mesh weave and stated drying behavior."
  },
  {
    "title": "Stakes and grommets",
    "description": "We compared stake count and grommet material."
  },
  {
    "title": "Storage",
    "description": "We checked carry bags and fold size."
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
    "subheading": "By Camping Style",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick",
        "Why"
      ],
      "rows": [
        [
          "Long stays",
          "MEANCHEN 280GSM",
          "Heaviest mesh"
        ],
        [
          "Frequent moves",
          "Vocray 240GSM",
          "Lighter to handle"
        ],
        [
          "Windy sites",
          "Witbthry 240GSM",
          "Nine stakes"
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
          "$40 to $50",
          "Witbthry 240GSM"
        ],
        [
          "$50 to $60",
          "MEANCHEN 280GSM"
        ],
        [
          "$50 to $60",
          "Vocray 240GSM"
        ]
      ]
    }
  },
  {
    "subheading": "Heavy vs Light Mat",
    "cards": [
      {
        "label": "Heavy",
        "text": "Lies flat and lasts. MEANCHEN 280GSM is the heavy option."
      },
      {
        "label": "Light",
        "text": "Easier to carry. Vocray 240GSM and Witbthry 240GSM are lighter."
      }
    ],
    "note": "Most campers should default to MEANCHEN 280GSM unless weight matters."
  },
  {
    "subheading": "By Anchoring",
    "table": {
      "headers": [
        "Preference",
        "Recommended pick"
      ],
      "rows": [
        [
          "Most stakes",
          "Witbthry 240GSM"
        ],
        [
          "Washer-protected stakes",
          "MEANCHEN 280GSM"
        ],
        [
          "Grommet-focused",
          "Vocray 240GSM"
        ]
      ]
    }
  },
  {
    "subheading": "For Grass Campsites Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Permeable mesh and grass friendly wording."
      },
      {
        "label": "In this comparison",
        "text": "Vocray 240GSM and Witbthry 240GSM both state grass-friendly open weave."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Spend more on MEANCHEN 280GSM if you stay long and want a mat that stays flat."
      },
      {
        "label": "Save if",
        "text": "Save with Witbthry 240GSM for a lower price with a generous stake set."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "GSM weight",
    "explanation": "GSM measures fabric weight per square meter, and heavier fabric lies flatter. Light mats curl in wind. Compare the GSM figures."
  },
  {
    "criterion": "Drainage and dry time",
    "explanation": "Open mesh lets rain pass through. Solid mats pool water and grow mold. Look for permeable or mesh in the listing."
  },
  {
    "criterion": "Grass safety",
    "explanation": "Breathable weave lets grass get light and air. Solid plastic kills grass over days. Look for grass friendly wording."
  },
  {
    "criterion": "Stake count",
    "explanation": "More stakes anchor corners and edges against wind. A few stakes leave edges lifting. Count them."
  },
  {
    "criterion": "Awning coverage",
    "explanation": "A 10 by 10 mat covers a typical awning footprint. Measure your awning projection and width first. Match the mat to it."
  }
];

export const faq = [
  {
    "q": "Will a 10x10 mat fit my awning?",
    "a": "Measure awning width and projection. A 10 by 10 covers most standard awnings."
  },
  {
    "q": "Does it kill grass?",
    "a": "Breathable mesh like Vocray 240GSM lets air through, but lift the mat during long stays."
  },
  {
    "q": "How do I clean it?",
    "a": "Hose it off, flip it, and let it dry before folding."
  },
  {
    "q": "How do I stop it blowing around?",
    "a": "Use every stake, as with Witbthry 240GSM's nine."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    "title": "Best RV Outdoor Rug",
    "href": "/camping-travel/best-rv-outdoor-rug"
  },
  {
    "title": "Best Zero Gravity Chair For Camping",
    "href": "/camping-travel/best-zero-gravity-chair-for-camping"
  },
  {
    "title": "Best RV Router",
    "href": "/camping-travel/best-rv-router"
  },
  {
    "title": "Best Cell Signal Booster For RV",
    "href": "/camping-travel/best-cell-signal-booster-for-rv"
  }
];
