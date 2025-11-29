import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import New Clean/Bright Images
import imgLiquids from "@assets/generated_images/clean_eliquid_lifestyle.png";
import imgDisposables from "@assets/generated_images/disposable_vapes_advertisement_background.png"; // Keep for now, replace if too dark
import imgKits from "@assets/generated_images/vape_kits_advertisement_background.png"; // Keep for now
import imgPods from "@assets/generated_images/clean_vape_pods.png";

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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 auto-rows-[180px] md:auto-rows-[240px]">
          
          {/* 1. eLiquids - Tall Vertical (Left) */}
          <Link href="/eliquids" className="group relative md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden bg-gray-100 block border border-gray-100">
            <img 
              src={imgLiquids} 
              alt="eLiquids" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <p className="text-gray-500 text-xs font-bold tracking-widest mb-1 uppercase">Sabor Intenso</p>
              <h3 className="text-gray-900 text-2xl md:text-3xl font-black uppercase leading-none mb-3">eLiquids<br/>Premium</h3>
              <Button size="sm" className="rounded-full bg-black text-white hover:bg-gray-800 font-bold text-xs px-6 shadow-lg">
                Ver Colección
              </Button>
            </div>
          </Link>

          {/* 2. Vapers Desechables - Wide (Top Middle) */}
          <Link href="/disposables" className="group relative md:col-span-2 md:row-span-1 rounded-2xl overflow-hidden bg-gray-50 block border border-gray-100">
             <img 
              src={imgDisposables} 
              alt="Desechables" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
            <div className="absolute top-0 left-0 h-full flex flex-col justify-center p-8 items-start">
              <h3 className="text-gray-900 text-2xl md:text-4xl font-black uppercase leading-none mb-2">Vapers<br/><span className="text-blue-600">Desechables</span></h3>
              <p className="text-gray-600 text-sm font-medium max-w-[200px] mb-4">Simplicidad y sabor en cada calada.</p>
              <span className="text-xs font-bold text-gray-900 border-b border-gray-900 pb-0.5 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">EXPLORAR AHORA</span>
            </div>
          </Link>

          {/* 3. Top Ventas / Promos - Vertical (Right) */}
          <Link href="/top-sales" className="group relative md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden bg-gray-50 block border border-gray-200">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
               <div className="w-16 h-1 bg-blue-600 mb-6"></div>
               <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase leading-none mb-2">Top<br/><span className="text-blue-600">Ventas</span></h3>
               <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-6">Los favoritos de la semana</p>
               <Button variant="outline" className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all font-bold">
                 Ver Ranking
               </Button>
            </div>
          </Link>

          {/* 4. Kits Vapeo - PRO Style (Dark & Colorful) */}
          <Link href="/kits" className="group relative md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-500">
            <img 
              src={imgKits} 
              alt="Kits" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 mix-blend-hard-light opacity-90"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-2 border border-white/20 group-hover:scale-110 transition-transform">
                  <span className="text-lg">⚡</span>
              </div>
              <h3 className="text-white text-2xl font-black uppercase mb-2 tracking-wide drop-shadow-md">Kits Pro</h3>
              <span className="text-[10px] font-bold bg-white text-purple-900 px-3 py-1 rounded-full uppercase tracking-wider shadow-lg transform group-hover:-translate-y-1 transition-transform">
                  Avanzado
              </span>
            </div>
          </Link>

          {/* 5. Pods - Vibrant Style (Colorful) */}
          <Link href="/pods" className="group relative md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-500">
            <img 
              src={imgPods} 
              alt="Pods" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
            />
             <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-600 mix-blend-overlay opacity-90"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
             
             <div className="absolute bottom-0 left-0 w-full p-5 z-10">
               <h3 className="text-white text-2xl font-black uppercase mb-1 drop-shadow-md">Pods</h3>
               <div className="flex items-center justify-between w-full border-t border-white/30 pt-3 mt-1">
                  <p className="text-white text-[11px] uppercase tracking-widest font-bold">Compactos</p>
                  <div className="bg-white text-pink-500 rounded-full p-1.5 shadow-lg group-hover:rotate-45 transition-transform duration-300">
                     <ArrowRight className="w-3.5 h-3.5" />
                  </div>
               </div>
             </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
