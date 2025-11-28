import { Link } from "wouter";
import { Droplets, Zap, Leaf, Disc, Battery, Package, ArrowUpRight } from "lucide-react";

import imgLiquids from "@assets/generated_images/Premium_e-liquid_bottles_132f9a1b.png";
import imgVapers from "@assets/generated_images/dark_vape_mod_device_product_shot.png";
import imgZero from "@assets/generated_images/dark_e-liquid_bottle_product_shot.png";
import imgPods from "@assets/generated_images/dark_vape_pod_system_product_shot.png";
import imgDisposable from "@assets/generated_images/High_tech_vape_mod_kit_444d8fd5.png";
import imgKits from "@assets/generated_images/dark_advanced_vape_kit_parts.png";

const CATEGORIES = [
  {
    id: "01",
    name: "eLiquids",
    icon: <Droplets className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
    href: "/eliquids",
    image: imgLiquids
  },
  {
    id: "02",
    name: "Vapers",
    icon: <Zap className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
    href: "/kits",
    image: imgVapers
  },
  {
    id: "03",
    name: "Sin Nicotina",
    icon: <Leaf className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
    href: "/sin-nicotina",
    image: imgZero
  },
  {
    id: "04",
    name: "Pods",
    icon: <Disc className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
    href: "/pods",
    image: imgPods
  },
  {
    id: "05",
    name: "Desechables",
    icon: <Battery className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
    href: "/disposables",
    image: imgDisposable
  },
  {
    id: "06",
    name: "Kits Pro",
    icon: <Package className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
    href: "/kits",
    image: imgKits
  }
];

export function CategoryGrid() {
  return (
    <section className="bg-[#0a0a0a] border-b border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-white/10">
          {CATEGORIES.map((cat) => (
            <Link key={cat.name} href={cat.href}>
              <div className="group relative flex flex-col items-center justify-between p-6 md:p-8 cursor-pointer border-r border-b border-white/10 overflow-hidden h-[180px] md:h-[220px]">
                
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-[#0a0a0a] opacity-80 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Technical Index Number */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-white/30 group-hover:text-white/50 transition-colors z-20">
                  {cat.id}
                </div>

                {/* Hover Corner Accent */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full z-20"></div>
                
                {/* Icon Container */}
                <div className="flex-1 flex items-center justify-center relative z-20">
                  <div className="text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-500 ease-out drop-shadow-lg">
                    {cat.icon}
                  </div>
                </div>

                {/* Label & Action */}
                <div className="w-full flex items-end justify-between mt-4 relative z-20">
                  <span className="text-xs font-bold text-white uppercase tracking-widest drop-shadow-md">
                    {cat.name}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
