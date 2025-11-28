import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, User, Menu, X, Phone, Truck, ShieldCheck, Zap, Sparkles, Gift, ChevronRight, MapPin, ChevronDown, MessageCircle, LogOut, Heart, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SearchOverlay } from "@/components/search/search-overlay";
import ivapeoLogo from "@/assets/ivapeo-logo.webp";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { useCart } from "@/lib/cart-context";
import { useAuth } from "@/lib/auth-context";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount } = useCart();
  const { user, status, logout } = useAuth();
  const [, setLocation] = useLocation();

  return (
    <div className="w-full bg-white flex flex-col font-sans">
      <SearchOverlay open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* USP Top Bar - Professional Dark */}
      <div className="bg-[#1a1a1a] text-gray-300 py-2 text-[11px] md:text-xs font-medium tracking-wide border-b border-white/10">
        <div className="container-custom flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white"><Truck className="w-3.5 h-3.5 text-primary" /> Envío Gratis +28€</span>
            <span className="flex items-center gap-1.5 hidden sm:flex"><ShieldCheck className="w-3.5 h-3.5 text-green-400" /> Garantía de Calidad</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/tiendas">
              <div className="flex items-center gap-2 cursor-pointer group">
                <div className="bg-primary/20 p-1 rounded-full group-hover:bg-primary/30 transition-colors animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.6)]">
                   <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-white group-hover:text-primary transition-colors flex items-center gap-1 font-medium">
                   Ven a nuestras tiendas <span className="text-primary font-bold hidden sm:inline"> y te asesoramos</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="py-4 md:py-6 bg-white relative z-50 sticky top-0 shadow-sm md:shadow-none">
        <div className="container-custom flex items-center justify-between gap-4 md:gap-8">
          
          {/* Mobile Menu - Nike Style */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="shrink-0">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-l border-gray-100 bg-white overflow-y-auto">
              <SheetHeader className="p-6 flex flex-row justify-between items-center border-b border-transparent">
                 {/* Empty title for accessibility or hidden */}
                 <SheetTitle className="hidden">Menú</SheetTitle>
                 <div className="w-8"></div> {/* Spacer for balance if needed, or just rely on Close button */}
              </SheetHeader>
              
              <div className="px-8 pb-8 flex flex-col h-full">
                {/* Main Categories - Big & Bold */}
                <div className="space-y-6 mb-12">
                  <Link href="/ofertas" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between text-2xl font-medium text-red-600">
                    Black Friday Ofertas
                    <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-red-600 transition-colors" />
                  </Link>
                  <Link href="/novedades" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between text-2xl font-medium text-gray-900">
                    Novedades
                    <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors" />
                  </Link>
                  <Link href="/eliquids" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between text-2xl font-medium text-gray-900">
                    E-Liquids
                    <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors" />
                  </Link>
                  <Link href="/disposables" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between text-2xl font-medium text-gray-900">
                    Desechables
                    <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors" />
                  </Link>
                  <Link href="/kits" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between text-2xl font-medium text-gray-900">
                    Vape Kits
                    <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors" />
                  </Link>
                  <Link href="/coils" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between text-2xl font-medium text-gray-900">
                    Resistencias
                    <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors" />
                  </Link>
                </div>

                {/* Secondary / Brands Section */}
                <div className="space-y-4 mb-12 pl-1">
                   <div className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" /> Marcas Top
                   </div>
                   <Link href="/vaporesso" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-gray-500 hover:text-black transition-colors">Vaporesso</Link>
                   <Link href="/voopoo" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-gray-500 hover:text-black transition-colors">Voopoo</Link>
                   <Link href="/elfbar" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-gray-500 hover:text-black transition-colors">ElfBar</Link>
                   <Link href="/tiendas" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-gray-500 hover:text-black transition-colors mt-6 flex items-center gap-2">
                      <MapPin className="w-5 h-5" /> Tiendas Físicas
                   </Link>
                </div>

                {/* Contact & Auth Section - No Club/Points */}
                <div className="mt-auto pt-8 border-t border-gray-100">
                   <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-between text-lg font-medium text-gray-600 hover:text-black mb-8">
                      <span className="flex items-center gap-2"><Phone className="w-5 h-5" /> Contacto y Ayuda</span>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" />
                   </Link>

                   <p className="text-gray-500 text-base leading-relaxed mb-6">
                      Regístrate para gestionar tus pedidos y direcciones de envío fácilmente.
                   </p>
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
                </div>

              </div>
            </SheetContent>
          </Sheet>

          {/* Logo - Centered on mobile if needed, but usually left aligned is fine */}
          <Link href="/" className="shrink-0 mr-auto lg:mr-0 flex flex-col">
            <img 
              src={ivapeoLogo} 
              alt="IVAPEO" 
              className="h-8 md:h-12 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity block"
            />
            <span className="text-[10px] text-gray-500 font-medium -mt-1 hidden md:block">Tienda de cigarrillos electrónicos iVapeo</span>
          </Link>

          {/* Smart Search - Desktop: Centered & Wide. Mobile: Icon Trigger */}
          <div className="hidden lg:block flex-1 max-w-3xl mx-4">
             <div 
                onClick={() => setIsSearchOpen(true)}
                className="relative flex items-center w-full h-12 rounded-full border-2 border-primary/10 bg-gray-50 hover:bg-white hover:border-primary transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md group"
             >
                 {/* Search Icon */}
                 <div className="pl-4 pr-3 text-gray-400 group-hover:text-primary transition-colors">
                    <Search className="w-5 h-5" />
                 </div>

                 {/* Text Input Simulation */}
                 <div className="flex-1 flex items-center justify-between text-sm text-gray-500">
                    <span className="opacity-70">¿Qué estás buscando hoy?</span>
                    
                    {/* Desktop Shortcut Hint */}
                    <div className="hidden md:flex items-center gap-2 pr-2">
                       <kbd className="pointer-events-none inline-flex h-6 select-none items-center gap-1 rounded border bg-gray-100 px-2 font-mono text-[10px] font-medium text-gray-500">
                        <span className="text-xs">⌘</span>K
                      </kbd>
                    </div>
                 </div>

                 {/* Search Button - Clean & Professional */}
                 <div className="p-1">
                    <Button size="sm" className="rounded-full h-9 px-6 bg-[#1a1a1a] hover:bg-black text-white font-medium shadow-sm transition-all duration-300 hover:shadow-md">
                       Buscar
                    </Button>
                 </div>
              </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            {/* Mobile Search Trigger */}
            <div className="lg:hidden">
               <Button variant="ghost" size="icon" className="text-gray-700" onClick={() => setIsSearchOpen(true)}>
                 <Search className="h-6 w-6" />
               </Button>
            </div>

            {status === "logged_in" && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex flex-col items-center justify-center cursor-pointer group outline-none">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mb-0.5">
                      {user.name.charAt(0).toUpperCase()}
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
      </header>

      {/* Navigation Bar - Professional Corporate Navy (Slate 900) */}
      <nav className="hidden lg:block bg-[#0f172a] sticky top-0 z-40 shadow-md border-t border-white/5 font-sans">
        <div className="container-custom relative">
          <ul className="flex items-center justify-center gap-0 text-sm font-medium text-slate-200 h-12">
            
            <li className="h-full flex items-center">
                <Link href="/novedades" className="h-full flex items-center px-4 hover:bg-white/10 transition-colors uppercase tracking-wide text-[13px] font-bold text-sky-400 hover:text-sky-300 border-b-2 border-transparent hover:border-sky-400">Novedades</Link>
            </li>

            {/* VAPER */}
            <li className="group h-full flex items-center">
                <Link href="/kits" className="h-full flex items-center px-4 gap-1 hover:bg-white/10 hover:text-white transition-colors uppercase tracking-wide text-[13px] cursor-pointer font-bold border-b-2 border-transparent hover:border-white">
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
                <Link href="/eliquids" className="h-full flex items-center px-4 gap-1 hover:bg-white/10 hover:text-white transition-colors uppercase tracking-wide text-[13px] cursor-pointer font-bold border-b-2 border-transparent hover:border-white">
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
                <Link href="/atomizadores" className="h-full flex items-center px-4 hover:bg-white/10 hover:text-white transition-colors uppercase tracking-wide text-[13px] font-bold border-b-2 border-transparent hover:border-white">Atomizadores</Link>
            </li>
            <li className="h-full flex items-center">
                <Link href="/resistencias" className="h-full flex items-center px-4 hover:bg-white/10 hover:text-white transition-colors uppercase tracking-wide text-[13px] font-bold border-b-2 border-transparent hover:border-white">Resistencias</Link>
            </li>
            <li className="h-full flex items-center">
                <Link href="/alquimia" className="h-full flex items-center px-4 hover:bg-white/10 hover:text-white transition-colors uppercase tracking-wide text-[13px] font-bold border-b-2 border-transparent hover:border-white">Alquimia DIY</Link>
            </li>
            <li className="h-full flex items-center">
                <Link href="/ofertas" className="h-full flex items-center px-4 hover:bg-white/10 transition-colors uppercase tracking-wide text-[13px] font-bold text-red-500 hover:text-red-400 border-b-2 border-transparent hover:border-red-500 gap-1.5">
                   <Zap className="w-3.5 h-3.5" /> Ofertas
                </Link>
            </li>
             <li className="h-full flex items-center">
                <Link href="/blogs" className="h-full flex items-center px-4 hover:bg-white/10 hover:text-white transition-colors uppercase tracking-wide text-[13px] font-bold border-b-2 border-transparent hover:border-white">Blogs</Link>
            </li>
            <li className="group h-full flex items-center relative">
                <Link href="/ayuda" className="h-full flex items-center px-4 hover:bg-white/10 hover:text-white transition-colors uppercase tracking-wide text-[13px] gap-1 font-bold border-b-2 border-transparent hover:border-white">
                    Ayuda <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                </Link>
                <div className="absolute top-full right-0 w-[550px] bg-white text-gray-800 shadow-2xl border-t-4 border-[#0f172a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top z-50 rounded-b-sm overflow-hidden">
                    <div className="grid grid-cols-2">
                        {/* Left Column: Contact Info */}
                        <div className="bg-gray-50 p-6 border-r border-gray-100">
                            <h4 className="font-bold text-[#0f172a] text-xs uppercase tracking-wide mb-6 flex items-center gap-2">
                                <Phone className="w-4 h-4 text-gray-500" /> Centro de Soporte
                            </h4>
                            
                            <div className="space-y-6">
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Llámanos</p>
                                    <a href="tel:+34935167167" className="text-xl font-bold text-[#0f172a] hover:text-[#ea580c] transition-colors block mb-1">+34 935 167 167</a>
                                    <p className="text-xs text-gray-500">Lunes a Viernes</p>
                                </div>

                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Horario Atención</p>
                                    <p className="text-sm font-medium text-gray-700">10:00 - 15:00</p>
                                    <p className="text-sm font-medium text-gray-700">16:30 - 19:00</p>
                                </div>

                                <div className="pt-4 border-t border-gray-200 space-y-2">
                                    <Link href="/contacto" className="inline-flex items-center justify-center w-full h-9 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 text-xs font-bold uppercase tracking-wide rounded transition-all shadow-sm">
                                        Abrir un Ticket
                                    </Link>
                                    <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full h-9 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wide rounded transition-all shadow-sm gap-2">
                                        <MessageCircle className="w-4 h-4" /> WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Resources */}
                        <div className="p-6 bg-white">
                            <h4 className="font-bold text-[#0f172a] text-xs uppercase tracking-wide mb-6 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-gray-500" /> Recursos
                            </h4>

                            <ul className="space-y-4">
                                <li>
                                    <Link href="/faq" className="group/item flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition-all -mx-2">
                                        <div className="mt-0.5 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-100 transition-colors">
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-sm text-gray-900 group-hover/item:text-blue-600 transition-colors">Preguntas Frecuentes</h5>
                                            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Resolvemos tus dudas sobre envíos y pagos</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guia-inicio" className="group/item flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition-all -mx-2">
                                        <div className="mt-0.5 w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover/item:bg-orange-100 transition-colors">
                                            <Zap className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-sm text-gray-900 group-hover/item:text-orange-600 transition-colors">¿Nuevo en el vapeo?</h5>
                                            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Guía completa para iniciarte en el vapeo</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/garantia" className="group/item flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition-all -mx-2">
                                        <div className="mt-0.5 w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 group-hover/item:bg-green-100 transition-colors">
                                            <ShieldCheck className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-sm text-gray-900 group-hover/item:text-green-600 transition-colors">Garantía y Devoluciones</h5>
                                            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Condiciones de garantía y devoluciones</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
