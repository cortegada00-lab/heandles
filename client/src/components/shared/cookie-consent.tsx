import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show after a small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border border-gray-200 p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 relative">
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 md:hidden text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex-1 space-y-2">
            <h3 className="font-bold text-gray-900 text-sm">🍪 Configuración de Cookies</h3>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
              Utilizamos cookies propias y de terceros para mejorar nuestros servicios, elaborar información estadística y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto shrink-0">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleDecline}
              className="text-xs font-bold border-gray-200 hover:bg-gray-50 text-gray-600"
            >
              Rechazar
            </Button>
            <Button 
              size="sm" 
              onClick={handleAccept}
              className="text-xs font-bold bg-black hover:bg-gray-800 text-white"
            >
              Aceptar todas
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
