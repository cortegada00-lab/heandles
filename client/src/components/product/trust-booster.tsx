import { Truck, ShieldCheck, MapPin } from "lucide-react";

export function TrustBooster() {
  return (
    <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 animate-in fade-in slide-in-from-bottom-2">
      <div className="flex flex-col items-center text-center gap-1">
        <div className="bg-green-50 p-1.5 rounded-full text-green-600">
           <Truck className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-bold text-gray-600 leading-tight">Envío 24h</span>
      </div>
      <div className="flex flex-col items-center text-center gap-1">
        <div className="bg-blue-50 p-1.5 rounded-full text-blue-600">
           <ShieldCheck className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-bold text-gray-600 leading-tight">Garantía Oficial</span>
      </div>
      <div className="flex flex-col items-center text-center gap-1">
        <div className="bg-purple-50 p-1.5 rounded-full text-purple-600">
           <MapPin className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-bold text-gray-600 leading-tight">8 Tiendas</span>
      </div>
    </div>
  );
}
