export interface DishCarouselItem {
  name: string;
  description: string;
  price?: string;
  image: string;
  alt: string;
}

export const dishCarouselItems: DishCarouselItem[] = [
  {
    name: "Margherita",
    description:
      "San Marzano, Fior di Latte, Basilikum. Der Maßstab für alles, was danach kommt.",
    image: "/assets/acquisition/dishes/margherita-pizza-in-karton-01.jpg",
    alt: "Margherita Pizza mit frischem Basilikum im Pizzakarton.",
  },
  {
    name: "Prosciutto e Rucola",
    description:
      "Prosciutto und frischer Rucola, nach dem Backen aufgelegt. Käse zieht noch Fäden.",
    image: "/assets/acquisition/dishes/pizza-mit-rucola-und-prosciutto-01.jpg",
    alt: "Pizza mit Prosciutto, Rucola und geschmolzenem Käse im Karton.",
  },
  {
    name: "Pollo Piccante",
    description:
      "Hähnchen, Mais, Jalapeños und Kräuter. Für alle, die Pizza scharf mögen.",
    image: "/assets/acquisition/dishes/pizza-mit-hahnchen-mais-und-jalapenos-01.jpg",
    alt: "Pizza mit Hähnchen, Mais und Jalapeños im Pizzakarton.",
  },
  {
    name: "Salami, Oliven & Feta",
    description:
      "Italienische Salami, schwarze Oliven, würziger Feta. Voll belegt, ehrlich gewürzt.",
    image: "/assets/acquisition/dishes/pizza-mit-salami-oliven-und-feta-01.jpg",
    alt: "Pizza mit Salami, schwarzen Oliven und Feta im Karton.",
  },
  {
    name: "Quattro Formaggi",
    description:
      "Vier Käse, geschmolzen auf 72-Stunden-Teig. Pizza Bianca für Käseliebhaber.",
    image: "/assets/acquisition/dishes/kase-pizza-mit-krautern-01.jpg",
    alt: "Käse-Pizza mit Kräutern, frisch aus dem Ofen im Karton.",
  },
  {
    name: "Verdure & Basilico",
    description:
      "Buntes Gemüse, Mozzarella, frisches Basilikum. Die vegetarische Wahl auf der Karte.",
    image: "/assets/acquisition/dishes/pizza-mit-gemuse-und-basilikum-01.jpg",
    alt: "Pizza mit Gemüse und Basilikum im Pizzakarton.",
  },
];
