import { Truck, ShieldCheck, MapPin, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export function TrustMarquee() {
  return (
    <div className="bg-[#0f172a] py-3 overflow-hidden border-t border-white/10">
      <div className="marquee-container flex items-center whitespace-nowrap">
        {/* First set of items */}
        <div className="flex items-center gap-12 animate-marquee px-6">
          <Link href="/envios-y-devoluciones" className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium uppercase tracking-wider hover:text-white transition-colors cursor-pointer group">
            <Truck className="w-4 h-4 text-white" /> Envío 24*h <span className="text-[10px] lowercase opacity-70 group-hover:opacity-100">+info</span>
          </Link>
          <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-white" /> Garantía Oficial
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-white" /> 8 Tiendas Físicas
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium uppercase tracking-wider">
            <MessageCircle className="w-4 h-4 text-white" /> Asesoramiento Experto
          </div>
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-12 animate-marquee px-6" aria-hidden="true">
          <Link href="/envios-y-devoluciones" className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium uppercase tracking-wider hover:text-white transition-colors cursor-pointer group">
            <Truck className="w-4 h-4 text-white" /> Envío 24*h <span className="text-[10px] lowercase opacity-70 group-hover:opacity-100">+info</span>
          </Link>
          <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-white" /> Garantía Oficial
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-white" /> 8 Tiendas Físicas
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium uppercase tracking-wider">
            <MessageCircle className="w-4 h-4 text-white" /> Asesoramiento Experto
          </div>
        </div>
        
        {/* Triplicate set for safety on wide screens */}
        <div className="flex items-center gap-12 animate-marquee px-6" aria-hidden="true">
          <Link href="/envios-y-devoluciones" className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium uppercase tracking-wider hover:text-white transition-colors cursor-pointer group">
            <Truck className="w-4 h-4 text-white" /> Envío 24*h <span className="text-[10px] lowercase opacity-70 group-hover:opacity-100">+info</span>
          </Link>
          <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-white" /> Garantía Oficial
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-white" /> 8 Tiendas Físicas
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium uppercase tracking-wider">
            <MessageCircle className="w-4 h-4 text-white" /> Asesoramiento Experto
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
