import subzeroImage from "@assets/generated_images/halo_subzero_e-liquid_bottle_with_ice.png";
import drifterMangoImage from "@assets/image_1764176469258.png";

export interface Product {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription?: string;
  image?: string;
  images: string[];
  brand: string;
  sku: string;
  stock: number;
  rating: number;
  reviews: number;
  colors: { name: string; hex: string; image?: string }[];
  specs: { name: string; value: string }[];
  features: string[];
  availabilityStatus: 'in_stock' | 'out_of_stock' | 'pre_order';
  
  type: 'longfill' | 'hardware' | 'accessory' | 'eliquid' | 'kit' | 'pod' | 'consumable' | string;
  productCategory?: 'kit' | 'eliquid' | 'hardware' | string;
  flavorProfile?: {
    freshness: number; // 0-100
    sweetness: number; // 0-100
    throatHit: number; // 0-100
  };
  attributes?: {
    userLevel?: string; // "Principiante" | "Intermedio" | "Avanzado"
    nicotine?: string; // "0mg" | "3mg" | "10mg" | etc
    flavorType?: string; // "Tabaco" | "Frutal" | "Mentolado" | "Postre"
    type?: string; // "Sales" | "Freebase" | "MTL" | "DL" | "RDTA"
    ratio?: string; // "50/50" | "70/30"
    tankCapacity?: string; // "2ml" | "5ml"
    batteryCapacity?: string; // "1000mAh" | "1500mAh"
    drawType?: string; // "MTL" | "DL" | "RDTA"
    puffs?: string;
    activation?: string;
    [key: string]: any;
  } | Record<string, any> | any[];
  compatibleAccessories?: {
    id: string;
    name: string;
    price: number;
    image: string;
    type: string;
  }[];
  
  // Alchemy / Longfill specifics
  bottleCapacity?: number; // Total ml (e.g., 60)
  contentAmount?: number; // Aroma ml (e.g., 12)

  // Volume Discounts
  tierPricing?: {
    quantity: number;
    discountPercentage: number;
    label?: string;
  }[];
  
  // Variants (e.g., Ohms for coils)
  variants?: {
    id: string;
    name: string; // e.g., "0.8Ω Mesh", "0.6Ω Mesh"
    stock: number;
  }[];
  
  [key: string]: any; // Allow loose typing for rapid prototyping
}

// Store Stock Mock Data
export interface StoreStock {
  id: number;
  name: string;
  address: string;
  distance: string;
  stockLevel: 'high' | 'low' | 'out';
  qty: number;
}

export const mockStores: StoreStock[] = [
  { id: 1, name: "iVapeo Sants", address: "C/ de Sants, 123", distance: "1.2 km", stockLevel: 'high', qty: 15 },
  { id: 2, name: "iVapeo Gràcia", address: "Gran de Gràcia, 45", distance: "3.5 km", stockLevel: 'low', qty: 2 },
  { id: 3, name: "iVapeo Poblenou", address: "Rambla Poblenou, 10", distance: "5.1 km", stockLevel: 'out', qty: 0 },
  { id: 4, name: "iVapeo Eixample", address: "C/ Balmes, 200", distance: "2.1 km", stockLevel: 'high', qty: 8 },
  { id: 5, name: "iVapeo Sarrià", address: "Major de Sarrià, 55", distance: "6.0 km", stockLevel: 'out', qty: 0 },
];

export const mockProduct: Product = {
  id: "smok-novo-pod-mesh",
  name: "Cartuchos Novo Pod Mesh - Smok",
  price: 3.50,
  originalPrice: 0,
  brand: "Smok",
  sku: "6746746787871",
  stock: 100, 
  rating: 4.7,
  reviews: 85,
  availabilityStatus: 'in_stock',
  type: 'consumable', 
  
  // Variants
  variants: [
    { id: "novo-0.6", name: "0.6Ω Mesh", stock: 50 },
    { id: "novo-0.8", name: "0.8Ω Mesh", stock: 30 },
    { id: "novo-1.0", name: "1.0Ω Mesh", stock: 20 },
    { id: "novo-1.2", name: "1.2Ω Mesh", stock: 0 } // Out of stock test
  ],

  // Volume Pricing Config
  tierPricing: [
    { quantity: 5, discountPercentage: 5, label: "Popular" },
    { quantity: 10, discountPercentage: 10, label: "Mejor Precio" }
  ],

  shortDescription: `
    <p>Cartuchos de recambio para la serie Smok Novo. Resistencia de malla (Mesh) para un sabor puro y gran producción de vapor. Capacidad de 2ml.</p>
  `,

  description: `
    <h3>Cartuchos Novo Pod Mesh de Smok</h3>
    <p>Estos cartuchos de repuesto son compatibles con toda la serie Novo de Smok (Novo, Novo 2, Novo 2X, Novo 3). Diseñados con tecnología Mesh para maximizar el área de calentamiento, ofreciendo un sabor intenso y consistente desde la primera calada.</p>
    
    <h3>Características:</h3>
    <ul>
      <li><strong>Capacidad:</strong> 2ml</li>
      <li><strong>Resistencia:</strong> 0.8Ω Mesh</li>
      <li><strong>Compatibilidad:</strong> Smok Novo Series</li>
      <li><strong>Rellenado:</strong> Lateral cómodo</li>
    </ul>
  `,
  images: [
    "https://www.ivapeo.com/img/p/6/3/2/1/6321-large_default.jpg",
    "https://www.ivapeo.com/img/p/6/3/2/1/6321-large_default.jpg"
  ],
  colors: [], 
  specs: [
    { name: "Tipo", value: "Cartucho Pod (Recambio)" },
    { name: "Resistencia", value: "0.8Ω Mesh" },
    { name: "Capacidad", value: "2ml" }
  ],
  features: [
    "Sabor Puro",
    "Larga Duración",
    "Pack Ahorro Disponibles"
  ]
};

