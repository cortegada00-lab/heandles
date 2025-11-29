import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import New Banner Images
import imgLiquids from "@assets/generated_images/premium_eliquid_advertisement_background.png";
import imgDisposables from "@assets/generated_images/disposable_vapes_advertisement_background.png";
import imgKits from "@assets/generated_images/vape_kits_advertisement_background.png";
import imgPods from "@assets/generated_images/vape_pods_advertisement_background.png";

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
          <Link href="/eliquids" className="group relative md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden bg-black block">
            <img 
              src={imgLiquids} 
              alt="eLiquids" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <p className="text-white/70 text-xs font-bold tracking-widest mb-1 uppercase">Sabor Intenso</p>
              <h3 className="text-white text-2xl md:text-3xl font-black uppercase leading-none mb-3">eLiquids<br/>Premium</h3>
              <Button size="sm" className="rounded-full bg-white text-black hover:bg-gray-200 font-bold text-xs px-6">
                Ver Colección
              </Button>
            </div>
          </Link>

          {/* 2. Vapers Desechables - Wide (Top Middle) */}
          <Link href="/disposables" className="group relative md:col-span-2 md:row-span-1 rounded-2xl overflow-hidden bg-black block">
             <img 
              src={imgDisposables} 
              alt="Desechables" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
            <div className="absolute top-0 left-0 h-full flex flex-col justify-center p-8 items-start">
              <h3 className="text-white text-2xl md:text-4xl font-black uppercase leading-none mb-2">Vapers<br/><span className="text-blue-400">Desechables</span></h3>
              <p className="text-white/80 text-sm font-medium max-w-[200px] mb-4">Simplicidad y sabor en cada calada.</p>
              <span className="text-xs font-bold text-white border-b border-white pb-0.5 group-hover:border-blue-400 group-hover:text-blue-400 transition-colors">EXPLORAR AHORA</span>
            </div>
          </Link>

          {/* 3. Top Ventas / Promos - Vertical (Right) */}
          <Link href="/top-sales" className="group relative md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden bg-[#111] block border border-gray-800">
            {/* Abstract / Graphic Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
               <div className="w-16 h-1 bg-purple-500 mb-6"></div>
               <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-none mb-2">Top<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Ventas</span></h3>
               <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mb-6">Los favoritos de la semana</p>
               <Button variant="outline" className="rounded-full border-purple-500/50 text-purple-300 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all">
                 Ver Ranking
               </Button>
            </div>
          </Link>

          {/* 4. Kits Vapeo - Square (Bottom Middle Left) */}
          <Link href="/kits" className="group relative md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden bg-black block">
            <img 
              src={imgKits} 
              alt="Kits" 
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <h3 className="text-white text-xl font-black uppercase mb-1">Kits Pro</h3>
              <span className="text-[10px] font-bold bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-white">AVANZADO</span>
            </div>
          </Link>

          {/* 5. Pods - Square (Bottom Middle Right) */}
          <Link href="/pods" className="group relative md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden bg-black block">
            <img 
              src={imgPods} 
              alt="Pods" 
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
             <div className="absolute bottom-4 left-4">
               <h3 className="text-white text-xl font-black uppercase">Pods</h3>
               <p className="text-white/60 text-[10px] uppercase tracking-wider">Compactos & Potentes</p>
             </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
