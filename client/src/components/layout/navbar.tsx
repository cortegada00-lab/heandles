import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, User, Phone, Truck, ShieldCheck, Sparkles, ChevronRight, MapPin, ChevronDown, LogOut, Heart, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SearchOverlay } from "@/components/search/search-overlay";
import ivapeoLogo from "@/assets/ivapeo-logo.webp";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { useCart } from "@/lib/cart-context";
import { useAuth } from "@/lib/auth-context";
import { AnnouncementBar } from "./announcement-bar";
import { CategoryPills } from "./category-pills";
import { MobileMenu } from "./mobile-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount } = useCart();
  const { user, status, logout } = useAuth();
  const [, setLocation] = useLocation();

  return (
    <div className="w-full bg-white flex flex-col font-sans">
      <SearchOverlay open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* USP Top Bar - Rotating Component */}
      <AnnouncementBar />

      {/* Main Header */}
      <header className="bg-white relative z-50 md:py-6 border-b border-gray-100 md:border-none">
        <div className="container-custom">
          
          {/* Mobile Layout (2 Rows) */}
          <div className="md:hidden flex flex-col pb-2">
             {/* Row 1: Menu, Logo, Icons */}
             <div className="flex items-center justify-between h-[50px]">
                <div className="flex items-center">
                   <MobileMenu />
                   <Link href="/" className="flex items-center ml-1">
                      <img 
                        src={ivapeoLogo} 
                        alt="IVAPEO" 
                        className="h-6 w-auto object-contain"
                      />
                   </Link>
                </div>

                <div className="flex items-center gap-2">
                  <Link href="/tiendas">
                     <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-700">
                        <MapPin className="w-4 h-4" />
                     </div>
                  </Link>

                  {status === "logged_in" && user ? (
                    <Link href="/account">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-700">
                         <User className="w-4 h-4" />
                      </div>
                    </Link>
                  ) : (
                    <Link href="/login">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-700">
                         <User className="w-4 h-4" />
                      </div>
                    </Link>
                  )}

                  <CartDrawer>
                    <div className="relative w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-700">
                      <ShoppingCart className="h-4 w-4" />
                      {itemCount > 0 && (
                        <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-primary text-white text-[9px] flex items-center justify-center font-bold ring-2 ring-white">
                          {itemCount}
                        </span>
                      )}
                    </div>
                  </CartDrawer>
                </div>
             </div>

             {/* Row 2: Full Width Search Bar */}
             <div className="mt-0.5">
                <div 
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center w-full h-9 rounded-lg bg-gray-100 border border-transparent px-3 active:scale-[0.99] transition-transform"
                >
                   <Search className="w-3.5 h-3.5 text-gray-500 mr-2" />
                   <span className="text-xs text-gray-500 font-medium">¿Qué estás buscando?</span>
                </div>
             </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between gap-8">
          
            {/* Desktop Logo */}
            <Link href="/" className="flex shrink-0 mr-auto lg:mr-0 flex-col">
              <img 
                src={ivapeoLogo} 
                alt="IVAPEO" 
                className="h-12 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity block"
              />
              <span className="text-[10px] text-gray-500 font-medium -mt-1 block">Tienda de cigarrillos electrónicos iVapeo</span>
            </Link>

            {/* Smart Search - Desktop: Centered & Wide */}
            <div className="flex-1 max-w-2xl mx-8">
               <div 
                  onClick={() => setIsSearchOpen(true)}
                  className="relative flex items-center w-full h-[52px] rounded-full border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 cursor-pointer group px-1.5"
               >
                   {/* Search Icon */}
                   <div className="pl-3 pr-3 text-slate-400 group-hover:text-slate-600 transition-colors">
                      <Search className="w-5 h-5" />
                   </div>

                   {/* Text Input Simulation */}
                   <div className="flex-1 flex items-center text-[15px] text-slate-500 font-medium">
                      <span className="opacity-70">¿Qué estás buscando hoy?</span>
                   </div>

                   {/* Search Button - Professional Pill */}
                   <div className="">
                      <Button size="sm" className="rounded-full h-[42px] px-8 bg-black hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all duration-300">
                         Buscar
                      </Button>
                   </div>
                </div>
            </div>

            {/* User Actions - Desktop */}
            <div className="flex items-center gap-4 shrink-0">
              {status === "logged_in" && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex flex-col items-center justify-center cursor-pointer group outline-none relative">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mb-0.5 relative">
                        {user.name.charAt(0).toUpperCase()}
                        {/* Online Status Dot */}
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 group-hover:text-primary max-w-[60px] truncate hidden sm:block">
                        {user.name}
                      </span>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setLocation("/account")}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Mi Cuenta</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLocation("/account")}>
                      <Package className="mr-2 h-4 w-4" />
                      <span>Mis Pedidos</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLocation("/favorites")}>
                      <Heart className="mr-2 h-4 w-4" />
                      <span>Favoritos</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Cerrar Sesión</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href="/login">
                  <div className="hidden sm:flex flex-col items-center justify-center cursor-pointer group">
                    <User className="h-6 w-6 text-gray-700 group-hover:text-primary transition-colors mb-1" />
                    <span className="text-[10px] font-bold text-gray-500 group-hover:text-primary uppercase tracking-wider">
                      {status === "dormant" ? "Acceder" : "Entrar"}
                    </span>
                  </div>
                </Link>
              )}
              
              {/* Cart Drawer Trigger */}
              <CartDrawer>
                <div className="flex flex-col items-center justify-center cursor-pointer group relative">
                  <div className="relative">
                    <ShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-primary transition-colors mb-1" />
                    {itemCount > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-primary text-white text-[10px] flex items-center justify-center font-bold ring-2 ring-white">
                        {itemCount}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 group-hover:text-primary uppercase tracking-wider hidden sm:block">Cesta</span>
                </div>
              </CartDrawer>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Category Pills */}
      <CategoryPills />

      {/* Navigation Bar - Professional Corporate Navy (Slate 900) */}
      <nav className="hidden md:block bg-[#0f172a] sticky top-0 z-40 shadow-md border-t border-white/5 font-sans">
        <div className="container-custom relative">
          <ul className="flex items-center justify-center gap-0 text-xs lg:text-sm font-medium text-slate-200 h-12">
            
            <li className="h-full flex items-center">
                <Link href="/novedades" className="h-full flex items-center px-2 lg:px-4 hover:bg-white/10 transition-colors uppercase tracking-wide text-[11px] lg:text-[13px] font-bold text-sky-400 hover:text-sky-300 border-b-2 border-transparent hover:border-sky-400">Novedades</Link>
            </li>

            {/* VAPER */}
            <li className="group h-full flex items-center">
                <Link href="/kits" className="h-full flex items-center px-2 lg:px-4 gap-1 hover:bg-white/10 hover:text-white transition-colors uppercase tracking-wide text-[11px] lg:text-[13px] cursor-pointer font-bold border-b-2 border-transparent hover:border-white">
                  Vaper <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                </Link>
                <div className="absolute top-full left-0 w-full bg-white text-gray-800 shadow-2xl border-t-4 border-[#0f172a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top z-50">
                   <div className="container-custom py-8">
                      <div className="grid grid-cols-12 gap-8">
                         <div className="col-span-3 border-r border-gray-100 pr-6">
                            <h4 className="font-bold text-[#0f172a] uppercase tracking-wide mb-4 text-xs flex items-center gap-2 border-b border-gray-100 pb-2">
                               Dispositivos
                            </h4>
                            <ul className="space-y-2.5">
                               {["Kits de Inicio", "Pods Recargables", "Mods Avanzados", "Vapers Desechables", "Sistemas AIO"].map(item => (
                                 <li key={item}><Link href="/kits" className="text-sm text-gray-600 hover:text-[#0f172a] hover:font-medium transition-all block">{item}</Link></li>
                               ))}
                            </ul>
                         </div>
                         <div className="col-span-3 border-r border-gray-100 pr-6">
                            <h4 className="font-bold text-[#0f172a] uppercase tracking-wide mb-4 text-xs flex items-center gap-2 border-b border-gray-100 pb-2">
                               Marcas Pro
                            </h4>
                            <ul className="space-y-2.5">
                               {["Vaporesso", "Voopoo", "Smok", "Uwell", "Geekvape", "Oxva"].map(item => (
                                 <li key={item}><Link href="/kits" className="text-sm text-gray-600 hover:text-[#0f172a] hover:font-medium transition-all block">{item}</Link></li>
                               ))}
                            </ul>
                         </div>
                         <div className="col-span-6">
                            <div className="h-full bg-slate-50 rounded-lg p-6 flex items-center justify-between relative overflow-hidden group/banner hover:shadow-md transition-all">
                                <div className="relative z-10 max-w-[60%]">
                                    <span className="bg-[#ea580c] text-white text-[10px] font-bold px-2 py-1 rounded mb-2 uppercase tracking-wide inline-block shadow-sm">Recomendado</span>
                                    <h3 className="font-bold text-xl text-gray-900 mb-2 leading-tight">¿Nuevo en el vapeo?</h3>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">Encuentra tu kit de inicio ideal con nuestra guía experto.</p>
                                    <Button size="sm" className="bg-[#0f172a] hover:bg-slate-800 text-white font-bold text-xs">Ver Kits de Inicio</Button>
                                </div>
                                <img src="/attached_assets/generated_images/High_tech_vape_mod_kit_444d8fd5.png" className="absolute right-0 top-0 h-full w-1/2 object-cover mix-blend-multiply opacity-90" />
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
            </li>

            {/* ELIQUIDS */}
            <li className="group h-full flex items-center">
                <Link href="/eliquids" className="h-full flex items-center px-2 lg:px-4 gap-1 hover:bg-white/10 hover:text-white transition-colors uppercase tracking-wide text-[11px] lg:text-[13px] cursor-pointer font-bold border-b-2 border-transparent hover:border-white">
                  eLiquids <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                </Link>
                <div className="absolute top-full left-0 w-full bg-white text-gray-800 shadow-2xl border-t-4 border-[#0f172a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top z-50">
                   <div className="container-custom py-8">
                      <div className="grid grid-cols-12 gap-8">
                         <div className="col-span-3 border-r border-gray-100 pr-6">
                            <h4 className="font-bold text-[#0f172a] uppercase tracking-wide mb-4 text-xs flex items-center gap-2 border-b border-gray-100 pb-2">
                               Por Sabor
                            </h4>
                            <ul className="space-y-2.5">
                               {["Frutales", "Tabacos", "Mentolados / Ice", "Postres y Dulces", "Bebidas"].map(item => (
                                 <li key={item}><Link href="/eliquids" className="text-sm text-gray-600 hover:text-[#0f172a] hover:font-medium transition-all block">{item}</Link></li>
                               ))}
                            </ul>
                         </div>
                         <div className="col-span-3 border-r border-gray-100 pr-6">
                            <h4 className="font-bold text-[#0f172a] uppercase tracking-wide mb-4 text-xs flex items-center gap-2 border-b border-gray-100 pb-2">
                               Por Tipo
                            </h4>
                            <ul className="space-y-2.5">
                               {["Sales de Nicotina", "E-Liquids 100ml", "E-Liquids 50ml", "Aromas", "Bases"].map(item => (
                                 <li key={item}><Link href="/eliquids" className="text-sm text-gray-600 hover:text-[#0f172a] hover:font-medium transition-all block">{item}</Link></li>
                               ))}
                            </ul>
                         </div>
                         <div className="col-span-6">
                             <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white border border-gray-100 rounded-lg p-4 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer group/promo">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="bg-[#ea580c] text-white text-[10px] font-bold px-2 py-1 rounded mb-2 uppercase tracking-wide inline-block shadow-sm">TOP VENTAS</span>
                                            <h4 className="font-bold text-gray-900 mt-2 text-sm group-hover/promo:text-[#0f172a] transition-colors">Don Juan Reserve</h4>
                                            <p className="text-xs text-gray-500 mt-1">El rey de los postres</p>
                                        </div>
                                        <img src="/attached_assets/generated_images/Premium_e-liquid_bottles_132f9a1b.png" className="w-14 h-14 object-contain mix-blend-multiply" />
                                    </div>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-lg p-4 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer group/promo">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="bg-[#ea580c] text-white text-[10px] font-bold px-2 py-1 rounded mb-2 uppercase tracking-wide inline-block shadow-sm">NOVEDAD</span>
                                            <h4 className="font-bold text-gray-900 mt-2 text-sm group-hover/promo:text-[#0f172a] transition-colors">Bombo Wailani</h4>
                                            <p className="text-xs text-gray-500 mt-1">Fresa y Kiwi Ice</p>
                                        </div>
                                        <img src="/attached_assets/generated_images/Premium_e-liquid_bottles_132f9a1b.png" className="w-14 h-14 object-contain mix-blend-multiply hue-rotate-90" />
                                    </div>
                                </div>
                             </div>
                         </div>
                      </div>
                   </div>
                </div>
            </li>

            <li className="h-full flex items-center">
                <Link href="/atomizadores" className="h-full flex items-center px-2 lg:px-4 hover:bg-white/10 hover:text-white transition-colors uppercase tracking-wide text-[11px] lg:text-[13px] font-bold border-b-2 border-transparent hover:border-white">Atomizadores</Link>
            </li>
            <li className="h-full flex items-center">
                <Link href="/coils" className="h-full flex items-center px-2 lg:px-4 hover:bg-white/10 hover:text-white transition-colors uppercase tracking-wide text-[11px] lg:text-[13px] font-bold border-b-2 border-transparent hover:border-white">Resistencias</Link>
            </li>
            <li className="h-full flex items-center">
                <Link href="/disposables" className="h-full flex items-center px-2 lg:px-4 hover:bg-white/10 hover:text-white transition-colors uppercase tracking-wide text-[11px] lg:text-[13px] font-bold border-b-2 border-transparent hover:border-white">Desechables</Link>
            </li>
            <li className="h-full flex items-center">
                <Link href="/ofertas" className="h-full flex items-center px-2 lg:px-4 hover:bg-white/10 text-red-500 hover:text-red-400 transition-colors uppercase tracking-wide text-[11px] lg:text-[13px] font-bold border-b-2 border-transparent hover:border-red-500">Ofertas</Link>
            </li>
            <li className="h-full flex items-center">
                <Link href="/tiendas" className="h-full flex items-center px-2 lg:px-4 hover:bg-white/10 hover:text-white transition-colors uppercase tracking-wide text-[11px] lg:text-[13px] font-bold border-b-2 border-transparent hover:border-white">Tiendas</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
