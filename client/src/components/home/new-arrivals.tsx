import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { getDeliveryDate } from "@/lib/shipping";

// Mock Data for New Arrivals
const NEW_ARRIVALS = [
  {
    id: 1,
    name: "Sugar Free Tropical Candi - 10ml Nicotine Salt",
    brand: "Sugar Free",
    flavor: "Tropical Fruit | Candy",
    tags: ["50% VG", "10ml", "20mg"],
    image: "https://www.ivapeo.com/30936-home_default/aroma-don-juan-tabaco-honey-30ml-longfill-kings-crest.webp",
    price: 3.99,
    isSale: true,
    badge: "Sale"
  },
  {
    id: 2,
    name: "UK ECIG STORE - Tobacco Royale",
    brand: "UK ECIG STORE",
    flavor: "Tobacco | Toast",
    tags: ["30% VG", "10ml", "0mg", "8mg", "12mg"],
    image: "https://www.ivapeo.com/30926-home_default/nicokit-10ml-20mg-100pg-bombo.webp",
    price: 4.99,
    isSale: false,
    badge: null
  },
  {
    id: 3,
    name: "Essential Vape Co Strawberry - 10ml Nicotine Salt",
    brand: "Essential Vape Co",
    flavor: "Strawberry",
    tags: ["50% VG", "10ml", "10mg", "20mg"],
    image: "https://www.ivapeo.com/30936-home_default/aroma-don-juan-tabaco-honey-30ml-longfill-kings-crest.webp",
    price: 2.50,
    isSale: true,
    badge: "Lowest Price",
    badgeColor: "bg-emerald-300 text-emerald-900"
  },
  {
    id: 4,
    name: "Dolce Salts Vanilla Custard - 10ml Nicotine Salt",
    brand: "Dolce Salts",
    flavor: "Vanilla | Custard",
    tags: ["50% VG", "10ml", "10mg", "20mg"],
    image: "https://www.ivapeo.com/30926-home_default/nicokit-10ml-20mg-100pg-bombo.webp",
    price: 3.99,
    isSale: true,
    badge: "Sale"
  },
  {
    id: 5,
    name: "LDN LIQ Blue Raspberry - 10ml E-Liquid",
    brand: "LDN LIQ",
    flavor: "Blue Raspberry | Blueberry",
    tags: ["50% VG", "10ml", "6mg", "12mg"],
    image: "https://www.ivapeo.com/30936-home_default/aroma-don-juan-tabaco-honey-30ml-longfill-kings-crest.webp",
    price: 3.99,
    isSale: true,
    badge: "Sale"
  }
];

const CATEGORIES = ["10ml", "Big Puff Vapes", "E-Liquids", "Vape Kits", "Pods", "Sales"];

export function NewArrivals() {
  const [activeCategory, setActiveCategory] = useState("10ml");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Novedades</h2>
          
          {/* Filter Pills */}
          <div className="flex gap-3 items-center overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold border transition-all duration-200 whitespace-nowrap snap-start flex-shrink-0 ${
                  activeCategory === cat
                    ? "border-gray-900 text-gray-900 bg-white shadow-sm ring-1 ring-gray-900"
                    : "border-gray-200 text-gray-600 hover:border-gray-300 bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -right-4 -top-20 flex gap-2 hidden md:flex">
             <button 
               onClick={scrollLeft}
               className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors text-gray-600"
             >
                <ChevronLeft className="w-5 h-5" />
             </button>
             <button 
               onClick={scrollRight}
               className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors text-white shadow-md"
             >
                <ChevronRight className="w-5 h-5" />
             </button>
          </div>

          {/* Grid/Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory"
          >
            {NEW_ARRIVALS.map((product) => (
              <div 
                key={product.id} 
                className="min-w-[300px] w-[300px] snap-start flex-shrink-0 bg-white rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative flex flex-col overflow-hidden"
              >
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
                  {product.isSale && !product.badgeColor && (
                    <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-sm">
                      Sale
                    </span>
                  )}
                  {product.badge === "Discontinued" && (
                    <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-sm">
                      Discontinued
                    </span>
                  )}
                </div>

                {/* Image Area */}
                <Link href="/product">
                  <div className="h-72 p-8 flex items-center justify-center relative bg-gray-50/50 overflow-hidden cursor-pointer">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-full w-auto object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Quick Add Button (Overlay) */}
                    <button className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/90">
                      <ShoppingCart className="w-6 h-6" />
                    </button>
                  </div>
                </Link>

                {/* Special Badge Bar */}
                {product.badge && product.badgeColor && (
                  <div className={`w-full py-1.5 text-center text-xs font-bold uppercase tracking-wider ${product.badgeColor}`}>
                    {product.badge}
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{product.brand}</div>
                  <Link href="/product">
                    <h3 className="font-bold text-gray-900 text-lg leading-snug mb-3 hover:text-primary transition-colors line-clamp-2 cursor-pointer min-h-[3.5rem]">
                      {product.name}
                    </h3>
                  </Link>
                  
                  {/* Attributes Grid */}
                  <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                    {product.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                     <div className="flex flex-col">
                       {product.isSale && <span className="text-xs text-gray-400 line-through">{(product.price * 1.2).toFixed(2)}€</span>}
                       <span className="font-black text-2xl text-gray-900">{product.price.toFixed(2)}€</span>
                       <div className="text-[10px] text-blue-600 font-bold flex items-center gap-1 mt-1">
                          <Rocket className="w-3 h-3" /> Recíbelo el {getDeliveryDate()}
                       </div>
                     </div>
                     {product.isSale && (
                       <span className="text-xs text-red-600 font-bold bg-red-50 px-3 py-1 rounded-full border border-red-100">-20%</span>
                     )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