export const mockHardwareProduct: Product = {
  id: "vaporesso-gen-200",
  name: "VAPORESSO GEN 200 KIT",
  price: 54.90,
  originalPrice: 69.90,
  brand: "Vaporesso",
  sku: "VAP-GEN200",
  stock: 10,
  rating: 4.8,
  reviews: 124,
  availabilityStatus: 'in_stock',
  type: 'hardware',
  
  shortDescription: `
    <p>El Vaporesso Gen 200 Kit es la combinación perfecta de potencia y ligereza. Con una salida máxima de 220W y el chip AXON, ofrece un rendimiento excepcional en un cuerpo 40% más ligero.</p>
  `,

  description: `
    <h3>Vaporesso Gen 200: Potencia Ultraligera</h3>
    <p>Descubre la nueva generación de mods de doble batería. El GEN 200 destaca por ser increíblemente ligero sin sacrificar potencia ni durabilidad.</p>
  `,
  images: [
    "https://www.ivapeo.com/img/p/3/0/9/2/6/30926-large_default.jpg",
    "https://www.ivapeo.com/img/p/3/0/9/2/7/30927-large_default.jpg",
    "https://www.ivapeo.com/img/p/3/0/9/2/8/30928-large_default.jpg"
  ],
  colors: [
    { name: "Dark Black", hex: "#1a1a1a", image: "https://www.ivapeo.com/img/p/3/0/9/2/6/30926-large_default.jpg" },
    { name: "Matte Grey", hex: "#4a4a4a", image: "https://www.ivapeo.com/img/p/3/0/9/2/7/30927-large_default.jpg" },
    { name: "Light Silver", hex: "#e0e0e0", image: "https://www.ivapeo.com/img/p/3/0/9/2/8/30928-large_default.jpg" },
    { name: "Midnight Blue", hex: "#0f172a", image: "https://www.ivapeo.com/img/p/3/0/9/2/9/30929-large_default.jpg" },
    { name: "Sunset Red", hex: "#ef4444", image: "https://www.ivapeo.com/img/p/3/0/9/3/0/30930-large_default.jpg" },
    { name: "Aurora Green", hex: "#10b981", image: "https://www.ivapeo.com/img/p/3/0/9/3/0/30930-large_default.jpg" },
    { name: "Neon Purple", hex: "#8b5cf6", image: "https://www.ivapeo.com/img/p/3/0/9/3/0/30930-large_default.jpg" },
    { name: "Ocean Blue", hex: "#0ea5e9", image: "https://www.ivapeo.com/img/p/3/0/9/3/0/30930-large_default.jpg" },
    { name: "Rose Gold", hex: "#fb7185", image: "https://www.ivapeo.com/img/p/3/0/9/3/0/30930-large_default.jpg" },
    { name: "Carbon Fiber", hex: "#262626", image: "https://www.ivapeo.com/img/p/3/0/9/3/0/30930-large_default.jpg" },
    { name: "Champagne", hex: "#fde68a", image: "https://www.ivapeo.com/img/p/3/0/9/3/0/30930-large_default.jpg" },
    { name: "Rainbow", hex: "linear-gradient(45deg, #ff0000, #00ff00, #0000ff)", image: "https://www.ivapeo.com/img/p/3/0/9/3/0/30930-large_default.jpg" }
  ],
  specs: [
    { name: "Dimensiones", value: "138.5 x 44 x 29 mm" },
    { name: "Potencia", value: "5-220W" },
    { name: "Batería", value: "2x 18650 (No incluidas)" },
    { name: "Pantalla", value: "0.96\" TFT Color" },
    { name: "Chip", value: "AXON Chip" }
  ],
  features: [
    "Ultra Ligero",
    "Chip AXON",
    "Modo Pulso",
    "Carga Rápida Tipo-C"
  ],
  attributes: {
    tankCapacity: "8ml",
    drawType: "DL"
  },
  compatibleAccessories: [
    {
      id: "coil-gti-02",
      name: "Resistencia GTi 0.2Ω Mesh",
      price: 14.50,
      image: "https://www.ivapeo.com/img/p/3/0/9/3/5/30935-large_default.jpg", // Placeholder
      type: "coil"
    },
    {
      id: "pod-itank",
      name: "Pyrex Repuesto iTank 8ml",
      price: 3.90,
      image: "https://www.ivapeo.com/img/p/3/0/9/3/6/30936-large_default.jpg", // Placeholder
      type: "pod"
    }
  ]
};

