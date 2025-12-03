import { Link } from "wouter";
import { Star, Timer, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { QuickAddPopover } from "@/components/product/quick-add-popover";
import { getDeliveryDate } from "@/lib/shipping";
import { Product } from "@/lib/mock-data";

interface ProductCardProps {
  product: Product & { discount?: string; endsIn?: string };
  type?: "standard" | "offer" | "new";
  badge?: string;
  className?: string;
}

export function ProductCard({ product, type = "standard", badge, className }: ProductCardProps) {
  // Helper to render attributes (supports both array and object formats from different mock data sources)
  const renderAttributes = () => {
    if (!product.attributes) return null;

    let items: string[] = [];
    
    if (Array.isArray(product.attributes)) {
      items = product.attributes.slice(0, 3);
    } else {
      // Handle object format (e.g. { nicotine: "3mg", ratio: "70/30" })
      items = Object.values(product.attributes).slice(0, 3) as string[];
    }

    return (
      <div className="flex flex-wrap gap-1 mb-3">
        {items.map((val, i) => (
          <span key={i} className="text-[10px] font-bold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200 whitespace-nowrap">
            {val}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("group flex flex-col h-full relative transition-all duration-300 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 overflow-hidden", className)}>
      <Link href={`/product/${product.id}`} className="flex flex-col flex-1 z-10 relative">
        {/* Badges Top Left */}
        <div className="absolute top-2 left-2 z-20 flex flex-col gap-1 pointer-events-none">
          {/* Custom Badge (New, etc) */}
          {badge && (
             <span className={cn(
               "text-white text-[9px] font-black px-1.5 py-0.5 uppercase tracking-wider rounded shadow-sm flex items-center gap-1",
               (badge.includes("NUEVO") || badge.includes("Nuevo") || badge === "New") ? "bg-blue-600" : 
               (badge.includes("OFERTA") || badge.includes("Oferta")) ? "bg-red-600" :
               "bg-[#ea580c]"
             )}>
               {(badge === "NUEVO" || badge === "Nuevo") && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
               {badge}
             </span>
          )}
          
          {/* Discount Badge */}
          {(type === "offer" || (product.originalPrice && product.originalPrice > product.price)) && (
            <span className="bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 uppercase tracking-wider rounded shadow-sm">
              {product.discount || `-${Math.round((1 - product.price / (product.originalPrice || product.price * 1.2)) * 100)}%`}
            </span>
          )}

          {/* Volume Discount Badge */}
          {product.tierPricing && (
             <span className="bg-green-500 text-white text-[9px] font-black px-1.5 py-0.5 uppercase tracking-wider rounded shadow-sm flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-white"></span>
                PACK AHORRO
             </span>
          )}
        </div>
        
        {/* Image Area */}
        <div className="relative aspect-square overflow-hidden bg-white border-b border-gray-50">
          <img 
            src={product.images ? product.images[0] : product.image} 
            alt={product.name} 
            className="w-full h-full object-contain p-0 transition-transform duration-500 group-hover:scale-110 mix-blend-multiply"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col p-4 flex-1">
          {/* Brand */}
          <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1.5">
            {product.brand || "IVAPEO"}
          </div>

          {/* Title */}
          <h3 className="text-sm md:text-base font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors mb-2 line-clamp-2 min-h-[2.5em]">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "w-3.5 h-3.5", 
                    i < Math.round(product.rating || 5) ? "fill-current" : "text-gray-200"
                  )} 
                />
              ))}
            </div>
            <span className="text-xs font-bold text-gray-400">({product.reviews || 0})</span>
          </div>

          {/* Chips / Attributes */}
          {renderAttributes()}

          {/* Info Line (Delivery or Timer) */}
          {type === "offer" && product.endsIn ? (
             <div className="text-xs text-red-600 font-bold flex items-center gap-1 mb-3 animate-pulse">
                <Timer className="w-3.5 h-3.5" /> Termina en {product.endsIn}
             </div>
          ) : (
             <div className="text-xs text-orange-600 font-bold flex items-center gap-1 mb-3 animate-pulse">
                <Rocket className="w-3.5 h-3.5" /> Recíbelo {getDeliveryDate()}
             </div>
          )}

          {/* Price & Button Row */}
          <div className="mt-auto flex items-center justify-between gap-2">
              <div className="flex flex-col shrink-0">
                  {((product.originalPrice || 0) > product.price) && (
                    <span className="text-[10px] md:text-xs text-gray-400 line-through font-medium leading-none mb-0.5">{product.originalPrice!.toFixed(2)}€</span>
                  )}
                  <div className={cn("text-lg md:text-xl font-black leading-none", (type === "offer" || product.originalPrice) ? "text-red-600" : "text-gray-900")}>
                    {product.price.toFixed(2)}€
                  </div>
              </div>

              <div onClick={(e) => e.preventDefault()} className="shrink-0">
                 <QuickAddPopover 
                   product={product} 
                   trigger={
                      <button className={cn(
                        "h-9 md:h-10 px-3 md:px-5 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-sm flex items-center justify-center hover:scale-105 active:scale-95",
                        badge === "PRÓXIMAMENTE" 
                          ? "bg-gray-100 hover:bg-gray-200 text-gray-900"
                          : "bg-[#84CC16] hover:bg-[#65A30D] text-white"
                      )}>
                        {badge === "PRÓXIMAMENTE" ? "AVÍSAME" : "AÑADIR"}
                      </button>
                   }
                 />
              </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
