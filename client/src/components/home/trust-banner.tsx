import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function TrustBanner() {
  return (
    <div className="container-custom py-6">
      <div className="bg-[#0F172A] text-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        
        <div className="flex items-center gap-6 relative z-10">
          <div className="bg-white/10 p-4 rounded-full border border-white/10 shrink-0">
             <MapPin className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-1 text-center md:text-left">
             <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">
               Más que una web: <span className="text-primary">8 Tiendas Físicas</span> en Barcelona
             </h3>
             <p className="text-gray-300 text-sm md:text-base">
               Ven a probar los productos y recibe asesoramiento de expertos reales.
             </p>
          </div>
        </div>

        <div className="relative z-10">
          <Link href="/tiendas">
             <button className="bg-white text-[#0F172A] hover:bg-gray-100 font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-white/10 text-sm md:text-base">
                Encuentra tu tienda <ArrowRight className="w-4 h-4" />
             </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
