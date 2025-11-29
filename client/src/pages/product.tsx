import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductGallery, ProductInfo } from "@/components/product/product-details";
import { ProductTabs } from "@/components/product/product-tabs";
import { ProductSection } from "@/components/home/product-section";
import { Link } from "wouter";
import { mockProduct, mockCategoryProducts, mockHardwareProduct } from "@/lib/mock-data";
import { SeoHead } from "@/components/shared/seo-head";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, Plus } from "lucide-react";

export default function ProductPage() {
  // Demo State for Product Type (Liquid vs Hardware)
  // We keep this local as it's specific to the product demo, not the user session
  const [productType, setProductType] = useState<'liquid' | 'hardware'>('liquid');
  const [inStock, setInStock] = useState(true);

  const activeProduct = productType === 'liquid' ? mockProduct : mockHardwareProduct;

  return (
    <div className="min-h-screen bg-white text-foreground font-sans flex flex-col w-full overflow-x-hidden selection:bg-primary/20">
      <SeoHead 
        title={`${activeProduct.name} - IVAPEO`}
        description={`Compra ${activeProduct.name} en IVAPEO. Envío Gratis 24h. El mejor precio garantizado.`}
      />
      
      {/* Product Type Toggle (Demo Only) - Kept separate from User Toggle */}
      <div className="fixed bottom-24 right-4 z-40 bg-white shadow-xl border border-gray-200 p-2 rounded-lg flex flex-col gap-2 opacity-80 hover:opacity-100 transition-opacity md:bottom-20 md:left-4 md:right-auto">
        <span className="text-[10px] font-bold text-gray-400 uppercase text-center">Demo Producto</span>
        <div className="flex flex-col gap-1">
           <Button 
             size="sm" 
             variant={productType === 'liquid' ? "default" : "outline"}
             onClick={() => setProductType('liquid')}
             className="text-xs h-6 w-full justify-start"
           >
             Líquido
           </Button>
           <Button 
             size="sm" 
             variant={productType === 'hardware' ? "default" : "outline"}
             onClick={() => setProductType('hardware')}
             className="text-xs h-6 w-full justify-start"
           >
             Hardware
           </Button>
           <div className="h-px bg-gray-100 my-1"></div>
           <Button 
             size="sm" 
             variant={inStock ? "secondary" : "outline"}
             onClick={() => setInStock(!inStock)}
             className={`text-xs h-6 w-full justify-start ${!inStock ? 'text-red-500 border-red-200' : 'text-green-600'}`}
           >
             {inStock ? 'En Stock' : 'Sin Stock'}
           </Button>
        </div>
      </div>

      <Navbar />
      
      <main className="flex-1 py-6 md:py-8 pb-32 md:pb-8 relative">
        <div className="container-custom">
          {/* Mobile Back Button */}
          <div className="md:hidden mb-2">
             <Link href="/" className="text-sm font-bold text-gray-500 hover:text-primary flex items-center gap-1">
                &lt; VOLVER
             </Link>
          </div>

          {/* Breadcrumbs - Visible on Mobile */}
          <div className="block mb-6">
            <Breadcrumbs items={[
              { label: "Vape Kits", href: "/kits" },
              { label: activeProduct.brand, href: "/brands" },
              { label: activeProduct.name }
            ]} className="text-xs md:text-sm" />
          </div>

          {/* Main Product Grid - B.1 Mobile / B.2 Desktop Layout */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-16 items-start w-full max-w-full">
            
            {/* Left Column: Gallery */}
            <div className="lg:col-span-2 flex flex-col gap-8 min-w-0">
              <ProductGallery images={activeProduct.images} />
              
              {/* Desktop Tabs (B.2 - Hidden on Mobile) */}
              <div className="hidden lg:block mt-8">
                 <ProductTabs description={activeProduct.description} specs={activeProduct.specs} />
              </div>
            </div>
            
            {/* Right Column: Buy Box + Cross Sell */}
            <div className="lg:col-span-1 min-w-0 w-full">
              <div className="lg:sticky lg:top-24 space-y-8 w-full">
                <ProductInfo product={activeProduct} inStock={inStock} />
                
                {/* Desktop Cross Sell (B.2) */}
                <div className="hidden lg:block p-4 bg-gray-50 rounded-xl border border-gray-100">
                   <h4 className="font-bold text-gray-900 text-sm mb-3">Comprados juntos habitualmente</h4>
                   <div className="space-y-3">
                      {mockCategoryProducts.slice(0, 2).map(p => (
                        <div key={p.id} className="flex gap-3 items-center bg-white p-2 rounded border border-gray-200">
                           <img src={p.image} className="w-10 h-10 object-contain mix-blend-multiply" />
                           <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold text-gray-900 truncate">{p.name}</p>
                              <p className="text-xs text-gray-500">{p.price.toFixed(2)}€</p>
                           </div>
                           <Button size="icon" variant="outline" className="h-8 w-8 shrink-0">
                              <Plus className="w-4 h-4" />
                           </Button>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Mobile Cross Sell (B.1) - Horizontal Scroll */}
                <div className="block lg:hidden">
                   <div className="flex items-center gap-2 mb-3">
                      <h4 className="font-bold text-gray-900 text-sm">🔥 Completa tu vapeo:</h4>
                   </div>
                   <div className="flex overflow-x-auto gap-3 pb-4 -mx-4 px-4 scrollbar-hide">
                      {mockCategoryProducts.slice(0, 4).map(p => (
                        <div key={p.id} className="min-w-[140px] bg-white rounded-xl border border-gray-200 p-3 flex flex-col relative shadow-sm">
                           <div className="aspect-square mb-2 bg-gray-50 rounded-lg p-2">
                              <img src={p.image} className="w-full h-full object-contain mix-blend-multiply" />
                           </div>
                           <p className="text-xs font-bold text-gray-900 line-clamp-2 mb-1 h-8">{p.name}</p>
                           <div className="mt-auto pt-2 flex items-center justify-between">
                              <span className="font-bold text-xs">{p.price.toFixed(2)}€</span>
                              <button className="w-6 h-6 bg-green-100 text-green-700 rounded flex items-center justify-center hover:bg-green-200">
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Mobile Accordions (B.1) - SEO & Content */}
                <div className="block lg:hidden mt-6">
                   <Accordion type="single" collapsible className="w-full" id="details-accordion">
                      <AccordionItem value="description" className="border-b border-gray-100">
                        <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">
                           Descripción Detallada
                        </AccordionTrigger>
                        <AccordionContent>
                           <div className="prose prose-sm text-gray-600 max-w-none pb-4 break-words overflow-hidden">
                              <div dangerouslySetInnerHTML={{ __html: activeProduct.description }} />
                           </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="specs" className="border-b border-gray-100">
                        <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">
                           Ficha Técnica
                        </AccordionTrigger>
                        <AccordionContent>
                           <div className="space-y-2 pb-4">
                              {activeProduct.specs.map((spec, i) => (
                                <div key={i} className="flex justify-between text-sm border-b border-gray-50 pb-2 last:border-0">
                                  <span className="text-gray-500">{spec.name}</span>
                                  <span className="font-medium text-gray-900">{spec.value}</span>
                                </div>
                              ))}
                           </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="reviews" className="border-b border-gray-100">
                        <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">
                           Opiniones ({activeProduct.reviews})
                        </AccordionTrigger>
                        <AccordionContent>
                           <div className="pb-4">
                              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                                <span className="text-sm text-gray-900 font-bold ml-2">{activeProduct.rating}/5</span>
                              </div>
                              <p className="text-sm text-gray-600 italic">"Excelente producto, envío muy rápido." - Cliente Verificado</p>
                           </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="faq" className="border-b border-gray-100">
                        <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">
                           Preguntas Frecuentes
                        </AccordionTrigger>
                        <AccordionContent>
                           <div className="space-y-4 pb-4">
                              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                 <h5 className="font-bold text-blue-900 text-xs mb-2 uppercase">¿Qué incluye la caja?</h5>
                                 <p className="text-sm text-blue-800/80">El kit suele incluir el dispositivo, cable de carga y manual. Verifica la descripción para detalles exactos.</p>
                              </div>
                              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                 <h5 className="font-bold text-blue-900 text-xs mb-2 uppercase">¿Garantía?</h5>
                                 <p className="text-sm text-blue-800/80">Todos nuestros dispositivos tienen 3 años de garantía oficial en España.</p>
                              </div>
                           </div>
                        </AccordionContent>
                      </AccordionItem>
                   </Accordion>
                </div>

              </div>
            </div>
          </div>

          {/* Related Products - Bottom */}
          <div className="mb-24 lg:mt-24 -mx-4 md:mx-0">
            <ProductSection 
              title="Productos Relacionados" 
              subtitle="Productos similares de la misma categoría"
              products={mockCategoryProducts.slice(0, 5)}
              showSidebar={false}
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
