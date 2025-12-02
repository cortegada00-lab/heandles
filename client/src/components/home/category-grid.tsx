import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import New Premium Generated Images
import imgEliquids from "@assets/generated_images/premium_eliquid_bottles.png";
import imgVapersDesechables from "@assets/generated_images/premium_disposable_vapes_collection.png";
import imgPods from "@assets/generated_images/modern_vape_pods.png";
import imgKits from "@assets/generated_images/advanced_vape_kits.png";
import imgVapers from "@assets/generated_images/high_end_vape_mods.png";
import imgZeroNic from "@assets/generated_images/zero_nicotine_disposables.png";

export function CategoryGrid() {
  return (
    <section className="py-8 md:py-12 bg-white border-b border-gray-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-gray-900">
            Categorías <span className="text-primary">Destacadas</span>
          </h2>
          <Button variant="link" className="text-xs md:text-sm font-bold text-gray-500 hover:text-primary uppercase tracking-wider">
            Ver todo <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </div>

        {/* 
           Grid Layout: 
           Mobile: 2 Columns, tailored Bento layout
           Desktop: 4 Columns, Bento layout
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[170px] md:auto-rows-[240px]">
          
          {/* 1. Vapers Desechables (Wide - Top) */}
          <Link href="/vapers-desechables" className="group relative col-span-2 md:col-span-2 md:row-span-1 rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-500">
            <img 
              src={imgVapersDesechables} 
              alt="Vapers Desechables" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute inset-y-0 left-0 p-5 md:p-8 flex flex-col justify-center items-start max-w-[80%] md:max-w-[60%]">
              <h3 className="text-white text-2xl md:text-4xl font-black uppercase leading-none mb-2 drop-shadow-lg">
                Vapers<br/><span className="text-cyan-400">Desechables</span>
              </h3>
              <p className="text-gray-200 text-xs md:text-sm font-medium mb-3 md:mb-4">Sabor intenso, cero complicaciones.</p>
              <span className="inline-flex items-center justify-center rounded-full bg-white text-black text-[10px] font-bold px-4 py-1.5 md:px-5 md:py-2 shadow-lg group-hover:bg-cyan-400 transition-colors uppercase tracking-wide">
                Ver Colección
              </span>
            </div>
          </Link>

          {/* 2. Eliquids (Tall Vertical) */}
          <Link href="/eliquids" className="group relative col-span-1 row-span-2 md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-500">
            <img 
              src={imgEliquids} 
              alt="Eliquids" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full text-center">
              <h3 className="text-white text-xl md:text-3xl font-black uppercase leading-none mb-1 md:mb-2 drop-shadow-md">Eliquids</h3>
              <p className="text-gray-300 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3 md:mb-4">Premium</p>
              <Button size="sm" className="w-full h-8 text-[10px] md:text-xs rounded-full bg-white/20 backdrop-blur-md hover:bg-white hover:text-black text-white font-bold border border-white/30 transition-all">
                Explorar
              </Button>
            </div>
          </Link>

          {/* 3. Pods (Square) */}
          <Link href="/pods" className="group relative col-span-1 md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-500">
            <img 
              src={imgPods} 
              alt="Pods" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 md:p-4 text-center z-10">
               <h3 className="text-white text-lg md:text-2xl font-black uppercase tracking-wide drop-shadow-lg group-hover:-translate-y-1 transition-transform">Pods</h3>
               <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold bg-white text-black px-3 py-1 rounded-full mt-2 uppercase hidden md:inline-block">Ver Todo</span>
            </div>
          </Link>

          {/* 4. Kits Vapeo (Square) */}
          <Link href="/kits-vapeo" className="group relative col-span-1 md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-500">
            <img 
              src={imgKits} 
              alt="Kits Vapeo" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
              <h3 className="text-white text-base md:text-xl font-black uppercase drop-shadow-md leading-none">Kits<br/>Vapeo</h3>
            </div>
          </Link>

          {/* 5. Vapers (Square) */}
          <Link href="/vapers" className="group relative col-span-1 md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-500">
            <img 
              src={imgVapers} 
              alt="Vapers" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
              <h3 className="text-white text-base md:text-xl font-black uppercase drop-shadow-md leading-none">Vapers</h3>
            </div>
          </Link>

          {/* 6. Desechables Sin Nicotina (Square) */}
          <Link href="/desechables-sin-nicotina" className="group relative col-span-1 md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-500">
            <img 
              src={imgZeroNic} 
              alt="Desechables Sin Nicotina" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-green-900/30 mix-blend-overlay"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2 md:p-4 text-center z-10 bg-black/20 hover:bg-transparent transition-colors">
               <h3 className="text-white text-sm md:text-lg font-black uppercase leading-tight drop-shadow-lg">Sin<br/><span className="text-green-400">Nicotina</span></h3>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
