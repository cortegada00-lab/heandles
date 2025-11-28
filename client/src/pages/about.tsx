import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SeoHead } from "@/components/shared/seo-head";
import { MapPin, MessageSquare, Users, Star, Award, Heart, ShieldCheck, Phone } from "lucide-react";
import storeInterior from "@assets/generated_images/modern_vape_store_interior_with_clean_design.png";
import teamMeeting from "@assets/generated_images/team_of_vape_experts_working_together.png";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <SeoHead 
        title="Sobre Nosotros | IVAPEO - Líderes en Vapeo desde 2012"
        description="Descubre la historia de iVapeo.com, tu tienda experta en vapeo con más de 12 años de experiencia y 6 tiendas físicas en Barcelona."
      />
      <Navbar />

      <main className="flex-1">
        {/* Hero Section - Cinematic & Bold */}
        <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-black">
           <div className="absolute inset-0">
             <img 
               src={storeInterior} 
               alt="iVapeo Store Interior" 
               className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
           </div>
           
           <div className="container-custom relative h-full flex flex-col justify-center z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <span className="text-[#38bdf8] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Desde 2012</span>
                <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight mb-6">
                  Más que una tienda,<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">una pasión.</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
                  Llevamos más de una década definiendo el estándar del vapeo en España. Calidad, asesoramiento experto y las mejores marcas del mercado.
                </p>
                <div className="flex gap-4">
                   <Link href="/tiendas">
                     <Button size="lg" className="bg-[#38bdf8] hover:bg-[#0284c7] text-black font-bold px-8 rounded-full h-12">
                        Nuestras Tiendas
                     </Button>
                   </Link>
                   <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black font-bold rounded-full h-12">
                      Nuestra Historia
                   </Button>
                </div>
              </motion.div>
           </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-[#0f172a] text-white border-y border-white/10">
           <div className="container-custom">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                 {[
                    { icon: MapPin, label: "Tiendas Físicas", value: "6" },
                    { icon: Users, label: "Clientes Felices", value: "+50k" },
                    { icon: Award, label: "Años Experiencia", value: "12+" },
                    { icon: Star, label: "Reseñas 5 Estrellas", value: "+1.2k" }
                 ].map((stat, idx) => (
                    <div key={idx} className="py-8 px-4 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
                       <stat.icon className="w-6 h-6 text-[#38bdf8] mb-3 group-hover:scale-110 transition-transform" />
                       <span className="text-3xl font-black mb-1">{stat.value}</span>
                       <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">{stat.label}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Story Section */}
        <section className="py-24 bg-white overflow-hidden">
           <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <motion.div 
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6 }}
                   className="relative"
                 >
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#38bdf8]/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                       <img src={teamMeeting} alt="Equipo iVapeo" className="w-full h-auto object-cover" />
                       <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                          <p className="text-white font-bold text-lg">Un equipo apasionado</p>
                          <p className="text-gray-300 text-sm">Expertos en vapeo a tu servicio</p>
                       </div>
                    </div>
                 </motion.div>

                 <div className="space-y-8">
                    <div>
                       <span className="text-[#38bdf8] font-bold text-sm uppercase tracking-wider mb-2 block">Nuestra Historia</span>
                       <h2 className="text-4xl font-black text-gray-900 mb-6">De pioneros a referentes</h2>
                       <div className="w-20 h-1.5 bg-[#38bdf8] rounded-full mb-8"></div>
                    </div>
                    
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                       <p>
                          Fundada en <strong>2012</strong>, iVapeo nació con una misión clara: ofrecer una alternativa real y de calidad al tabaco tradicional. En un momento donde el vapeo era un desconocido, nosotros apostamos por la innovación.
                       </p>
                       <p>
                          Lo que comenzó como una pequeña tienda online ha crecido hasta convertirse en una red de <strong>6 tiendas físicas en Barcelona</strong> y uno de los ecommerce más respetados del sector en España.
                       </p>
                       <p>
                          No somos solo vendedores; somos asesores. Cada miembro de nuestro equipo es un experto capacitado para guiarte, ya sea que estés comprando tu primer kit de inicio o buscando el mod más avanzado.
                       </p>
                    </div>

                    <div className="flex gap-6 pt-4">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                             <ShieldCheck className="w-5 h-5" />
                          </div>
                          <span className="font-bold text-gray-800 text-sm">Productos Certificados</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                             <Heart className="w-5 h-5" />
                          </div>
                          <span className="font-bold text-gray-800 text-sm">Atención Personalizada</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Values / Features Grid */}
        <section className="py-20 bg-gray-50">
           <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="text-3xl font-black text-gray-900 mb-4">Por qué elegir iVapeo</h2>
                 <p className="text-gray-500 text-lg">Nuestro compromiso va más allá de la venta. Nos esforzamos por ofrecer la mejor experiencia de vapeo posible.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 {[
                    { title: "Asesoramiento Experto", desc: "No te venderemos lo más caro, sino lo que realmente necesitas para dejar de fumar.", icon: Users },
                    { title: "Catálogo Premium", desc: "Seleccionamos rigurosamente cada marca. Si no cumple nuestros estándares, no lo vendemos.", icon: Award },
                    { title: "Garantía Total", desc: "Servicio post-venta dedicado. Si tienes un problema con tu dispositivo, lo solucionamos.", icon: ShieldCheck }
                 ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                       <div className="w-14 h-14 bg-[#0f172a] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-slate-900/20">
                          <item.icon className="w-7 h-7" />
                       </div>
                       <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                       <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA / Support */}
        <section className="py-24 bg-[#0f172a] relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
           
           <div className="container-custom relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8">¿Tienes dudas? Hablemos.</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                 Nuestro equipo de soporte está disponible para resolver cualquier pregunta sobre productos, envíos o recomendaciones.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <a href="tel:+34935167167">
                    <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 font-bold h-14 px-8 rounded-xl text-lg">
                       <Phone className="w-5 h-5 mr-2" /> 935 167 167
                    </Button>
                 </a>
                 <Link href="/contacto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 font-bold h-14 px-8 rounded-xl text-lg">
                       <MessageSquare className="w-5 h-5 mr-2" /> Formulario de Contacto
                    </Button>
                 </Link>
              </div>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
