import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { ProductCard } from "@/components/product/product-card";
import { mockCategoryProducts } from "@/lib/mock-data";

// Filter mock products to simulate "New Arrivals" since user's last visit
// In a real app, this would come from an API query like `GET /products?tag=new&limit=4`
const MISSED_PRODUCTS = mockCategoryProducts
  .filter(p => p.id.includes("kit") || p.id.includes("pod")) // Focus on hardware/tech
  .slice(0, 4)
  .map(p => ({
    ...p,
    badge: "NUEVO" // Force "New" badge
  }));

export function MissedProductsGrid() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-purple-600 mb-2">
               <Sparkles className="w-4 h-4" />
               <span className="text-xs font-bold uppercase tracking-wider">Tecnología Reciente</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight leading-none">
              Lo que te has perdido<br/>
              <span className="text-gray-400">mientras no estabas</span>
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex rounded-full border-gray-200 font-bold hover:border-purple-600 hover:text-purple-600">
            Ver todas las novedades
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {MISSED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} badge="NOVEDAD" />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <Button variant="outline" className="rounded-full w-full border-gray-200 font-bold">
            Ver todas las novedades
          </Button>
        </div>
      </div>
    </section>
  );
}
