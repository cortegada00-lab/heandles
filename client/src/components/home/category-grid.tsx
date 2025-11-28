import { Link } from "wouter";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";

// Import existing realistic images
import imgLiquids from "@assets/generated_images/Premium_e-liquid_bottles_132f9a1b.png";
import imgVapers from "@assets/generated_images/dark_vape_mod_device_product_shot.png";
import imgZero from "@assets/generated_images/dark_e-liquid_bottle_product_shot.png";
import imgPods from "@assets/generated_images/dark_vape_pod_system_product_shot.png";
import imgDisposable from "@assets/generated_images/High_tech_vape_mod_kit_444d8fd5.png";
import imgKits from "@assets/generated_images/dark_advanced_vape_kit_parts.png";

const CATEGORIES = [
  { name: "eLiquids", href: "/eliquids", image: imgLiquids },
  { name: "Vapers", href: "/kits", image: imgVapers },
  { name: "Sin Nicotina", href: "/sin-nicotina", image: imgZero },
  { name: "Pods", href: "/pods", image: imgPods },
  { name: "Desechables", href: "/disposables", image: imgDisposable },
  { name: "Kits Pro", href: "/kits", image: imgKits },
  // Duplicate for scroll effect if needed or add more mock categories
  { name: "Resistencias", href: "/accessories", image: imgKits },
  { name: "Baterías", href: "/accessories", image: imgVapers },
];

export function CategoryGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start", 
    loop: false,
    containScroll: "trimSnaps",
    dragFree: true
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-6 bg-white border-b border-gray-100">
      <div className="container-custom relative group/section">
        
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10 opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 hidden md:block">
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white/80 backdrop-blur shadow-md border-gray-200" onClick={scrollPrev}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10 opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 hidden md:block">
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white/80 backdrop-blur shadow-md border-gray-200" onClick={scrollNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {CATEGORIES.map((cat, index) => (
              <div key={`${cat.name}-${index}`} className="flex-[0_0_22%] md:flex-[0_0_14%] min-w-0 pl-4 first:pl-0">
                <Link href={cat.href}>
                  <div className="group flex flex-col items-center gap-3 cursor-pointer">
                    {/* Realistic Icon / Image Circle */}
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-50 border border-gray-100 p-2 shadow-sm group-hover:shadow-md group-hover:border-gray-300 transition-all duration-300 overflow-hidden">
                      <img 
                        src={cat.image} 
                        alt={cat.name}
                        className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Label */}
                    <span className="text-[10px] md:text-xs font-bold text-gray-700 text-center uppercase tracking-tight group-hover:text-black transition-colors leading-tight">
                      {cat.name}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
