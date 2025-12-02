import { Link } from "wouter";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronRight, Package, Zap, Droplet, Flame, MapPin, Percent, Phone, ShieldCheck } from "lucide-react";
import ivapeoLogo from "@/assets/ivapeo-logo.webp";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-2 -ml-2 text-gray-800">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0 bg-white border-r border-gray-100">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-center bg-gray-50/50">
            <img src={ivapeoLogo} alt="iVapeo" className="h-8 object-contain" />
          </div>

          {/* Links Scroll Area */}
          <div className="flex-1 overflow-y-auto py-4 pb-24">
            <nav className="flex flex-col space-y-1 px-3">
              
              <div className="px-3 py-2 text-xs font-black text-gray-400 uppercase tracking-widest">Catálogo</div>

              <Link href="/novedades">
                <div className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-bold text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Zap className="w-4 h-4" />
                        </div>
                        <span>Novedades</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              </Link>

              <Link href="/kits">
                <div className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-bold text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                        </div>
                        <span>Vapers / Kits</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              </Link>

              <Link href="/eliquids">
                <div className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-bold text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                            <Droplet className="w-4 h-4" />
                        </div>
                        <span>eLiquids</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              </Link>

              <Link href="/disposables">
                <div className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-bold text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 4h-2V2h-6v2H7v18h10V4z"/><path d="M9 2v2"/><path d="M15 2v2"/><path d="M12 12h.01"/></svg>
                        </div>
                        <span>Desechables</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              </Link>

              <Link href="/coils">
                <div className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-bold text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <Flame className="w-4 h-4" />
                        </div>
                        <span>Resistencias</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              </Link>

              <div className="px-3 py-2 mt-2 text-xs font-black text-gray-400 uppercase tracking-widest">Marcas Top</div>
              
              <div className="grid grid-cols-2 gap-2 px-3 mb-2">
                 <div className="bg-gray-50 rounded border border-gray-100 p-2 text-center text-xs font-bold text-gray-600 hover:border-gray-300 cursor-pointer">VAPORESSO</div>
                 <div className="bg-gray-50 rounded border border-gray-100 p-2 text-center text-xs font-bold text-gray-600 hover:border-gray-300 cursor-pointer">OXVA</div>
                 <div className="bg-gray-50 rounded border border-gray-100 p-2 text-center text-xs font-bold text-gray-600 hover:border-gray-300 cursor-pointer">VOOPOO</div>
                 <div className="bg-gray-50 rounded border border-gray-100 p-2 text-center text-xs font-bold text-gray-600 hover:border-gray-300 cursor-pointer">ELFBAR</div>
              </div>

              <div className="my-2 border-t border-gray-100"></div>
              
              <Link href="/ofertas">
                <div className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-bold text-red-600 hover:bg-red-50 active:bg-red-100 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                            <Percent className="w-4 h-4" />
                        </div>
                        <span>OFERTAS</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-red-300" />
                </div>
              </Link>

               <Link href="/tiendas">
                <div className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-bold text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-gray-800 group-hover:text-white transition-colors">
                            <MapPin className="w-4 h-4" />
                        </div>
                        <span>Nuestras Tiendas</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              </Link>

              <Link href="/contacto">
                <div className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-bold text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <Phone className="w-4 h-4" />
                        </div>
                        <span>Contacto / Ayuda</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              </Link>

            </nav>
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-100">
             <Button className="w-full bg-gray-900 text-white font-bold mb-2">
                Mi Cuenta
             </Button>
             <div className="flex justify-center items-center gap-2 text-[10px] text-gray-400 uppercase font-bold">
                <ShieldCheck className="w-3 h-3" /> Compra Segura 100%
             </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
