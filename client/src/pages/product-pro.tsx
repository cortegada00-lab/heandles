import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Star, Check, ShieldCheck, Truck, Heart, Share2, ChevronDown, Info, Plus, Minus, ShoppingCart, ArrowRight, Play, Instagram } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { mockProduct } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/hooks/use-toast";
import { StoreStockModal } from "@/components/product/store-stock-modal";

// Mock Data for Pro Page
const flavors = [
  { id: 'subzero', name: 'Subzero', color: '#00B4D8', image: mockProduct.images[0] },
  { id: 'tribeca', name: 'Tribeca', color: '#D4A373', image: mockProduct.images[0] },
  { id: 'turkish', name: 'Turkish', color: '#BC6C25', image: mockProduct.images[0] },
  { id: 'kringle', name: 'Kringle', color: '#2EC4B6', image: mockProduct.images[0] },
];

const nicotineLevels = ["0mg", "3mg", "6mg", "12mg", "18mg"];

const communityImages = [
  "https://images.unsplash.com/photo-1534119583393-365976864591?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519669011783-48a6eb41f842?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615748166867-c7b52e8c4208?q=80&w=400&auto=format&fit=crop"
];

const bundles = [
  { id: 1, name: "Pack Iniciación", price: 49.90, save: "15%", image: mockProduct.images[0] },
  { id: 2, name: "Pack Experto", price: 89.90, save: "20%", image: mockProduct.images[0] },
  { id: 3, name: "Pack Sabores", price: 35.50, save: "10%", image: mockProduct.images[0] },
];

