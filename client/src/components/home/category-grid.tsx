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
              <div className="group flex flex-col items-center gap-4 cursor-pointer p-6 border border-gray-200 hover:border-black hover:bg-gray-50 transition-all duration-200 ease-out h-full justify-center min-h-[140px]">
                <div className="transition-transform duration-300 group-hover:scale-110 text-gray-900">
                  {cat.icon}
                </div>
                <span className="text-[11px] md:text-xs font-black text-gray-900 text-center uppercase tracking-widest leading-tight">
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
