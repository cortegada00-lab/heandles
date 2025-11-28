import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from "sonner";

// Basic product interface for cart items
interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  brand?: string;
  variant?: string; // e.g., nicotine strength or color
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem | CartItem[]) => void;
  removeItem: (id: string | number) => void;
  updateQuantity: (id: string | number, delta: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (productOrProducts: CartItem | CartItem[]) => {
    const newItems = Array.isArray(productOrProducts) ? productOrProducts : [productOrProducts];
    
    setItems(currentItems => {
      const updatedItems = [...currentItems];
      
      newItems.forEach(newItem => {
        const existingItemIndex = updatedItems.findIndex(
          i => i.id === newItem.id && i.variant === newItem.variant
        );

        if (existingItemIndex > -1) {
          updatedItems[existingItemIndex].quantity += newItem.quantity;
        } else {
          updatedItems.push(newItem);
        }
      });
      
      return updatedItems;
    });

    // Show bundling toast if multiple items were added
    if (newItems.length > 1) {
       toast.success("Pack añadido al carrito", {
         description: (
           <div className="flex items-center gap-3 mt-2">
             <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden shrink-0 border border-gray-200">
               <img src={newItems[0].image} alt="" className="w-full h-full object-contain p-1" />
             </div>
             <div className="flex-1 min-w-0">
               <p className="text-xs font-medium line-clamp-2">
                 {newItems.length} productos: {newItems[0].name} + {newItems.slice(1).map(i => i.name).join(" + ")}
               </p>
             </div>
           </div>
         ),
         duration: 3000,
       });
    } else {
       toast.success("Producto añadido", {
         description: (
           <div className="flex items-center gap-3 mt-2">
             <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden shrink-0 border border-gray-200">
               <img src={newItems[0].image} alt="" className="w-full h-full object-contain p-1" />
             </div>
             <div className="flex-1 min-w-0">
               <p className="text-xs font-medium text-gray-900 line-clamp-2">{newItems[0].name}</p>
               <p className="text-[10px] text-gray-500">Ya está en tu cesta</p>
             </div>
           </div>
         ),
         duration: 3000,
       });
    }
  };

  const removeItem = (id: string | number) => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string | number, delta: number) => {
    setItems(items => items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const clearCart = () => setItems([]);

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeItem, updateQuantity, clearCart, itemCount, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