export default function ProductProPage() {
  const [selectedFlavor, setSelectedFlavor] = useState(flavors[0]);
  const [selectedNicotine, setSelectedNicotine] = useState("3mg");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: mockProduct.id,
      name: `${mockProduct.name} - ${selectedFlavor.name}`,
      price: mockProduct.price,
      image: mockProduct.images[0],
      quantity: quantity,
      variant: selectedNicotine
    });
    toast({
      title: "Añadido al carrito",
      description: `${mockProduct.name} ha sido añadido correctamente.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-foreground">
      <Navbar />
      
      {/* Breadcrumb - Clean & Minimal */}
      <div className="bg-white border-b border-gray-100 sticky top-[72px] z-30 hidden lg:block">
        <div className="container-custom py-3 flex items-center justify-between text-xs">
           <div className="flex items-center gap-2 text-gray-500">
              <Link href="/" className="hover:text-primary">Inicio</Link>
              <span className="text-gray-300">/</span>
              <Link href="/eliquids" className="hover:text-primary">E-Liquids</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-bold">{mockProduct.name}</span>
           </div>
           <div className="flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Garantía Oficial</span>
              <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Envío 24h</span>
           </div>
        </div>
      </div>

      <main className="pb-20">
        {/* HERO SECTION - Split Layout */}
        <section className="bg-white mb-8 shadow-sm">
           <div className="container-custom py-6 lg:py-12">
             <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
               
               {/* LEFT: Gallery Grid */}
               <div className="lg:col-span-7 flex flex-col-reverse lg:flex-row gap-4">
                  {/* Thumbnails Vertical */}
                  <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible py-2 lg:py-0 px-1 lg:px-0">
                    {mockProduct.images.map((img, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={cn(
                          "w-16 h-16 lg:w-20 lg:h-20 rounded-xl border-2 bg-gray-50 shrink-0 overflow-hidden transition-all",
                          activeImage === idx ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-gray-200"
                        )}
                      >
                        <img src={img} className="w-full h-full object-contain p-1" alt="" />
                      </button>
                    ))}
                    <button className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl border-2 border-transparent bg-gray-50 shrink-0 flex items-center justify-center text-gray-400 hover:bg-gray-100">
                       <Play className="w-6 h-6 fill-current" />
                    </button>
                  </div>
                  
                  {/* Main Image */}
                  <div className="flex-1 bg-gray-50 rounded-3xl relative aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center overflow-hidden group">
                     <img 
                       src={mockProduct.images[activeImage]} 
                       className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105" 
                       alt={mockProduct.name} 
                     />
                     <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Badge className="bg-red-500 hover:bg-red-600 text-white border-none px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-500/20">-20% PROMO</Badge>
                        <Badge className="bg-blue-500 hover:bg-blue-600 text-white border-none px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/20">TOP VENTAS</Badge>
                     </div>
                     <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                     </button>
                  </div>
               </div>

               {/* RIGHT: Product Info & Actions */}
               <div className="lg:col-span-5 flex flex-col h-full">
                 <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">{mockProduct.brand}</span>
                       <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-bold text-gray-900 ml-1">4.9</span>
                          <span className="text-xs text-gray-400 underline decoration-dotted ml-1 cursor-pointer hover:text-primary">(1.240 opiniones)</span>
                       </div>
                    </div>
                    <h1 className="text-2xl lg:text-4xl font-black text-gray-900 leading-tight mb-4">{mockProduct.name}</h1>
                    <p className="text-gray-500 leading-relaxed text-sm lg:text-base line-clamp-3">{mockProduct.shortDescription?.replace(/<[^>]*>/g, '')}</p>
                 </div>

                 {/* Price */}
                 <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                    <div className="flex items-end gap-3 mb-2">
                       <span className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">{mockProduct.price.toFixed(2)}€</span>
                       <span className="text-lg text-gray-400 line-through font-medium mb-1.5">18.50€</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 text-sm font-bold">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                       En Stock - Envío Inmediato
                    </div>
                 </div>

                 {/* Selectors */}
                 <div className="space-y-6 mb-8">
                    {/* Flavors */}
                    <div>
                       <div className="flex justify-between items-center mb-3">
                          <span className="font-bold text-sm text-gray-900">Sabor: <span className="text-primary">{selectedFlavor.name}</span></span>
                       </div>
                       <div className="grid grid-cols-4 gap-3">
                          {flavors.map(flavor => (
                             <button 
                               key={flavor.id}
                               onClick={() => setSelectedFlavor(flavor)}
                               className={cn(
                                 "relative rounded-xl overflow-hidden aspect-square border-2 transition-all group",
                                 selectedFlavor.id === flavor.id ? "border-primary ring-2 ring-primary/20 scale-105" : "border-transparent hover:border-gray-200 opacity-70 hover:opacity-100"
                               )}
                             >
                                <img src={flavor.image} className="w-full h-full object-cover" alt={flavor.name} />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                   <span className="text-white text-[10px] font-bold uppercase">{flavor.name}</span>
                                </div>
                                {selectedFlavor.id === flavor.id && (
                                   <div className="absolute top-1 right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-white">
                                      <Check className="w-2.5 h-2.5" />
                                   </div>
                                )}
                             </button>
                          ))}
                       </div>
                    </div>

                    {/* Nicotine */}
                    <div>
                       <div className="flex justify-between items-center mb-3">
                          <span className="font-bold text-sm text-gray-900">Nicotina:</span>
                          <a href="#" className="text-xs text-gray-400 underline hover:text-primary">¿Qué nivel elijo?</a>
                       </div>
                       <div className="flex flex-wrap gap-2">
                          {nicotineLevels.map(level => (
                             <button
                               key={level}
                               onClick={() => setSelectedNicotine(level)}
                               className={cn(
                                 "px-4 py-2 rounded-lg text-sm font-bold border-2 transition-all",
                                 selectedNicotine === level 
                                   ? "border-primary bg-primary/5 text-primary shadow-sm" 
                                   : "border-gray-100 bg-white text-gray-600 hover:border-gray-300"
                               )}
                             >
                                {level}
                             </button>
                          ))}
                       </div>
                    </div>
                 </div>

                 {/* Sticky Buy Bar (Desktop: inline, Mobile: fixed bottom) */}
                 <div className="mt-auto flex gap-4 sticky bottom-0 bg-white p-4 border-t border-gray-100 lg:static lg:bg-transparent lg:p-0 lg:border-0 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] lg:shadow-none">
                    <div className="flex items-center bg-gray-100 rounded-xl h-14 px-2 shrink-0">
                       <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-900"><Minus className="w-4 h-4" /></button>
                       <span className="w-8 text-center font-bold text-lg">{quantity}</span>
                       <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-900"><Plus className="w-4 h-4" /></button>
                    </div>
                    <Button onClick={handleAddToCart} className="flex-1 h-14 rounded-xl text-lg font-black uppercase tracking-wide shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95">
                       <ShoppingCart className="w-5 h-5 mr-2" /> Añadir
                    </Button>
                 </div>

                 {/* Store Stock Modal */}
                 <StoreStockModal />
               </div>
             </div>
           </div>
        </section>

        {/* BENTO GRID INFO SECTION */}
        <section className="container-custom mb-16">
           <div className="grid md:grid-cols-3 gap-6">
              
              {/* Card 1: Specs */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm md:col-span-2">
                 <h3 className="font-black text-xl mb-6 flex items-center gap-2">
                    <Info className="w-5 h-5 text-gray-400" /> Especificaciones
                 </h3>
                 <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                    {mockProduct.specs.map((spec, i) => (
                       <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-2">
                          <span className="text-gray-500 text-sm">{spec.name}</span>
                          <span className="font-bold text-gray-900 text-sm">{spec.value}</span>
                       </div>
                    ))}
                    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                       <span className="text-gray-500 text-sm">PG/VG Ratio</span>
                       <span className="font-bold text-gray-900 text-sm">50/50</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                       <span className="text-gray-500 text-sm">País de Origen</span>
                       <span className="font-bold text-gray-900 text-sm">USA</span>
                    </div>
                 </div>
              </div>

              {/* Card 2: Rating Summary */}
              <div className="bg-blue-900 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                 <div className="relative z-10">
                    <div className="text-5xl font-black mb-2">4.9<span className="text-2xl text-blue-300">/5</span></div>
                    <div className="flex text-yellow-400 gap-1 mb-4">
                       <Star className="w-5 h-5 fill-current" />
                       <Star className="w-5 h-5 fill-current" />
                       <Star className="w-5 h-5 fill-current" />
                       <Star className="w-5 h-5 fill-current" />
                       <Star className="w-5 h-5 fill-current" />
                    </div>
                    <p className="text-blue-200 text-sm font-medium leading-relaxed mb-6">
                       "El mejor sabor mentolado que he probado nunca. Es intenso pero no cansa. Lo recomiendo 100%."
                    </p>
                 </div>
                 <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-900 border-0 font-bold">
                    Ver las 1.240 opiniones
                 </Button>
              </div>

              {/* Card 3: Description (Full Width) */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm md:col-span-3">
                 <h3 className="font-black text-xl mb-6">Descripción del Producto</h3>
                 <div 
                    className="prose prose-sm max-w-none text-gray-600 prose-headings:font-bold prose-headings:text-gray-900 prose-strong:text-gray-900"
                    dangerouslySetInnerHTML={{ __html: mockProduct.description }}
                 />
              </div>
           </div>
        </section>

        {/* BUNDLES / PACKS */}
        <section className="container-custom mb-16">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-gray-900">Packs Disponibles</h2>
              <a href="#" className="text-primary font-bold text-sm hover:underline">Ver todos</a>
           </div>
           
           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {bundles.map(bundle => (
                 <div key={bundle.id} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow flex flex-col group">
                    <div className="relative mb-6 bg-gray-50 rounded-xl aspect-square flex items-center justify-center">
                       <img src={bundle.image} alt={bundle.name} className="w-3/4 h-3/4 object-contain" />
                       <Badge className="absolute top-3 right-3 bg-green-500 text-white font-bold shadow-sm border-none">
                          Ahorras {bundle.save}
                       </Badge>
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{bundle.name}</h3>
                    <div className="mt-auto flex items-center justify-between">
                       <span className="font-black text-xl">{bundle.price.toFixed(2)}€</span>
                       <Button size="sm" className="rounded-full w-10 h-10 p-0 bg-gray-900 hover:bg-primary transition-colors">
                          <Plus className="w-5 h-5" />
                       </Button>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* COMMUNITY SECTION */}
        <section className="bg-black text-white py-16">
           <div className="container-custom">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                 <div>
                    <h2 className="text-3xl md:text-4xl font-black mb-4">De nuestra comunidad</h2>
                    <p className="text-gray-400 max-w-lg">Únete a más de 50.000 vapers que comparten su experiencia. Etiquétanos con <span className="text-primary font-bold">@ivapeo_es</span></p>
                 </div>
                 <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                    <Instagram className="w-4 h-4 mr-2" /> Seguir en Instagram
                 </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {communityImages.map((img, i) => (
                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer bg-gray-800">
                       <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" alt="Community" />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                       <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                          <Heart className="w-3 h-3 fill-white text-white" /> 124
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
