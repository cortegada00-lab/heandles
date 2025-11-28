import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/product/product-card";
import { ArrowRight, Zap, Shield, Cpu, Flame } from "lucide-react";
import { Link, useLocation } from "wouter";
import { SeoHead } from "@/components/shared/seo-head";
import vaporessoBg from "@assets/generated_images/vaporesso_style_background.png";

import { BrandPromotions } from "@/components/brand/brand-promotions";
import giftImage from "@assets/generated_images/vape_promotional_gift_set.png";

import { Pagination } from "@/components/shared/pagination";

// Mock Data for Vaporesso Products
const products = [
  {
    id: 101,
    name: "Vaporesso XROS 3 Pod Kit",
    price: 24.90,
    oldPrice: 29.90,
    image: "https://www.ivapeo.com/img/p/4/5/6/7/4567-large_default.jpg",
    rating: 5,
    reviews: 128,
    tag: "TOP VENTAS",
    category: "pods"
  },
  {
    id: 102,
    name: "Vaporesso LUXE XR Max",
    price: 39.90,
    oldPrice: 45.00,
    image: "https://www.ivapeo.com/img/p/5/6/7/8/5678-large_default.jpg",
    rating: 5,
    reviews: 85,
    tag: "NOVEDAD",
    category: "pods"
  },
  {
    id: 103,
    name: "Vaporesso GEN 200 Kit",
    price: 54.90,
    oldPrice: 65.00,
    image: "https://www.ivapeo.com/img/p/6/7/8/9/6789-large_default.jpg",
    rating: 4,
    reviews: 210,
    tag: "OFERTA",
    category: "mods"
  },
  {
    id: 104,
    name: "Vaporesso Target 100",
    price: 49.90,
    oldPrice: 55.00,
    image: "https://www.ivapeo.com/img/p/7/8/9/0/7890-large_default.jpg",
    rating: 4,
    reviews: 95,
    tag: null,
    category: "mods"
  },
  {
    id: 105,
    name: "Resistencias GTX Mesh",
    price: 14.50,
    oldPrice: null,
    image: "https://www.ivapeo.com/img/p/8/9/0/1/8901-large_default.jpg",
    rating: 5,
    reviews: 340,
    tag: "PACK x5",
    category: "coils"
  },
  {
    id: 106,
    name: "Vaporesso ARMOUR Max",
    price: 69.90,
    oldPrice: 79.90,
    image: "https://www.ivapeo.com/img/p/9/0/1/2/9012-large_default.jpg",
    rating: 5,
    reviews: 45,
    tag: "PREMIUM",
    category: "mods"
  },
  {
    id: 107,
    name: "Vaporesso ECO Nano",
    price: 14.90,
    oldPrice: 19.90,
    image: "https://www.ivapeo.com/img/p/1/2/3/4/1234-large_default.jpg",
    rating: 4,
    reviews: 67,
    tag: "ECONÓMICO",
    category: "pods"
  },
  {
    id: 108,
    name: "Cartucho XROS Series 2ml",
    price: 11.90,
    oldPrice: null,
    image: "https://www.ivapeo.com/img/p/2/3/4/5/2345-large_default.jpg",
    rating: 5,
    reviews: 500,
    tag: "PACK x4",
    category: "pods"
  }
];

