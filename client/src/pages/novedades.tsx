import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart, Sparkles, Filter, Droplets, Cpu, Layers, Calendar, ArrowRight, ChevronRight, ChevronDown, SlidersHorizontal, Rocket } from "lucide-react";
import imgProduct from "@assets/generated_images/Premium_e-liquid_bottles_132f9a1b.png";
import imgKit from "@assets/generated_images/High_tech_vape_mod_kit_444d8fd5.png";
import { Link } from "wouter";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { differenceInDays, isFuture, parseISO } from "date-fns";
import { ProductCard } from "@/components/product/product-card";
import { QuickAddPopover } from "@/components/product/quick-add-popover";
import { getDeliveryDate } from "@/lib/shipping";
import { Pagination } from "@/components/shared/pagination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Simulación de datos que vendrían de tu PrestaShop
const newProducts = [
  {
    id: 1,
    name: "Vaporesso XROS 4 Mini Kit",
    brand: "Vaporesso",
    price: 24.90,
    rating: 5.0,
    reviews: 12,
    image: imgKit,
    releaseDate: "2025-11-18",
    stock: 100,
    type: "hardware",
    productCategory: "kit",
    specialBadge: null,
    attributes: { userLevel: "Principiante", tankCapacity: "2ml", batteryCapacity: "1000mAh", drawType: "MTL" }
  },
  {
    id: 2,
    name: "Bombo Crema Santa 100ml",
    brand: "Bombo",
    price: 16.50,
    rating: 4.8,
    reviews: 45,
    image: imgProduct,
    releaseDate: "2025-11-19",
    stock: 50,
    type: "eliquid",
    productCategory: "eliquid",
    specialBadge: "Nuevo Sabor",
    attributes: { nicotine: "3mg", type: "Freebase", flavorType: "Postre", ratio: "50/50" }
  },
  {
    id: 3,
    name: "OXVA Xlim Pro 2",
    brand: "OXVA",
    price: 29.95,
    rating: 4.9,
    reviews: 8,
    image: imgKit,
    releaseDate: "2025-11-17",
    stock: 25,
    type: "hardware",
    productCategory: "kit",
    specialBadge: "Nuevo Modelo",
    attributes: { userLevel: "Intermedio", tankCapacity: "2.5ml", batteryCapacity: "1200mAh", drawType: "MTL" }
  },
  {
    id: 4,
    name: "Don Juan Aldonza 100ml",
    brand: "Kings Crest",
    price: 18.90,
    rating: 5.0,
    reviews: 120,
    image: imgProduct,
    releaseDate: "2025-10-01",
    restockDate: "2025-11-20",
    stock: 200,
    type: "eliquid",
    productCategory: "eliquid",
    specialBadge: null,
    attributes: { nicotine: "0mg", type: "Freebase", flavorType: "Tabaco", ratio: "70/30" }
  },
  {
    id: 5,
    name: "Uwell Caliburn G3 Pro",
    brand: "Uwell",
    price: 27.50,
    rating: 4.7,
    reviews: 15,
    image: imgKit,
    releaseDate: "2025-11-15",
    stock: 10,
    type: "hardware",
    productCategory: "kit",
    specialBadge: null,
    attributes: { userLevel: "Intermedio", tankCapacity: "3ml", batteryCapacity: "1500mAh", drawType: "DL" }
  },
  {
    id: 6,
    name: "Drifter Bar Juice Mango Ice",
    brand: "Drifter",
    price: 3.95,
    rating: 4.6,
    reviews: 32,
    image: imgProduct,
    releaseDate: "2025-11-13",
    stock: 500,
    type: "eliquid",
    productCategory: "eliquid",
    specialBadge: "Nueva Gama",
    attributes: { nicotine: "10mg", type: "Sales", flavorType: "Frutal", ratio: "50/50" }
  },
  {
    id: 7,
    name: "Voopoo Drag 5 Mod",
    brand: "Voopoo",
    price: 54.90,
    rating: 4.8,
    reviews: 5,
    image: imgKit,
    releaseDate: "2025-11-18",
    stock: 5,
    type: "hardware",
    productCategory: "kit",
    specialBadge: "Exclusivo",
    attributes: { userLevel: "Avanzado", tankCapacity: "5ml", batteryCapacity: "2500mAh", drawType: "DL" }
  },
  {
    id: 8,
    name: "A&L Ragnarok Legend 30ml",
    brand: "A&L",
    price: 12.90,
    rating: 4.9,
    reviews: 200,
    image: imgProduct,
    releaseDate: "2025-11-17",
    stock: 100,
    type: "eliquid",
    productCategory: "eliquid",
    specialBadge: "Edición Limitada",
    attributes: { nicotine: "6mg", type: "Freebase", flavorType: "Mentolado", ratio: "70/30" }
  },
  {
    id: 9,
    name: "Vaporesso Luxe Q2 SE",
    brand: "Vaporesso",
    price: 0,
    rating: 0,
    reviews: 0,
    image: imgKit,
    releaseDate: "2025-12-15",
    stock: 0,
    type: "coming-soon",
    productCategory: "kit",
    specialBadge: null
  },
  {
    id: 10,
    name: "Pachamama Fuji Apple 50ml",
    brand: "Charlie's Chalk Dust",
    price: 0,
    rating: 0,
    reviews: 0,
    image: imgProduct,
    releaseDate: "2025-12-20",
    stock: 0,
    type: "coming-soon",
    productCategory: "eliquid",
    specialBadge: null
  }
];

