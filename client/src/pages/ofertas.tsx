import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
import { Star, ShoppingCart, Heart, Timer, Zap, ArrowRight, Check, Filter, Layers, Droplets, Cpu, Package, ChevronRight, SlidersHorizontal, ChevronDown, Rocket } from "lucide-react";
import imgProduct from "@assets/generated_images/Premium_e-liquid_bottles_132f9a1b.png";
import imgKit from "@assets/generated_images/High_tech_vape_mod_kit_444d8fd5.png";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { useState } from "react";
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
import { QuickAddPopover } from "@/components/product/quick-add-popover";

// --- Mock Data ---

const packsData = [
  {
    id: 101,
    title: "Pack 2x Don Juan Reserve",
    offerText: "2 por 25€",
    price: 25.00,
    originalPrice: 36.00,
    images: [imgProduct, imgProduct],
    type: "bundle-2" as const,
    category: "eliquid"
  },
  {
    id: 102,
    title: "Pack 3x Sales Frutales",
    offerText: "3 por 12€",
    price: 12.00,
    originalPrice: 17.85,
    images: [imgProduct, imgProduct, imgProduct],
    type: "bundle-3" as const,
    category: "eliquid"
  },
  {
    id: 103,
    title: "Pack 4x ElfBar 600",
    offerText: "4 por 20€",
    price: 20.00,
    originalPrice: 32.00,
    images: [imgKit, imgKit, imgKit, imgKit],
    type: "bundle-4" as const,
    category: "disposable"
  },
  {
    id: 104,
    title: "Pack Vaporesso + Líquido",
    offerText: "Kit Completo",
    price: 29.95,
    originalPrice: 39.90,
    images: [imgKit, imgProduct],
    type: "bundle-2" as const,
    category: "hardware"
  }
];

const standardOffersData = [
  {
    id: 201,
    name: "Vaporesso Target 100 Mod",
    brand: "Vaporesso",
    price: 34.90,
    originalPrice: 49.90,
    discount: "-30%",
    rating: 4.8,
    reviews: 45,
    image: imgKit,
    endsIn: "05h 32m",
    category: "hardware",
    attributes: { tankCapacity: "5ml", batteryCapacity: "External", drawType: "DL" }
  },
  {
    id: 202,
    name: "Bombo Aldonza 100ml",
    brand: "Bombo",
    price: 14.50,
    originalPrice: 19.50,
    discount: "-25%",
    rating: 4.9,
    reviews: 120,
    image: imgProduct,
    endsIn: "12h 15m",
    category: "eliquid",
    attributes: { nicotine: "3mg", ratio: "70/30" }
  },
  {
    id: 203,
    name: "Lost Mary BM600 Pink Lemonade",
    brand: "Lost Mary",
    price: 4.95,
    originalPrice: 7.95,
    discount: "-38%",
    rating: 4.7,
    reviews: 89,
    image: imgKit,
    endsIn: "2d 10h",
    category: "disposable",
    attributes: { puffs: "600 Puffs", nicotine: "20mg" }
  },
  {
    id: 204,
    name: "Just Juice Mango & Passion",
    brand: "Just Juice",
    price: 11.90,
    originalPrice: 16.90,
    discount: "-29%",
    rating: 5.0,
    reviews: 34,
    image: imgProduct,
    endsIn: "08h 45m",
    category: "eliquid",
    attributes: { nicotine: "0mg", ratio: "70/30" }
  }
];

// --- Components ---

