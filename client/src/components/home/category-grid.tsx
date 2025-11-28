import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import imgLiquids from "@assets/generated_images/Premium_e-liquid_bottles_132f9a1b.png";
import imgKit from "@assets/generated_images/High_tech_vape_mod_kit_444d8fd5.png";

const categories = [
  {
    id: 1,
    title: "Alternativas Desechables",
    subtitle: "Fácil de usar",
    image: imgKit,
    bg: "bg-green-600",
    text: "text-white"
  },
  {
    id: 2,
    title: "Sales de Nicotina",
    subtitle: "Suave e Intenso",
    image: imgLiquids,
    bg: "bg-blue-500",
    text: "text-white"
  },
  {
    id: 3,
    title: "Shortfills 100ml",
    subtitle: "Gran formato",
    image: imgLiquids,
    bg: "bg-yellow-500",
    text: "text-white"
  },
  {
    id: 4,
    title: "Kits Prefilled",
    subtitle: "Sin complicaciones",
    image: imgKit,
    bg: "bg-red-600",
    text: "text-white"
  }
];

export function CategoryGrid() {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container-custom">
        {/* Mobile: 2 Columns Grid, Desktop: 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className={`relative overflow-hidden rounded-lg h-[200px] md:h-[420px] ${cat.bg} transition-transform hover:-translate-y-1 duration-300 group shadow-lg`}
            >
              {/* Content Top */}
              <div className="absolute top-0 left-0 p-4 md:p-6 z-20 w-full">
                <h3 className={`text-base md:text-2xl font-black font-heading leading-tight mb-1 md:mb-2 ${cat.text} line-clamp-2 md:line-clamp-none`}>
                  {cat.title}
                </h3>
                <p className={`${cat.text} opacity-90 text-[10px] md:text-sm font-medium mb-2 md:mb-4`}>{cat.subtitle}</p>
                <Button size="sm" className="hidden md:flex bg-black/20 hover:bg-black/40 text-white border-none backdrop-blur-sm">
                  Ver Productos
                </Button>
              </div>

              {/* Image Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-3/4 md:h-3/5 flex items-end justify-center translate-y-2 md:translate-y-0">
                 <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-auto h-full object-contain object-bottom group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
