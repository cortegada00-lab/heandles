import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/High_tech_vape_mod_kit_444d8fd5.png";
import { Link } from "wouter";

export function Hero() {
  return (
    <div className="bg-white text-foreground overflow-hidden relative min-h-[550px] flex items-center border-b border-gray-100">
      {/* Clean Background - No messy gradients */}
      <div className="absolute inset-0 z-0 bg-gray-50"></div>

      <div className="container-custom relative z-10 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-red-600">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              Especial Navidad
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[0.95] tracking-tight text-gray-900">
              VAPING <br/>
              <span className="text-primary">REDEFINED</span>
            </h1>
            
            <p className="text-gray-500 text-lg md:text-xl max-w-md font-medium leading-relaxed">
              Regala tecnología premium. <span className="text-gray-900 font-bold">15% DTO. EXTRA</span> con el código: <span className="text-primary font-mono tracking-wider bg-primary/10 px-1 rounded">NAVIDAD15</span>
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/product">
                <Button size="lg" className="h-12 px-8 rounded-md bg-primary text-white hover:bg-primary/90 font-bold tracking-wide shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5">
                  Ver Ofertas
                </Button>
              </Link>
              <Link href="/kits">
                <Button size="lg" variant="outline" className="h-12 px-8 rounded-md border-gray-300 text-gray-700 hover:bg-gray-50 font-bold tracking-wide transition-transform hover:-translate-y-0.5">
                  Guía de Regalos
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 text-sm font-medium text-gray-500 w-fit">
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                 En Stock
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-primary rounded-full"></div>
                 Envío 24h (L-V, excepto festivos)
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative h-[400px] md:h-[500px] order-1 md:order-2 flex items-center justify-center">
             {/* Subtle circle background instead of messy blobs */}
             <div className="absolute w-[400px] h-[400px] bg-gray-100 rounded-full blur-3xl -z-10"></div>
             
            <img 
              src={heroImage} 
              alt="Premium Vape Device" 
              className="relative w-auto h-full max-h-[500px] object-contain drop-shadow-2xl z-10 animate-in zoom-in-95 duration-1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