export interface Category {
  id: number;
  name: string;
  url: string;
  description: string; // HTML content (Bottom SEO)
  shortDescription?: string; // Top description
  image?: string | null;
  breadcrumbs: Array<{
    name: string;
    url: string;
  }>;
  subcategories: Array<{ name: string; url: string }>; 
  seo: {
    title: string;
    description: string;
    canonical?: string;
  };
}

export const mockCategory: Category = {
  id: 3,
  name: "LÍQUIDOS VAPER",
  url: "/es/3-eliquidos-liquidos-para-vapear",
  image: null, 
  breadcrumbs: [
    { name: "Inicio", url: "/" },
    { name: "eLiquids", url: "/eliquids" }
  ],
  subcategories: [
    { name: "NOVEDADES", url: "#" },
    { name: "BOMBO ELIQUIDS", url: "#" },
    { name: "DRIFTER", url: "#" },
    { name: "SALES DE NICOTINA", url: "#" },
    { name: "LONGFILL", url: "#" },
    { name: "OFERTAS", url: "#" }
  ],
  shortDescription: "Líquido para cigarrillo electrónico, las mejores precios y mejores marcas. Los mejores e-liquids por calidad y precio. Disponemos de diferentes sabores y graduaciones de nicotina.",
  seo: {
    title: "Comprar Líquidos Vaper al Mejor Precio | iVapeo",
    description: "Gran selección de líquidos para vapear. Sabores frutales, postres, tabaquiles. Envío 24h.",
    canonical: "https://ivapeo.com/es/3-eliquidos-liquidos-para-vapear"
  },
  description: `
    <h2>¿Qué son los e-líquidos de vapeo?</h2>
    <p>¿Estás pensando en comprar un líquido para vapeo pero no sabes cuál escoger? Es normal ya que existen infinidad de marcas y sabores. Desde nuestra tienda de vapeo te queremos ayudar a comprar líquidos de la forma más fácil, para ello hemos hecho una selección con las mejores marcas de vapeo del mercado.</p>
    
    <h2>¿Dónde comprar líquidos para vapear a buen precio?</h2>
    <p>Todos nuestros líquidos para cigarrillos electrónicos son de las mejores marcas, han sido elaborados con ingredientes que cumplen con las normativas más estrictas. Así que no te preocupes, ya que tendrás una gama de líquidos de varios sabores y calidades.</p>
    
    <h3>Elegir la potencia de nicotina en tu e-líquid de vapeo</h3>
    <p>En principio ningún líquido contiene nicotina. Pero tú mismo puedes comprar la nicotina aparte escogiendo el nivel de concentración con el que quieres vapear, estos se llaman Nicokits.</p>
    
    <h3>Tipos de líquidos para cigarrillos electrónicos</h3>
    <p>Lo primero que tienes que tener en cuenta a la hora de elegir un e-líquido es el nivel de nicotina que buscas. Para muchos, el acto de vapear permite ir reduciendo poco a poco el consumo de esta sustancia, consiguiendo así una alternativa al tabaco.</p>
  `
};

export const mockCategoryProducts = Array(12).fill(null).map((_, i) => {
  // Create a variation of the product
  const isEven = i % 2 === 0;
  const isThird = i % 3 === 0;

  // Clone mockProduct to avoid reference issues
  const product = { ...mockProduct };

  // Customize based on index
  if (i === 0) {
    product.id = `prod-${i}-salt-drifter`;
    product.name = "DRIFTER BAR JUICE MANGO ICE 24ML";
    product.price = 9.90;
    product.type = 'longfill';
    product.originalPrice = 12.50;
    product.image = drifterMangoImage;
    product.images = [drifterMangoImage];
    product.attributes = { nicotine: "0mg", type: "Longfill", flavorType: "Frutal", ratio: "50/50" };
    product.bottleCapacity = 60;
    product.contentAmount = 24;
    // Remove tierPricing for standard liquids in this demo unless we want them
    delete product.tierPricing;
  } else if (isEven) {
    product.id = `prod-${i}-salt`;
    product.name = "SALES MANGO 10ML - SUMMUM";
    product.price = 5.50;
    product.type = 'eliquid';
    product.originalPrice = 8.50;
    product.attributes = { nicotine: "10mg", type: "Sales", flavorType: "Frutal", ratio: "50/50" };
    // Remove tierPricing for standard liquids in this demo unless we want them
    delete product.tierPricing;
  } else {
    product.id = `prod-${i}-consumable`;
    product.name = "Cartuchos Novo Pod Mesh - Smok";
    product.price = 3.50;
    product.type = 'consumable'; // This will trigger the tier pricing badge if tierPricing is present
    // Keep tierPricing from mockProduct
  }

  // Add some random rating variations
  product.rating = 4.5 + (i % 5) * 0.1;
  product.reviews = 15 + (i * 8);
  
  return product;
});
