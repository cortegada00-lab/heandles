import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

// Images
import heroImage1 from "@assets/generated_images/hand_holding_premium_pod_vape_dark_background.png";
import heroImage2Background from "@assets/generated_images/empty_beach_bar_table_at_sunset_background_for_product_placement.png";
import heroImage2Bottle from "@assets/image_1764350777336.png";

const SLIDES = [
  {
    id: 1,
    image: heroImage1,
    tagline: "Nueva Generación",
    taglineColor: "text-cyan-400",
    taglineBorder: "border-cyan-400/30 bg-cyan-400/10",
    title: (
      <>
        Tecnología para <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          dejar de fumar.
        </span>
      </>
    ),
    description: "Descubre dispositivos diseñados para ofrecerte la mejor experiencia. Sin combustión, sin ceniza, solo sabor.",
    primaryButtonText: "Empezar Ahora",
    primaryButtonLink: "/kits",
    secondaryButtonText: "Descubrir Kits",
    secondaryButtonLink: "/novedades"
  },
  {
    id: 2,
    image: heroImage2Background,
    bottleImage: heroImage2Bottle,
    tagline: "Sabor Premium",
    taglineColor: "text-pink-400",
    taglineBorder: "border-pink-400/30 bg-pink-400/10",
    title: (
      <>
        Momentos de <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-400">
          puro placer.
        </span>
      </>
    ),
    description: "E-liquids seleccionados para los paladares más exigentes. La mejor calidad en cada gota.",
    primaryButtonText: "Ver E-liquids",
    primaryButtonLink: "/eliquids",
    secondaryButtonText: "Más Vendidos",
    secondaryButtonLink: "/ofertas"
  }
];

export function HeroGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  return (
    <div className="w-full bg-black relative overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
      
      <div className="overflow-hidden h-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex h-full">
            {SLIDES.map((slide) => (
                <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                        <img 
                        src={slide.image} 
                        alt="Hero Slide" 
                        className="w-full h-full object-cover opacity-80 animate-in fade-in duration-1000"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
                    </div>
                    
                    {/* Optional Bottle Overlay for Slide 2 */}
                    {/* @ts-ignore */}
                    {slide.bottleImage && (
                      <div className="absolute bottom-0 right-[10%] md:right-[15%] lg:right-[20%] z-10 w-[180px] md:w-[240px] lg:w-[300px] transform translate-y-[10%] rotate-3 drop-shadow-2xl filter brightness-90">
                          <img 
                            /* @ts-ignore */
                            src={slide.bottleImage} 
                            alt="Premium E-Liquid Bottle" 
                            className="w-full h-auto object-contain animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-300"
                          />
                      </div>
                    )}

                    {/* Content */}
                    <div className="container-custom relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
                        <div className="max-w-2xl space-y-6 md:space-y-8">
                        
                        {/* Tagline */}
                        <span className={cn(
                            "inline-block font-bold tracking-[0.2em] text-xs md:text-sm uppercase border px-3 py-1 rounded-full backdrop-blur-md",
                            slide.taglineColor,
                            slide.taglineBorder
                        )}>
                            {slide.tagline}
                        </span>

                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                            {slide.title}
                        </h1>

                        {/* Subheadline */}
                        <p className="text-gray-300 text-sm md:text-lg lg:text-xl max-w-lg font-light leading-relaxed">
                            {slide.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href={slide.primaryButtonLink}>
                            <Button className="h-12 md:h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-sm md:text-base uppercase tracking-wide transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                {slide.primaryButtonText}
                            </Button>
                            </Link>
                            <Link href={slide.secondaryButtonLink}>
                            <Button variant="outline" className="h-12 md:h-14 px-8 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-black hover:border-white font-bold text-sm md:text-base uppercase tracking-wide backdrop-blur-sm transition-all">
                                {slide.secondaryButtonText}
                            </Button>
                            </Link>
                        </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {SLIDES.map((_, index) => (
            <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm",
                    index === selectedIndex ? "bg-white w-8" : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
            />
        ))}
      </div>
    </div>
  );
}