export default function BrandVaporessoPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SeoHead 
        title="Vaporesso - Tecnología e Innovación | Tienda Oficial"
        description="Compra productos Vaporesso al mejor precio. Kits XROS, LUXE, GEN y Resistencias GTX. Envío 24h."
      />
      <Navbar />

      <main>
        {/* HERO SECTION - IMMERSIVE BRAND EXPERIENCE */}
        <div className="relative w-full h-[500px] md:h-[600px] bg-[#0a0a0a] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                  src={vaporessoBg}
                  alt="Vaporesso Technology" 
                  className="w-full h-full object-cover opacity-60"
                  onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1534234828563-02511c75728d?q=80&w=2669&auto=format&fit=crop"} 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container-custom h-full flex flex-col justify-center">
                <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left duration-700">
                    <img 
                        src="https://www.ivapeo.com/img/m/52.jpg" 
                        alt="Vaporesso Logo" 
                        className="h-16 md:h-20 object-contain brightness-0 invert mb-4"
                    />
                    <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-tight">
                        BEYOND <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">ORDINARY</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg pr-4">
                        Líder mundial en innovación de vapeo. Descubre la tecnología COREX y el Chip AXON para una experiencia de sabor inigualable.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 pt-4 items-start md:items-center pr-4">
                        <Link href="/novedades">
                          <Button className="w-full md:w-auto h-12 px-8 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.5)] border-none">
                              Ver Novedades
                          </Button>
                        </Link>
                        <a href="#products" onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                        }} className="w-full md:w-auto">
                          <Button variant="outline" className="w-full md:w-auto h-12 px-8 rounded-full border-white/20 text-white hover:bg-white/10 font-bold text-lg">
                              Catálogo Completo
                          </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* TECH HIGHLIGHTS - CORPORATE STYLE */}
        <div className="bg-black text-white py-16 border-b border-gray-800">
            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                        <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                            <Cpu className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-bold">AXON CHIP</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Control inteligente de potencia y modo PULSE para una entrega de sabor constante desde la primera calada.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-300 group">
                        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                            <Flame className="w-8 h-8 text-red-400" />
                        </div>
                        <h3 className="text-xl font-bold">COREX HEATING</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Estructura de malla morph-mesh que calienta de forma uniforme para un 50% más de sabor y vida útil.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
                        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                            <Shield className="w-8 h-8 text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold">SSS LEAK-RESISTANT</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Tecnología antifugas de triple protección. Vapea sin preocupaciones y sin desorden.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <BrandPromotions 
          brandName="Vaporesso" 
          promotions={[
            {
              id: "vap-promo-1",
              title: "Regalo Exclusivo Vaporesso",
              description: "Compra cualquier Kit XROS 3 y llévate un pack de merchandising oficial.",
              requiredProduct: {
                id: 101,
                name: "Vaporesso XROS 3 Pod Kit",
                price: 24.90,
                image: "https://www.ivapeo.com/img/p/4/5/6/7/4567-large_default.jpg"
              },
              gift: {
                name: "Merch Pack Vaporesso",
                image: giftImage,
                value: "14.90 €"
              },
              color: "from-cyan-500 to-blue-500"
            },
            {
              id: "vap-promo-2",
              title: "Pack Potencia Máxima",
              description: "Al comprar el LUXE XR Max, te regalamos un bote de líquido Don Juan Reserve.",
              requiredProduct: {
                id: 102,
                name: "Vaporesso LUXE XR Max",
                price: 39.90,
                image: "https://www.ivapeo.com/img/p/5/6/7/8/5678-large_default.jpg"
              },
              gift: {
                name: "Don Juan Reserve 100ml",
                image: "/attached_assets/generated_images/Premium_e-liquid_bottles_132f9a1b.png",
                value: "18.50 €"
              },
              color: "from-emerald-500 to-teal-500"
            }
          ]} 
        />

        {/* PRODUCT SERIES TABS */}
        <div id="products" className="py-16 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">Series Vaporesso</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </div>

                <Tabs defaultValue="all" className="w-full">
                    <div className="w-full overflow-x-auto pb-4 md:pb-0 mb-8 md:mb-12 flex md:justify-center -mx-4 px-4 md:mx-0 scrollbar-hide">
                        <TabsList className="bg-white p-1.5 md:p-1 rounded-full shadow-sm border border-gray-200 h-auto inline-flex min-w-max md:min-w-0">
                            <TabsTrigger value="all" className="rounded-full px-6 md:px-8 py-2.5 md:py-0 h-auto md:h-12 text-sm md:text-base font-bold data-[state=active]:bg-black data-[state=active]:text-white transition-all">Todo</TabsTrigger>
                            <TabsTrigger value="pods" className="rounded-full px-6 md:px-8 py-2.5 md:py-0 h-auto md:h-12 text-sm md:text-base font-bold data-[state=active]:bg-black data-[state=active]:text-white transition-all">XROS / Pods</TabsTrigger>
                            <TabsTrigger value="mods" className="rounded-full px-6 md:px-8 py-2.5 md:py-0 h-auto md:h-12 text-sm md:text-base font-bold data-[state=active]:bg-black data-[state=active]:text-white transition-all">GEN / Mods</TabsTrigger>
                            <TabsTrigger value="coils" className="rounded-full px-6 md:px-8 py-2.5 md:py-0 h-auto md:h-12 text-sm md:text-base font-bold data-[state=active]:bg-black data-[state=active]:text-white transition-all">Resistencias</TabsTrigger>
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

                    <TabsContent value="coils" className="animate-in fade-in duration-500">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.filter(p => p.category === 'coils').map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                        <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>

        {/* SEO / BRAND STORY SECTION - REDESIGNED */}
        <div className="py-16 bg-white border-t border-gray-100">
          <div className="container-custom max-w-4xl mx-auto prose prose-slate prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vape Vaporesso; vape kits de todo tipo</h2>
            <p className="text-gray-600 mb-6">
              Los dispositivos de la marca Vaporesso van más allá de lo convencional visto hasta ahora en la comunidad vape, gracias al compromiso con la innovación con nuevas tecnologías que nos ofrecen en todos sus productos de vapeo.
            </p>
            <p className="text-gray-600 mb-6">
              Son muchos los productos Vaporesso que podrás escoger ya que cuenta con modelos de cigarrillos electrónicos, mods y todo tipo de productos que necesita el mejor vapeador y ofrece comodidad y seguridad en todos sus sistemas a todos sus clientes, tanto sean principiantes a vapeadores experimentados.
            </p>
            <p className="text-gray-600 mb-6">
              Si necesitas un dispositivo para vape para dejar de fumar o simplemente porque te gusta vapear ésta es tu marca.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprar Vaporesso con tecnología avanzada para vapers</h3>
            <p className="text-gray-600 mb-6">
              Vaporesso trabaja duro para ofrecer a todos sus clientes la tecnología más avanzado dentro de los productos para vapeadores. La marca cuenta con un equipo de investigación y desarrollo que tiene como objetivo llegar a las expectativas de los vapeadores de todo el mundo, gracias a su mejora constante y avances tecnológicos en sus cigarrillos electrónicos en cuanto a modelos y nuevas tecnologías.
            </p>
            <p className="text-gray-600 mb-6">
              Además, la marca es propietaria de más de 300 patentes que cuentan con ingenieros profesionales y capacitados para crear productos que hasta ahora no conocía el mundo del vape.
            </p>
            <p className="text-gray-600 mb-6">
              La marca de dispositivos de vapeo trabaja sin descanso para estar en constante crecimiento y cuida hasta el último detalle en todos sus productos para obtener un resultado final impecable ofreciendo calidad y una experiencia de vapeo insuperable.
            </p>
            <p className="text-gray-600 mb-6">
              La larga lista de productos y sus años de experiencia dentro del mundo del vape les avalan y pueden ofrecer en todos sus productos materiales de la más alta calidad que cumplan todas las garantías y leyes con todas las regulaciones del mundo de vapeo.
            </p>
            <p className="text-gray-600 mb-6">
              La marca es conocedora de las últimas tendencias dentro del mundo del vaping y todo ello se debe a la gran demanda que tienen todos sus productos y las sinergias que se crean con todos los consumidores vaping.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Los mejores kit de inicio de cigarrillos electrónicos Vaporesso</h3>
            <p className="text-gray-600 mb-6">
              En nuestra tienda de vaping puedes comprar mods, resistencias, accesorios para vape, consumibles, atomizadores o tanques de la marca fabricados con materiales de la más alta calidad que junto a tus liquids de vapeo podrás crear inmensas nubes de vapor.
            </p>
            <p className="text-gray-600 mb-6">
              Los dispositivos están disponibles en diferentes rangos de potencia por lo que podrás encontrar el kit perfecto: 10W a 20W, 20W a 40W, 40W a 80 W, 80W a 100W y de 100W a 220W.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Los dispositivos de la marca Vaporesso que triunfan</h3>
            <p className="text-gray-600 mb-6">
              La firma está comprometida en ofrecer una experiencia de vapeo brutal con un enfoque en la innovación que sólo las marcas potentes consiguen. Por ejemplo, Vaporesso Eco Nano, Vaporesso xros 4, Vaporesso luxe xr max pod, xros 3 mini, el vape pen GTX Go 40, Itank 2 edition kit consiguen en un solo dispositivo todo que buscan los más avanzados. Escoge el que mejor se adapte a tus necesidades.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3">Gama de productos Vaporesso y kit de vapeo</h4>
            <p className="text-gray-600 mb-6">
              La marca ofrece amplia gama de productos y todos los productos de la marca son muy fáciles de usar, desde los mods Vaporesso con los que podrás obtener una experiencia de vapeo personalizada con batería de larga duración, los kits de inicio de cigarrillos electrónicos ideales para los principiantes hasta los premium vape con infinidad de modelos para escoger.
            </p>
            <p className="text-gray-600 mb-6">
              Como ves Vaporesso es sinónimo de calidad gracias a la y con todos ellos podrás disfrutar de experiencia de vapeo satisfactoria.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3">Vaporesso Target</h4>
            <p className="text-gray-600 mb-4">
              Vaporesso ofrece el Target 100 y el Target 200 dos dispositivos que cumplen con todos los requisitos que un vapeador exige.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Chip Axon:</strong> Resalta el sabor y la producción de vapor. Cuenta con diferentes modos de vapeo avanzados.</li>
              <li><strong>Diseño robusto y ergonómico:</strong> Su diseño hacen al Target exclusivo. Cuentan con protección IP67 lo que lo hacen resistente al agua y al polvo.</li>
              <li><strong>Uso con diferentes tipos de baterías:</strong> Ofrece una mayor autonomía. El Target 100 es compatible con baterías 18650, 20700 y 21700, mientras que el 200 kit usa baterías duales 18650.</li>
              <li><strong>Potencia:</strong> Tal y como el nombre nos indica, 100W y 200W.</li>
            </ul>
            <p className="text-gray-600 mb-6">
              En Ivapeo podrás encontrar ambos Vaporesso al mejor precio.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3">Pod Vaporesso Xros</h4>
            <p className="text-gray-600 mb-6">
              Los pods de familia xros destacan por sus diseños elegantes y compactos, esto los hacen ideales y cómodos tanto para manejar como para llevarlos siempre encima.
            </p>
            <p className="text-gray-600 mb-6">
              Entre sus modelos destacan Vaporesso Xros 3 nano kit o xros 3 pod, Vaporesso Xros mini, Vaporesso Xros pro o Vaporesso Xros cube pod kit, todos ellos destacan por su facilidad de uso y versatilidad por lo que ofrecen una experiencia con la que conseguirás una gran producción de vapor.
            </p>
            <p className="text-gray-600 mb-6">
              Si quieres un modelo con alimentado por una batería incorporada de 1000 mah escoge: XROS 3 Nano, XROS Mini o XROS 2. Estos mini pod están dotados con un sistema de cápsula para liquidos recargables y reemplazables.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3">Vaper Vaporesso Nexus</h4>
            <p className="text-gray-600 mb-6">
              Es un kit de vapeo súper compacto y portátil diseñado para vapers en movimiento con un rendimiento excepcional con características avanzadas como control de temperatura automático. La combinación del Nexus lo hacen único y cuenta con un sistema para llenar sin preocupaciones, además tiene un flujo de aire ajustable con una bobina CCELL de gran rendimiento y simplicidad lo convierte en el mejor dispositivo móvil Nexus para la experiencia del vapeador con un sistema de suministro de nicotina más concentrado.
            </p>
            <p className="text-gray-600 mb-6">
              Nexus incorpora una batería de 650 mah con carga rápida que sólo necesita 40 minutos que te van a permitir disfrutar de vaping en cualquier momento y en cualquier situación y lugar. Además Nexus es una Mod que cuenta con grandes ventajas como el sistema de relleno fácil ya que gracias al orificio de alimentación que tamaño grande especialmente diseñado para permitir llenado de liquids sin quitar la bobina para asegurarse de no derramar el juice.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mb-3">Vaporesso Luxe</h4>
            <p className="text-gray-600 mb-6">
              Cuando descubras todo lo que el Mod Luxe que esta ofreciendo una amplia gama de modelos fabricados con materiales de alta calidad a los que no podrás resistirte porque lo tiene todo para disfrutar de la mejor experiencia de vape. La mezcla perfecta en lo que se refiere a la estética con una potencia incomparable. Su pantalla con sistema TFT dónde podrás visualizar en una pantalla completa de panel táctil todo lo que necesitas saber en el momento de vapeo.
            </p>
            <p className="text-gray-600 mb-6">
              Luxe cuenta con una tecnología que te ofrece la más rápida velocidad en cada calada de tan sólo 0.0001 segundos. Además, lo podrás cargar de la forma más rápida hasta ahora vista en un MOD. Con Luxe no tendrás problemas de fuga de liquids ya que dispone de un sistema que no lo permiten llamado Quadflow que garantiza una experiencia única que distribuye el aire.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Resistencias Vaporesso muy valoradas en la industria del vapeo</h3>
            <p className="text-gray-600 mb-6">
              Además tenemos a la venta todo tipo de resistencias Vaporesso conocidas en el mundo del vapeo por su calidad y rendimiento. Los líneas disponibles son GTX Coils, GT Coils, GTi Coils, EUC Coils, CCELL Coils, QF Coils, NEXUS Coils como ves, no tendrás problemas que escoger la que mejor para tí.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Resistencias Vaporesso Gtx:</strong> Las resistencias GTX son las favoritas por los expertos gracias a su amplia capacidad para lograr un sabor de eliquids excepcional con una distribución uniforme del líquido. Son compatibles con modelos como kits Target, Vaporesso gen max y Luxe, y para que puedas escoger la que mejor se adapte a tus necesidades están disponibles en 0.2Ω, 0.3Ω, 0.6Ω, 0.8Ω y 1.2Ω.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprar Vaporesso España online con innovación y calidad en cigarrillos electrónicos</h3>
            <p className="text-gray-600 mb-6">
              Si necesitas ayuda para hacer tu compra de Vaporesso España en nuestra tienda de vape contamos con un equipo de profesionales que te asesorarán y ampliarán toda la información para que tu compra sea un éxito, sólo tienes que pasarte por una de nuestras tiendas o ponerte en contacto con nosotros a través de todas las vías disponibles en la página web de vapeo. Comprar Vaporesso online nunca había sido tan fácil.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
               <h4 className="text-lg font-bold text-gray-900 mb-4">Preguntas frecuentes de los dispositivos Vaporesso</h4>
               <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-800">¿Puedo encontrar modelos con tecnología de calentamiento corex?</p>
                    <p className="text-gray-600 text-sm">Si, existen varios modelos, como por ejemplo el Luxe X Pod Kit, de tamaño perfecto y manejo versátil. La marca destaca por la innovación y calidad en cigarrillos electrónicos.</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">¿Tiene Vaporesso mods avanzados?</p>
                    <p className="text-gray-600 text-sm">Desde luego, podrás encontrar los mods estrella de la marca como el Gen Max Kit o como el Gen Max Box, y todos los de la gama xros o luxe.</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">¿Ivapeo cuenta un catálogo completo de Vaporesso en España?</p>
                    <p className="text-gray-600 text-sm">Si, en Ivapeo contamos con todos los modelos de la vape brand Vaporesso, con modelos tan conocidos de vape kits como el Vaporesso luxe q, serie xros y resistencias como las gtx mesh coil y siempre al mejor precio.</p>
                  </div>
               </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-bold text-gray-900 mb-2">No te pierdas los productos Vaporesso</h4>
              <ul className="grid md:grid-cols-3 gap-2 text-gray-600 font-medium text-sm">
                <li>• Vaporesso Gtx Go 80</li>
                <li>• Vaporesso Gtx Go 40</li>
                <li>• Vaporesso Cuadrado</li>
                <li>• Vaporesso Luxe Xr Max</li>
                <li>• Vaporesso Xros</li>
              </ul>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}