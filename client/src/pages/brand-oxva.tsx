import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/product/product-card";
import { ArrowRight, Zap, Shield, Cpu, Flame, Droplets, Battery } from "lucide-react";
import { Link } from "wouter";
import { SeoHead } from "@/components/shared/seo-head";
import oxvaBg from "@assets/generated_images/oxva_lifestyle_hero_background.png";

import { Pagination } from "@/components/shared/pagination";
import { BrandPromotions } from "@/components/brand/brand-promotions";
import giftImage from "@assets/generated_images/vape_promotional_gift_set.png";

// Mock Data for OXVA Products
const products = [
  {
    id: 201,
    name: "OXVA XLIM Pro Kit",
    price: 28.90,
    oldPrice: 32.90,
    image: "https://www.ivapeo.com/img/p/6/7/8/9/6789-large_default.jpg",
    rating: 5,
    reviews: 342,
    tag: "TOP VENTAS",
    category: "pods"
  },
  {
    id: 202,
    name: "OXVA XLIM SQ Pro",
    price: 26.90,
    oldPrice: 29.90,
    image: "https://www.ivapeo.com/img/p/7/8/9/0/7890-large_default.jpg",
    rating: 5,
    reviews: 156,
    tag: "NOVEDAD",
    category: "pods"
  },
  {
    id: 203,
    name: "OXVA ONEO Pod Kit",
    price: 29.90,
    oldPrice: 34.90,
    image: "https://www.ivapeo.com/img/p/8/9/0/1/8901-large_default.jpg",
    rating: 4,
    reviews: 89,
    tag: "PREMIUM",
    category: "pods"
  },
  {
    id: 204,
    name: "OXVA Arbiter 2 RTA",
    price: 34.90,
    oldPrice: 39.90,
    image: "https://www.ivapeo.com/img/p/9/0/1/2/9012-large_default.jpg",
    rating: 5,
    reviews: 210,
    tag: "RTA",
    category: "tanks"
  },
  {
    id: 205,
    name: "Resistencias XLIM V3",
    price: 12.50,
    oldPrice: null,
    image: "https://www.ivapeo.com/img/p/1/2/3/4/1234-large_default.jpg",
    rating: 5,
    reviews: 890,
    tag: "PACK x3",
    category: "coils"
  },
  {
    id: 206,
    name: "OXVA Artio Pod",
    price: 14.90,
    oldPrice: 18.90,
    image: "https://www.ivapeo.com/img/p/2/3/4/5/2345-large_default.jpg",
    rating: 4,
    reviews: 45,
    tag: "ECONÓMICO",
    category: "pods"
  },
  {
    id: 207,
    name: "OXVA Origin SE",
    price: 32.90,
    oldPrice: 38.90,
    image: "https://www.ivapeo.com/img/p/4/5/6/7/4567-large_default.jpg",
    rating: 4,
    reviews: 78,
    tag: null,
    category: "mods"
  },
  {
    id: 208,
    name: "Cartucho ONEO Pod",
    price: 10.90,
    oldPrice: null,
    image: "https://www.ivapeo.com/img/p/5/6/7/8/5678-large_default.jpg",
    rating: 5,
    reviews: 120,
    tag: "PACK x3",
    category: "pods"
  }
];

