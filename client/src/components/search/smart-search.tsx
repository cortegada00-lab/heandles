import * as React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Search, Sparkles, History, TrendingUp, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";

interface SmartSearchProps {
  mobileTrigger?: React.ReactNode;
}

export function SmartSearch({ mobileTrigger }: SmartSearchProps) {
  const [open, setOpen] = React.useState(false);
  const [, navigate] = useLocation();
  const [searchInput, setSearchInput] = React.useState("");

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "Enter" && searchInput.trim()) {
        e.preventDefault();
        navigate(`/search?q=${encodeURIComponent(searchInput)}`);
        setOpen(false);
        setSearchInput("");
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [searchInput, navigate]);

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setOpen(false);
    setSearchInput("");
  };

  return (
    <>
      {mobileTrigger ? (
        <div onClick={() => setOpen(true)}>
          {mobileTrigger}
        </div>
      ) : (
        <div className="relative w-full group">
          <div 
            onClick={() => setOpen(true)}
            className="relative flex items-center w-full h-12 rounded-full border-2 border-primary/10 bg-gray-50 hover:bg-white hover:border-primary transition-all duration-300 cursor-text shadow-sm hover:shadow-md"
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

             {/* Search Button / AI Badge */}
             <div className="p-1">
                <Button size="sm" className="rounded-full h-9 px-4 bg-primary hover:bg-primary/90 text-white font-bold shadow-sm flex items-center gap-2">
                   Buscar
                   <span className="hidden sm:inline-flex items-center gap-1 bg-white/20 px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" /> AI
                   </span>
                </Button>
             </div>
          </div>
        </div>
      )}

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 p-1">
            <CommandInput 
              placeholder="Busca marcas, sabores, dispositivos..." 
              className="h-14 text-base"
              value={searchInput}
              onValueChange={setSearchInput}
            />
        </div>
        <CommandList className="max-h-[500px]">
          <CommandEmpty>
            <div className="py-6 text-center space-y-2">
              <p className="text-lg font-medium text-gray-900">No encontramos resultados</p>
              <p className="text-sm text-gray-500">Prueba con términos más generales como "frutal", "vaporesso" o "sales".</p>
            </div>
          </CommandEmpty>
          
          {/* AI Personalized Section */}
          <CommandGroup heading={<div className="flex items-center gap-2 text-primary font-bold"><Sparkles className="w-4 h-4" /> Sugerencias Inteligentes</div>}>
            <CommandItem className="cursor-pointer py-3" onSelect={() => handleSearch("Don Juan Reserve")}>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                 <ShoppingBag className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                 <div className="font-medium text-gray-900">Pack Ahorro: Don Juan Reserve</div>
                 <div className="text-xs text-gray-500">Basado en tus gustos dulces</div>
              </div>
              <Badge variant="secondary" className="ml-auto text-[10px] bg-green-100 text-green-700 border-green-200">OFERTA FLASH</Badge>
            </CommandItem>
            <CommandItem className="cursor-pointer py-3" onSelect={() => handleSearch("Resistencias")}>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                 <TrendingUp className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                 <div className="font-medium text-gray-900">Resistencias GTX 0.2Ω</div>
                 <div className="text-xs text-gray-500">Compatibles con tu dispositivo</div>
              </div>
              <Badge variant="secondary" className="ml-auto text-[10px] bg-blue-50 text-blue-700 border-blue-200">RECOMENDADO</Badge>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading={<div className="flex items-center gap-2 text-gray-700 font-bold mt-2"><History className="w-4 h-4" /> Visto recientemente</div>}>
            <CommandItem className="cursor-pointer py-2" onSelect={() => handleSearch("Glicerina Vegetal")}>
              <History className="mr-2 h-4 w-4 opacity-50" />
              <span>Glicerina Vegetal 100VG - Oil4Vap</span>
            </CommandItem>
            <CommandItem className="cursor-pointer py-2" onSelect={() => handleSearch("OXVA")}>
              <History className="mr-2 h-4 w-4 opacity-50" />
              <span>OXVA Xlim Pro Kit</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading={<div className="flex items-center gap-2 text-gray-700 font-bold mt-2"><TrendingUp className="w-4 h-4" /> Lo más buscado hoy</div>}>
             <div className="grid grid-cols-3 gap-2 p-2">
                <div className="bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-lg p-3 text-center cursor-pointer transition-colors group" onClick={() => handleSearch("Frutales Ice")}>
                   <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">🍓</div>
                   <div className="text-xs font-bold text-gray-700">Frutales Ice</div>
                </div>
                <div className="bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-lg p-3 text-center cursor-pointer transition-colors group" onClick={() => handleSearch("Kits")}>
                   <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">⚡</div>
                   <div className="text-xs font-bold text-gray-700">Kits Inicio</div>
                </div>
                <div className="bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-lg p-3 text-center cursor-pointer transition-colors group" onClick={() => handleSearch("Sales")}>
                   <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">💨</div>
                   <div className="text-xs font-bold text-gray-700">Sales 20mg</div>
                </div>
             </div>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
