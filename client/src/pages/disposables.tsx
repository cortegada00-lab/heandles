import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ChevronRight, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Link } from "wouter";
import { mockCategoryProducts } from "@/lib/mock-data";
import { SeoHead } from "@/components/shared/seo-head";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ProductCard } from "@/components/product/product-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
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

export default function DisposablesPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Mock filters for Disposables
  const filters = {
    brands: ["Elf Bar", "Lost Mary", "Vuse", "Crystal Bar", "Ske"],
    puffs: ["600 Puffs", "800 Puffs", "1500+ Puffs", "2000+ Puffs"],
    flavors: ["Frutales", "Mentolados", "Tabaco", "Postres", "Bebidas"],
    strength: ["0mg", "10mg", "20mg"]
  };

  // Sub-category pills
  const subCategories = [
    "Todos", "Sin Nicotina", "600 Puffs", "Recargables", "Packs Ahorro", "Novedades"
  ];

  const FilterContent = () => (
    <div className="space-y-1 pb-12">
        <Accordion type="multiple" defaultValue={["brands", "puffs", "flavors", "multibuy"]} className="w-full">
          
          <AccordionItem value="multibuy" className="border-b border-gray-100">
            <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">Ofertas</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pb-2">
                 <div className="flex items-center space-x-3">
                    <Checkbox id="mb1" className="rounded-sm border-gray-300 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600" />
                    <label htmlFor="mb1" className="text-sm text-gray-600 cursor-pointer font-medium text-red-600">3 por 15€</label>
                 </div>
                 <div className="flex items-center space-x-3">
                    <Checkbox id="mb2" className="rounded-sm border-gray-300 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600" />
                    <label htmlFor="mb2" className="text-sm text-gray-600 cursor-pointer font-medium text-red-600">5 por 20€</label>
                 </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brands" className="border-b border-gray-100">
            <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">Marca</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pb-2">
                {filters.brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-3">
                    <Checkbox id={brand} className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                    <label htmlFor={brand} className="text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="puffs" className="border-b border-gray-100">
            <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">Caladas</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pb-2">
                {filters.puffs.map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <Checkbox id={option} className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                    <label htmlFor={option} className="text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="flavors" className="border-b border-gray-100">
            <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">Sabor</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pb-2">
                {filters.flavors.map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <Checkbox id={option} className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                    <label htmlFor={option} className="text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        <div className="pt-6 mt-auto">
          <Button className="w-full font-bold uppercase tracking-wider" onClick={() => setMobileFiltersOpen(false)}>Aplicar Filtros</Button>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <SeoHead 
        title="Desechables y Vapers de Un Solo Uso | IVAPEO"
        description="Compra los mejores vapers desechables. Elf Bar, Lost Mary y más. Envío 24h."
      />
      <Navbar />

      <main className="pb-16">
        {/* Header Style UK ECIG STORE - Ultra Compressed */}
        <div className="bg-gray-50 py-2 border-b border-gray-100">
          <div className="container-custom">
             <div className="max-w-full">
               <div className="flex items-center gap-1 text-[10px] text-gray-500 mb-1">
                 <Link href="/">Inicio</Link> <ChevronRight className="w-3 h-3" /> <span>Desechables</span>
               </div>
               <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                 <h1 className="text-xl md:text-2xl font-heading font-bold text-gray-900 leading-none">
                   Vapers Desechables
                 </h1>
                 <p className="text-gray-500 text-[11px] leading-tight hidden md:block max-w-2xl">
                   Descubre nuestra amplia gama de vapers desechables de las mejores marcas. Elf Bar, Lost Mary y más.
                 </p>
               </div>

               {/* Sub-category Pills */}
               <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 gap-1.5 scrollbar-hide snap-x">
                 {subCategories.map((cat, idx) => (
                   <button 
                     key={cat}
                     className={cn(
                       "px-3 py-1 rounded-full text-xs font-bold transition-all border whitespace-nowrap flex-shrink-0 snap-start",
                       idx === 0 
                         ? "bg-gray-900 text-white border-gray-900" 
                         : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                     )}
                   >
                     {cat}
                   </button>
                 ))}
               </div>
             </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="sticky top-[72px] z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 mb-8">
          <div className="container-custom flex items-center justify-between">
            <div className="flex items-center gap-2">
               {/* Mobile/Tablet Filter Button (Sheet) */}
               <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                 <SheetTrigger asChild>
                   <Button variant="outline" size="sm" className="h-9 gap-2 text-xs font-bold uppercase tracking-wide flex lg:hidden">
                     <SlidersHorizontal className="w-3 h-3" /> Filtros
                   </Button>
                 </SheetTrigger>
                 <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto">
                   <SheetHeader className="mb-6">
                     <SheetTitle className="text-left font-heading font-bold text-xl">Filtros</SheetTitle>
                   </SheetHeader>
                   <FilterContent />
                 </SheetContent>
               </Sheet>

               {/* Desktop Filter Label (Non-interactive or could toggle sidebar visibility if implemented) */}
               <Button variant="outline" size="sm" className="h-9 gap-2 text-xs font-bold uppercase tracking-wide hidden lg:flex pointer-events-none opacity-50">
                 <SlidersHorizontal className="w-3 h-3" /> Filtros
               </Button>
               
               <span className="text-xs text-gray-500 font-medium ml-2">{mockCategoryProducts.length} productos</span>
            </div>

            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide cursor-pointer text-gray-600 hover:text-gray-900">
                    Ordenar por <ChevronDown className="w-3 h-3" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Ordenar productos</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">Más vendidos</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Novedades</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Precio: Menor a Mayor</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Precio: Mayor a Menor</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Nombre: A-Z</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <div className="container-custom flex gap-8">
          {/* Sidebar Filters - Clean Vertical List */}
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-32 h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
            <FilterContent />
          </aside>

          {/* Product Grid - Updated to match CategoryPage (4 columns) */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {mockCategoryProducts.map((product, i) => {
                // Simulate disposable specific attributes for the standard card
                const disposableProduct = {
                   ...product,
                   attributes: {
                      puffs: "600 Puffs",
                      nicotine: "20mg",
                      activation: "Auto"
                   }
                };

                return (
                  <ProductCard 
                    key={product.id || i}
                    product={disposableProduct}
                    badge={i % 3 === 0 ? "3x15€" : (i % 5 === 0 ? "NUEVO" : undefined)}
                    type={i % 3 === 0 ? "offer" : "standard"}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}