function getProductStatus(product: any) {
  const today = new Date("2025-11-20");
  const releaseDate = new Date(product.releaseDate);
  const isComingSoon = isFuture(releaseDate) || product.type === 'coming-soon';
  
  if (isComingSoon) {
    return { label: "Próximamente", color: "bg-orange-500", dateText: `Llegada: ${releaseDate.getDate()} Dic` };
  }
  if (product.specialBadge) {
    return { label: product.specialBadge, color: "bg-black", dateText: "Nuevo" };
  }
  if (product.restockDate) {
    return { label: "Restock", color: "bg-green-600", dateText: "Repuesto hoy" };
  }
  return { label: "Nuevo", color: "bg-blue-600", dateText: "Nuevo lanzamiento" };
}

// Mock filters
const filters = {
    brands: ["Vaporesso", "Voopoo", "Bombo", "Kings Crest", "Drifter"],
    category: ["Kits", "E-Liquids", "Resistencias", "Pods"],
    price: ["< 10€", "10€ - 30€", "> 30€"]
};

export default function NovedadesPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "eliquid" | "hardware" | "coming-soon">("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = newProducts.filter(
    (p) => filter === "all" ? p.type !== 'coming-soon' : p.type === filter
  );

  // Pagination logic
  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  // Generate mock variants
  const getVariants = (id: number) => {
    const colors = [
      { bg: "bg-black", name: "Black" },
      { bg: "bg-gray-400", name: "Silver" },
      { bg: "bg-blue-600", name: "Blue" },
      { bg: "bg-red-600", name: "Red" },
    ];
    return colors.slice(0, 2 + (id % 3));
  };

  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <Navbar />

      <main className="pb-16">
        {/* Header Style UK ECIG STORE - Ultra Compressed */}
        <div className="bg-gray-50 py-2 border-b border-gray-100">
          <div className="container-custom">
             <div className="max-w-full">
               <div className="flex items-center gap-1 text-[10px] text-gray-500 mb-1">
                 <Link href="/">Inicio</Link> <ChevronRight className="w-3 h-3" /> <span>Novedades</span>
               </div>
               <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                 <h1 className="text-xl md:text-2xl font-heading font-bold text-gray-900 leading-none">
                   Novedades
                 </h1>
                 <p className="text-gray-500 text-[11px] leading-tight hidden md:block max-w-2xl">
                   Las últimas marcas premium y kits de última generación. Sé el primero en probarlos.
                 </p>
               </div>

               {/* Sub-category Pills (Acting as Filters here) */}
               <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 gap-1.5 scrollbar-hide snap-x">
                 {[
                    { id: 'all', label: 'Todo' },
                    { id: 'eliquid', label: 'E-Liquids' },
                    { id: 'hardware', label: 'Hardware' },
                    { id: 'coming-soon', label: 'Próximamente' }
                 ].map((cat, idx) => (
                   <button 
                     key={cat.id}
                     onClick={() => setFilter(cat.id as any)}
                     className={cn(
                       "px-3 py-1 rounded-full text-xs font-bold transition-all border whitespace-nowrap flex-shrink-0 snap-start",
                       filter === cat.id 
                         ? "bg-gray-900 text-white border-gray-900" 
                         : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                     )}
                   >
                     {cat.label}
                   </button>
                 ))}
               </div>
             </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="sticky top-[72px] z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 mb-4 md:mb-8">
          <div className="container-custom flex items-center justify-between">
            <div className="flex items-center gap-2">
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
                    <div className="space-y-1 pb-12">
                        <Accordion type="multiple" defaultValue={["brands", "category"]} className="w-full">
                          
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

                           <AccordionItem value="category" className="border-b border-gray-100">
                            <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">Categoría</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pb-2">
                                {filters.category.map((cat) => (
                                  <div key={cat} className="flex items-center space-x-3">
                                    <Checkbox id={cat} className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                                    <label htmlFor={cat} className="text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                                      {cat}
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
                 </SheetContent>
               </Sheet>

               <Button variant="outline" size="sm" className="h-9 gap-2 text-xs font-bold uppercase tracking-wide hidden lg:flex pointer-events-none opacity-50">
                 <SlidersHorizontal className="w-3 h-3" /> Filtros
               </Button>
               <span className="text-xs text-gray-500 font-medium ml-2">{filteredProducts.length} productos</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide cursor-pointer text-gray-600 hover:text-gray-900">
                Ordenar por <ChevronDown className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom flex gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-32 h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
            <div className="space-y-1 pb-12">
                <Accordion type="multiple" defaultValue={["brands", "category"]} className="w-full">
                  
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

                   <AccordionItem value="category" className="border-b border-gray-100">
                    <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">Categoría</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pb-2">
                        {filters.category.map((cat) => (
                          <div key={cat} className="flex items-center space-x-3">
                            <Checkbox id={cat} className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                            <label htmlFor={cat} className="text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                              {cat}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>
            </div>
          </aside>

          {/* Products Grid - Updated to 4 columns max */}
          <div className="flex-1">
            {/* Top Pagination */}
            <div className="mb-6 flex justify-end">
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage}
                className="mt-0" 
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {currentProducts.map((product) => {
                const status = getProductStatus(product);
                return (
                  <ProductCard 
                    key={product.id} 
                    product={{
                      ...product,
                      attributes: (product.attributes || {}) as Record<string, string | string[]>
                    }}
                    type="new"
                    badge={status.label}
                  />
                );
              })}
            </div>
            
            {/* Pagination */}
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
            />
            
            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                  <p className="text-gray-500 font-medium">No hay productos para este filtro.</p>
                  <Button variant="link" onClick={() => setFilter("all")}>Ver todo</Button>
                </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}