import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Sparkles, ShieldCheck, Search, Flame, Droplets, Package, BookOpen, HelpCircle, Smartphone, Cherry, Wind, Rocket } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/High_tech_vape_mod_kit_444d8fd5.png";

export function HeroGridGuest() {
  return (
    <div className="bg-[#F8F9FA] py-4 md:py-6">
      <div className="container-custom">
        {/* Greeting and Top Links - Compact & Modern */}
        <div className="flex flex-row items-center justify-between py-3 mb-4 border-b border-gray-100">
          <div className="flex items-center gap-3 md:gap-4">
            <h2 className="text-lg font-black tracking-tighter uppercase text-[#0a1a2a]">Bienvenido</h2>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <p className="text-xs md:text-sm font-medium text-gray-500 flex items-center gap-2">
              Tienda nº1 <span className="text-gray-300 text-[10px]">•</span> Envíos 24h
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider bg-white border border-gray-100 text-gray-600 px-2 py-1 rounded-md shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-green-500" /> Compra Segura
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-6">
          
          {/* TILE 1: Most Searched (Left Column) - Mobile: Horizontal Scroll, Desktop: Vertical List */}
          <Card className="md:col-span-1 border-none shadow-sm rounded-xl overflow-hidden bg-white">
            <CardContent className="p-4 md:p-6 h-full flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3 md:mb-6">
                <Search className="w-4 h-4 md:w-5 md:h-5 text-[#0ea5e9]" />
                <h3 className="font-black text-base md:text-lg text-[#0a1a2a] leading-tight">Lo más<br className="hidden md:block"/> buscado</h3>
              </div>
              
              {/* Mobile: Horizontal Row / Desktop: Vertical Stack */}
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide snap-x -mx-4 px-4 md:mx-0 md:px-0">
                {/* Item 1 */}
                <Link href="/kits" className="shrink-0 snap-start">
                  <div className="flex items-center gap-3 p-2 md:p-3 rounded-lg bg-gray-50 md:bg-transparent hover:bg-blue-50 transition-colors cursor-pointer group min-w-[140px] md:min-w-0 border md:border-0 border-gray-100">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 text-blue-600 group-hover:scale-110 transition-transform">
                      <Rocket className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs md:text-base text-[#0a1a2a] group-hover:text-[#0ea5e9] transition-colors break-words whitespace-normal">Kits de<br className="md:hidden"/> Inicio</p>
                    </div>
                    <span className="text-gray-300 text-lg hidden md:block group-hover:translate-x-1 transition-transform">›</span>
                  </div>
                </Link>

                {/* Item 2 */}
                <Link href="/eliquids" className="shrink-0 snap-start">
                  <div className="flex items-center gap-3 p-2 md:p-3 rounded-lg bg-gray-50 md:bg-transparent hover:bg-cyan-50 transition-colors cursor-pointer group min-w-[140px] md:min-w-0 border md:border-0 border-gray-100">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0 text-cyan-600 group-hover:scale-110 transition-transform">
                      <Droplets className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs md:text-base text-[#0a1a2a] group-hover:text-[#0ea5e9] transition-colors break-words whitespace-normal">Sales de<br className="md:hidden"/> Nicotina</p>
                    </div>
                    <span className="text-gray-300 text-lg hidden md:block group-hover:translate-x-1 transition-transform">›</span>
                  </div>
                </Link>

                {/* Item 3 */}
                <Link href="/disposables" className="shrink-0 snap-start">
                  <div className="flex items-center gap-3 p-2 md:p-3 rounded-lg bg-gray-50 md:bg-transparent hover:bg-purple-50 transition-colors cursor-pointer group min-w-[140px] md:min-w-0 border md:border-0 border-gray-100">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 text-purple-600 group-hover:scale-110 transition-transform">
                      <Wind className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs md:text-base text-[#0a1a2a] group-hover:text-[#0ea5e9] transition-colors break-words whitespace-normal">Desechables</p>
                    </div>
                    <span className="text-gray-300 text-lg hidden md:block group-hover:translate-x-1 transition-transform">›</span>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* TILE 2: Top Sales Promo (Middle Column) - Corporate Blue Card */}
          <Card className="md:col-span-2 border-none shadow-sm rounded-xl overflow-hidden min-h-[300px] md:h-full relative bg-gradient-to-br from-[#0061ff] to-[#0033aa] text-white">
            <CardContent className="p-6 md:p-8 h-full flex flex-col relative z-10">
               <div className="mb-4 md:mb-6 relative z-20">
                 <Badge className="bg-[#FFD600] text-black hover:bg-[#E6C000] border-0 font-black px-2 md:px-3 py-1 rounded text-[10px] md:text-xs uppercase tracking-wider mb-2 md:mb-4">
                   TOP VENTAS Nº1
                 </Badge>
                 <h3 className="text-2xl md:text-4xl font-heading font-black leading-tight mb-2 md:mb-4 max-w-[60%] md:max-w-none">
                   Empieza a vapear<br/>hoy.
                 </h3>
                 <p className="text-blue-100 text-xs md:text-sm leading-relaxed max-w-[180px] md:max-w-xs">
                   El Kit Vaporesso es el favorito de 20.000 clientes para dejar de fumar.
                 </p>
               </div>

               <div className="mt-auto relative z-20">
                 <div className="flex items-end gap-2 md:gap-3 mb-4 md:mb-6">
                   <span className="text-3xl md:text-4xl font-black text-white">24.95€</span>
                   <span className="text-gray-400 line-through text-sm md:text-lg font-medium mb-1 decoration-2">35.00€</span>
                 </div>
                 
                 <Link href="/starter-pack">
                  <Button className="bg-[#FFD600] hover:bg-[#E6C000] text-black font-black h-10 md:h-12 px-6 md:px-8 rounded-full shadow-lg shadow-yellow-500/20 w-auto text-sm md:text-base">
                    Ver Pack de Inicio
                  </Button>
                 </Link>
               </div>

               {/* Product Image Positioned Absolutely */}
               <div className="absolute bottom-0 right-0 w-3/5 md:w-1/2 h-4/5 md:h-3/4 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-[#0033aa] via-transparent to-transparent z-10"></div>
                  <div className="w-full h-full bg-white rounded-tl-3xl flex items-center justify-center shadow-2xl transform translate-y-4 translate-x-4">
                    <img 
                      src={heroImage} 
                      alt="Vaporesso Kit" 
                      className="h-[90%] w-auto object-contain drop-shadow-xl transform -rotate-3" 
                    />
                  </div>
               </div>
            </CardContent>
          </Card>

          {/* TILE 3: Flash Offer (Right Column) - Dark Card (Same as logged in) */}
          <Card className="md:col-span-1 border-none shadow-lg rounded-xl overflow-hidden h-auto md:h-full bg-[#0F172A] text-white relative">
            <CardContent className="p-0 h-full flex flex-row md:flex-col relative z-10 items-center md:items-stretch">
              {/* Mobile: Left Side (Timer + Text) */}
              <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-1 text-yellow-400 font-black text-sm md:text-xl italic tracking-tighter mb-1">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                    OFERTA FLASH
                  </div>
                  <div className="bg-white/10 px-2 py-1 rounded text-xs font-mono text-white border border-white/10 backdrop-blur-sm w-fit mb-2">
                    04:23:15
                  </div>
                  <h4 className="font-bold text-sm md:text-lg leading-tight mb-1">Sales Mango 10ml</h4>
                   <div className="flex items-center gap-2">
                     <span className="text-gray-500 line-through text-xs font-medium">5,90€</span>
                     <span className="text-xl md:text-3xl font-black text-white">2,95€</span>
                   </div>
                   <Button className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-black font-black h-8 md:h-12 text-xs md:text-lg rounded md:rounded-lg border-0 uppercase tracking-wide shadow-[0_0_20px_rgba(250,204,21,0.3)] w-full md:w-full">
                    ¡LO QUIERO!
                  </Button>
              </div>

              {/* Mobile: Right Side (Image) */}
              <div className="w-1/3 md:w-full md:flex-1 p-2 md:py-4 flex items-center justify-center bg-white/5 md:bg-transparent">
                 <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-400 rounded-sm flex items-center justify-center shadow-inner">
                    <span className="text-black font-medium text-[10px] md:text-xs">Mango Salt</span>
                 </div>
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

        {/* NEW: Beginners Guide Block (Amazon style) */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-lg p-4 md:p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb]"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 relative z-10">
            {/* Text & CTA */}
            <div className="flex-1 md:max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-blue-100 text-blue-600 p-1.5 rounded-full">
                   <HelpCircle className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-xs md:text-sm font-bold text-blue-600 uppercase tracking-wider">Centro de Ayuda</span>
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-black text-gray-900 leading-tight mb-2">
                ¿Es tu primera vez vapeando?
              </h3>
              <p className="text-gray-500 text-sm md:text-base mb-4">
                No te preocupes, es normal tener dudas. Hemos preparado una guía rápida de 3 minutos para ayudarte a elegir.
              </p>
              <Link href="/guias">
                <Button className="w-full md:w-auto bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold rounded-full h-10 md:h-12 px-6">
                  Ver Guía Rápida <BookOpen className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Quick Steps / Cards */}
            <div className="flex-1 flex sm:grid sm:grid-cols-3 gap-3 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide snap-x">
              
              <Link href="/guias#inicio" className="min-w-[140px] sm:min-w-0 shrink-0 snap-center first:pl-0 last:pr-4">
                <div className="bg-gray-50 hover:bg-blue-50 transition-colors p-3 md:p-4 rounded-lg border border-gray-100 cursor-pointer group h-full flex flex-col">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform text-blue-600 shrink-0">
                    <Smartphone className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <h4 className="font-bold text-xs md:text-sm text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Primer Vaper</h4>
                  <p className="text-[10px] md:text-xs text-gray-500 leading-snug break-words whitespace-normal">Qué dispositivo comprar para dejar de fumar.</p>
                </div>
              </Link>

              <Link href="/guias#nicotina" className="min-w-[140px] sm:min-w-0 shrink-0 snap-center last:pr-4">
                <div className="bg-gray-50 hover:bg-purple-50 transition-colors p-3 md:p-4 rounded-lg border border-gray-100 cursor-pointer group h-full flex flex-col">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform text-purple-600 shrink-0">
                    <Droplets className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <h4 className="font-bold text-xs md:text-sm text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">Nivel de Nicotina</h4>
                  <p className="text-[10px] md:text-xs text-gray-500 leading-snug break-words whitespace-normal">Calcula los mg exactos según lo que fumas.</p>
                </div>
              </Link>

              <Link href="/guias#sabores" className="min-w-[140px] sm:min-w-0 shrink-0 snap-center last:pr-4">
                <div className="bg-gray-50 hover:bg-orange-50 transition-colors p-3 md:p-4 rounded-lg border border-gray-100 cursor-pointer group h-full flex flex-col">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform text-orange-600 shrink-0">
                     <Cherry className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <h4 className="font-bold text-xs md:text-sm text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">Elegir Sabor</h4>
                  <p className="text-[10px] md:text-xs text-gray-500 leading-snug break-words whitespace-normal">Tabacos, frutales o postres. ¿Cuál es para ti?</p>
                </div>
              </Link>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
