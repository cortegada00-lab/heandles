import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import imgProduct from "@assets/generated_images/Premium_e-liquid_bottles_132f9a1b.png";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/components/product/product-card";
import { mockCategoryProducts } from "@/lib/mock-data";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  colorClass?: string;
  products?: any[];
  showSidebar?: boolean;
}

export function ProductSection({ 
  title, 
  subtitle, 
  colorClass = "bg-primary",
  products,
  showSidebar = true
}: ProductSectionProps) {
  // Use passed products or fallback to mockCategoryProducts (first 4)
  // We use mockCategoryProducts because it contains the updated items with tierPricing
  const displayProducts = products || mockCategoryProducts.slice(0, 8);

  return (
    <section className="py-8 md:py-12">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-4 md:mb-8">
          <div>
            <h2 className="text-xl md:text-3xl font-black text-gray-900">{title}</h2>
            {subtitle && <p className="text-xs md:text-base text-gray-500 mt-1 line-clamp-1 md:line-clamp-none">{subtitle}</p>}
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="hidden sm:flex rounded-full">Ver Todo</Button>
            <div className="flex gap-1">
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8">{'<'}</Button>
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8">{'>'}</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Sidebar Banner */}
          {showSidebar && (
            <div className={`hidden lg:flex w-full lg:w-[280px] shrink-0 rounded-xl p-6 md:p-8 text-white flex-row lg:flex-col justify-between items-center lg:items-start ${colorClass} relative overflow-hidden min-h-[100px] lg:min-h-[300px]`}>
              <div className="relative z-10 flex-1">
                <h3 className="text-xl md:text-3xl font-black leading-tight mb-2 md:mb-4">Explora<br className="hidden lg:block"/> la gama<br className="hidden lg:block"/> completa</h3>
                <Button variant="secondary" size="sm" className="w-auto lg:w-full font-bold text-xs md:text-sm">Ver Catálogo</Button>
              </div>
              <div className="relative lg:absolute bottom-0 right-0 lg:opacity-20 lg:translate-x-1/4 lg:translate-y-1/4 w-20 h-20 lg:w-48 lg:h-48 shrink-0">
                 <img src={imgProduct} className="w-full h-full object-contain rotate-12" />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className={cn(
            "flex-1 grid gap-3 md:gap-6",
            showSidebar ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2 md:grid-cols-4"
          )}>
            {displayProducts.map((product, idx) => (
              <ProductCard 
                key={product.id || idx} 
                product={product} 
                badge={product.id?.includes('consumable') ? "NUEVO" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
