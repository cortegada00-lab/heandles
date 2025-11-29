import { Link } from "wouter";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";

// Import Urban/Industrial images
import imgLiquids from "@assets/generated_images/urban_eliquid_bottle.png"; // Placeholder until generated
import imgVapers from "@assets/generated_images/urban_vaper_mod.png";
import imgZero from "@assets/generated_images/urban_zero_nicotine_disposable.png";
import imgPods from "@assets/generated_images/urban_pod_system.png";
import imgDisposable from "@assets/generated_images/urban_disposable_vape.png";
import imgKits from "@assets/generated_images/urban_vape_kit.png";

const CATEGORIES = [
  { name: "eLiquids", href: "/eliquids", image: imgLiquids },
  { name: "Vapers", href: "/kits", image: imgVapers },
  { name: "Desechables sin nicotina", href: "/sin-nicotina", image: imgZero },
  { name: "Pods", href: "/pods", image: imgPods },
  { name: "Vapers desechables", href: "/disposables", image: imgDisposable },
  { name: "Kits Vapeo", href: "/kits", image: imgKits },
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
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container-custom relative group/section">
        
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 hidden md:block">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full bg-white/90 backdrop-blur shadow-xl border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all" onClick={scrollPrev}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 hidden md:block">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full bg-white/90 backdrop-blur shadow-xl border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all" onClick={scrollNext}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y -ml-4">
            {CATEGORIES.map((cat, index) => (
              <div key={`${cat.name}-${index}`} className="flex-[0_0_26%] sm:flex-[0_0_20%] md:flex-[0_0_15%] min-w-0 pl-4">
                <Link href={cat.href}>
                  <div className="group flex flex-col items-center gap-4 cursor-pointer">
                    {/* Urban Square Image Container */}
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-gray-300">
                      <img 
                        src={cat.image} 
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[0.95] contrast-[1.1] group-hover:brightness-100"
                      />
                      
                      {/* Overlay Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Label - Urban Style */}
                    <span className="text-[10px] md:text-xs font-black text-gray-800 text-center uppercase tracking-wider group-hover:text-black transition-colors leading-tight px-1">
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
