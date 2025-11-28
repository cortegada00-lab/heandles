import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Store, MapPin, Navigation } from "lucide-react";
import { mockStores } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface StoreStockModalProps {
  trigger?: React.ReactNode;
}

export function StoreStockModal({ trigger }: StoreStockModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors group w-full justify-center md:justify-start mt-3">
            <Store className="w-5 h-5" />
            <span className="font-bold text-sm underline decoration-dotted group-hover:decoration-solid">
              ¿Lo necesitas HOY? Ver stock en tiendas
            </span>
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white p-0 gap-0 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <DialogHeader>
            <DialogTitle className="text-xl font-black text-gray-900 flex items-center gap-2">
              <Store className="w-6 h-6 text-blue-600" />
              Disponibilidad en Tiendas
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-500 mt-2">
            Consulta el stock en tiempo real en nuestras tiendas de Barcelona.
          </p>
          
          <Button variant="outline" size="sm" className="w-full mt-4 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 gap-2">
            <Navigation className="w-4 h-4" />
            Ordenar por mi ubicación actual
          </Button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2 bg-gray-50/50">
          <div className="space-y-2">
            {mockStores.map((store) => (
              <div 
                key={store.id} 
                className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between hover:border-blue-200 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{store.name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{store.address}</p>
                    <p className="text-[10px] font-bold text-blue-400 mt-1 flex items-center gap-1">
                      <Navigation className="w-3 h-3" /> A {store.distance}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end shrink-0">
                    {store.stockLevel === 'high' && (
                        <div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[10px] font-black uppercase tracking-wide">Disponible</span>
                        </div>
                    )}
                    {store.stockLevel === 'low' && (
                        <div className="flex items-center gap-1.5 text-yellow-700 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-100">
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <span className="text-[10px] font-black uppercase tracking-wide">Últimas uds.</span>
                        </div>
                    )}
                    {store.stockLevel === 'out' && (
                        <div className="flex items-center gap-1.5 text-red-600 bg-red-50 px-2 py-1 rounded-full border border-red-100">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span className="text-[10px] font-black uppercase tracking-wide">Agotado</span>
                        </div>
                    )}
                    
                    {store.stockLevel !== 'out' && (
                        <span className="text-[10px] text-gray-400 mt-1 font-medium">
                           Reservar ahora
                        </span>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
             <p className="text-[10px] text-gray-400">
                El stock puede variar ligeramente. Te recomendamos llamar a la tienda para confirmar.
             </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
