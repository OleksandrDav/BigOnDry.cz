import { MenuSection } from '../types/types';

export const MENU_SECTIONS: MenuSection[] = [
  {
    title: "Company",
    links: [
      { name: "Homepage", path: "/" },
      { name: "Company", path: "/company" },
      { name: "News", path: "/news" },
      { name: "Experiences", path: "/experiences" },
      { name: "Contacts", path: "/contacts" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Drying Kilns", path: "/products/drying-kilns" },
      {
        name: "Heat Treatment Plants (ISPM-15)",
        path: "/products/heat-treatment",
      },
      {
        name: "Thermal Modification Kilns",
        path: "/products/thermal-modification",
      },
      { name: "Optionals", path: "/products/optionals" },
      { name: "Steaming Chambers", path: "/products/steaming-chambers" },
      { name: "Biomass Drying Systems", path: "/products/biomass-drying" },
      { name: "Spare parts and Assistance", path: "/products/spare-parts" },
      
    ],
  },
  {
    title: "Insights",
    links: [
      { name: "Why to dry the wood?", path: "/insights/wood-drying" },
      { name: "Why to do ISPM-15 treatment?", path: "/insights/ispm15" },
      {
        name: "Why to thermo-modify the wood?",
        path: "/insights/thermal-modification",
      },
      { name: "Why to vaporize the wood?", path: "/insights/vaporization" },
    ],
  },
];