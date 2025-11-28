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
    icon: <Droplets className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />,
    href: "/eliquids",
    image: imgLiquids
  },
  {
    id: "02",
    name: "Vapers",
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />,
    href: "/kits",
    image: imgVapers
  },
  {
    id: "03",
    name: "Sin Nicotina",
    icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />,
    href: "/sin-nicotina",
    image: imgZero
  },
  {
    id: "04",
    name: "Pods",
    icon: <Disc className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />,
    href: "/pods",
    image: imgPods
  },
  {
    id: "05",
    name: "Desechables",
    icon: <Battery className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />,
    href: "/disposables",
    image: imgDisposable
  },
  {
    id: "06",
    name: "Kits Pro",
    icon: <Package className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />,
    href: "/kits",
    image: imgKits
  }
];

export function CategoryGrid() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-gray-100">
          {CATEGORIES.map((cat) => (
            <Link key={cat.name} href={cat.href}>
              <div className="group relative flex flex-col items-center justify-between p-6 cursor-pointer border-r border-b border-gray-100 hover:border-gray-300 hover:shadow-xl hover:z-10 transition-all duration-300 h-[200px] bg-white overflow-hidden">
                
                {/* Background Image (Screen blend mode to remove black bg) */}
                <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-hard-light grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Top Bar: Index + Arrow */}
                <div className="w-full flex justify-between items-start z-20">
                   <span className="text-[10px] font-mono text-gray-400 group-hover:text-black transition-colors">
                     {cat.id}
                   </span>
                   <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
                </div>
                
                {/* Icon Container */}
                <div className="flex-1 flex items-center justify-center z-20 -mt-4">
                  <div className="text-gray-900 group-hover:scale-110 transition-transform duration-300">
                    {cat.icon}
                  </div>
                </div>

                {/* Label */}
                <div className="w-full text-center z-20 mt-auto">
                  <span className="text-xs font-black text-gray-900 uppercase tracking-widest border-b-2 border-transparent group-hover:border-black pb-1 transition-all duration-300">
                    {cat.name}
                  </span>
                </div>
                
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