export default function BrandOxvaPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SeoHead 
        title="OXVA - Xtreme Flavor & Vaping Technology | Tienda Oficial"
        description="Descubre la gama OXVA XLIM, ONEO y Arbiter. Sabor extremo y diseño innovador. Envío 24h."
      />
      <Navbar />

      <main>
        {/* HERO SECTION - VIBRANT & BOLD */}
        <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-r from-red-900 to-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                  src={oxvaBg}
                  alt="OXVA Lifestyle" 
                  className="w-full h-full object-cover opacity-60 mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container-custom h-full flex flex-col justify-center items-center text-center">
                <div className="max-w-3xl space-y-6 animate-in zoom-in duration-700">
                    {/* Logo Replaced with Text to avoid white box issue */}
                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none drop-shadow-2xl mb-4">
                        OXVA
                    </h2>
                    
                    <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tight leading-none drop-shadow-2xl">
                        XTREME <span className="text-red-500">FLAVOR</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 font-light tracking-wide px-4">
                        Redefiniendo la experiencia de vapeo con la serie XLIM
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 pt-8 justify-center items-center px-4">
                        <Link href="/novedades">
                          <Button className="w-full md:w-auto h-14 px-10 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xl shadow-[0_0_30px_rgba(220,38,38,0.6)] border-none transition-transform hover:scale-105">
                              Descubrir XLIM PRO
                          </Button>
                        </Link>
                        <a href="#products" onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                        }} className="w-full md:w-auto">
                           <Button variant="outline" className="w-full md:w-auto h-14 px-10 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-red-600 font-bold text-xl backdrop-blur-sm">
                              Ver Catálogo
                           </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* TECH HIGHLIGHTS - GRID */}
        <div className="bg-[#111] py-20 border-t border-red-900/30">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">Tecnología OXVA</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Innovación constante para ofrecer el sabor más puro y la mejor experiencia de usuario.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-red-600 transition-colors group relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-all"></div>
                        <Droplets className="w-12 h-12 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold text-white mb-3">Anti-Leak Design</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Diseño de cartucho altamente resistente a fugas para una experiencia limpia y sin condensación.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-purple-600 transition-colors group relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all"></div>
                        <Battery className="w-12 h-12 text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold text-white mb-3">Long Lasting Battery</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Baterías de alta densidad optimizadas para durar hasta 3 días con una sola carga en la serie XLIM.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-blue-600 transition-colors group relative overflow-hidden">
                         <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
                        <Zap className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold text-white mb-3">Max Power Output</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Salida de potencia constante y ajustable hasta 30W para sacar el máximo partido a tus sales de nicotina.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <BrandPromotions 
          brandName="OXVA" 
          promotions={[
            {
              id: "oxva-promo-1",
              title: "Pack Inicio XLIM",
              description: "Compra un OXVA XLIM Pro y llévate un estuche de transporte GRATIS.",
              requiredProduct: {
                id: 201,
                name: "OXVA XLIM Pro Kit",
                price: 28.90,
                image: "https://www.ivapeo.com/img/p/6/7/8/9/6789-large_default.jpg"
              },
              gift: {
                name: "Estuche OXVA Premium",
                image: giftImage,
                value: "9.90 €"
              },
              color: "from-red-500 to-pink-500"
            },
            {
              id: "oxva-promo-2",
              title: "Dúo Sabor Extremo",
              description: "Llévate el nuevo OXVA ONEO y recibe un pack de resistencias V3 de regalo.",
              requiredProduct: {
                id: 203,
                name: "OXVA ONEO Pod Kit",
                price: 29.90,
                image: "https://www.ivapeo.com/img/p/8/9/0/1/8901-large_default.jpg"
              },
              gift: {
                name: "Resistencias ONEO (Pack x3)",
                image: "https://www.ivapeo.com/img/p/5/6/7/8/5678-large_default.jpg",
                value: "10.90 €"
              },
              color: "from-blue-500 to-cyan-500"
            }
          ]} 
        />

        {/* PRODUCT SERIES TABS */}
        <div id="products" className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight mb-2">Productos <span className="text-red-600">OXVA</span></h2>
                        <div className="w-24 h-1.5 bg-red-600 rounded-full"></div>
                    </div>
                </div>

                <Tabs defaultValue="all" className="w-full">
                    <div className="w-full overflow-x-auto pb-4 md:pb-0 mb-8 md:mb-12 flex md:justify-center -mx-4 px-4 md:mx-0 scrollbar-hide">
                        <TabsList className="bg-white p-1.5 md:p-1 rounded-full shadow-sm border border-gray-200 h-auto inline-flex min-w-max md:min-w-0">
                            <TabsTrigger value="all" className="rounded-full px-6 md:px-8 py-2.5 md:py-0 h-auto md:h-12 text-sm md:text-base font-bold data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all">Todo</TabsTrigger>
                            <TabsTrigger value="pods" className="rounded-full px-6 md:px-8 py-2.5 md:py-0 h-auto md:h-12 text-sm md:text-base font-bold data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all">XLIM / Pods</TabsTrigger>
                            <TabsTrigger value="mods" className="rounded-full px-6 md:px-8 py-2.5 md:py-0 h-auto md:h-12 text-sm md:text-base font-bold data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all">Origin / Mods</TabsTrigger>
                            <TabsTrigger value="tanks" className="rounded-full px-6 md:px-8 py-2.5 md:py-0 h-auto md:h-12 text-sm md:text-base font-bold data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all">Atomizadores</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="all" className="animate-in fade-in duration-500">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                        <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
                    </TabsContent>
                    
                    <TabsContent value="pods" className="animate-in fade-in duration-500">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.filter(p => p.category === 'pods').map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                        <Pagination currentPage={1} totalPages={2} onPageChange={() => {}} />
                    </TabsContent>

                    <TabsContent value="mods" className="animate-in fade-in duration-500">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.filter(p => p.category === 'mods').map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                        <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
                    </TabsContent>

                    <TabsContent value="tanks" className="animate-in fade-in duration-500">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.filter(p => p.category === 'tanks').map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                        <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>

        {/* SEO CONTENT SECTION */}
        <div className="bg-white py-16 border-t border-gray-100">
          <div className="container-custom max-w-4xl mx-auto prose prose-slate prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Compra vapers Oxva</h2>
            <p className="text-gray-600 mb-6">
              ¿Te interesan los cigarrillos electrónicos? Si quieres vapear sin problemas y vivir una experiencia distinta, confía en la marca Oxva. Disponemos de todo lo relacionado con la alquimia, el coil, la resistencia o el atomizador de tu nuevo dispositivo. Compra productos Oxva online y seguro que te alegras de haber tomado tan acertada decisión.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Empieza a vapear con Oxva al mejor precio</h3>
            <p className="text-gray-600 mb-6">
              La marca Oxva es sinónimo de calidad, durabilidad y resistencia utilizada continua. Entre los productos Oxva destacan sus rta (la alternativa de arbiter solo rta es siempre eficaz), la opción de elegir un depósito con los ml que prefieras o la opción de adquirir un atomizador single coil que te permita aprovechar al máximo el sabor de cada líquido hasta la última gota.
            </p>
            <p className="text-gray-600 mb-6">
              Gracias a su sistema dual es posible pasar de caladas mtl a rdl. Para ello, elige un tanque con la capacidad más acorde a tus gustos. No te olvides del drip para que puedas montar tu cigarrillo a tu gusto. De ello se trata, de poder aumentar la cantidad de líquido o la intensidad del sabor en cada momento sin tener que ajustarte a ningún tipo de molde o requisito previo.
            </p>
            <p className="text-gray-600 mb-6">
              Completamos la oferta anterior con recambios, las bolsas de accesorios y todo lo necesario para reparar tu dispositivo de vapeo con enorme facilidad. Solo tienes que desenroscar, atornillar y, por supuesto, leer el manual de usuario para que el montaje sea el adecuado. Siempre revisamos los productos que tenemos a la venta para que puedas montarlos, repararlos o modificarlos respetando sus características originales.
            </p>
            <p className="text-gray-600 mb-6">
              Este fabricante atesora una larga experiencia en el sector del ivapeo. De hecho, los vapers la consideran una de las más aconsejables. En nuestra tienda online disponemos de todo lo que necesitas, adquiere un pod kit, un regulador de aire, un arbiter o las resistencias dlt que necesitas para conjugar el verbo to vape en tiempo presente. Decide cómo quieres que sea cada calada y disfruta del sabor excepcional de nuestros líquidos.
            </p>
            <p className="text-gray-600 mb-6">
              Tenemos todo lo necesario para que el vaping te ayude a racionalizar la cantidad de nicotina que consumes. Dispositivos electrónicos, accesorios y otros complementos forman parte de nuestra oferta comercial. Si lo tenemos todo es porque nos preocupamos por conseguir la máxima satisfacción de nuestros clientes. Su nivel de exigencia crece con el tiempo y nosotros nos encargamos de superar tus expectativas y de ofrecerte siempre las últimas novedades del mercado.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Escoge el pod kit Oxva XLIM y disfruta en cada calada</h3>
            <p className="text-gray-600 mb-6">
              La marca ha lanzado los diferentes dispositivos de tamaño reducido y compacto con batería integrada para vapeadores que buscan una potente y confiable respuesta.
            </p>
            <p className="text-gray-600 mb-6">
              Vapea con calada automática con sales de nicotina y e-líquido y descubre la mejor experiencia al mejor precio.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3">Vaper Recargable Oxva Xlim Pro</h4>
            <p className="text-gray-600 mb-4">
              Los pods Oxva Xlim Pro cuentan con un diseño atractivo y una potencia de salida de 30W cosa que lo hace del todo ideal tanto para vapers principiantes que quieran dejar de fumar como para los más avanzados que quieran llevar encima modelo ergonómico y manejable.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Cuenta con flujo de aire apta para vapear con una inhalación directa a los pulmones (DL) o boca a pulmón (MTL).</li>
              <li>El dispositivo pod Oxva cuenta con una batería incorporada interna de larga duración y se carga a través de un puerto usb-c, lo que asegura una carga rápida.</li>
              <li>Equipado con una mini pantalla a color de 0.96 pulgadas y está diseñado para ofrecer diferentes temas configurables y ver el nivel de batería.</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mb-3">Vapeo con Oxva Xlim V2</h4>
            <p className="text-gray-600 mb-4">
              El OXVA XLIM V2 uno de los mejores pods de la serie XLIM de OXVA con los que vas a descubrir un vapeo de calidad. Conocido por su diseño ligero y compacto y con un rendimiento eficiente lo hacen adecuado para llevar siempre contigo.
            </p>
            <p className="text-gray-600 mb-6">
              Ofrece una potencia máxima de 25W suficiente para proporcionar una experiencia de vapeo satisfactoria tanto para inhalación directa a los pulmones (DL) como para boca a pulmón (MTL). Viene equipado con una batería de 900 mah, lo que asegura una buena duración. Este vaper Oxva Xlim ofrece cuenta con una pantalla OLED de 0.42 pulgadas, lo que facilita la configuración y muestra el nivel de la bateria para asegurar que nunca te quedes sin carga con tu Xlim Pod.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cartuchos vape para tus cigarrillos electrónicos Oxva</h3>
            <p className="text-gray-600 mb-6">
              Los cartuchos OXVA son una excelente opción para quienes buscan calidad y rendimiento. Son compatibles con varios dispositivos de la marca, como los modelos XLIM SE, XLIM Pro, y Origin X. Estos destacan por su diseño a prueba de fugas y su fácil recarga, lo que los hace muy prácticos para el uso diario.
            </p>
            <p className="text-gray-600 mb-6">
              Ofrecen varias opciones de resistencia, como 0.8ohm y 1.2ohm, permitiendo personalizar tu experiencia de vapeo según tus preferencias. Con una capacidad de 2 ml, proporcionan una duración adecuada para sesiones prolongadas sin necesidad de recargas. Además, están fabricados con materiales de alta calidad, asegurando durabilidad y un rendimiento consistente.
            </p>
            <p className="text-gray-600 mb-6">
              Si buscas cápsulas que combinan facilidad de uso, compatibilidad y un rendimiento excepcional, las recargas OXVA son una excelente elección ¡Haz tu compra hoy y disfruta de una experiencia de vapeo superior!
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Escoge el vaper Oxva y disfruta de un vapeo de calidad</h3>
            <p className="text-gray-600 mb-6">
              El libro de los gustos está en blanco por lo que solo ampliando nuestra oferta podemos conseguir que encuentres en nuestra web todo lo que necesitas para vapear mejor que nunca. Si te preguntas cuáles son las condiciones de la compra online en nuestra web has de saber que son las mismas que en nuestra tienda física. Tras abonar tu compra podrás realizar el seguimiento a envíos y devoluciones. La entrega se suele realizar en las 48 horas siguientes al abono del pedido.
            </p>
            <p className="text-gray-600 mb-6">
              En caso de tener algún tipo de duda sobre nuestros productos, solo tienes que contactar con nuestro servicio de atención al cliente. Disponemos de varios agentes que te asesorarán eficazmente sobre la opción más adecuada en tu caso. Trabajamos con las mejores marcas y atesoramos una larga experiencia en el sector.
            </p>
            <p className="text-gray-600 mb-8">
              Si te quieres pasar al vapeo, solo tienes que acceder a nuestra página web. Encontrarás de todo y a un precio único. Confía en nuestra profesionalidad y en la garantía de calidad que te ofrece Oxva, una marca a tu medida que no va a defraudarte. Comienza ya una nueva etapa como vaper y usa productos de calidad reconocida a un precio irresistible.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Modelos Oxva que no te puedes perder</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-600 font-medium">
                <li>• Oxva Xlim</li>
                <li>• Oxva Xlim Pro</li>
                <li>• Oxva Xlim Sq</li>
                <li>• Resistencias Oxva</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}