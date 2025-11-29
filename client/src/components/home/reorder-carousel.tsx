import { Plus, ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart-context"; // Assuming this exists or we mock interaction

// Mock Data for "My Frequent Items"
import imgLiquids from "@assets/generated_images/clean_eliquid_lifestyle.png";
import imgPods from "@assets/generated_images/clean_vape_pods.png";

const FREQUENT_ITEMS = [
  {
    id: "rep-1",
    name: "Don Juan Reserve",
    variant: "3mg",
    price: 16.90,
    image: imgLiquids,
    type: "eLiquid"
  },
  {
    id: "rep-2",
    name: "Vaporesso XROS Pods",
    variant: "0.4ohm (Pack 4)",
    price: 12.50,
    image: imgPods,
    type: "Coil/Pod"
  },
  {
    id: "rep-3",
    name: "Bombo Wailani",
    variant: "Sales 20mg",
    price: 4.90,
    image: imgLiquids,
    type: "eLiquid"
  },
  {
    id: "rep-4",
    name: "Voopoo PnP VM1",
    variant: "0.3ohm (Pack 5)",
    price: 14.00,
    image: imgPods,
    type: "Coil"
  },
  {
    id: "rep-5",
    name: "Lemon Tart Dinner Lady",
    variant: "50ml",
    price: 15.50,
    image: imgLiquids,
    type: "eLiquid"
  }
];

export function ReorderCarousel() {
  const [addingId, setAddingId] = useState<string | null>(null);
  // In a real app, we'd use the cart context
  // const { addItem } = useCart(); 

  const handleQuickAdd = (item: any) => {
    setAddingId(item.id);
    
    // Simulate API call
    setTimeout(() => {
      setAddingId(null);
      toast.success(`${item.name} añadido al carrito`, {
        description: "Listo para el checkout",
        position: "top-center",
        duration: 2000,
        icon: <ShoppingCart className="w-4 h-4" />,
      });
      // Trigger a cart update event if needed or use context
    }, 600);
  };

  return (
    <section className="py-8 bg-gray-50 border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">
              Tus Habituales
            </h2>
            <p className="text-xs text-gray-500 font-medium mt-1">
              Vuelve a pedir en 1 clic
            </p>
          </div>
        </div>

        {/* Carousel / Horizontal Scroll */}
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 gap-4 scrollbar-hide snap-x">
          {FREQUENT_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="snap-start shrink-0 w-[160px] md:w-[200px] bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-4 flex flex-col relative group"
            >
              {/* Product Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-50 mb-3">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain mix-blend-multiply p-2"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-h-[60px]">
                <h3 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2 mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  {item.variant}
                </p>
              </div>

              {/* Price & Action */}
              <div className="mt-3 flex items-center justify-between">
                <span className="font-bold text-gray-900 text-sm">
                  {item.price.toFixed(2)}€
                </span>
                
                <Button 
                  size="icon" 
                  className={`h-8 w-8 rounded-full transition-all ${
                    addingId === item.id 
                      ? "bg-green-500 hover:bg-green-600" 
                      : "bg-black hover:bg-gray-800"
                  }`}
                  onClick={() => handleQuickAdd(item)}
                  disabled={addingId === item.id}
                >
                  {addingId === item.id ? (
                    <Check className="w-4 h-4 text-white animate-in zoom-in" />
                  ) : (
                    <Plus className="w-4 h-4 text-white" />
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
