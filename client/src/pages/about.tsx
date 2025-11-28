import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SeoHead } from "@/components/shared/seo-head";
import { MapPin, MessageSquare, Users, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <SeoHead 
        title="Sobre Nosotros | IVAPEO - Tu tienda de confianza"
        description="Somos iVapeo.com, especialistas en vapeo desde 2012 con 6 tiendas físicas en Barcelona. Descubre nuestra historia."
      />
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Hero */}
        <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="container-custom relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tight">
                Somos <span className="text-primary">iVapeo</span>®
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Especialistas en vapeo desde 2012. Calidad, profesionalidad y pasión por lo que hacemos.
              </p>
           </div>
        </div>

        <div className="container-custom py-16 max-w-5xl space-y-20">
           
           {/* Intro Section */}
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <h2 className="text-3xl font-black text-gray-900 uppercase">Nuestra Historia</h2>
                 <div className="w-20 h-1 bg-primary"></div>
                 <p className="text-gray-600 leading-relaxed">
                   Somos <strong>iVapeo.com</strong>, una empresa especializada en la venta de cigarrillos electrónicos, MODs, e-liquids, aromas y accesorios de vapeo desde 2012, enfocada en ofrecer tanto productos como servicio de calidad y profesionalidad.
                 </p>
                 <p className="text-gray-600 leading-relaxed">
                   Actualmente disponemos de <strong>seis tiendas físicas en Barcelona</strong> y sitio web, dando así diversas posibilidades de compra a nuestros clientes. Nuestro objetivo principal es ofrecer la excelencia en nuestro servicio al cliente, logrando así dar la mejor experiencia posible tanto a nuevos usuarios como a los más avanzados.
                 </p>
              </div>
              <div className="relative">
                 <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
                 <img 
                   src="https://www.ivapeo.com/img/cms/santacoloma-ivapeo_1.webp" 
                   alt="Tienda iVapeo" 
                   className="rounded-2xl shadow-xl relative z-10 w-full object-cover"
                   onError={(e) => e.currentTarget.src = "https://placehold.co/600x400?text=Tienda+iVapeo"}
                 />
              </div>
           </div>

           {/* Stats / Thanks */}
           <div className="bg-gray-50 rounded-2xl p-10 md:p-16 text-center space-y-8 border border-gray-100">
              <h3 className="text-2xl font-black text-gray-900 uppercase">Gracias por confiar en nosotros</h3>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Nos gustaría aprovechar para agradecer a todos nuestros clientes nuevos y habituales su apoyo durante todo este tiempo, las <strong>más de 1.000 reseñas</strong> que hemos recibido y la confianza que han depositado en nosotros.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                 <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-primary mb-2">
                       <MapPin className="w-8 h-8" />
                    </div>
                    <span className="text-4xl font-black text-gray-900">6</span>
                    <span className="text-sm text-gray-500 uppercase font-bold tracking-wider">Tiendas Físicas</span>
                 </div>
                 <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-primary mb-2">
                       <Star className="w-8 h-8" />
                    </div>
                    <span className="text-4xl font-black text-gray-900">+1000</span>
                    <span className="text-sm text-gray-500 uppercase font-bold tracking-wider">Reseñas Positivas</span>
                 </div>
                 <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-primary mb-2">
                       <Users className="w-8 h-8" />
                    </div>
                    <span className="text-4xl font-black text-gray-900">2012</span>
                    <span className="text-sm text-gray-500 uppercase font-bold tracking-wider">Desde</span>
                 </div>
              </div>
           </div>

           {/* Support Section */}
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                 <img 
                   src="https://www.ivapeo.com/img/cms/atencion_1.webp" 
                   alt="Atención al Cliente" 
                   className="max-w-xs md:max-w-md object-contain drop-shadow-xl"
                   onError={(e) => e.currentTarget.src = "https://placehold.co/400x400?text=Soporte"}
                 />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                 <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                    <MessageSquare className="w-4 h-4" /> Centro de Soporte
                 </div>
                 <h2 className="text-3xl font-black text-gray-900 uppercase">Atención al Cliente</h2>
                 <p className="text-gray-600 leading-relaxed">
                   Si tiene cualquier duda, consulta o incidencia tanto en cualquiera de nuestras tiendas como con cualquier pedido o producto, no dude en ponerse en contacto con nosotros.
                 </p>
                 
                 <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                       <div className="bg-gray-100 p-3 rounded-lg">
                          <span className="text-2xl">📞</span>
                       </div>
                       <div>
                          <p className="text-xs text-gray-500 uppercase font-bold">Llámanos</p>
                          <p className="text-xl font-black text-gray-900">935 167 167</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                       <div className="bg-gray-100 p-3 rounded-lg">
                          <span className="text-2xl">📧</span>
                       </div>
                       <div>
                          <p className="text-xs text-gray-500 uppercase font-bold">Escríbenos</p>
                          <p className="text-lg font-bold text-gray-900">soporte@ivapeo.com</p>
                       </div>
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