const BundleCard = ({ 
  title, 
  offerText, 
  price, 
  originalPrice, 
  images, 
  type = "single"
}: {
  title: string;
  offerText: string;
  price: number;
  originalPrice?: number;
  images: string[];
  type?: "single" | "bundle-2" | "bundle-3" | "bundle-4";
}) => {
  return (
    <div className="group relative overflow-hidden bg-white border border-gray-100 flex flex-col h-full">
        {/* Badge Top Left */}
        <div className="absolute top-0 left-0 z-10">
             <span className="bg-[#ea580c] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider block">
               {offerText}
             </span>
        </div>

        {/* Image Area */}
        <div className="relative aspect-[4/5] mb-3 overflow-hidden bg-gray-50 p-4 flex items-center justify-center">
           {type === "bundle-2" && (
             <div className="relative w-full h-full flex items-center justify-center">
               <img src={images[0]} className="h-2/3 w-auto object-contain -rotate-6 transform -translate-x-2 mix-blend-multiply" />
               <img src={images[1] || images[0]} className="h-2/3 w-auto object-contain rotate-6 transform translate-x-2 mix-blend-multiply" />
             </div>
           )}
           {type === "bundle-3" && (
             <div className="relative w-full h-full flex items-center justify-center">
               <img src={images[0]} className="h-1/2 w-auto object-contain -rotate-12 transform -translate-x-4 translate-y-2 mix-blend-multiply" />
               <img src={images[1] || images[0]} className="h-1/2 w-auto object-contain rotate-12 transform translate-x-4 translate-y-2 mix-blend-multiply" />
               <img src={images[2] || images[0]} className="h-2/3 w-auto object-contain z-10 -translate-y-2 mix-blend-multiply" />
             </div>
           )}
           {type === "bundle-4" && (
             <div className="relative w-full h-full grid grid-cols-2 gap-2 p-4">
                {images.map((img, i) => <img key={i} src={img} className="w-full h-full object-contain mix-blend-multiply" />)}
             </div>
           )}

           {/* Banner Overlay */}
           <div className="absolute bottom-2 left-2 right-2 bg-purple-50 text-purple-800 text-[10px] font-bold px-2 py-1 text-center rounded-sm border border-purple-100">
               Ahorra {originalPrice ? (originalPrice - price).toFixed(2) : 0}€
           </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1.5 px-1 pb-4 flex-1">
           <h3 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors min-h-[2.5rem]">
             {title}
           </h3>
           
           <div className="flex flex-wrap gap-1 mb-1">
              <span className="text-[9px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-sm border border-gray-200">Pack Ahorro</span>
              <span className="text-[9px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-sm border border-gray-200">Limitado</span>
           </div>

           <div className="mt-auto pt-2 flex items-center gap-2">
              {originalPrice && <span className="text-xs text-gray-400 line-through">{originalPrice.toFixed(2)}€</span>}
              <div className="text-base font-black text-red-600">
                 {price.toFixed(2)}€
              </div>
           </div>
        </div>
    </div>
  );
};

// --- Main Page ---

