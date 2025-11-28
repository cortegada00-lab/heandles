import { useState, useEffect } from "react";
import { Truck, ShieldCheck, MapPin, Flame } from "lucide-react";
import { Link } from "wouter";

const messages = [
  {
    icon: <Flame className="w-3.5 h-3.5 text-orange-500" />,
    text: "nº1 en España",
  },
  {
    icon: <MapPin className="w-3.5 h-3.5 text-primary" />,
    text: "8 Tiendas BCN",
  },
  {
    icon: <Truck className="w-3.5 h-3.5 text-green-400" />,
    text: "Envío Gratis >30€",
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
    <div className="bg-[#020617] text-gray-300 py-2 text-[11px] md:text-xs font-medium tracking-wide overflow-hidden relative h-[32px] border-b border-white/5">
      <div className="container-custom h-full flex items-center justify-center relative">
        {/* Mobile: Rotating Messages */}
        <div className="flex md:hidden items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-500 absolute w-full justify-center" key={currentIndex}>
          {messages[currentIndex].icon}
          <span className="text-white">{messages[currentIndex].text}</span>
        </div>

        {/* Desktop View - Static Grid */}
        <div className="hidden md:flex justify-between w-full px-4 max-w-4xl mx-auto">
             <div className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-orange-500" /> <span className="text-white">nº1 en España</span>
             </div>
             <Link href="/tiendas">
                <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> <span>8 Tiendas BCN</span>
                </div>
             </Link>
             <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-green-400" /> <span>Envío Gratis {'>'}30€</span>
             </div>
        </div>
      </div>
    </div>
  );
}
