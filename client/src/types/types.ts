export interface Product {
  id: number;
  name: string;
  description: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
}

export interface MenuLink {
  name: string;
  path: string;
}

export interface MenuSection {
  title: string;
  links: MenuLink[];
}