export interface Slide {
  imageUrl: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface MenuLink {
  name: string;
  path: string;
}

export interface MenuSection {
  title: string;
  links: MenuLink[];
}

export interface Product {
  name: string;
  title: string;
  path: string;
  description: string;
  imageUrls: string[];
  contentImage: string;
}
