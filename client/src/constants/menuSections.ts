import { MenuSection } from "../types/types";

export const MENU_SECTIONS: MenuSection[] = [
  {
    title: "Company",
    links: [
      { name: "Homepage", path: "/" },
      { name: "Company", path: "/company" },
      { name: "Contacts", path: "/contacts" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Drying Kilns", path: "/products/drying-kilns/1" },
      {
        name: "Heat Treatment Plants (ISPM-15)",
        path: "/products/heat-treatment/2",
      },
      {
        name: "Thermal Modification Kilns",
        path: "/products/thermal-modification/3",
      },
      { name: "Steaming Chambers", path: "/products/steaming-chambers/4" },
      { name: "Biomass Drying Systems", path: "/products/biomass-drying/5" },
      { name: "Spare parts and Assistance", path: "/products/spare-parts/6" },
    ],
  },
  {
    title: "Insights",
    links: [
      { name: "Why to dry the wood?", path: "/insights/wood-drying" },
      { name: "Why to do ISPM-15 treatment?", path: "/insights/ispm15" },
      {
        name: "Why to thermo-modify the wood?",
        path: "/insights/thermo-modification",
      },
      { name: "Why to vaporize the wood?", path: "/insights/vaporization" },
    ],
  },
];
