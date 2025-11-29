import { MapPin, Package, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function HeroDashboard() {
  // Mock state for order
  const hasActiveOrder = true; 
  const userName = "Alejandro";

  return (
    <section className="bg-[#0a0a0a] text-white py-8 md:py-12 relative overflow-hidden border-b border-white/5">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          {/* Left: Greeting & Status */}
          <div className="space-y-4 max-w-2xl">
            <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2">
                Hola de nuevo, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{userName}.</span>
              </h1>
              
              {hasActiveOrder ? (
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3 w-fit backdrop-blur-sm">
                  <div className="bg-green-500/20 p-2 rounded-full animate-pulse">
                    <Package className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Tu pedido #123 está en camino 🚚</p>
                    <a href="#" className="text-xs text-gray-400 hover:text-white underline transition-colors">
                      Seguir envío
                    </a>
                  </div>
                </div>
              ) : (
                <p className="text-xl text-gray-400">Listo para tu próxima sesión.</p>
              )}
            </div>
          </div>

          {/* Right: Omnichannel CTA */}
          <div className="w-full md:w-auto">
             <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors group cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                   <div className="bg-blue-500/20 p-2 rounded-full group-hover:bg-blue-500/30 transition-colors">
                      <MapPin className="w-6 h-6 text-blue-400" />
                   </div>
                   <div>
                      <h3 className="font-bold text-white text-lg">¿Lo necesitas HOY?</h3>
                      <p className="text-xs text-gray-400">Ver stock en mis tiendas cercanas</p>
                   </div>
                </div>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-black font-bold text-xs transition-all">
                   Localizar Tienda <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
