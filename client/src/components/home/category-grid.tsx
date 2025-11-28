import { Link } from "wouter";
import { Droplets, Zap, Leaf, Disc, Battery, Package, ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  {
    id: "01",
    name: "eLiquids",
    icon: <Droplets className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
    href: "/eliquids",
  },
  {
    id: "02",
    name: "Vapers",
    icon: <Zap className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
    href: "/kits",
  },
  {
    id: "03",
    name: "Sin Nicotina",
    icon: <Leaf className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
    href: "/sin-nicotina",
  },
  {
    id: "04",
    name: "Pods",
    icon: <Disc className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
    href: "/pods",
  },
  {
    id: "05",
    name: "Desechables",
    icon: <Battery className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
    href: "/disposables",
  },
  {
    id: "06",
    name: "Kits Pro",
    icon: <Package className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />,
    href: "/kits",
  }
];

export function CategoryGrid() {
  return (
    <section className="bg-[#0a0a0a] border-b border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-white/10">
          {CATEGORIES.map((cat) => (
            <Link key={cat.name} href={cat.href}>
              <div className="group relative flex flex-col items-center justify-between p-6 md:p-8 cursor-pointer border-r border-b border-white/10 hover:bg-white/[0.02] transition-all duration-300 h-[180px] md:h-[220px]">
                
                {/* Technical Index Number */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-white/30 group-hover:text-white/50 transition-colors">
                  {cat.id}
                </div>

                {/* Hover Corner Accent */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></div>
                
                {/* Icon Container */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-500 ease-out">
                    {cat.icon}
                  </div>
                </div>

                {/* Label & Action */}
                <div className="w-full flex items-end justify-between mt-4">
                  <span className="text-xs font-bold text-white uppercase tracking-widest">
                    {cat.name}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
