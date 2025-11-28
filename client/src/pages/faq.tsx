import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SeoHead } from "@/components/shared/seo-head";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { useLocation } from "wouter";

export default function FaqPage() {
  const [_, setLocation] = useLocation();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const query = e.currentTarget.value;
      if (query.trim()) {
        setLocation(`/search?q=${encodeURIComponent(query.trim())}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <SeoHead
        title="Preguntas Frecuentes (FAQ) | IVAPEO"
        description="Resuelve tus dudas sobre vapeo, envíos, pagos y más en nuestra sección de preguntas frecuentes."
      />
      <Navbar />

      <main className="pb-16">
        <div className="bg-gray-50 py-8 border-b border-gray-100 mb-8">
          <div className="container-custom">
             <Breadcrumbs items={[{ label: "Ayuda" }, { label: "Preguntas Frecuentes" }]} className="mb-4" />
             <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 uppercase tracking-tight">
               Preguntas Frecuentes
             </h1>
             
             <div className="relative max-w-2xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  type="text" 
                  placeholder="BUSCAR PRODUCTO" 
                  className="pl-11 h-12 rounded-full border-gray-200 bg-white shadow-sm focus:border-primary focus:ring-primary text-sm uppercase tracking-wide"
                  onKeyDown={handleSearch}
                />
             </div>
          </div>
        </div>

        <div className="container-custom max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-4 bg-white shadow-sm">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-4 text-gray-900">
                1. ¿Qué es un cigarrillo electrónico, ECIG O VAPE? - Cigarrillos electrónicos
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed space-y-4 pb-4">
                <p>
                  El cigarrillo electrónico en España se ha convertido en uno de los últimos frutos que la ciencia y la tecnología ha dejado a su paso y también ha cambiado la manera de entender el consumo de tabaco e incluso introduciendo la posibilidad de usar e-liquid sin nicotina, lo que se considera para los fumadores una ayuda para evitarlo y el riesgo de la combustión, y disminuir los riesgos en todo caso de todo tipos de problemas de salud, derivado de las sustancias del hábito tradicional.
                </p>
                <p>
                  En las últimas décadas, como sabemos, muchos han sido los avances tecnológicos en la investigación que se han introducido en el mercado y que nos han venido genial. Ejemplo de ello son justamente los cigarrillos electrónicos, una nueva concepción de producto que es llamado a sustituir los cigarrillos tradicionales que nos han cambiado los hábitos de consumo y forma de pensar, sin duda ha hecho del vapor de sus líquidos con todo tipo de aromas incluso los de gusto a tradicional, es muy valorado por aquellos que quieren disfrutar de su placer sin poner en riesgo su salud, con líquidos de calidad para que todo aquel que aspire los deliciosos aromas con su cigarro, sepa que no sólo disfrutarás de un e-liquid de increíbles fragancias, sino que es infinitamente menos perjudicial que la nicotina de los cigarrillos tradicionales.
                </p>
                <p>
                  El dispositivo de vapeo cuenta con dos accesorios fundamentales: por un lado, cuenta con la pila, que puede recargarse cuantas veces se desee; y por otro lado, el atomizador, que es el encargado de convertir el e-líquido o líquido de los productos de vapeo, con aromas, con o sin nicotina o incluso con aroma tabaco.
                </p>
                <p>
                  Una de las características que suele llamar la atención del consumidor a la hora de pasarse a los e-cigarette a es la posibilidad de escoger entre un sinfín de fragancias y graduaciones de nicotina. En Ivapeo, tenemos disponible con una amplia gama de e-liquids que provienen de diferentes casas comerciales nacionales y del resto del sector, con certificaciones sanitarias y de la autoridad de consumo española, muy apreciados por los usuarios, para disfrutar de una increíble sesión con increíbles gustos y de aroma delicioso.
                </p>
                <p>
                  Como siempre con la opción de disfrutar tu gusto favorito, y como es habitual en la web, con la política de ofrecerte artículos, ya sean e-liquids para cigarrillos electrónicos, kits cigarrillos electrónicos, cargadores, claromizadores, mini kits de inicio o avanzados, sistemas dual coin, hilo resistivo, claromizador, drip, drops, una pila, y como no, en todo caso dispositivos con los mejores precios € y envíos sin coste con plazo de entrega urgente.
                </p>
                <p>
                  En este sentido, desde que empezó a comercializarse y con el paso del tiempo, el número de consumidores interesados en hacerse con cigarrillos electrónicos no ha parado de crecer. Ivapeo se ha instaurado como uno de los principales comercios dedicados a su venta con más eliquids para cigarrillos electrónicos lo que no es de extrañar debido a la extensa diversidad de soluciones que ofrece para los gustos de todo tipo de consumidor. Y tú, ¿has probado ya el e-cigarette?
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-4 bg-white shadow-sm">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-4 text-gray-900">
                2. ¿Cómo cuidar nuestra salud evitando el tabaco y sus efectos nocivos? El principal argumento para pasarse al vapeo.
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <p>
                  La principal ventaja del vapeo frente al tabaco tradicional es la eliminación de la combustión. Al vapear, no se inhala alquitrán ni monóxido de carbono, dos de los elementos más nocivos del humo del tabaco. Además, permite controlar la cantidad de nicotina consumida, facilitando su reducción gradual hasta eliminarla por completo si se desea.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-4 bg-white shadow-sm">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-4 text-gray-900">
                3. ¿Qué tiene el líquido del cigarrillo electrónico? - Ejuice o eliquid
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <p>
                  Los e-líquidos se componen principalmente de cuatro ingredientes: Propilenglicol (PG), Glicerina Vegetal (VG), aromas alimentarios y, opcionalmente, nicotina. Todos estos ingredientes son de uso común en la industria alimentaria y farmacéutica, garantizando un consumo seguro bajo los estándares de calidad europeos.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-4 bg-white shadow-sm">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-4 text-gray-900">
                4. ¿Vapear es más barato que fumar?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <p>
                  Sí, rotundamente. Aunque la inversión inicial en un kit puede parecer superior a un paquete de tabaco, el coste de mantenimiento (líquidos y resistencias) es significativamente menor a largo plazo. Un vapeador promedio puede ahorrar entre un 50% y un 70% anual en comparación con un fumador de una cajetilla diaria.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-4 bg-white shadow-sm">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-4 text-gray-900">
                5. ¿Que necesito para empezar a vapear? - Cigarrillos electrónicos
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <p>
                  Para empezar necesitas un kit de inicio (que incluye batería y atomizador) y e-líquido. Recomendamos kits tipo "Pod" por su sencillez de uso y mantenimiento para principiantes. Nuestro equipo de atención al cliente puede asesorarte para elegir el dispositivo que mejor se adapte a tus necesidades.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-4 bg-white shadow-sm">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-4 text-gray-900">
                6. ¿Cuál es el precio de los cigarrillos electrónicos? - Cigarrillos electrónicos
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <p>
                  Los precios varían según el tipo de dispositivo. Puedes encontrar pods desechables desde 5€, kits de inicio recargables desde 15-20€, y mods avanzados que pueden superar los 60-80€. Existe una opción para cada presupuesto sin sacrificar la calidad y seguridad.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-4 bg-white shadow-sm">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-4 text-gray-900">
                7. ¿Qué edad se debe tener para comprar un producto de vapeo en la tienda física o online?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <p>
                  En España, la venta de productos de vapeo (con o sin nicotina) está estrictamente prohibida a menores de 18 años. Tanto en nuestras tiendas físicas como online, verificamos la mayoría de edad para cumplir rigurosamente con la legislación vigente.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-4 bg-white shadow-sm">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-4 text-gray-900">
                8. ¿Puedo llevar mis productos de vapeo en un avión si me voy de viaje?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <p>
                  Sí, pero con precauciones. Las baterías y dispositivos con batería integrada deben ir siempre en el equipaje de mano, nunca facturados. Los líquidos pueden ir en el equipaje de mano si están en botes de menos de 100ml y dentro de una bolsa transparente (como otros líquidos), o facturados sin límite. Recuerda vaciar los tanques antes de volar, ya que la presión puede causar fugas.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border rounded-lg px-4 bg-white shadow-sm">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-4 text-gray-900">
                9. ¿Por qué sale e-líquido del tanque y entra en mi boca?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <p>
                  Esto suele ocurrir por condensación en la boquilla, por rellenar demasiado el tanque, o por usar una potencia demasiado baja que no vaporiza el líquido correctamente. Recomendamos limpiar la boquilla regularmente, no sobrepasar el límite de llenado y ajustar la potencia según la resistencia utilizada.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border rounded-lg px-4 bg-white shadow-sm">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-4 text-gray-900">
                10. ¿Descuento especiales? - Hacer un pedido
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <p>
                  Ofrecemos promociones periódicas y descuentos especiales para nuestros clientes registrados. Suscríbete a nuestra newsletter para estar al tanto de todas las ofertas, campañas de Black Friday y códigos promocionales exclusivos.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="border rounded-lg px-4 bg-white shadow-sm">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-4 text-gray-900">
                11. ¿Cuales son las opciones de envío? - Hacer un pedido
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <p>
                  Disponemos de envío urgente 24h con Correos Express para toda la península. Para Barcelona metropolitana, ofrecemos entrega ultra-rápida en 1 hora con Glovo. Los envíos son gratuitos para pedidos superiores a 28€.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="border rounded-lg px-4 bg-white shadow-sm">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-4 text-gray-900">
                12. ¿Que métodos de pago aceptáis? - Hacer un pedido
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <p>
                  Aceptamos tarjetas de crédito/débito (Visa, Mastercard), PayPal, Bizum y transferencia bancaria. Todos los pagos se procesan a través de pasarelas seguras encriptadas para garantizar la seguridad de tus datos.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="border rounded-lg px-4 bg-white shadow-sm">
              <AccordionTrigger className="font-bold text-left hover:no-underline py-4 text-gray-900">
                13. ¿Qué nombre aparecerá en mi cuenta bancaria cuando haga el pago?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                <p>
                  El cargo aparecerá a nombre de "IVAPEO" o la razón social de la empresa. Es un nombre discreto que identifica claramente tu compra en nuestra tienda.
                </p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </main>

      <Footer />
    </div>
  );
}
