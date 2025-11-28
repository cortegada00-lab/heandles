import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, RotateCcw, Star, Zap, Sparkles } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/High_tech_vape_mod_kit_444d8fd5.png";

export function HeroGrid() {
  return (
    <div className="bg-[#F8F9FA] py-4 md:py-6">
      <div className="container-custom">
        {/* Greeting and Top Links */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-2">
          <h2 className="text-base md:text-xl text-gray-600 font-medium">
            Aquí tienes tu panel de vapeo personalizado.
          </h2>
          <div className="flex text-xs md:text-sm font-bold text-gray-400 gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-1">
            <span className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors whitespace-nowrap"><RotateCcw className="w-3 h-3 md:w-4 md:h-4" /> Tus pedidos</span>
            <span className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors whitespace-nowrap"><Star className="w-3 h-3 md:w-4 md:h-4" /> Tus listas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          
          {/* TILE 1: Buy Again (Recurrence) - Mobile: Compact horizontal scroll if needed or stacked */}
          <Card className="md:col-span-1 border-none shadow-sm rounded-xl overflow-hidden bg-white">
            <CardContent className="p-4 md:p-6 h-full flex flex-col relative">
              <div className="flex items-start gap-2 md:gap-3 mb-4 md:mb-6">
                <RotateCcw className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0 mt-1" />
                <h3 className="font-black text-lg md:text-xl text-gray-900 leading-tight">Comprar de<br className="hidden md:block"/> nuevo</h3>
              </div>
              
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
                {/* Item 1 */}
                <div className="flex items-center gap-3 group cursor-pointer min-w-[200px] md:min-w-0 bg-gray-50 md:bg-transparent p-2 md:p-0 rounded-lg md:rounded-none">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white md:bg-gray-50 rounded-md flex items-center justify-center shrink-0 border border-gray-100">
                    <img src="https://www.ivapeo.com/30926-home_default/nicokit-10ml-20mg-100pg-bombo.webp" alt="Nicokit" className="w-6 h-6 md:w-8 md:h-8 object-contain mix-blend-multiply" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-bold text-gray-900 truncate group-hover:text-primary">Nicokit 10ml 20mg</p>
                    <p className="text-[10px] md:text-xs text-gray-500">20 Comprados en 2024</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-3 group cursor-pointer min-w-[200px] md:min-w-0 bg-gray-50 md:bg-transparent p-2 md:p-0 rounded-lg md:rounded-none">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white md:bg-gray-50 rounded-md flex items-center justify-center shrink-0 border border-gray-100">
                    <img src="https://www.ivapeo.com/30936-home_default/aroma-don-juan-tabaco-honey-30ml-longfill-kings-crest.webp" alt="Aroma" className="w-6 h-6 md:w-8 md:h-8 object-contain mix-blend-multiply" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-bold text-gray-900 truncate group-hover:text-primary">Don Juan Reserve</p>
                    <p className="text-[10px] md:text-xs text-gray-500">12 Comprados en 2024</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-6">
                <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold border-0 rounded-lg text-xs md:text-sm h-9 md:h-10">
                  Ver mis habituales
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* TILE 2: Keep Shopping (History) - White Card with Red Accent */}
          <Card className="md:col-span-2 border-none shadow-sm rounded-xl overflow-hidden min-h-[300px] md:h-full relative bg-white">
            <CardContent className="p-6 md:p-8 h-full flex flex-col relative">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-2 text-orange-500 font-bold text-[10px] md:text-xs uppercase tracking-wider">
                   <Clock className="w-3 h-3 md:w-4 md:h-4" />
                   SEGUIR COMPRANDO
                 </div>
                 <Badge className="bg-red-100 text-red-600 hover:bg-red-200 border-0 font-bold px-2 md:px-3 py-1 rounded text-[10px] md:text-xs">
                   ¡Solo quedan 3!
                 </Badge>
               </div>

               <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center h-full">
                 <div className="flex-1 space-y-2 md:space-y-3 text-center md:text-left relative z-10">
                   <h3 className="text-2xl md:text-3xl font-heading font-black text-[#0a1a2a] leading-tight">
                     ¿Te lo sigues pensando?
                   </h3>
                   <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                     El <span className="font-bold text-gray-900">Vaporesso Xros 4</span> que miraste ayer ha bajado de precio.
                   </p>
                 </div>
                 
                 <div className="flex-1 flex justify-center relative w-full">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-50 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
                    <img 
                      src={heroImage} 
                      alt="Viewed Product" 
                      className="h-36 md:h-48 w-auto object-contain drop-shadow-lg" 
                    />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-gray-300 text-[10px] md:text-xs font-bold uppercase tracking-widest pointer-events-none opacity-50 whitespace-nowrap">
                       Vaporesso Xros 4
                    </div>
                 </div>
               </div>

               <div className="flex gap-2 md:gap-3 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100">
                 <Link href="/product" className="flex-1">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-10 md:h-12 text-sm md:text-base rounded-lg shadow-lg shadow-primary/20">
                    Añadir a la Cesta
                  </Button>
                 </Link>
                 <Link href="/product" className="flex-1">
                  <Button variant="outline" className="w-full border-gray-200 text-gray-600 font-bold h-10 md:h-12 text-sm md:text-base rounded-lg hover:bg-gray-50 hover:text-gray-900">
                    Ver Detalles
                  </Button>
                 </Link>
               </div>
            </CardContent>
          </Card>

          {/* TILE 3: Flash Offer (FOMO) - Dark Card */}
          <Card className="md:col-span-1 border-none shadow-lg rounded-xl overflow-hidden h-auto md:h-full bg-[#0F172A] text-white relative">
            <CardContent className="p-0 h-full flex flex-row md:flex-col relative z-10 items-center md:items-stretch">
              {/* Mobile: Left Side (Timer + Text) */}
              <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-1 text-yellow-400 font-black text-sm md:text-xl italic tracking-tighter mb-1">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                    OFERTA
                  </div>
                  <div className="bg-white/10 px-2 py-1 rounded text-xs font-mono text-white border border-white/10 backdrop-blur-sm w-fit mb-2">
                    04:23:15
                  </div>
                  
                  <h4 className="font-bold text-sm md:text-lg leading-tight mb-1 md:text-center md:px-4">Sales Mango 10ml</h4>
                  
                  <div className="flex items-center gap-2 md:justify-center mt-1 md:mt-2">
                    <span className="text-gray-500 line-through text-xs font-medium">5,90€</span>
                    <span className="text-xl md:text-3xl font-black text-white">2,95€</span>
                  </div>

                  <Button className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black h-8 md:h-12 text-xs md:text-lg rounded md:rounded-lg border-0 uppercase tracking-wide shadow-[0_0_20px_rgba(250,204,21,0.3)] hidden md:flex">
                    ¡LO QUIERO!
                  </Button>
              </div>

              {/* Mobile: Right Side (Image) */}
              <div className="w-1/3 md:w-full md:flex-1 p-2 md:py-4 flex items-center justify-center bg-white/5 md:bg-transparent relative">
                 <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-400 rounded-sm flex items-center justify-center mb-0 md:mb-4 shadow-inner">
                    {/* Placeholder for product image in screenshot style */}
                    <span className="text-black font-medium text-[10px] md:text-xs">Mango Salt</span>
                 </div>
                 
                 {/* Mobile Button Overlay */}
                 <Button size="sm" className="absolute bottom-2 right-2 md:hidden bg-yellow-400 text-black font-black text-[10px] h-7 px-2 rounded shadow-lg">
                    ¡LO QUIERO!
                 </Button>
              </div>
              
              {/* Floating Action Buttons (Right side from screenshot) - Desktop Only */}
              <div className="hidden md:flex absolute bottom-20 right-4 flex-col gap-2">
                 <div className="w-10 h-auto bg-white rounded-full flex flex-col items-center py-2 gap-4 shadow-lg text-gray-400">
                    <div className="w-1 h-1 bg-current rounded-full box-content border-[3px] border-transparent"></div>
                    <Sparkles className="w-4 h-4" />
                    <div className="w-3 h-3 border-l-2 border-b-2 border-current transform -rotate-45 mb-1"></div>
                 </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
