import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, AlertTriangle } from "lucide-react";
import ivapeoLogo from "@/assets/ivapeo-logo.webp";

export function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if verified in localStorage
    const isVerified = localStorage.getItem("ivapeo-age-verified");
    if (!isVerified) {
      setIsOpen(true);
      // Prevent scrolling
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("ivapeo-age-verified", "true");
    setIsExiting(true);
    
    // Allow scrolling again
    document.body.style.overflow = "";
    
    setTimeout(() => {
      setIsOpen(false);
    }, 500); // Match animation duration
  };

  const handleReject = () => {
    window.location.href = "https://google.com";
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className={`relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 transform ${isExiting ? 'scale-95 translate-y-4' : 'scale-100 translate-y-0'}`}>
        
        {/* Header Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-gray-900 to-gray-800 z-0 opacity-100">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>

        <div className="relative z-10 flex flex-col items-center pt-12 pb-8 px-8 text-center">
          
          {/* Logo & Icon */}
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-100">
               <ShieldCheck className="w-10 h-10 text-green-600" />
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">
            Verificación de Edad
          </h2>
          
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Para acceder a este sitio web debes ser mayor de edad según la legislación vigente en tu país.
          </p>

          <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-8 w-full flex items-start gap-3 text-left">
             <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
             <div className="text-xs text-orange-800">
               <strong>Aviso Legal:</strong> Los productos de vapeo pueden contener nicotina, una sustancia adictiva. Prohibida la venta a menores de 18 años.
             </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <Button 
              size="lg" 
              onClick={handleVerify}
              className="w-full bg-[#84CC16] hover:bg-[#65A30D] text-white font-bold uppercase tracking-widest h-12 text-sm shadow-lg shadow-green-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Tengo más de 18 años
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleReject}
              className="text-gray-400 hover:text-gray-600 text-xs font-medium"
            >
              Soy menor de edad (Salir)
            </Button>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 text-center">
           <p className="text-[10px] text-gray-400 font-medium">
             Al entrar aceptas nuestros Términos y Condiciones y Política de Privacidad.
           </p>
        </div>
      </div>
    </div>
  );
}
