import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Check, FlaskConical, Box, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart-context";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { MixWizard, MixResult } from "./mix-wizard";
import { VolumeDiscountSelector } from "./volume-discount-selector";

// --- Subcomponents for Quick Add ---

function NicotineSelector({ value, onChange }: { value: string, onChange: (val: string) => void }) {
  return (
    <div className="space-y-3 mb-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-bold text-gray-900">Nivel de Nicotina</label>
        <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-bold">
            {value === "0" ? "Sin nicotina" : `${value}mg`}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["0", "1.5", "3", "6"].map((level) => (
            <button 
            key={level}
            onClick={() => onChange(level)}
            className={cn(
                "flex flex-col items-center justify-center py-2 rounded-lg border transition-all relative overflow-hidden",
                value === level 
                    ? 'border-primary bg-primary/5 ring-1 ring-primary' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
            )}
            >
              <span className={cn("text-sm font-black", value === level ? "text-primary" : "text-gray-700")}>
                {level}
              </span>
              <span className="text-[9px] text-gray-400 font-medium">mg</span>
            </button>
        ))}
      </div>
      
      {/* Summary of what's included */}
      {value !== "0" && (
          <div className="text-[10px] text-gray-500 bg-gray-50 p-2 rounded border border-gray-100 flex gap-2 items-center">
              <FlaskConical className="w-3 h-3 text-primary" />
              <span>Se añaden {value === "1.5" ? "1x" : value === "6" ? "4x" : "2x"} Nicokits (+{(value === "1.5" ? 1.50 : value === "6" ? 6.00 : 3.00).toFixed(2)}€)</span>
          </div>
      )}
    </div>
  );
}

function ColorSelector({ colors, selectedColor, onChange }: { colors: any[], selectedColor: string, onChange: (hex: string) => void }) {
    if (!colors || colors.length === 0) return null;

    return (
        <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-gray-900">Color</label>
                <span className="text-[10px] font-bold text-gray-500">
                    {colors.find(c => c.hex === selectedColor)?.name || "Seleccionar"}
                </span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {colors.map((color, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => onChange(color.hex)}
                    className={cn(
                      "w-8 h-8 shrink-0 rounded-full border-2 shadow-sm hover:scale-105 transition-all focus:outline-none",
                      selectedColor === color.hex ? "border-primary ring-2 ring-primary/20 scale-110" : "border-gray-200"
                    )}
                    style={{ background: color.hex }}
                    title={color.name}
                  />
                ))}
            </div>
        </div>
    );
}

