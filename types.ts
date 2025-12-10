export interface Product {
  id: string;
  name: string;
  price: string;
  weight: string;
  ingredients: string;
  benefits: string;
  idealFor: string;
  category: 'natural' | 'esoterico' | 'temporada' | 'personalizado';
  imagePlaceholderColor: string; // To simulate distinct images
  image?: string;
  image400w?: string;
  image800w?: string;
  image1200w?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}