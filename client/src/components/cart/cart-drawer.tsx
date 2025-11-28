import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, Trash2, Plus, Minus, X, Truck } from "lucide-react";
import { Link } from "wouter";
import { useCart } from "@/lib/cart-context";

export function CartDrawer({ children }: { children: React.ReactNode }) {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  const freeShippingThreshold = 28;
  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-white">
        <SheetHeader className="px-6 py-4 border-b border-gray-100 flex flex-row items-center justify-between space-y-0">
          <SheetTitle className="text-xl font-black text-gray-900">Tu carrito</SheetTitle>
          {/* Close button is automatic in SheetContent but we can customize or leave it */}
        </SheetHeader>

        <div className="flex-1 overflow-hidden flex flex-col">
          <ScrollArea className="flex-1 p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center text-gray-500">
                <ShoppingCart className="w-12 h-12 mb-4 opacity-20" />
                <p className="font-bold">Tu carrito está vacío</p>
                <SheetClose asChild>
                  <Button variant="link" className="text-primary mt-2">Seguir comprando</Button>
                </SheetClose>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    {/* Image */}
                    <div className="w-20 h-20 bg-gray-50 rounded-lg shrink-0 overflow-hidden border border-gray-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1 min-w-0 flex flex-col">
                      <h4 className="text-xs font-bold text-gray-900 leading-tight mb-2 line-clamp-2 uppercase">
                        {item.name}
                      </h4>
                      
                      <div className="flex items-center justify-between mt-auto">
                        {/* Quantity */}
                        <div className="flex items-center border border-gray-200 rounded h-8">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-full flex items-center justify-center hover:bg-gray-50 text-gray-500"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-gray-900">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-full flex items-center justify-center hover:bg-gray-50 text-gray-500"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price & Delete */}
                        <div className="flex items-center gap-3">
                          <span className="font-black text-sm text-gray-900">{(item.price * item.quantity).toFixed(2)} €</span>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Stock Status */}
                      <div className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-green-600 bg-green-50 self-start px-1.5 py-0.5 rounded">
                         <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                         Recíbelo mañana
                         <span className="text-gray-400 font-normal ml-1">Pídelo antes de 06h:28m:18s</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-100 bg-gray-50/50 p-6 space-y-4">
            {/* Shipping Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-gray-600">
                  {remainingForFreeShipping > 0 
                    ? `¡Te faltan ${remainingForFreeShipping.toFixed(2)}€ para envío GRATIS!` 
                    : "¡Envío GRATIS conseguido!"}
                </span>
                <span className="text-gray-900">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-500 ease-out" 
                  style={{ width: `${progress}%` }} 
                />
              </div>
              {remainingForFreeShipping <= 0 && (
                <div className="text-[10px] text-green-600 font-bold flex items-center gap-1">
                  <Truck className="w-3 h-3" /> Tu pedido viaja gratis
                </div>
              )}
            </div>

            {/* Total */}
            <div className="flex items-end justify-between pt-2">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Total Estimado</span>
                <span className="text-[10px] text-gray-400">Impuestos incluidos</span>
              </div>
              <span className="text-2xl font-black text-gray-900">{subtotal.toFixed(2)} €</span>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              <Link href="/cart">
                <Button variant="outline" className="w-full font-bold border-gray-300 hover:bg-gray-50 hover:text-gray-900 h-12">
                  Ir al Carrito
                </Button>
              </Link>
              <Link href="/checkout">
                <Button className="w-full font-bold bg-[#84cc16] hover:bg-[#65a30d] text-white h-12 uppercase tracking-wide shadow-lg shadow-lime-500/20">
                  Pagar
                </Button>
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
