import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/professional_lifestyle_vaping_shot_dark_moody.png";

export function HeroGrid() {
  return (
    <div className="w-full bg-black relative overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroImage} 
          alt="Lifestyle Vaping" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Overlay Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
          
          {/* Tagline */}
          <span className="inline-block text-cyan-400 font-bold tracking-[0.2em] text-xs md:text-sm uppercase border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 rounded-full backdrop-blur-md">
            Nueva Generación
          </span>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Tecnología para <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              dejar de fumar.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-300 text-sm md:text-lg lg:text-xl max-w-lg font-light leading-relaxed">
            Descubre dispositivos diseñados para ofrecerte la mejor experiencia. Sin combustión, sin ceniza, solo sabor.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/kits">
              <Button className="h-12 md:h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-sm md:text-base uppercase tracking-wide transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Empezar Ahora
              </Button>
            </Link>
            <Link href="/novedades">
              <Button variant="outline" className="h-12 md:h-14 px-8 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-black hover:border-white font-bold text-sm md:text-base uppercase tracking-wide backdrop-blur-sm transition-all">
                Descubrir Kits
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
