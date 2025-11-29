import { Sparkles, ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function HeroWinback() {
  const userName = "Alejandro";
  const discountCode = "WELCOMEBACK15";
  
  // Countdown logic (mock 48h)
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#0a0a0a] text-white py-12 md:py-20 relative overflow-hidden border-b border-white/5">
      {/* Dramatic Background Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-black"></div>
      
      {/* Dynamic Smoke/Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>

      <div className="container-custom relative z-10 text-center">
        
        {/* Emotional Hook */}
        <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-2">
            ¡Te echamos de menos, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{userName}!</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium">
            Ha pasado un tiempo, y hemos guardado algo especial para ti.
          </p>
        </div>

        {/* The Economic Hook (Coupon Card) */}
        <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 mb-8 relative overflow-hidden shadow-2xl animate-in zoom-in duration-500 delay-200">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
           
           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                 <span className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-purple-500/30">
                    <Tag className="w-3 h-3" /> Cupón Personal
                 </span>
                 <h2 className="text-3xl font-black text-white mb-1">15% DTO. EXTRA</h2>
                 <p className="text-gray-400 text-sm">En todo el catálogo. Sin compra mínima.</p>
              </div>

              <div className="flex flex-col items-center">
                 <div className="text-xs text-gray-400 font-mono mb-2 uppercase tracking-widest">Caduca en:</div>
                 <div className="flex items-center gap-2 font-mono text-2xl font-bold text-white bg-black/30 px-4 py-2 rounded-lg border border-white/10">
                    <Clock className="w-5 h-5 text-purple-400 animate-pulse" />
                    <span>
                      {String(timeLeft.hours).padStart(2, '0')}:
                      {String(timeLeft.minutes).padStart(2, '0')}:
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                 </div>
              </div>
           </div>

           <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
              <Button size="lg" className="w-full md:w-auto bg-white text-black hover:bg-purple-50 hover:text-purple-900 font-black text-lg px-10 h-14 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all transform hover:-translate-y-1">
                 Usar mi 15% ahora <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
           </div>
        </div>

        <p className="text-xs text-gray-500 uppercase tracking-widest">
           Oferta exclusiva para tu cuenta • Válido para una sola compra
        </p>

      </div>
    </section>
  );
}
