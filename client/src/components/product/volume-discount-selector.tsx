export interface VolumeTier {
  quantity: number;
  discountPercentage: number;
  label?: string;
}

interface VolumeDiscountSelectorProps {
  tiers: VolumeTier[];
  currentQuantity: number;
  onQuantityChange: (quantity: number) => void;
  basePrice: number;
}

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function VolumeDiscountSelector({ tiers, currentQuantity, onQuantityChange, basePrice }: VolumeDiscountSelectorProps) {
  // Find the active tier based on current quantity
  // Active tier is the highest tier where tier.quantity <= currentQuantity
  // But for selection UI, we usually want to select the button that corresponds exactly or the range
  
  // Actually, usually these buttons SET the quantity to the tier start
  
  const getTierPrice = (tier: VolumeTier) => {
    const discountedPrice = basePrice * (1 - tier.discountPercentage / 100);
    return discountedPrice.toFixed(2);
  };

  return (
    <div className="space-y-3 mb-6">
      <label className="text-xs font-bold text-gray-900 uppercase block">
        Descuentos por Cantidad
      </label>
      <div className="grid gap-3">
        {/* Base Tier (Buy 1) */}
        <button
            onClick={() => onQuantityChange(1)}
            className={cn(
                "relative flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left group hover:border-gray-300",
                currentQuantity === 1 
                    ? "border-gray-900 bg-gray-50" 
                    : "border-gray-100 bg-white"
            )}
        >
             <div>
                <span className="block font-bold text-gray-900 text-sm">Comprar 1 unidad</span>
                <span className="text-xs text-gray-500">Precio estándar</span>
             </div>
             <div className="text-right">
                <span className="block font-black text-gray-900">{basePrice.toFixed(2)}€</span>
                <span className="text-[10px] text-gray-400">/ud</span>
             </div>
             {currentQuantity === 1 && (
                <div className="absolute -top-2 -right-2 bg-gray-900 text-white p-1 rounded-full shadow-sm">
                    <Check className="w-3 h-3" />
                </div>
             )}
        </button>

        {/* Discount Tiers */}
        {tiers.map((tier, idx) => {
             const isActive = currentQuantity >= tier.quantity && (idx === tiers.length - 1 || currentQuantity < tiers[idx + 1].quantity);
             const isExactSelect = currentQuantity === tier.quantity;
             
             return (
                <button
                    key={idx}
                    onClick={() => onQuantityChange(tier.quantity)}
                    className={cn(
                        "relative flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left group hover:border-primary/50",
                        isActive
                            ? "border-primary bg-primary/5 ring-1 ring-primary/20" 
                            : "border-gray-100 bg-white"
                    )}
                >
                    <div>
                        <span className="block font-bold text-gray-900 text-sm">
                            Comprar {tier.quantity}+ unidades
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700 mt-1">
                            Ahorra {tier.discountPercentage}%
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="block font-black text-gray-900">{getTierPrice(tier)}€</span>
                        <span className="text-[10px] text-gray-500 line-through">{basePrice.toFixed(2)}€/ud</span>
                    </div>
                    
                    {tier.label && (
                        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
                            {tier.label}
                        </div>
                    )}
                    
                    {isActive && (
                        <div className="absolute -top-2 -right-2 bg-primary text-white p-1 rounded-full shadow-sm">
                            <Check className="w-3 h-3" />
                        </div>
                    )}
                </button>
             );
        })}
      </div>
    </div>
  );
}
