import { X, Search, History, Trash2, ChevronRight, Flame, RotateCw, Bot, ShoppingCart, CheckCircle2, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { mockCategoryProducts } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import ivapeoLogo from "@/assets/ivapeo-logo.webp";
import { getDeliveryDate } from "@/lib/shipping";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [, navigate] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [recentSearches, setRecentSearches] = useState([
    "Oxva",
    "Sales 20mg"
  ]);

  // Mock "Usuals" for logged in user
  const usuals = mockCategoryProducts.slice(0, 3);

  // Mock "Trending"
  const trendingProducts = mockCategoryProducts.slice(3, 7);

  // Mock "Solver" detection
  const showSolver = query.toLowerCase().includes("resis") || query.toLowerCase().includes("coil");

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSearch = (searchTerm: string) => {
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && query.trim()) {
      handleSearch(query);
    }
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col animate-in fade-in duration-200 font-sans">
      {/* Mobile Header / Search Bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-20">
        <div className="container-custom py-4">
          <div className="relative flex items-center gap-3">
             {/* Search Input Wrapper */}
             <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="¿Qué buscas hoy? (ej. sabor frutal, drag x...)"
                  className="w-full bg-gray-100 border-0 rounded-full text-base md:text-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all py-3 pl-12 pr-10 h-12"
                />
                {query && (
                  <button 
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
             </div>
             
             <Button 
               variant="ghost" 
               className="text-sm font-bold text-gray-500 hover:text-gray-900 px-2 md:px-4"
               onClick={onClose}
             >
               Cancelar
             </Button>
          </div>

          {/* State A: Chips (Only when NOT typing) */}
          {!query && (
            <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              {recentSearches.map(term => (
                <button 
                  key={term}
                  onClick={() => handleSearch(term)}
                  className="flex items-center gap-1.5 px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 whitespace-nowrap transition-colors border border-transparent"
                >
                  <RotateCw className="w-3.5 h-3.5 text-gray-400" />
                  {term}
                </button>
              ))}
              <button 
                onClick={() => handleSearch("Ofertas Flash")}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-orange-50 hover:bg-orange-100 border border-orange-100 rounded-full text-sm font-bold text-orange-700 whitespace-nowrap transition-colors"
              >
                <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                Ofertas Flash
              </button>
              <button 
                onClick={() => handleSearch("Pods")}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 whitespace-nowrap transition-colors"
              >
                ☁️ Pods
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="container-custom py-6 pb-24">
          
          {/* STATE A: ZERO QUERY */}
          {!query && (
            <div className="space-y-10 animate-in slide-in-from-bottom-4 duration-300">
              
              {/* Your Usuals */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-base font-bold text-gray-900">Tus Habituales</h3>
                  <span className="text-[10px] font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full uppercase tracking-wide">⚡ Compra rápida</span>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x">
                  {usuals.map(product => (
                    <div key={product.id} className="min-w-[160px] w-[160px] snap-start bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-3 flex flex-col">
                      <div className="aspect-square bg-gray-50 rounded-lg mb-3 p-2 relative group">
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <h4 className="text-xs font-bold text-gray-900 line-clamp-2 mb-1 h-8">{product.name}</h4>
                      <div className="mt-auto pt-2">
                        <div className="text-sm font-black text-gray-900 mb-2">{product.price.toFixed(2)}€</div>
                        <Button size="sm" className="w-full h-8 bg-[#84CC16] hover:bg-[#65A30D] text-white text-xs font-bold rounded-lg gap-1">
                          <ShoppingCart className="w-3 h-3" /> Añadir
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Trending Grid */}
              <section>
                 <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-base font-bold text-gray-900">Lo más buscado esta semana</h3>
                  <Flame className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {trendingProducts.map(product => (
                    <div 
                      key={product.id} 
                      onClick={() => {
                        navigate("/product");
                        onClose();
                      }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200 cursor-pointer transition-all"
                    >
                      <div className="w-12 h-12 bg-white rounded-lg p-1 flex-shrink-0 border border-gray-100">
                        <img src={product.image} className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <div className="flex-1 min-w-0">
                         <h4 className="text-xs font-bold text-gray-900 truncate">{product.name}</h4>
                         <p className="text-[10px] text-green-600 font-bold">Tendencia hoy</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          )}

          {/* STATE B: ACTIVE QUERY */}
          {query && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Solver Module - AI Assistant */}
              {showSolver && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 md:p-5 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                      <CheckCircle2 className="w-24 h-24 text-green-600" />
                   </div>
                   
                   <div className="flex items-center gap-2 mb-3 relative z-10">
                      <div className="bg-green-600 text-white p-1 rounded-full">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-green-800 text-sm">Compatible con tu dispositivo Luxe:</span>
                   </div>

                   <div className="flex items-center gap-4 bg-white rounded-lg p-3 shadow-sm border border-green-100 relative z-10">
                      <div className="w-16 h-16 bg-gray-50 rounded-md p-2">
                         <img src={mockCategoryProducts[0].image} className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <div className="flex-1">
                         <h4 className="font-bold text-gray-900 text-sm">Vaporesso GTX Coils (Pack 5)</h4>
                         <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-green-600 font-bold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> En Stock
                            </span>
                            <span className="text-xs text-gray-400 line-through">14.50€</span>
                         </div>
                         <div className="font-black text-gray-900 text-lg leading-none mt-0.5">12.90€</div>
                      </div>
                      <Button className="bg-[#84CC16] hover:bg-[#65A30D] text-white font-bold uppercase tracking-wider shadow-md shadow-green-200">
                         Añadir
                      </Button>
                   </div>
                </div>
              )}

              {/* Results List - Shoppable */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 pl-2">Resultados</h3>
                
                {/* MOBILE VIEW (Smart List) */}
                <div className="block lg:hidden space-y-2">
                  {mockCategoryProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase())).map((product, index) => (
                    <div 
                      key={product.id}
                      className="flex items-start gap-3 p-2.5 rounded-xl bg-white border border-gray-100 shadow-sm active:scale-[0.99] transition-transform"
                      onClick={() => {
                        navigate("/product");
                        onClose();
                      }}
                    >
                      {/* Compact Image - Enlarged */}
                      <div className="w-24 h-24 bg-gray-50 rounded-lg p-1 border border-gray-100 relative shrink-0 self-center flex items-center justify-center">
                          <img src={product.image} className="w-full h-full object-contain mix-blend-multiply" />
                          {index === 0 && (
                            <span className="absolute -top-1.5 -left-1.5 bg-yellow-400 text-yellow-950 text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm uppercase tracking-wide z-20 border border-yellow-500/20">
                              Top
                            </span>
                          )}
                      </div>

                      {/* Dense Info */}
                      <div className="flex-1 min-w-0 flex flex-col gap-1">
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="font-bold text-gray-900 text-xs leading-tight line-clamp-2">{product.name}</h4>
                            <div className="font-black text-gray-900 text-sm whitespace-nowrap">{product.price.toFixed(2)}€</div>
                          </div>
                          
                          {/* Shipping Info for Mobile */}
                          <div className="text-[10px] text-gray-500 font-medium flex items-center gap-1 mt-1 mb-2">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-600"></span>
                              </span>
                              Recíbelo {getDeliveryDate()}
                          </div>
                          
                          <div className="flex items-center justify-between mt-auto pt-1">
                             {/* Smart Selector Buttons */}
                             <div className="flex gap-1.5" onClick={(e) => e.stopPropagation()}>
                                <button className="text-[9px] font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 border border-gray-200 px-2 py-1 rounded transition-colors">
                                  10mg
                                </button>
                                <button className="text-[9px] font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 border border-gray-200 px-2 py-1 rounded transition-colors">
                                  20mg
                                </button>
                             </div>

                             {/* Compact Add Button */}
                             <Button 
                               size="sm" 
                               className="h-7 px-3 bg-[#84CC16] hover:bg-[#65A30D] text-white text-[10px] font-bold uppercase tracking-wide shadow-sm"
                               onClick={(e) => {
                                 e.stopPropagation();
                                 // Add logic
                               }}
                             >
                               Añadir
                             </Button>
                          </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* DESKTOP VIEW (Grid with Sidebar) */}
                <div className="hidden lg:flex gap-8 h-full">
                   {/* Sidebar Filters */}
                   <div className="w-64 flex-shrink-0 space-y-8 pr-4 border-r border-gray-100">
                      <div>
                         <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">Filtros Rápidos</h4>
                         
                         <div className="space-y-6">
                            <div>
                               <h5 className="text-sm font-bold text-gray-700 mb-3">Marcas</h5>
                               <div className="space-y-2">
                                  {["Oxva", "Vaporesso", "Bombo", "Kings Crest"].map(brand => (
                                    <div key={brand} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary cursor-pointer">
                                      <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center"></div>
                                      {brand}
                                    </div>
                                  ))}
                               </div>
                            </div>

                            <div>
                               <h5 className="text-sm font-bold text-gray-700 mb-3">Tipo</h5>
                               <div className="space-y-2">
                                  {["Sales", "Líquidos", "Pods", "Kits"].map(type => (
                                    <div key={type} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary cursor-pointer">
                                      <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center"></div>
                                      {type}
                                    </div>
                                  ))}
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Product Grid */}
                   <div className="flex-1">
                      <div className="grid grid-cols-4 gap-6">
                        {mockCategoryProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase())).map((product, index) => (
                          <div 
                            key={product.id}
                            className="group bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                            onClick={() => {
                              navigate("/product");
                              onClose();
                            }}
                          >
                             {/* Image Area */}
                             <div className="aspect-square bg-gray-50 p-6 relative flex items-center justify-center">
                                <img src={product.image} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                                {index === 0 && (
                                   <span className="absolute top-2 left-2 bg-yellow-400 text-yellow-950 text-[10px] font-black px-2 py-1 rounded shadow-sm uppercase tracking-wide z-10">
                                     Top Ventas
                                   </span>
                                )}
                             </div>

                             {/* Content */}
                             <div className="p-4 flex flex-col flex-1">
                                <h4 className="font-bold text-gray-900 text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors min-h-[2.5rem]">
                                  {product.name}
                                </h4>
                                
                                <div className="flex items-center justify-between mb-3">
                                   <span className="font-black text-lg text-gray-900">{product.price.toFixed(2)}€</span>
                                   {index % 2 === 0 ? (
                                     <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded flex items-center gap-1">
                                       <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> En Stock
                                     </span>
                                   ) : (
                                     <div className="flex gap-1">
                                       <span className="text-[9px] border border-gray-200 px-1 rounded text-gray-500">10mg</span>
                                       <span className="text-[9px] border border-gray-200 px-1 rounded text-gray-500">20mg</span>
                                     </div>
                                   )}
                                </div>

                                {/* Shipping Info for Desktop */}
                                <div className="text-[10px] text-gray-500 font-medium flex items-center justify-center gap-1.5 mb-3 bg-gray-50 py-1 rounded border border-gray-100">
                                    <span className="relative flex h-1.5 w-1.5">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-600"></span>
                                    </span>
                                    Recíbelo {getDeliveryDate()}
                                </div>

                                <Button 
                                  className="w-full mt-auto bg-[#84CC16] hover:bg-[#65A30D] text-white font-bold uppercase text-xs h-9 tracking-wide shadow-sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                  }}
                                >
                                  <ShoppingCart className="w-3 h-3 mr-2" /> Añadir
                                </Button>
                             </div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
                
                {/* Fallback if no results */}
                {mockCategoryProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase())).length === 0 && (
                   <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                      <p className="text-gray-500 font-medium mb-2">No encontramos resultados para "{query}"</p>
                      <Button variant="link" onClick={() => setQuery("")}>Limpiar búsqueda</Button>
                   </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* FAB - AI Help (Only in State A) */}
      {!query && (
        <div className="fixed bottom-6 right-6 z-50 animate-in zoom-in duration-300">
          <Button className="h-12 rounded-full bg-[#84CC16] hover:bg-[#65A30D] text-white shadow-lg shadow-green-900/20 font-bold px-6 gap-2 transition-transform hover:scale-105">
            <Bot className="w-5 h-5" />
            Ayuda IA
          </Button>
        </div>
      )}

    </div>
  );
}
