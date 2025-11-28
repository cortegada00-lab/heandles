import { Link, useLocation } from "wouter";
import { Home, LayoutGrid, Tag, User, Menu, X, ChevronRight, Sparkles, MapPin, Phone, LogOut } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ivapeoLogo from "@/assets/ivapeo-logo.webp";
import { useAuth } from "@/lib/auth-context";

export function BottomNav() {
  const [location, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, status, logout } = useAuth();

  const isActive = (path: string) => location === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 lg:hidden">
      <div className="grid grid-cols-4 h-[60px] pb-[env(safe-area-inset-bottom)]">
        
        {/* Home */}
        <Link href="/" className={`flex flex-col items-center justify-center w-full h-full cursor-pointer transition-colors ${isActive('/') ? 'text-primary' : 'text-gray-500'}`}>
            <Home className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium">Inicio</span>
        </Link>

        {/* Categories / Menu Trigger */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
                <div className={`flex flex-col items-center justify-center w-full h-full cursor-pointer transition-colors ${isMenuOpen ? 'text-primary' : 'text-gray-500'}`}>
                    <LayoutGrid className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-medium">Categorías</span>
                </div>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[85vh] rounded-t-[20px] p-0 border-t border-gray-100 bg-white overflow-y-auto">
              <SheetHeader className="p-6 flex flex-row justify-between items-center border-b border-transparent sticky top-0 bg-white z-10">
                 <SheetTitle className="text-lg font-bold">Menú</SheetTitle>
                 {/* Close button is automatic in SheetContent usually, but we can add explicit one if needed */}
              </SheetHeader>
              
              <div className="px-6 pb-24 flex flex-col h-full overflow-y-auto">
                {/* Main Categories - Big & Bold */}
                <div className="space-y-6 mb-10">
                  <Link href="/ofertas" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between text-xl font-medium text-red-600">
                    Black Friday Ofertas
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-red-600 transition-colors" />
                  </Link>
                  <Link href="/novedades" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between text-xl font-medium text-gray-900">
                    Novedades
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" />
                  </Link>
                  <Link href="/eliquids" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between text-xl font-medium text-gray-900">
                    E-Liquids
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" />
                  </Link>
                  <Link href="/disposables" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between text-xl font-medium text-gray-900">
                    Desechables
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" />
                  </Link>
                  <Link href="/kits" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between text-xl font-medium text-gray-900">
                    Vape Kits
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" />
                  </Link>
                  <Link href="/coils" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between text-xl font-medium text-gray-900">
                    Resistencias
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" />
                  </Link>
                </div>

                {/* Secondary / Brands Section */}
                <div className="space-y-3 mb-10 pl-1">
                   <div className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> Marcas Top
                   </div>
                   <Link href="/vaporesso" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-gray-500 hover:text-black transition-colors">Vaporesso</Link>
                   <Link href="/voopoo" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-gray-500 hover:text-black transition-colors">Voopoo</Link>
                   <Link href="/elfbar" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-gray-500 hover:text-black transition-colors">ElfBar</Link>
                   <Link href="/tiendas" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-gray-500 hover:text-black transition-colors mt-4 flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Tiendas Físicas
                   </Link>
                </div>

                {/* Contact & Auth Section */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                   <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between text-base font-medium text-gray-600 hover:text-black mb-6">
                      <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> Contacto y Ayuda</span>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
                   </Link>

                   {status === "logged_in" && user ? (
                       <Button onClick={() => { logout(); setIsMenuOpen(false); }} variant="outline" className="w-full rounded-full h-12 border-red-100 text-red-600 font-bold text-base hover:bg-red-50">
                           <LogOut className="w-4 h-4 mr-2" /> Cerrar Sesión
                       </Button>
                   ) : (
                       <div className="flex gap-3">
                          <Link href="/register" onClick={() => setIsMenuOpen(false)} className="flex-1">
                            <Button className="w-full rounded-full h-12 bg-black hover:bg-gray-800 text-white font-bold text-base">
                               Registrarse
                            </Button>
                          </Link>
                          <Link href="/login" onClick={() => setIsMenuOpen(false)} className="flex-1">
                             <Button variant="outline" className="w-full rounded-full h-12 border-gray-300 text-black font-bold text-base hover:bg-gray-50">
                               Iniciar sesión
                             </Button>
                          </Link>
                       </div>
                   )}
                </div>

              </div>
            </SheetContent>
        </Sheet>

        {/* Offers */}
        <Link href="/ofertas" className={`flex flex-col items-center justify-center w-full h-full cursor-pointer transition-colors ${isActive('/ofertas') ? 'text-red-600' : 'text-gray-500'}`}>
            <Tag className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium">Ofertas</span>
        </Link>

        {/* Account */}
        <Link href={user ? "/account" : "/login"} className={`flex flex-col items-center justify-center w-full h-full cursor-pointer transition-colors ${isActive('/account') || isActive('/login') ? 'text-primary' : 'text-gray-500'}`}>
            <User className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium">Mi Cuenta</span>
        </Link>
        
      </div>
    </div>
  );
}
