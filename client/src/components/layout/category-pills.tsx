import { Link } from "wouter";

const categories = [
  { name: "Novedades", href: "/novedades", highlight: true },
  { name: "Vapers", href: "/kits" },
  { name: "E-Liquids", href: "/eliquids" },
  { name: "Desechables", href: "/disposables" },
  { name: "Sales Nicotina", href: "/eliquids?type=salts" },
  { name: "Pods", href: "/pods" },
  { name: "Resistencias", href: "/coils" },
  { name: "Ofertas", href: "/ofertas" },
  { name: "Accesorios", href: "/accesorios" },
  { name: "Top Ventas", href: "/top-sales" },
];

export function CategoryPills() {
  return (
    <div className="w-full bg-white border-b border-gray-100 py-3 md:hidden sticky top-0 z-30 overflow-x-auto no-scrollbar shadow-sm">
      <div className="container-custom flex gap-2 px-4 min-w-max">
        {categories.map((cat) => (
          <Link key={cat.name} href={cat.href}>
            <div 
              className={`px-4 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap transition-colors cursor-pointer
                ${cat.highlight 
                  ? 'bg-black border-black text-white hover:bg-gray-800' 
                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-primary hover:text-white hover:border-primary'
                }`}
            >
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
