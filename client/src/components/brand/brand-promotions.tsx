import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gift, Tag, ShoppingBag, Sparkles, Loader2, Check } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";
import giftImage from "@assets/generated_images/vape_promotional_gift_set.png";

interface Promotion {
  id: string;
  title: string;
  description: string;
  requiredProduct: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  gift: {
    name: string;
    image: string;
    value: string;
  };
  color: string;
}

interface BrandPromotionsProps {
  brandName: string;
  promotions: Promotion[];
}

export function BrandPromotions({ brandName, promotions }: BrandPromotionsProps) {
  const { addToCart } = useCart();
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleClaimOffer = (promo: Promotion) => {
    setLoadingId(promo.id);
    
    // Simulate a small network delay for better UX
    setTimeout(() => {
      // Add main product
      addToCart([
        {
          id: promo.requiredProduct.id,
          name: promo.requiredProduct.name,
          price: promo.requiredProduct.price,
          image: promo.requiredProduct.image,
          quantity: 1,
          variant: "default"
        },
        // Add gift as a product
        {
          id: `gift-${promo.id}`,
          name: `${promo.gift.name} (REGALO)`,
          price: 0, // Free
          image: promo.gift.image,
          quantity: 1,
          variant: "gift"
        }
      ]);
      
      setLoadingId(null);
      setAddedId(promo.id);
      
      // Reset added state after 2 seconds
      setTimeout(() => setAddedId(null), 3000);
    }, 600);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-yellow-400 p-2 rounded-full">
            <Gift className="w-6 h-6 text-black" />
          </div>
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900">Promociones {brandName}</h2>
            <p className="text-sm text-gray-500">Ofertas exclusivas por tiempo limitado</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {promotions.map((promo) => (
            <div 
              key={promo.id} 
              className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all group"
            >
              {/* Decorative Background Gradient */}
              <div className={`absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l ${promo.color} opacity-10 skew-x-12 translate-x-20`}></div>
              
              <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                {/* Product + Gift Visual */}
                <div className="flex items-center relative">
                   <div className="w-24 h-24 bg-white rounded-xl shadow-sm border border-gray-100 p-2 z-10">
                      <img src={promo.requiredProduct.image} className="w-full h-full object-contain" alt={promo.requiredProduct.name} />
                   </div>
                   <div className="w-8 h-8 bg-white rounded-full shadow border border-gray-100 flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-20 text-gray-400">
                      <span className="text-xs font-bold">+</span>
                   </div>
                   <div className="w-24 h-24 bg-white rounded-xl shadow-sm border border-gray-100 p-2 z-10 -ml-4">
                      <img src={promo.gift.image} className="w-full h-full object-contain mix-blend-multiply" alt={promo.gift.name} />
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm animate-pulse">
                        GRATIS
                      </div>
                   </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                   <div className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide mb-3 border border-red-100">
                      <Sparkles className="w-3 h-3" /> Oferta Especial
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2">{promo.title}</h3>
                   <p className="text-sm text-gray-500 mb-4 line-clamp-2">{promo.description}</p>
                   
                   <div className="flex items-center justify-center md:justify-start gap-3">
                      <div className="text-right">
                          <span className="block text-[10px] text-gray-400 line-through">Valor: {promo.gift.value}</span>
                          <span className="block text-lg font-black text-gray-900">{promo.requiredProduct.price} €</span>
                      </div>
                      <Button 
                        onClick={() => handleClaimOffer(promo)}
                        disabled={loadingId === promo.id || addedId === promo.id}
                        className={`rounded-full font-bold shadow-lg transition-all ${
                          addedId === promo.id 
                            ? "bg-green-600 hover:bg-green-700 text-white" 
                            : "bg-black hover:bg-gray-800 text-white shadow-gray-200"
                        }`}
                      >
                        {loadingId === promo.id ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : addedId === promo.id ? (
                          <Check className="w-4 h-4 mr-2" />
                        ) : (
                          <ShoppingBag className="w-4 h-4 mr-2" />
                        )}
                        {loadingId === promo.id ? "Añadiendo..." : addedId === promo.id ? "¡Añadido!" : "Comprar Pack"}
                      </Button>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}