function AccessorySelector({ accessories, selectedIds, onToggle }: { accessories: any[], selectedIds: string[], onToggle: (id: string) => void }) {
    if (!accessories || accessories.length === 0) return null;

    return (
        <div className="space-y-3 mb-4 border-t border-dashed border-gray-200 pt-4">
            <div className="flex items-center gap-2">
                <Box className="w-3.5 h-3.5 text-blue-600" />
                <div>
                    <label className="text-xs font-bold text-gray-900 uppercase block leading-none">Completa tu Kit</label>
                    <span className="text-[9px] text-blue-600 font-bold tracking-wider">ACCESORIOS COMPATIBLES</span>
                </div>
            </div>
            <div className="space-y-2">
                {accessories.map((acc) => {
                   const isSelected = selectedIds.includes(acc.id);
                   return (
                     <div 
                       key={acc.id}
                       onClick={() => onToggle(acc.id)}
                       className={cn(
                         "flex items-center gap-3 p-2 rounded-lg border transition-all cursor-pointer relative overflow-hidden",
                         isSelected 
                           ? "border-blue-500 bg-blue-50/50" 
                           : "border-gray-200 bg-white hover:border-gray-300"
                       )}
                     >
                        <div className={cn(
                          "w-4 h-4 rounded border flex items-center justify-center transition-colors shrink-0",
                          isSelected ? "bg-blue-500 border-blue-500 text-white" : "border-gray-300 bg-white"
                        )}>
                           {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        <div className="w-8 h-8 bg-white rounded border border-gray-100 p-0.5 shrink-0">
                           <img src={acc.image} alt={acc.name} className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                        <div className="flex-1 min-w-0">
                           <p className="text-[10px] font-bold text-gray-900 line-clamp-1">{acc.name}</p>
                           <p className="text-[10px] text-blue-600 font-bold">+{acc.price.toFixed(2)}€</p>
                        </div>
                     </div>
                   );
                })}
            </div>
        </div>
    );
}

// --- Main Component ---

export function QuickAddPopover({ product, trigger, className }: { product: any; trigger?: React.ReactNode; className?: string }) {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const { addToCart } = useCart();

  // State for Longfills
  const [nicotine, setNicotine] = useState("0");
  const [mixResult, setMixResult] = useState<MixResult | null>(null);

  // State for Hardware
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.hex || "");
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

  // State for Consumables/Variants
  const [selectedVariant, setSelectedVariant] = useState<string>("");

  // Reset states when open
  useEffect(() => {
      if (open) {
          setQuantity(1);
          setNicotine("0");
          setMixResult(null);
          setSelectedColor(product.colors?.[0]?.hex || "");
          setSelectedAccessories([]);
          // Set default variant
          if (product.variants && product.variants.length > 0) {
            setSelectedVariant(product.variants[0].id);
          }
      }
  }, [open, product]);

  const handleToggleAccessory = (id: string) => {
    setSelectedAccessories(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculate Volume Discount
  const getVolumeDiscount = () => {
    if (product.tierPricing && product.tierPricing.length > 0) {
        const applicableTier = [...product.tierPricing]
            .sort((a: any, b: any) => b.quantity - a.quantity)
            .find((tier: any) => quantity >= tier.quantity);
            
        if (applicableTier) {
            return applicableTier.discountPercentage;
        }
    }
    return 0;
  };

  // Calculate Total Price
  const getTotalPrice = () => {
      let unitPrice = product.price;
      let extras = 0;
      
      // Apply Volume Discount to Unit Price
      const discountPercentage = getVolumeDiscount();
      if (discountPercentage > 0) {
          unitPrice = unitPrice * (1 - discountPercentage / 100);
      }

      // Longfill Extras (Wizard vs Legacy)
      if (product.type === 'longfill') {
          if (mixResult) {
              extras += mixResult.totalPrice;
          } else {
              if (nicotine === "1.5") extras += 1.50;
              if (nicotine === "3") extras += 3.00;
              if (nicotine === "6") extras += 6.00;
          }
      }

      // Hardware Extras
      if (product.type === 'hardware' && product.compatibleAccessories) {
          product.compatibleAccessories.forEach((acc: any) => {
              if (selectedAccessories.includes(acc.id)) {
                  extras += acc.price;
              }
          });
      }

      return (unitPrice + extras) * quantity;
  };

  const handleAddToCart = () => {
    const itemsToAdd = [];

    // Calculate discounted unit price
    const discountPercentage = getVolumeDiscount();
    const discountedUnitPrice = product.price * (1 - discountPercentage / 100);

    // Get Variant Name
    let variantName = "";
    if (product.type === 'hardware') {
        variantName = product.colors?.find((c: any) => c.hex === selectedColor)?.name;
    } else if (selectedVariant && product.variants) {
        const v = product.variants.find((v: any) => v.id === selectedVariant);
        if (v) variantName = v.name;
    }

    // 1. Main Product
    itemsToAdd.push({
      id: `${product.id}-${Date.now()}`, // Unique ID for cart
      name: product.name,
      price: discountedUnitPrice,
      quantity: quantity,
      image: product.image || product.images?.[0] || "https://via.placeholder.com/100",
      brand: product.brand,
      variant: variantName
    });

    // 2. Virtual Bundling (Wizard)
    if (product.type === 'longfill' && mixResult) {
        mixResult.items.forEach(item => {
            itemsToAdd.push({
                id: `${item.id}-${Date.now()}`,
                name: item.name,
                price: item.price,
                quantity: item.quantity * quantity,
                image: "https://www.ivapeo.com/30926-home_default/nicokit-10ml-20mg-100pg-bombo.webp",
                variant: item.type === 'nicokit' ? 'Nicokit' : 'Base'
            });
        });
    } 
    // Legacy Nicokits
    else if (product.type === 'longfill' && nicotine !== "0") {
      const kitsNeeded = nicotine === "1.5" ? 1 : nicotine === "6" ? 4 : 2;
      const kitStrength = nicotine === "1.5" ? "10mg" : "20mg";
      
      itemsToAdd.push({
        id: `nicokit-${kitStrength}-${Date.now()}`,
        name: `Nicokit ${kitStrength} - 10ml`,
        price: 1.50,
        quantity: quantity * kitsNeeded,
        image: "https://www.ivapeo.com/30926-home_default/nicokit-10ml-20mg-100pg-bombo.webp",
        variant: `${kitStrength}`
      });
    }

    // 3. Hardware Accessories
    if (product.type === 'hardware' && selectedAccessories.length > 0 && product.compatibleAccessories) {
       selectedAccessories.forEach(accId => {
         const acc = product.compatibleAccessories!.find((a: any) => a.id === accId);
         if (acc) {
           itemsToAdd.push({
             id: `${acc.id}-${Date.now()}`,
             name: acc.name,
             price: acc.price,
             quantity: quantity,
             image: acc.image,
             variant: "Accessory"
           });
         }
       });
    }

    addToCart(itemsToAdd);
    setOpen(false);
  };

  // Determine Product Type View
  const isLongfill = (product.type === 'longfill' || (!product.type && !product.colors)) && !product.tierPricing; // Explicitly check not tierPricing to avoid confusion in bad data
  const isHardware = product.type === 'hardware' || (product.colors && product.colors.length > 0);
  const isConsumable = product.tierPricing && product.tierPricing.length > 0;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
            <Button 
            size="sm" 
            className={cn("h-8 px-3 bg-primary/10 text-primary hover:bg-primary hover:text-white font-bold text-xs uppercase transition-all", className)}
            >
            Añadir
            </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] bg-white p-0 overflow-hidden gap-0 border-0 shadow-2xl">
        
        {/* Header with Product Info */}
        <div className="p-5 bg-gray-50 border-b border-gray-100 flex gap-4 relative">
            <div className="w-16 h-16 bg-white rounded-lg border border-gray-200 p-1 shrink-0">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <div className="flex-1 min-w-0 pr-6">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">{product.brand}</p>
                <h3 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2">{product.name}</h3>
                <p className="text-lg font-black text-gray-900 mt-1">{product.price.toFixed(2)}€</p>
            </div>
        </div>

        <div className="p-5 overflow-y-auto max-h-[60vh]">
            
            {/* 1. Longfill View */}
            {isLongfill && (
                <>
                  {product.bottleCapacity && product.contentAmount ? (
                      <MixWizard 
                          bottleCapacity={product.bottleCapacity} 
                          aromaContent={product.contentAmount} 
                          onMixChange={setMixResult}
                      />
                  ) : (
                      <NicotineSelector value={nicotine} onChange={setNicotine} />
                  )}
                </>
            )}

            {/* 2. Hardware View */}
            {isHardware && (
                <>
                    <ColorSelector colors={product.colors} selectedColor={selectedColor} onChange={setSelectedColor} />
                    {product.compatibleAccessories && (
                        <AccessorySelector 
                            accessories={product.compatibleAccessories} 
                            selectedIds={selectedAccessories} 
                            onToggle={handleToggleAccessory} 
                        />
                    )}
                </>
            )}

            {/* 3. Consumable View (Variants + Volume) */}
            {isConsumable && (
                 <div className="space-y-6">
                    {/* Variant Selector */}
                    {product.variants && product.variants.length > 0 && (
                        <div className="space-y-3">
                            <label className="text-xs font-bold text-gray-900 uppercase block">
                                Selecciona Variante
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {product.variants.map((variant: any) => (
                                    <button
                                        key={variant.id}
                                        onClick={() => setSelectedVariant(variant.id)}
                                        disabled={variant.stock === 0}
                                        className={cn(
                                            "relative flex items-center justify-center py-2 px-2 rounded-lg border transition-all text-xs font-bold",
                                            selectedVariant === variant.id
                                                ? "border-gray-900 bg-gray-900 text-white shadow-md"
                                                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300",
                                            variant.stock === 0 && "opacity-50 cursor-not-allowed bg-gray-50 text-gray-400"
                                        )}
                                    >
                                        {variant.name}
                                        {selectedVariant === variant.id && (
                                            <div className="absolute -top-1 -right-1 bg-green-500 text-white p-0.5 rounded-full shadow-sm">
                                                <Check className="w-2 h-2" />
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <VolumeDiscountSelector 
                        tiers={product.tierPricing}
                        currentQuantity={quantity}
                        onQuantityChange={setQuantity}
                        basePrice={product.price}
                    />
                 </div>
            )}

            {/* Standard Quantity Selector (Only if NOT Consumable/Volume which has its own selector) */}
            {!isConsumable && (
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <span className="text-sm font-bold text-gray-900">Cantidad</span>
                    <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-1">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded font-bold"
                        >
                            -
                        </button>
                        <span className="w-4 text-center font-bold text-gray-900">{quantity}</span>
                        <button 
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded font-bold"
                        >
                            +
                        </button>
                    </div>
                </div>
            )}

        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-gray-100 bg-gray-50/50 space-y-3">
            <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase">Total Estimado</span>
                <span className="text-2xl font-black text-gray-900">{getTotalPrice().toFixed(2)}€</span>
            </div>
            <Button 
                onClick={handleAddToCart}
                className="w-full bg-[#84CC16] hover:bg-[#65A30D] text-white font-bold h-12 text-base rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-lime-500/20"
            >
                <ShoppingCart className="w-5 h-5" />
                {isHardware ? "Añadir Kit" : "Añadir al Carrito"}
            </Button>
        </div>

      </DialogContent>
    </Dialog>
  );
}
