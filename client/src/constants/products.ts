// src/constants/products.ts
import { Product } from "../types/types";

export const PRODUCTS: Product[] = [
  {
    name: "Drying Kilns",
    id: 1,
    title: "BIGonDRY Wood Drying Kilns, a high quality standard.",
    path: "/products/drying-kilns/1",
    description: [
      // First paragraph
      [
        { text: "Conventional drying kilns installations " },
        { text: "for sawn wood, hardwood and softwood,", isBold: true },
        {
          text: " with capacities ranging from 2-3 m3 to over 250 m3, fully aluminium or customized to existing structures, made of standard modules or provided as per specific customer requirements.",
        },
      ],
      // Second paragraph
      [
        { text: "BIGonDRY srl kilns may be " },
        { text: "powered by any source of energy", isBold: true },
        {
          text: ": hot water, steam or diathermic oil supplied by conventional or solid fuel boilers as well as hot air generated by gas, diesel or electric heating systems.",
        },
      ],
    ],
    imageUrls: [
      "https://www.bigondry.com/wp-content/uploads/2020/12/COM15033-Dal-Lago-8-R-1024x768.jpg",
      "https://www.bigondry.com/wp-content/uploads/2020/11/DSC02032.jpg",
      "https://www.bigondry.com/wp-content/uploads/2020/11/DSC02289.jpg",
      "https://www.bigondry.com/wp-content/uploads/2020/11/DSCN0807-1.jpg",
      "https://www.bigondry.com/wp-content/uploads/2020/12/impianto_essiccazione.jpg",
    ],
    contentImage:
      "https://www.bigondry.com/wp-content/uploads/2020/11/ImpaintiChiavi.png",
  },
  {
    name: "Heat Treatment Plants (ISPM-15)",
    id: 2,
    title: "Heat Treatment ISPM-15 – maximum performance at minimum cost!",
    path: "/products/heat-treatment/2",
    description: [
      [
        {
          text: "BIGonDRY srl has developed reduced investment compact plants, using direct heating systems without avoiding the installation of boilers and plumbing. Exchange circuits with high efficiency (up to 95-98%) run this type of plants, using conventional fuels (gas and diesel).",
        },
      ],
      [
        {
          text: "These plants are engineered to optimize consumption and minimize first investment and operating costs. Static or dynamic plants with frontal or carriage loading can be built in order to optimize loading and unloading dynamics and minimize all costs of handling, whose crucial impact would lead to higher costs during short process cycles.",
        },
      ],
      [
        {
          text: 'Specific installations for the heat treatment of pallets and wood packaging material and phytosanitary treatment in accordance with ISPM 15 and International Standard Measures.', isBold: true
        }
      ]
    ],
    imageUrls: [
      "https://www.bigondry.com/wp-content/uploads/2020/11/CENTRO-IMBALLAGGI-1.jpg",
      "https://www.bigondry.com/wp-content/uploads/2020/11/CIMG5394.jpg",
      "https://www.bigondry.com/wp-content/uploads/2020/11/IMG_1026.jpg",
      "https://www.bigondry.com/wp-content/uploads/2020/11/P8050193.jpg",
    ],
    contentImage:
      "https://www.bigondry.com/wp-content/uploads/2020/11/P8050193.jpg",
  },
  {
    name: "Thermal Modification Kilns",
    id: 3,
    title: "Thermal Modification Kilns (THW)",
    path: "/products/thermal-modification/3",
    description: [
      [
        {text: 'THW ' , isBold: true},
        {text: 'is the line of machinery for the thermal modification of the wood with high temperature. This range of plants goes from a net capacity of 4 m³ up to approximately 30 m³, with a very precise and sophisticated management system.'}
      ],
      [
        {text: "BIGonDRY Srl is also focused on eco-sustainable processes and the construction of eco-friendly systems in order to create a development opportunity but with attention to optimizing energy consumption, combining the best relationship between quality and price."}
      ],
      [
        {text: 'To summarize, BIGonDRY built a technologically advanced and extremely versatile machine that can do different treatments as:'}
      ],
      [
        {
          text: `Drying,\nSteaming,\nHeat treatment according to ISPM-15 Standards,\nHigh temperature treatment up to 250°C,\nThermo-steaming of the wood,`, 
          isBold: true,
          isMultiline: true
        }
      ],
      [
        {text: 'with enormous advantages in terms of consumption and environmental impact thanks to the reduced emission into the atmosphere and the advanced electronic control that guarantees excellent results in the property of the wood.'}
      ],
      [
        {text: 'A very sophisticated electronic control system guarantees excellent results on wood with dark and homogeneous color tones throughout the thickness. This innovative system of heat treatment plant at high temperatures gives the wood characteristics of durability and stability, without chemical additives on the wood. The thermally modified wood reduces shrinkage and swelling and improves resistance against pest infestation.'}
      ]
    ],
    imageUrls: [
      "https://www.bigondry.com/wp-content/uploads/2020/11/thw-div-chabros-4-1024x768.jpg",
      "https://www.bigondry.com/wp-content/uploads/2020/11/Thw-Lenzo.jpg",
      "https://www.bigondry.com/wp-content/uploads/2020/11/Thw-Inco-Industry-2.jpg",
      "https://www.bigondry.com/wp-content/uploads/2020/11/Thw-Novawood.jpg",
    ],
    contentImage: "",
  },
  {
    name: "Steaming Chambers",
    id: 4,
    title: "Steaming Chambers and Combined Dry-kilns",
    path: "/products/steaming-chambers/4",
    description: [
      [
        {text: "Wood steaming treatment chambers have the purpose to homogenize and slightly modify the coloring of wood, remove any presence and effect of parasites, in order to make wood more workable."}
      ]
    ],
    imageUrls: [
      "https://www.bigondry.com/wp-content/uploads/2020/11/steaming8.jpg",
    ],
    contentImage:
      "https://www.bigondry.com/wp-content/uploads/2020/11/vaporizzazione.jpg",
  },
  {
    name: "Biomass Drying Systems",
    id: 5,
    title: "Biomass Drying Systems",
    path: "/products/biomass-drying/5",
    description: [
      [
        {text: 'BIGonDRY Srl has studied specific solutions for drying firewood and wood chips, which adapt to the type of packaging and the production line and the customer’s logistics. The primary objective of the proposed systems is to minimize the investment cost and optimize process consumption, essential conditions for making biomass drying competitive.'}
      ]
    ],
    imageUrls: [
      "https://www.bigondry.com/wp-content/uploads/2020/11/BIOLEM-1_.jpg",
      "https://www.bigondry.com/wp-content/uploads/2020/11/Biolem-BigOnDry.jpg",
      "https://www.bigondry.com/wp-content/uploads/2020/11/bio.jpg",
    ],
    contentImage:
      "https://www.bigondry.com/wp-content/uploads/2020/11/BIOLEM-1_.jpg",
  },
  {
    name: "Spare parts and Assistance",
    id: 6,
    title: "Assistance and Spare parts",
    path: "/products/spare-parts/6",
    description: [
      [
        {text: 'BIGonDRY Srl also provides assistance and advice on treatments, as well as electrical, electronic and mechanical spare parts for BIGonDRY and competitors’ kilns.'}
      ],
      [
        {text: 'It is also possible to Replace electronics with BIGonDRY software systems on competing kilns.'}
      ]
    ],
    imageUrls: [
      "https://www.bigondry.com/wp-content/uploads/2020/11/Immagine-5-1.jpg",
    ],
    contentImage:
      "https://www.bigondry.com/wp-content/uploads/2020/11/Immagine-5-1.jpg",
  },
];