export default function OfertasPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "eliquid" | "hardware" | "disposable">("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter Logic
  const filteredPacks = packsData.filter(p => filter === "all" || p.category === filter);
  const filteredOffers = standardOffersData.filter(p => filter === "all" || p.category === filter);

  // Pagination Logic for Offers
  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredOffers.length / itemsPerPage);
  const currentOffers = filteredOffers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Mock variants for offers
  const getVariants = (id: number) => {
    const colors = [
      { bg: "bg-black", name: "Black" },
      { bg: "bg-gray-400", name: "Silver" },
      { bg: "bg-blue-600", name: "Blue" },
    ];
    return colors.slice(0, 1 + (id % 3));
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
                 <Link href="/">Inicio</Link> <ChevronRight className="w-3 h-3" /> <span>Outlet</span>
               </div>
               <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                 <h1 className="text-xl md:text-2xl font-heading font-bold text-gray-900 leading-none">
                   Zona Outlet
                 </h1>
                 <p className="text-gray-500 text-[11px] leading-tight hidden md:block max-w-2xl">
                   Todos los artículos en nuestra sección de outlet son limitados en stock. ¡Ahorra a lo grande!
                 </p>
               </div>

               {/* Sub-category Pills */}
               <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 gap-1.5 scrollbar-hide snap-x">
                 {[
                    { id: 'all', label: 'Todo' },
                    { id: 'eliquid', label: 'E-Liquids' },
                    { id: 'hardware', label: 'Hardware' },
                    { id: 'disposable', label: 'Desechables' }
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
        <div className="sticky top-[72px] z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 mb-8">
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
                        <Accordion type="multiple" defaultValue={["type", "price"]} className="w-full">
                          <AccordionItem value="type" className="border-b border-gray-100">
                            <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">Tipo de Oferta</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pb-2">
                                 <div className="flex items-center space-x-3">
                                    <Checkbox id="flash" className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                                    <label htmlFor="flash" className="text-sm text-gray-600 cursor-pointer hover:text-primary">Ofertas Flash</label>
                                 </div>
                                 <div className="flex items-center space-x-3">
                                    <Checkbox id="packs" className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                                    <label htmlFor="packs" className="text-sm text-gray-600 cursor-pointer hover:text-primary">Packs Ahorro</label>
                                 </div>
                                 <div className="flex items-center space-x-3">
                                    <Checkbox id="clearance" className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                                    <label htmlFor="clearance" className="text-sm text-gray-600 cursor-pointer hover:text-primary">Liquidación</label>
                                 </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="price" className="border-b border-gray-100">
                            <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">Precio</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pb-2">
                                 <div className="flex items-center space-x-3">
                                    <Checkbox id="p1" className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                                    <label htmlFor="p1" className="text-sm text-gray-600 cursor-pointer hover:text-primary">Menos de 5€</label>
                                 </div>
                                 <div className="flex items-center space-x-3">
                                    <Checkbox id="p2" className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                                    <label htmlFor="p2" className="text-sm text-gray-600 cursor-pointer hover:text-primary">5€ - 10€</label>
                                 </div>
                                 <div className="flex items-center space-x-3">
                                    <Checkbox id="p3" className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                                    <label htmlFor="p3" className="text-sm text-gray-600 cursor-pointer hover:text-primary">Más de 10€</label>
                                 </div>
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

               <Button variant="outline" size="sm" className="h-9 gap-2 text-xs font-bold uppercase tracking-wide hidden md:flex pointer-events-none opacity-50">
                 <SlidersHorizontal className="w-3 h-3" /> Filtros
               </Button>
               <span className="text-xs text-gray-500 font-medium ml-2">{filteredPacks.length + filteredOffers.length} ofertas</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide cursor-pointer text-gray-600 hover:text-gray-900">
                Ordenar por <ChevronDown className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom flex gap-8">
          {/* Sidebar Filters - Just visual for now since we use pills */}
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-32 h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
            <div className="space-y-1 pb-12">
                <Accordion type="multiple" defaultValue={["type", "price"]} className="w-full">
                  
                  <AccordionItem value="type" className="border-b border-gray-100">
                    <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">Tipo de Oferta</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pb-2">
                         <div className="flex items-center space-x-3">
                            <Checkbox id="flash" className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                            <label htmlFor="flash" className="text-sm text-gray-600 cursor-pointer hover:text-primary">Ofertas Flash</label>
                         </div>
                         <div className="flex items-center space-x-3">
                            <Checkbox id="packs" className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                            <label htmlFor="packs" className="text-sm text-gray-600 cursor-pointer hover:text-primary">Packs Ahorro</label>
                         </div>
                         <div className="flex items-center space-x-3">
                            <Checkbox id="clearance" className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                            <label htmlFor="clearance" className="text-sm text-gray-600 cursor-pointer hover:text-primary">Liquidación</label>
                         </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="price" className="border-b border-gray-100">
                    <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">Precio</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pb-2">
                         <div className="flex items-center space-x-3">
                            <Checkbox id="p1" className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                            <label htmlFor="p1" className="text-sm text-gray-600 cursor-pointer hover:text-primary">Menos de 5€</label>
                         </div>
                         <div className="flex items-center space-x-3">
                            <Checkbox id="p2" className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                            <label htmlFor="p2" className="text-sm text-gray-600 cursor-pointer hover:text-primary">5€ - 10€</label>
                         </div>
                         <div className="flex items-center space-x-3">
                            <Checkbox id="p3" className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                            <label htmlFor="p3" className="text-sm text-gray-600 cursor-pointer hover:text-primary">Más de 10€</label>
                         </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            
            {/* Section 1: Packs */}
            {filteredPacks.length > 0 && (
              <div className="mb-12">
                <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-4 bg-purple-600 block"></span>
                  Packs Ahorro
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredPacks.map((pack) => (
                    <BundleCard key={pack.id} {...pack} />
                  ))}
                </div>
              </div>
            )}

            {/* Section 2: Single Products */}
            {filteredOffers.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900 flex items-center gap-2">
                    <span className="w-1 h-4 bg-red-600 block"></span>
                    Ofertas Individuales
                  </h2>
                  <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={setCurrentPage}
                    className="mt-0" 
                  />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentOffers.map((product) => (
                    <ProductCard 
                      key={product.id}
                      product={product as any}
                      type="offer"
                    />
                  ))}
                </div>

                <Pagination 
                  currentPage={currentPage} 
                  totalPages={totalPages} 
                  onPageChange={setCurrentPage} 
                />
              </div>
            )}
            
             {/* Empty State */}
             {filteredPacks.length === 0 && filteredOffers.length === 0 && (
                <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                  <p className="text-gray-500 font-medium">No hay ofertas activas en esta categoría.</p>
                  <Button variant="link" onClick={() => setFilter("all")}>Ver todas</Button>
                </div>
             )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
