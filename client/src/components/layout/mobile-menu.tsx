import { Link } from "wouter";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronRight, Package, Zap, Droplet, Flame, MapPin, Percent } from "lucide-react";
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
          <div className="flex-1 overflow-y-auto py-4">
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
                        <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <Package className="w-4 h-4" />
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
                        <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                            <Package className="w-4 h-4" />
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

            </nav>
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-100">
             <Button className="w-full bg-gray-900 text-white font-bold">
                Mi Cuenta
             </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
