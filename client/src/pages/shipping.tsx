import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Box, Truck, Clock, MapPin } from "lucide-react";
import { SeoHead } from "@/components/shared/seo-head";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <SeoHead 
        title="Envíos y Entregas | IVAPEO"
        description="Información sobre nuestros métodos de envío: Correos Express 24h y Glovo (Barcelona)."
      />
      <Navbar />

      <main className="pb-20">
        {/* Hero / Title */}
        <div className="bg-gray-50 py-12 md:py-16 border-b border-gray-100">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
              Información de Envíos
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Recibe tus productos favoritos en tiempo récord. Trabajamos con las mejores agencias para garantizar la máxima rapidez y seguridad.
            </p>
          </div>
        </div>

        <div className="container-custom max-w-5xl mx-auto py-12 space-y-16">
          
          {/* Provider 1: Correos Express */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
            {/* Logo Header */}
            <div className="bg-white p-8 flex justify-center items-center border-b border-gray-100 h-32">
              {/* Logo Replacement - Using Text/SVG combo if image fails, but try image first */}
              <div className="h-12 md:h-16 relative">
                 <img 
                   src="https://www.correosexpress.com/documents/20182/39360/logo-correos-express.png/7f315563-d30d-4760-9c1a-984e96042e6d?t=1536314334351" 
                   alt="Correos Express" 
                   className="h-full object-contain"
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.nextElementSibling?.classList.remove('hidden');
                   }}
                 />
                 <div className="hidden text-3xl font-black text-blue-600 tracking-tighter uppercase">
                    Correos <span className="text-red-600">Express</span>
                 </div>
              </div>
            </div>

            {/* Info Grid */}
            <div className="bg-gray-50/80 p-6 md:p-10 grid md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
              
              {/* Column 1 */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm text-gray-900">
                   <Box className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Envíos a domicilio en 24 horas</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    No se hacen entregas de pedidos los sábados, domingos, festivos locales y nacionales.
                  </p>
                  <p className="text-xs text-gray-400 mt-2 border-t border-gray-200 pt-2">
                    Los pedidos realizados en fin de semana, serán enviados los Lunes.
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm text-gray-900">
                   <Truck className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Tarifas de Envío</h3>
                   <div className="space-y-3">
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Península y Baleares</p>
                        <p className="text-sm text-gray-600">3.50€ <span className="text-green-600 font-bold">(Gratis a partir de 28€)</span></p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Canarias</p>
                        <p className="text-sm text-gray-600">10€ / 3-5 días</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm text-gray-900">
                   <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Hora de recogida</h3>
                  <p className="text-sm text-gray-500">
                    De Lunes a Viernes a las 18:30
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Haz tu pedido antes de esta hora para envío en el mismo día.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Provider 2: Glovo */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
            {/* Logo Header */}
            <div className="bg-white p-8 flex justify-center items-center border-b border-gray-100 h-32">
              <div className="h-12 md:h-16 relative">
                 <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Glovo_logo_orange.svg/2560px-Glovo_logo_orange.svg.png" 
                   alt="Glovo" 
                   className="h-full object-contain"
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.nextElementSibling?.classList.remove('hidden');
                   }}
                 />
                 <div className="hidden text-4xl font-black text-[#FFC244] tracking-tight italic">
                    Glovo!
                 </div>
              </div>
            </div>

            {/* Info Grid */}
            <div className="bg-gray-50/80 p-6 md:p-10 grid md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
              
              {/* Column 1 */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm text-gray-900">
                   <Box className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Recibe tu pedido en una hora</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-2">
                    Servicio disponible en Barcelona ciudad.
                  </p>
                  <p className="text-xs text-gray-400 border-t border-gray-200 pt-2">
                    No se hacen entregas de pedidos los sábados, domingos y festivos.
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm text-gray-900">
                   <Truck className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Envío Express</h3>
                   <p className="text-3xl font-black text-gray-900 mb-1">6.50€</p>
                   <p className="text-sm text-gray-500">
                     (solo envíos dentro de Barcelona ciudad)
                   </p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm text-gray-900">
                   <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Hora de recogida</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Todos los pedidos que entren antes de las <span className="font-bold text-gray-900">20:00</span> serán enviados.
                  </p>
                  <p className="text-xs text-gray-400 border-t border-gray-200 pt-2">
                    Los pedidos posteriores se entregarán a primera hora del día siguiente.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
