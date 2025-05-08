export interface Slide {
  imageUrl: string;
  title: string;
}

export interface MenuLink {
  name: string;
  path: string;
}

export interface MenuSection {
  title: string;
  links: MenuLink[];
}

export type TextBlock = {
  text: string;
  isBold?: boolean;
  isMultiline?: boolean;
};

export type Paragraph = TextBlock[];

export interface Product {
  name: string;
  id: number;
  title: string;
  path: string;
  description: Paragraph[]; 
  imageUrls: string[];
  contentImage: string;
}

export interface InsightLink {
  name: string;
  path: string;
  imageUrl?: string;
}

export interface WoodCharacteristic {
  name: "Waterproofness" | "Elasticity" | "Swelling" | "Durability" | "Pressure";
  value: number; // от 1 до 5
  iconUrl: string;
}

export interface WoodTemperatureAppearance {
  temperature: string; 
  imageUrl: string;
  description?: string;
}

export interface WoodUsageExample {
  title: string;
  imageUrl: string;
}

export interface WoodType {
  id: number;
  name: string;
  title: string;
  description: Paragraph[];
  characteristics: WoodCharacteristic[];
  temperatureAppearances: WoodTemperatureAppearance[];
  usageExamples?: WoodUsageExample[];
}

export interface ProductInsight {
  title: string;
  description: string;
  imageUrl: string;
}