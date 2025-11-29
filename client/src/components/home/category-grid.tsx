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

          {/* 4. Kits Vapeo - Clean Premium Style */}
          <Link href="/kits" className="group relative md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden bg-gray-100 block border border-gray-100">
            <img 
              src={imgKits} 
              alt="Kits" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-5 w-full">
              <p className="text-gray-500 text-[10px] font-bold tracking-widest mb-1 uppercase">Alto Rendimiento</p>
              <h3 className="text-gray-900 text-xl font-black uppercase leading-none mb-3">Kits Pro</h3>
              <span className="inline-flex items-center justify-center rounded-full bg-black text-white text-[10px] font-bold px-4 py-1.5 shadow-sm group-hover:bg-gray-800 transition-colors">
                Ver Gama
              </span>
            </div>
          </Link>

          {/* 5. Pods - Clean Premium Style */}
          <Link href="/pods" className="group relative md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden bg-gray-100 block border border-gray-100">
            <img 
              src={imgPods} 
              alt="Pods" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-5 w-full">
               <p className="text-gray-500 text-[10px] font-bold tracking-widest mb-1 uppercase">Portabilidad</p>
               <h3 className="text-gray-900 text-xl font-black uppercase leading-none mb-3">Pods</h3>
               <span className="inline-flex items-center justify-center rounded-full bg-black text-white text-[10px] font-bold px-4 py-1.5 shadow-sm group-hover:bg-gray-800 transition-colors">
                 Ver Gama
               </span>
             </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
