import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, History, Tag } from "lucide-react";
import { Link } from "wouter";

export function BundlePack() {
  return (
    <div className="bg-[#F8F9FA] pb-8 md:pb-12 pt-4 md:pt-6">
      <div className="container-custom">
        <div className="bg-[#002B5C] rounded-2xl p-6 md:p-12 relative overflow-hidden shadow-xl">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00387a] to-transparent hidden md:block"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#00387a] to-[#002B5C] md:hidden"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-between text-center md:text-left">
            
            {/* Text Content */}
            <div className="max-w-xl space-y-4 md:space-y-6 w-full">
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <div className="bg-[#0ea5e9] text-white text-[10px] md:text-xs font-black px-2 md:px-3 py-1 md:py-1.5 rounded inline-flex items-center gap-1 uppercase tracking-wider">
                  <Tag className="w-3 h-3" /> Pack Ahorro -15%
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 rounded inline-flex items-center gap-1 uppercase tracking-wider">
                  <History className="w-3 h-3" /> Basado en tu historial
                </div>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight">
                  Completa tu Setup
                </h2>
                <p className="text-gray-400 text-sm md:text-xl max-w-md leading-relaxed mx-auto md:mx-0">
                  Como compraste el <span className="text-white font-bold">Vaporesso Xros 4</span>, hemos preparado este pack de recambios compatible para ti.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center md:justify-start w-full">
                <Link href="/starter-pack">
                  <Button className="bg-[#FFD600] hover:bg-[#E6C000] text-black font-black text-base md:text-lg h-12 md:h-14 px-6 md:px-8 rounded-full shadow-[0_0_20px_rgba(255,214,0,0.3)] transition-transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto">
                    Añadir Pack al Carrito <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </Link>
                <div className="flex flex-row sm:flex-col items-center gap-2 sm:gap-0">
                  <span className="text-gray-400 text-xs md:text-sm line-through font-bold">32.50€</span>
                  <span className="text-[#FFD600] text-xl md:text-2xl font-black">27.60€</span>
                </div>
              </div>
            </div>

            {/* Visual Representation - Mobile: Horizontal Stack / Desktop: Overlapping */}
            <div className="flex items-center justify-center gap-2 md:gap-6 w-full overflow-hidden py-4 md:py-0">
              {/* Card 1: Vaper */}
              <div className="w-24 h-32 md:w-40 md:h-48 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-2 md:p-4 transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-300 relative group shrink-0">
                <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-green-500 text-white text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-full z-10 shadow-md whitespace-nowrap">YA LO TIENES</div>
                <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center mb-1 md:mb-2">
                   <img src="https://www.ivapeo.com/img/cms/fmm_home/image1.webp" className="w-12 md:w-16 h-auto object-contain mix-blend-multiply grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt="Vaper" />
                </div>
                <span className="font-bold text-gray-400 text-[10px] md:text-sm truncate max-w-full">Tu Xros 4</span>
              </div>

              <Plus className="w-4 h-4 md:w-6 md:h-6 text-gray-500 shrink-0" />

              {/* Card 2: Resis */}
              <div className="w-24 h-32 md:w-40 md:h-48 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-2 md:p-4 transform md:rotate-[2deg] hover:rotate-0 transition-transform duration-300 z-10 border-2 border-[#FFD600] shrink-0">
                <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center mb-1 md:mb-2 relative">
                   <img src="https://www.ivapeo.com/es/116-resistencias" className="w-12 md:w-16 h-auto object-contain opacity-50" alt="Resis" />
                   <span className="absolute text-[10px] md:text-xs text-gray-400 font-bold">0.8Ω</span>
                </div>
                <span className="font-bold text-[#0ea5e9] text-[10px] md:text-sm">Resis x3</span>
              </div>

              <div className="hidden md:block">
                <Plus className="w-6 h-6 text-gray-500 shrink-0" />
              </div>

              {/* Card 3: Liquido - Hidden on very small screens or scaled down */}
              <div className="hidden md:flex w-40 h-48 bg-white rounded-xl shadow-lg flex-col items-center justify-center p-4 transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300 border-2 border-[#FFD600]">
                <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center mb-2">
                   <img src="https://www.ivapeo.com/img/cms/fmm_home/image6.webp" className="w-16 h-auto object-contain mix-blend-multiply" alt="Liquido" />
                </div>
                <span className="font-bold text-[#0ea5e9] text-sm">Líquido</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
