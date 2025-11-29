import { Star, Minus, Plus, Check, Bell, FlaskConical, Info, ShoppingCart, Truck, ChevronDown, ChevronRight, Plug, Box, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";
import { MixWizard, MixResult } from "./mix-wizard";
import { VolumeDiscountSelector } from "./volume-discount-selector";
import { StoreStockModal } from "./store-stock-modal";
import { useUser } from "@/lib/user-context";
import { TrustBooster } from "./trust-booster";
import { BeginnerHelp } from "./beginner-help";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      {/* MOBILE: Carousel with Dots (Hidden on lg) */}
      <div className="lg:hidden relative mb-6 -mx-4 sm:mx-0">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-0 pb-6">
           {images.map((img, idx) => (
             <div key={idx} className="snap-center shrink-0 w-full relative aspect-square bg-gray-50 border-b border-gray-100">
                <img src={img} alt={`Product ${idx}`} className="w-full h-full object-contain p-8 mix-blend-multiply" />
                <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-400 text-black border-none px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm">
                      Nuevo
                    </Badge>
                </div>
             </div>
           ))}
        </div>
        {/* Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
           {images.map((_, idx) => (
             <div key={idx} className={cn("w-2 h-2 rounded-full transition-all shadow-sm", idx === selectedImage ? "bg-gray-900 w-4" : "bg-gray-300")} />
           ))}
        </div>
      </div>

      {/* DESKTOP: Gallery (Hidden on mobile) */}
      <div className="hidden lg:flex gap-4">
        {/* Thumbnails - Vertical on left (Amazon style) */}
        <div className="flex flex-col gap-3 w-20 shrink-0">
          {images.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`aspect-square rounded-lg border-2 overflow-hidden bg-gray-50 transition-all ${selectedImage === idx ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-gray-300'}`}
            >
              <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain p-1 mix-blend-multiply" />
            </button>
          ))}
        </div>

        {/* Main Image on right */}
        <div className="flex-1">
          <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 relative group">
            <img 
              src={images[selectedImage]} 
              alt="Product Main" 
              className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-yellow-400 hover:bg-yellow-500 text-black border-none px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm">
                Nuevo
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// 1. Flavor Profile Bar - Improved Design
function FlavorBar({ label, value, colorClass, icon }: { label: string, value: number, colorClass: string, icon?: string }) {
  if (!value || value <= 0) return null;
  
  const getIntensityLabel = (val: number) => {
    if (val >= 80) return "Alto";
    if (val >= 50) return "Medio";
    return "Bajo";
  };

  const blocks = 5;
  const filledBlocks = Math.round((value / 100) * blocks);

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between text-xs mb-1.5">
        <span className="text-gray-700 font-bold flex items-center gap-1.5 uppercase tracking-wide text-[11px]">
            {icon} {label}
        </span>
        <span className="text-gray-500 text-[10px] font-bold uppercase bg-gray-100 px-2 py-0.5 rounded-full">{getIntensityLabel(value)}</span>
      </div>
      <div className="flex gap-1 h-2 w-full">
         {Array.from({ length: blocks }).map((_, i) => (
           <div 
             key={i} 
             className={cn(
               "flex-1 rounded-sm transition-all duration-500",
               i < filledBlocks ? colorClass : "bg-gray-100"
             )}
           />
         ))}
      </div>
    </div>
  );
}

function FlavorProfileWidget({ profile }: { profile: NonNullable<Product['flavorProfile']> }) {
  return (
    <div className="mb-2 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-xs uppercase tracking-widest border-b border-gray-200 pb-2">
        👅 Perfil de Sabor
      </h4>
      <div className="space-y-1">
        <FlavorBar label="Frescor" value={profile.freshness} colorClass="bg-gradient-to-r from-cyan-300 to-cyan-500" icon="❄️" />
        <FlavorBar label="Dulzor" value={profile.sweetness} colorClass="bg-gradient-to-r from-pink-300 to-pink-500" icon="🍬" />
      </div>
    </div>
  );
}

