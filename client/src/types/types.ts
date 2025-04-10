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
