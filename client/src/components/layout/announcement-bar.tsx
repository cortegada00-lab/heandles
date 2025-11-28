import { useState, useEffect } from "react";
import { Truck, ShieldCheck, MapPin } from "lucide-react";
import { Link } from "wouter";

const messages = [
  {
    icon: <Truck className="w-3.5 h-3.5" />,
    text: "Envío Gratis +28€",
  },
  {
    icon: <ShieldCheck className="w-3.5 h-3.5" />,
    text: "Garantía de Calidad",
  },
  {
    icon: <MapPin className="w-3.5 h-3.5" />,
    text: "8 Tiendas Físicas en BCN",
  },
];

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary text-white py-2 text-[11px] md:text-xs font-medium tracking-wide overflow-hidden relative h-[32px]">
      <div className="container-custom h-full flex items-center justify-center relative">
        {/* Desktop: Show all or grid? Mobile: Rotate. Let's stick to rotation for mobile as requested, maybe static for desktop? 
            Prompt says "FRANJA AZUL SUPERIOR ROTATORIA". Let's make it rotate on mobile, static grid on desktop if space permits?
            Actually, let's just make it rotate for now to be safe with "Rotatoria".
        */}
        <div className="flex md:hidden items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-500 absolute w-full justify-center" key={currentIndex}>
          {messages[currentIndex].icon}
          <span>{messages[currentIndex].text}</span>
        </div>

        {/* Desktop View - Static Grid */}
        <div className="hidden md:flex justify-between w-full px-4">
             <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5" /> <span>Envío Gratis +28€</span>
             </div>
             <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5" /> <span>Garantía de Calidad</span>
             </div>
             <Link href="/tiendas">
                <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <MapPin className="w-3.5 h-3.5" /> <span>8 Tiendas Físicas en Barcelona</span>
                </div>
             </Link>
        </div>
      </div>
    </div>
  );
}