// 2. Nicotine Calculator - Premium Design
function NicotineCalculator({ value, onChange }: { value: string, onChange: (val: string) => void }) {
  
  const getBundleInfo = (mg: string) => {
    const items = [];
    items.push({ icon: "🔹", text: "1x Bote Halo 50ml", sub: "Aroma Sin Nicotina" });
    
    if (mg === "1.5") {
      items.push({ icon: "⚡", text: "1x Nicokit 10mg", sub: "Incluido en el pack" });
    } else if (mg === "3") {
      items.push({ icon: "⚡", text: "2x Nicokits 20mg", sub: "Incluidos en el pack" });
    } else if (mg === "6") {
      items.push({ icon: "⚡", text: "4x Nicokits 20mg", sub: "Incluidos en el pack" });
    }

    return (
      <div className="space-y-2 mt-2">
         {items.map((item, i) => (
           <div key={i} className="flex items-start gap-3 p-2 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="text-lg mt-0.5">{item.icon}</div>
              <div>
                 <p className="text-sm font-bold text-gray-900 leading-none mb-1">{item.text}</p>
                 <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">{item.sub}</p>
              </div>
           </div>
         ))}
      </div>
    );
  };

  return (
    <div className="space-y-4 mb-4 mt-2 pt-4 border-t border-dashed border-gray-200">
      <div className="flex items-center gap-2 mb-1">
        <div className="bg-purple-100 p-1.5 rounded-lg text-purple-600">
           <FlaskConical className="w-4 h-4" />
        </div>
        <div>
           <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide leading-none">
             Configura tu Pack
           </h4>
        </div>
      </div>

      <div className="space-y-4">
         {/* Step 1 */}
         <div>
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
              1. Selecciona Nivel de Nicotina
            </label>
            <div className="grid grid-cols-4 gap-2 min-w-0">
                {["0", "1.5", "3", "6"].map((level) => (
                    <button 
                    key={level}
                    onClick={() => onChange(level)}
                    className={cn(
                        "flex flex-col items-center justify-center py-2 rounded-xl border transition-all relative overflow-hidden min-w-0",
                        value === level 
                            ? 'border-primary bg-primary/5 ring-1 ring-primary' 
                            : 'border-gray-200 bg-white hover:border-gray-300'
                    )}
                    >
                      <span className={cn("text-sm font-black", value === level ? "text-primary" : "text-gray-700")}>
                        {level}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium">mg</span>
                      
                      {value === level && (
                        <div className="absolute top-1 right-1 text-primary">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        </div>
                      )}
                    </button>
                ))}
            </div>
         </div>

         {/* Step 2 */}
         <div className="bg-gray-50/80 rounded-xl p-3 border border-gray-200/60">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
              2. Tu Pack Incluye
            </label>
            {getBundleInfo(value)}
         </div>
      </div>
    </div>
  );
}

// 3. Hardware Bundle Configurator
interface Accessory {
  id: string;
  name: string;
  price: number;
  image: string;
  type: string;
}

interface HardwareBundleConfiguratorProps {
  accessories: Accessory[];
  selectedAccessories: string[];
  onToggleAccessory: (id: string) => void;
}

