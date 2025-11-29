import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroGrid } from "@/components/home/hero-grid";
import { HeroDashboard } from "@/components/home/hero-dashboard";
import { ReorderCarousel } from "@/components/home/reorder-carousel";
import { TrustMarquee } from "@/components/home/trust-marquee";
import { CategoryGrid } from "@/components/home/category-grid";
import { ProductSection } from "@/components/home/product-section";
import { SeoContent } from "@/components/home/seo-content";
import { Brands } from "@/components/home/brands";
import { SeoHead } from "@/components/shared/seo-head";
import { Mail, ArrowRight, Gift } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  // Simulating user state for demo purposes
  // In a real app, this would come from an auth hook
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-white text-foreground font-sans flex flex-col relative">
      <SeoHead 
        title={isLoggedIn ? "iVapeo - Tu Panel" : "IVAPEO - Tu Tienda de Vapeo Online nº1 en España"}
        description="Encuentra los mejores vapers, e-liquids y accesorios. Envíos gratis en 24h. Expertos en vapeo desde 2014."
      />
      
      {/* Demo Toggle - Floating for prototype visibility */}
      <div className="fixed bottom-4 left-4 z-50 bg-white shadow-2xl border border-gray-200 p-2 rounded-lg flex items-center gap-2 hidden md:flex">
        <span className="text-xs font-bold text-gray-500 uppercase">Vista:</span>
        <Button 
          size="sm" 
          variant={isLoggedIn ? "default" : "outline"}
          onClick={() => setIsLoggedIn(true)}
          className="text-xs h-7"
        >
          Cliente (Logado)
        </Button>
        <Button 
          size="sm" 
          variant={!isLoggedIn ? "default" : "outline"}
          onClick={() => setIsLoggedIn(false)}
          className="text-xs h-7"
        >
          Invitado (Nuevo)
        </Button>
      </div>

      <Navbar />
      <main className="flex-1">
        
        {isLoggedIn ? (
          /* LOGGED IN USER VIEW ("Power User") */
          <>
             {/* Zone 2: Dashboard Hero */}
             <HeroDashboard />

             {/* Zone 3: Trust Marquee (Shared) */}
             <TrustMarquee />

             {/* Zone 4: Reorder Express */}
             <ReorderCarousel />

             {/* Zone 5: Category Bento (Shared but secondary) */}
             <div className="opacity-80 hover:opacity-100 transition-opacity">
               <CategoryGrid />
             </div>
          </>
        ) : (
          /* GUEST USER VIEW */
          <>
            {/* Unified Hero for Canyon Style */}
            <HeroGrid />
            
            {/* Marquee below Hero */}
            <TrustMarquee />
            
            {/* Category Icons Grid */}
            <CategoryGrid />
            
            <Brands />

            {/* Guest specific content like Brand Zones & SEO */}
            <div className="container-custom mb-16">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Vaporesso Banner */}
                  <Link href="/vaporesso">
                    <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500">
                        <img 
                          src="https://images.unsplash.com/photo-1534234828563-02511c75728d?q=80&w=2669&auto=format&fit=crop" 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          alt="Vaporesso Technology Banner"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                        <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12 max-w-lg">
                            <div className="bg-cyan-500 text-black text-[10px] font-bold px-2 py-1 rounded w-fit mb-4 uppercase tracking-wider">Zona Vaporesso</div>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-2 leading-tight">
                              VAPORESSO
                            </h2>
                            <p className="text-cyan-400 font-bold text-xl mb-4 tracking-wide">BEYOND ORDINARY</p>
                            <p className="text-gray-300 text-sm mb-8 max-w-xs line-clamp-2">
                              Descubre la tecnología COREX y Chip AXON.
                            </p>
                            <Button size="sm" className="w-fit bg-white text-black hover:bg-cyan-400 hover:text-black border-none font-bold text-sm h-10 px-6 rounded-full transition-all">
                              Ver Marca <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                  </Link>

                  {/* OXVA Banner */}
                  <Link href="/oxva">
                    <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500">
                        <img 
                          src="@assets/generated_images/oxva_vape_product_closeup.png" 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          alt="OXVA Brand"
                          onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1534234828563-02511c75728d?q=80&w=2669&auto=format&fit=crop"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black via-red-950/80 to-transparent"></div>
                        <div className="relative z-10 h-full flex flex-col justify-center items-end text-right p-8 md:p-12 max-w-lg ml-auto">
                            <div className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded w-fit mb-4 uppercase tracking-wider">Zona OXVA</div>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-2 leading-tight">
                              OXVA
                            </h2>
                            <p className="text-red-500 font-bold text-xl mb-4 tracking-wide">XTREME FLAVOR</p>
                            <p className="text-gray-300 text-sm mb-8 max-w-xs line-clamp-2">
                              La revolución del sabor con la serie XLIM PRO.
                            </p>
                            <Button size="sm" className="w-fit bg-white text-black hover:bg-red-600 hover:text-white border-none font-bold text-sm h-10 px-6 rounded-full transition-all">
                              Ver Marca <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                  </Link>
                </div>
            </div>

            <div className="container-custom mb-12">
               <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                     <div className="text-white max-w-xl space-y-4 text-center md:text-left">
                        <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider border border-green-500/30">
                           Novedad Consumibles
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                           Ahorra comprando en Pack
                        </h2>
                        <p className="text-gray-300 text-lg">
                           Descubre nuestro nuevo sistema de precios por volumen. Cuanto más compras, más ahorras. Ideal para tus resistencias y cartuchos favoritos.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start pt-2">
                           <Link href="/product/smok-novo-pod-mesh">
                              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold">
                                 Ver Ejemplo (Smok Novo) <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                           </Link>
                        </div>
                     </div>
                     
                     {/* Visual Mockup of Tiers */}
                     <div className="flex gap-4 items-end">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center w-24 transform translate-y-4 opacity-80">
                           <div className="text-2xl font-black text-white">1</div>
                           <div className="text-xs text-gray-300 uppercase font-bold">Unidad</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center w-28 transform translate-y-0 shadow-xl">
                           <div className="text-green-400 text-xs font-bold mb-1">-5% DTO</div>
                           <div className="text-3xl font-black text-white">5+</div>
                           <div className="text-xs text-gray-200 uppercase font-bold">Unidades</div>
                        </div>
                        <div className="bg-green-500/20 backdrop-blur-sm p-4 rounded-xl border border-green-500/30 text-center w-32 transform -translate-y-4 shadow-2xl shadow-green-900/50">
                           <div className="text-green-400 text-xs font-bold mb-1">-10% DTO</div>
                           <div className="text-4xl font-black text-white">10+</div>
                           <div className="text-xs text-gray-200 uppercase font-bold">Unidades</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <SeoContent />
          </>
        )}
      </main>

      {/* Newsletter - Only show for Guests (or if explicitly wanted, but specs said hide) */}
      {!isLoggedIn && (
        <section className="bg-gray-50 border-t border-gray-100 py-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-40 pointer-events-none">
             <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="bg-white shadow-xl shadow-gray-100/50 rounded-2xl p-8 md:p-12 border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center lg:text-left space-y-4">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                  <Gift className="w-3.5 h-3.5" /> Regalo de Bienvenida
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-black tracking-tight text-gray-900">
                  ¿Primera vez en iVapeo?
                </h2>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  Suscríbete a nuestra newsletter y consigue un <span className="text-primary font-bold">10% de descuento</span> en tu primera compra.
                  <br/><span className="text-xs text-gray-400 mt-1 block">*Oferta válida para nuevos clientes</span>
                </p>
              </div>

              <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="email" 
                    placeholder="Tu correo electrónico" 
                    className="w-full h-12 pl-12 pr-4 rounded-lg bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 border border-gray-200 focus:border-primary transition-all text-sm font-medium"
                  />
                </div>
                <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all hover:translate-y-[-1px]">
                  Conseguir 10% DTO
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer - Massive & Professional */}
      <Footer />
    </div>
  );
}
