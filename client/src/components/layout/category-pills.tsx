import { Link } from "wouter";

const categories = [
  { name: "Novedades", href: "/novedades" },
  { name: "Kits Inicio", href: "/kits" },
  { name: "Sales Nicotina", href: "/eliquids?type=salts" },
  { name: "Desechables", href: "/disposables" },
  { name: "E-Liquids", href: "/eliquids" },
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
            <div className="px-4 py-1.5 bg-gray-50 rounded-full border border-gray-200 text-xs font-bold text-gray-700 whitespace-nowrap hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer">
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
