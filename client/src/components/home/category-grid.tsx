import { Link } from "wouter";
import { Droplets, Zap, Leaf, Disc, Battery, Package } from "lucide-react";

const CATEGORIES = [
  {
    name: "eLiquids",
    icon: <Droplets className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />,
    href: "/eliquids",
  },
  {
    name: "Vapers",
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />,
    href: "/kits",
  },
  {
    name: "Desechables sin nicotina",
    icon: <Leaf className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />,
    href: "/sin-nicotina",
  },
  {
    name: "Pods",
    icon: <Disc className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />,
    href: "/pods",
  },
  {
    name: "Vapers desechables",
    icon: <Battery className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />,
    href: "/disposables",
  },
  {
    name: "Kits Vapeo",
    icon: <Package className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />,
    href: "/kits",
  }
];

export function CategoryGrid() {
  return (
    <section className="py-10 bg-[#0a0a0a] border-b border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {CATEGORIES.map((cat) => (
            <Link key={cat.name} href={cat.href}>
              <div className="group flex flex-col items-center gap-4 cursor-pointer p-4 md:p-6 rounded-sm border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 ease-out h-full justify-center min-h-[140px] backdrop-blur-sm relative overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 opacity-80 group-hover:opacity-100 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                  {cat.icon}
                </div>
                <span className="relative z-10 text-[10px] md:text-xs font-black text-white/80 text-center uppercase tracking-widest leading-tight group-hover:text-white transition-colors">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
