import { Link } from "wouter";
import { Droplets, Zap, Leaf, Disc, Battery, Package } from "lucide-react";

const CATEGORIES = [
  {
    name: "eLiquids",
    icon: <Droplets className="w-6 h-6 md:w-8 md:h-8 text-gray-900" strokeWidth={1.5} />,
    href: "/eliquids",
  },
  {
    name: "Vapers",
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-gray-900" strokeWidth={1.5} />,
    href: "/kits",
  },
  {
    name: "Desechables sin nicotina",
    icon: <Leaf className="w-6 h-6 md:w-8 md:h-8 text-gray-900" strokeWidth={1.5} />,
    href: "/sin-nicotina",
  },
  {
    name: "Pods",
    icon: <Disc className="w-6 h-6 md:w-8 md:h-8 text-gray-900" strokeWidth={1.5} />,
    href: "/pods",
  },
  {
    name: "Vapers desechables",
    icon: <Battery className="w-6 h-6 md:w-8 md:h-8 text-gray-900" strokeWidth={1.5} />,
    href: "/disposables",
  },
  {
    name: "Kits Vapeo",
    icon: <Package className="w-6 h-6 md:w-8 md:h-8 text-gray-900" strokeWidth={1.5} />,
    href: "/kits",
  }
];

export function CategoryGrid() {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link key={cat.name} href={cat.href}>
              <div className="group flex flex-col items-center gap-3 cursor-pointer p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 ease-out h-full justify-center">
                <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  {cat.icon}
                </div>
                <span className="text-[10px] md:text-xs font-bold text-gray-900 text-center uppercase tracking-wide leading-tight">
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
