import { X, Ticket } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/lib/user-context";
import { toast } from "sonner";

export function StickyWinbackBar() {
  const { userType, userName } = useUser();
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  // Only show if dormant and scrolled a bit (or immediately if desired, spec says sticky)
  useEffect(() => {
    if (userType === 'dormant' && !isClosed) {
      const timer = setTimeout(() => setIsVisible(true), 1000); // Small delay for effect
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [userType, isClosed]);

  if (!isVisible) return null;

  const handleApplyCoupon = () => {
     toast.success("¡Cupón WELCOMEBACK15 aplicado!", {
        description: "15% de descuento añadido a tu carrito.",
        icon: <Ticket className="w-4 h-4 text-green-500" />,
        duration: 3000,
     });
     setIsClosed(true);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-[60] bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-2xl border-t border-purple-500/30 animate-in slide-in-from-bottom-full duration-500">
      <div className="container-custom py-3 md:py-4 flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-3 md:gap-4 flex-1">
           <div className="hidden md:flex bg-white/10 p-2 rounded-full animate-pulse">
              <Ticket className="w-5 h-5 text-purple-300" />
           </div>
           <div>
              <p className="font-bold text-sm md:text-base leading-tight">
                 ¡Hola de nuevo, <span className="text-purple-300">{userName}</span>!
              </p>
              <p className="text-xs md:text-sm text-gray-300 leading-tight">
                 Recuerda que tienes un <span className="text-white font-bold bg-purple-500/30 px-1 rounded">15% DTO EXTRA</span> esperándote.
              </p>
           </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
           <Button 
             size="sm" 
             onClick={handleApplyCoupon}
             className="bg-white text-purple-900 hover:bg-purple-100 font-black text-xs md:text-sm shadow-[0_0_15px_rgba(168,85,247,0.4)] border-none"
           >
             Aplicar Cupón
           </Button>
           <button 
             onClick={() => setIsClosed(true)}
             className="text-gray-400 hover:text-white transition-colors p-1"
           >
             <X className="w-5 h-5" />
           </button>
        </div>

      </div>
    </div>
  );
}