function HardwareBundleConfigurator({ accessories, selectedAccessories, onToggleAccessory }: HardwareBundleConfiguratorProps) {
  if (!accessories || accessories.length === 0) return null;

  return (
    <div className="space-y-4 mb-4 mt-4 pt-4 border-t border-dashed border-gray-200">
      <div className="flex items-center gap-2 mb-1">
        <div className="bg-blue-100 p-1.5 rounded-lg text-blue-600">
           <Box className="w-4 h-4" />
        </div>
        <div>
           <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide leading-none">
             Completa tu Kit
           </h4>
           <span className="text-[10px] text-blue-600 font-bold tracking-wider">ACCESORIOS COMPATIBLES</span>
        </div>
      </div>

      <div className="grid gap-3">
        {accessories.map((acc) => {
           const isSelected = selectedAccessories.includes(acc.id);
           return (
             <div 
               key={acc.id}
               onClick={() => onToggleAccessory(acc.id)}
               className={cn(
                 "flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer relative overflow-hidden",
                 isSelected 
                   ? "border-blue-500 bg-blue-50/50 ring-1 ring-blue-500/20" 
                   : "border-gray-200 bg-white hover:border-gray-300"
               )}
             >
                {/* Checkbox */}
                <div className={cn(
                  "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                  isSelected ? "bg-blue-500 border-blue-500 text-white" : "border-gray-300 bg-white"
                )}>
                   {isSelected && <Check className="w-3.5 h-3.5" />}
                </div>

                {/* Image */}
                <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 p-1 shrink-0">
                   <img src={acc.image} alt={acc.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                   <p className="text-xs font-bold text-gray-900 line-clamp-1">{acc.name}</p>
                   <div className="flex items-center gap-2">
                     <span className="text-xs text-gray-500 font-medium capitalize">{acc.type === 'coil' ? 'Resistencias' : 'Cartuchos'}</span>
                     <span className="text-xs font-bold text-blue-600">+{acc.price.toFixed(2)}€</span>
                   </div>
                </div>
             </div>
           );
        })}
      </div>
      
      {selectedAccessories.length > 0 && (
         <div className="bg-blue-50 text-blue-700 text-xs font-bold p-3 rounded-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
            <Check className="w-4 h-4" />
            <span>¡Perfecto! Has añadido los accesorios compatibles.</span>
         </div>
      )}
    </div>
  );
}

// --- MAIN COMPONENT ---

interface ProductInfoProps {
  product: Product;
  inStock?: boolean; // Prop to control stock state manually
}

export function ProductInfo({ product, inStock = true }: ProductInfoProps) {
  const { userType } = useUser(); // Use Global User Context
  const [quantity, setQuantity] = useState(1);
  const [nicotine, setNicotine] = useState("0"); // Lifted state for bundling (Legacy)
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]); // Hardware bundle state
  const [mixResult, setMixResult] = useState<MixResult | null>(null); // NEW: Mix Wizard State
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [notified, setNotified] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedVariant, setSelectedVariant] = useState<string>(""); // NEW: Generic Variant State (e.g. Ohms)

  // Reset selections when product changes
  useEffect(() => {
    setSelectedAccessories([]);
    setNicotine("0");
    setMixResult(null);
    setQuantity(1);
    // Set default variant if available
    if (product.variants && product.variants.length > 0) {
        setSelectedVariant(product.variants[0].id);
    }
  }, [product.id]);

  // Calculate extra cost for nicotine bundles
  const getExtraCost = () => {
    let extra = 0;
    
    // Longfill extras (NEW WIZARD)
    if (product.type === 'longfill' && mixResult) {
        extra += mixResult.totalPrice;
    }
    // Legacy Longfill fallback (if no wizard used)
    else if (product.type === 'longfill' && !mixResult) {
      if (nicotine === "1.5") extra += 1.50;
      if (nicotine === "3") extra += 3.00;
    }

    // Hardware extras
    if (product.type === 'hardware' && product.compatibleAccessories) {
       product.compatibleAccessories.forEach(acc => {
         if (selectedAccessories.includes(acc.id)) {
           extra += acc.price;
         }
       });
    }

    return extra;
  };

  // NEW: Volume Discount Calculation
  const getVolumeDiscount = () => {
    if (product.tierPricing && product.tierPricing.length > 0) {
        // Find the highest tier applicable
        const applicableTier = [...product.tierPricing]
            .sort((a, b) => b.quantity - a.quantity)
            .find(tier => quantity >= tier.quantity);
            
        if (applicableTier) {
            return applicableTier.discountPercentage;
        }
    }
    return 0;
  };

  const extraCost = getExtraCost();
  const discountPercentage = getVolumeDiscount();
  
  // DORMANT USER LOGIC: Apply Welcome Back Discount in Price Display
  const dormantDiscount = userType === 'dormant' ? 0.15 : 0;
  
  // Base price + extras
  let baseTotal = product.price + extraCost;
  
  // Adjusted Unit Price based on volume
  const discountedUnitPrice = baseTotal * (1 - discountPercentage / 100);

  // Apply Dormant Discount on top if applicable
  const finalDisplayPrice = discountedUnitPrice * (1 - dormantDiscount);
  
  const totalPrice = finalDisplayPrice; // Per unit

  const decreaseQty = () => setQuantity(q => Math.max(1, q - 1));
  const increaseQty = () => setQuantity(q => q + 1);

  const handleToggleAccessory = (id: string) => {
    setSelectedAccessories(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);

    const itemsToAdd = [];

    // Get Variant Name if applicable
    let variantName = "";
    if (product.variants && selectedVariant) {
        const v = product.variants.find(v => v.id === selectedVariant);
        if (v) variantName = v.name;
    }

    // 1. Main Product
    itemsToAdd.push({
      id: product.id,
      name: product.name,
      price: discountedUnitPrice, // Use discounted price
      quantity: quantity,
      image: product.images[0],
      brand: product.brand,
      variant: variantName // Add variant info to cart item
    });

    // 2. Virtual Bundling Logic (Nicokits & Base from Wizard)
    if (product.type === 'longfill' && mixResult) {
        mixResult.items.forEach(item => {
            itemsToAdd.push({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity * quantity, // Multiply by main qty
                image: "https://www.ivapeo.com/30926-home_default/nicokit-10ml-20mg-100pg-bombo.webp",
                variant: item.type === 'nicokit' ? 'Nicokit' : 'Base'
            });
        });
    }
    // Legacy Logic
    else if (product.type === 'longfill' && !mixResult && nicotine !== "0") {
      const kitsNeeded = nicotine === "1.5" ? 1 : 2; // Simplified logic from manual
      const kitStrength = nicotine === "1.5" ? "10mg" : "20mg";
      
      itemsToAdd.push({
        id: `nicokit-${kitStrength}`,
        name: `Nicokit ${kitStrength} - 10ml`,
        price: 1.50, // Updated to include price as requested
        quantity: quantity * kitsNeeded, // Multiplied by main product quantity
        image: "https://www.ivapeo.com/30926-home_default/nicokit-10ml-20mg-100pg-bombo.webp", // Placeholder nicokit image
        variant: `${kitStrength}`
      });
    }

    // 3. Hardware Accessories Logic
    if (product.type === 'hardware' && selectedAccessories.length > 0 && product.compatibleAccessories) {
       selectedAccessories.forEach(accId => {
         const acc = product.compatibleAccessories!.find(a => a.id === accId);
         if (acc) {
           itemsToAdd.push({
             id: acc.id,
             name: acc.name,
             price: acc.price,
             quantity: quantity, // Usually 1 pack per device
             image: acc.image,
             variant: "Accessory"
           });
         }
       });
    }

    addToCart(itemsToAdd);
  };

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    setNotified(true);
  };

  // 1. Polymorphism: Determine which selector to show based on Type
  const renderProductSelectors = () => {
    if (product.type === 'longfill') {
      // Use New Wizard if capacity data exists, else legacy
      if (product.bottleCapacity && product.contentAmount) {
          return (
            <MixWizard 
                bottleCapacity={product.bottleCapacity} 
                aromaContent={product.contentAmount} 
                onMixChange={setMixResult}
            />
          );
      }
      return <NicotineCalculator value={nicotine} onChange={setNicotine} />;
    }
    
    if (product.type === 'hardware') {
      return (
         <div className="space-y-4 mb-4">
          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <label className="text-xs font-bold text-gray-900 uppercase mb-2 block">
                Color: <span className="text-primary ml-1">{product.colors.find(c => c.hex === nicotine)?.name || product.colors[0].name}</span>
              </label>
              
              {/* Mobile: Horizontal Scroll | Desktop: Grid Wrap */}
              <div className="flex overflow-x-auto pb-2 -mx-1 px-1 space-x-3 md:flex-wrap md:overflow-visible md:pb-0 md:space-x-0 md:gap-3 scrollbar-hide md:scrollbar-default snap-x">
                {product.colors.map((color, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setNicotine(color.hex)} // Using setNicotine to store selected color hex for now
                    className={cn(
                      "w-10 h-10 shrink-0 rounded-full border-2 shadow-sm hover:scale-105 transition-all focus:outline-none snap-start",
                      nicotine === color.hex || (!nicotine && idx === 0) ? "border-primary ring-2 ring-primary/20 scale-110" : "border-gray-200"
                    )}
                    style={{ background: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* AI Recommended Accessories */}
          {product.compatibleAccessories && (
            <HardwareBundleConfigurator 
              accessories={product.compatibleAccessories}
              selectedAccessories={selectedAccessories}
              onToggleAccessory={handleToggleAccessory}
            />
          )}
        </div>
      );
    }

    // NEW: Consumable / Volume Pricing Selector
    if (product.tierPricing && product.tierPricing.length > 0) {
        return (
            <div className="space-y-6">
                {/* Variant Selector (e.g. Ohms) */}
                {product.variants && product.variants.length > 0 && (
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-900 uppercase block">
                            Selecciona Variante
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {product.variants.map((variant) => (
                                <button
                                    key={variant.id}
                                    onClick={() => setSelectedVariant(variant.id)}
                                    disabled={variant.stock === 0}
                                    className={cn(
                                        "relative flex items-center justify-center py-3 px-2 rounded-xl border transition-all text-sm font-bold",
                                        selectedVariant === variant.id
                                            ? "border-gray-900 bg-gray-900 text-white shadow-md"
                                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300",
                                        variant.stock === 0 && "opacity-50 cursor-not-allowed bg-gray-50 text-gray-400"
                                    )}
                                >
                                    {variant.name}
                                    {selectedVariant === variant.id && (
                                        <div className="absolute -top-2 -right-2 bg-green-500 text-white p-0.5 rounded-full shadow-sm">
                                            <Check className="w-3 h-3" />
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
        );
    }

    return null;
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* DESKTOP HEADER (Standard Ecommerce) */}
      <div className="hidden md:block space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 hover:bg-gray-200">
             Marca {product.brand}
          </Badge>
          <div className="flex items-center gap-1 text-yellow-400 ml-auto">
             {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
             ))}
             <span className="text-xs text-gray-400 ml-1 underline cursor-pointer hover:text-primary transition-colors">(142 opiniones)</span>
          </div>
        </div>

        <h1 className="text-3xl font-heading font-black text-gray-900 leading-none uppercase tracking-tight">
          {product.name}
        </h1>

        {/* PRICE BLOCK DESKTOP - ADAPTIVE */}
        <div className="flex items-end gap-3 border-b border-gray-100 pb-4">
             {userType === 'dormant' ? (
               <div className="animate-in zoom-in duration-300 flex items-end gap-3">
                 <span className="text-4xl font-black text-purple-600 tracking-tighter">{finalDisplayPrice.toFixed(2).replace('.', ',')}€</span>
                 <span className="text-lg text-gray-400 line-through font-medium mb-1.5">{discountedUnitPrice.toFixed(2).replace('.', ',')}€</span>
                 <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-2 text-[10px] font-bold uppercase px-1.5 h-5">
                   Vuelves y Ahorras
                 </Badge>
               </div>
             ) : (
               <>
                 <span className="text-4xl font-black text-gray-900 tracking-tighter">{totalPrice.toFixed(2).replace('.', ',')}€</span>
                 {(product.originalPrice || 0) > totalPrice && (
                    <span className="text-lg text-gray-400 line-through font-medium mb-1.5">{product.originalPrice!.toFixed(2).replace('.', ',')}€</span>
                 )}
               </>
             )}
        </div>

        {/* Desktop Short Description */}
        {product.shortDescription && (
           <div className="text-gray-600 leading-relaxed text-sm border-l-4 border-primary/20 pl-4">
             <div dangerouslySetInnerHTML={{ __html: product.shortDescription }} />
           </div>
        )}
      </div>


      {/* MOBILE HEADER (Wireframe B.1) */}
      <div className="md:hidden">
        <h1 className="text-2xl font-heading font-black text-gray-900 leading-tight mb-2 uppercase tracking-tight">
          {product.name}
        </h1>

        <div className="flex items-center gap-1 text-yellow-400 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="text-sm text-gray-500 font-medium ml-1">(142 Opiniones)</span>
        </div>

        {/* PRICE BLOCK MOBILE - ADAPTIVE */}
        <div className="mb-4">
             {userType === 'dormant' ? (
               <div className="animate-in zoom-in duration-300 flex flex-col">
                 <div className="flex items-center gap-2">
                    <span className="text-3xl font-black text-purple-600 tracking-tighter">{finalDisplayPrice.toFixed(2).replace('.', ',')}€</span>
                    <Badge className="bg-purple-100 text-purple-700 border-purple-200 text-[10px] font-bold uppercase px-1.5 h-5">
                      -15% Extra
                    </Badge>
                 </div>
                 <span className="text-sm text-gray-400 line-through font-medium">{discountedUnitPrice.toFixed(2).replace('.', ',')}€</span>
               </div>
             ) : (
               <span className="text-3xl font-black text-gray-900 tracking-tighter">{totalPrice.toFixed(2).replace('.', ',')}€</span>
             )}
        </div>

        {/* Mobile Short Description */}
        {product.shortDescription && (
           <div className="mb-6">
             <div 
               className="text-gray-600 leading-relaxed text-sm"
               dangerouslySetInnerHTML={{ __html: product.shortDescription }} 
             />
           </div>
        )}
      </div>

      {/* Automatic Flavor Profile */}
      {product.flavorProfile && (
        <FlavorProfileWidget profile={product.flavorProfile} />
      )}

      {/* Buy Box Area */}
      <div className="bg-white md:p-6 md:bg-gray-50/50 md:rounded-2xl md:border md:border-gray-200 space-y-6 relative w-full overflow-hidden md:overflow-visible">
        
        {/* Polymorphic Selectors (Chips with Scroll) */}
        {renderProductSelectors()}

        {/* Conditional Rendering based on Stock */}
        {inStock ? (
          /* IN STOCK UI */
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-500 block">
              
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 items-stretch">
                  {/* Quantity Input - Visible on Mobile now */}
                  <div className="flex items-center bg-white border border-gray-200 rounded-xl h-12 md:h-14 w-full sm:w-32 lg:w-full xl:w-32 shrink-0 hover:border-primary transition-colors relative overflow-hidden group shadow-sm">
                      <button onClick={decreaseQty} className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-50 transition-colors active:scale-90 z-10">
                        <Minus className="w-5 h-5" />
                      </button>
                      <div className="flex-1 text-center font-bold text-gray-900 text-lg z-10">{quantity}</div>
                      <button onClick={increaseQty} className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-50 transition-colors active:scale-90 z-10">
                        <Plus className="w-5 h-5" />
                      </button>
                  </div>

                  {/* Primary Action Button - Desktop ONLY (Mobile has sticky bar) */}
                  <Button 
                    onClick={handleAddToCart}
                    disabled={isAdded}
                    className={cn(
                      "hidden md:flex flex-1 h-14 text-lg font-bold uppercase tracking-wide transition-all duration-300 shadow-lg rounded-xl",
                      isAdded 
                        ? "bg-green-600 hover:bg-green-700 text-white scale-100 shadow-green-500/20" 
                        : (userType === 'dormant' ? "bg-purple-600 hover:bg-purple-700 shadow-purple-500/30" : "bg-[#84CC16] hover:bg-[#65a30d] hover:-translate-y-1 shadow-lime-500/30 text-white")
                    )}
                  >
                      {isAdded ? (
                        <span className="flex items-center gap-2">
                          <Check className="w-6 h-6" /> ¡AÑADIDO!
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 whitespace-nowrap">
                          <ShoppingCart className="w-5 h-5 mr-2" /> {userType === 'dormant' ? 'AÑADIR CON DESCUENTO' : 'AÑADIR'}
                        </span>
                      )}
                  </Button>
              </div>
              
              {/* GUEST INJECTION: Trust Booster */}
              {userType === 'guest' && (
                <div className="mt-2">
                  <TrustBooster />
                </div>
              )}

              {/* GUEST INJECTION: Beginner Help (Only for Hardware) */}
              {userType === 'guest' && product.type === 'hardware' && (
                <BeginnerHelp />
              )}

              {/* ACTIVE USER: Prominent Store Stock Check */}
              {userType === 'active' && (
                <div className="mt-2">
                  <StoreStockModal productName={product.name} />
                </div>
              )}
              
              {/* Urgency & Delivery Info - Only for Guest/Dormant */}
              {userType !== 'active' && (
                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 bg-white p-3 rounded-lg border border-gray-100 justify-center shadow-sm text-center mt-2">
                    <Truck className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Recíbelo <span className="font-bold text-green-700">Mañana</span> si pides antes de las <span className="font-bold text-gray-900">17:00</span></span>
                </div>
              )}

          </div>
        ) : (
          /* OUT OF STOCK UI */
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <div className="relative overflow-hidden rounded-xl border border-orange-100 bg-white shadow-sm">
               <div className="bg-orange-50/50 p-4">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="bg-white p-2 rounded-full shadow-sm text-orange-500">
                     <Bell className="w-5 h-5" />
                   </div>
                   <div>
                     <h4 className="text-gray-900 font-bold text-sm uppercase tracking-tight">Agotado temporalmente</h4>
                   </div>
                 </div>
                 
                 {notified ? (
                   <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2 text-green-800 animate-in zoom-in duration-300">
                     <Check className="w-4 h-4" />
                     <div className="text-xs font-bold">
                       ¡Te avisaremos!
                     </div>
                   </div>
                 ) : (
                   <form onSubmit={handleNotify} className="mt-1">
                      <div className="flex gap-2">
                        <Input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email" 
                            className="h-9 text-sm bg-white border-gray-200 focus:border-orange-400 rounded-lg"
                            required
                          />
                        <Button type="submit" className="h-9 px-3 bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase rounded-lg">
                          Avisar
                        </Button>
                      </div>
                   </form>
                 )}
               </div>
             </div>
          </div>
        )}
      </div>
      
      {/* Mobile Sticky Bar (Hidden on Desktop) */}
      <MobileStickyBar 
        price={finalDisplayPrice} 
        onAdd={handleAddToCart} 
        isAdded={isAdded} 
        inStock={inStock}
        isPack={(product.type === 'longfill' && nicotine !== "0") || (product.type === 'hardware' && selectedAccessories.length > 0)} 
      />
    </div>
  );
}


export function MobileStickyBar({ price, onAdd, isAdded, inStock, isPack }: { price: number, onAdd: () => void, isAdded: boolean, inStock: boolean, isPack: boolean }) {
  if (!inStock) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-4 max-w-full">
        <div className="flex flex-col shrink-0">
          <span className="text-2xl font-black text-gray-900 leading-none">{price.toFixed(2).replace('.', ',')}€</span>
          <span className="text-[10px] text-gray-500 uppercase font-bold">{isPack ? "(Precio Pack)" : "(Precio)"}</span>
        </div>
        <Button 
          onClick={onAdd}
          disabled={isAdded}
          className={cn(
            "flex-1 h-11 text-sm font-bold uppercase tracking-wide shadow-md rounded-lg transition-all min-w-0",
            isAdded 
              ? "bg-green-600 hover:bg-green-700 text-white" 
              : "bg-[#84CC16] hover:bg-[#65a30d] text-white"
          )}
        >
           <span className="truncate">
             {isAdded ? "¡Añadido!" : (isPack ? "AÑADIR PACK 🛒" : "AÑADIR 🛒")}
           </span>
        </Button>
      </div>
    </div>
  );
}
