import { Link } from "wouter";
import { Check, Zap, Cloud, Battery, DollarSign, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function SeoContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-white text-gray-700 py-12 md:py-16">
      <div className="container-custom max-w-6xl mx-auto px-4">
        
        {/* Accordion Container */}
        <div className={`relative transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-full' : 'max-h-[200px] overflow-hidden'}`}>
            
            {/* Gradient Overlay when collapsed */}
            <div className={`absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10 transition-opacity duration-500 ${isExpanded ? 'opacity-0' : 'opacity-100'}`} />

            {/* Block 1: Intro - Text Heavy Compact */}
            <article className="mb-12 prose prose-slate max-w-none text-gray-600 leading-relaxed md:columns-2 gap-12">
                <h2 className="text-2xl font-black text-gray-900 uppercase mb-6 break-inside-avoid-column">
                    ¿Qué Es Un Cigarrillo Electrónico?
                </h2>
                <p className="mb-4">
                    El <Link href="/kits" className="text-primary font-bold hover:underline">cigarrillo electrónico</Link> en España se ha convertido en uno de los últimos frutos que la ciencia y la tecnología ha dejado a su paso y también <strong>ha cambiado la manera de entender el consumo de tabaco e incluso introduciendo la posibilidad de usar <Link href="/eliquids" className="text-primary hover:underline">e-liquid</Link> sin nicotina, lo que se considera para los fumadores una ayuda para evitarlo y el riesgo de la combustión, y disminuir los riesgos en todo caso de todo tipos de problemas de salud</strong>, derivado de las sustancias del hábito tradicional.
                </p>
                <p>
                    En las últimas décadas, como sabemos, muchos han sido los avances tecnológicos que se han introducido en el mercado y que nos han venido genial. Ejemplo de ello son justamente los cigarrillos electrónicos, una nueva concepción que es llamado a sustituir los cigarrillos tradicionales que nos han cambiado los hábitos de consumo y forma de pensar, sin duda ha hecho del vapor de sus líquidos con todo tipo de aromas incluso los de gusto a tabaco tradicional, es muy valorado por aquellos que quieren disfrutar de su placer sin poner en riesgo su salud, con <strong>líquidos para vapear de calidad</strong> para que todo aquel que aspire tus deliciosos aromas con su cigarro, sepa que no está disfrutando de un e-liquid de increíbles fragancias, sino que es infinitamente menos perjudicial para su salud que la nicotina de los cigarrillos tradicionales.
                </p>
            </article>

            {/* Block 2: Components & Variety - Text Only Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 bg-gray-50 p-8 rounded-2xl">
                <div>
                    <h3 className="font-bold text-gray-900 mb-2">Componentes</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>El dispositivo de vapeo se compone de dos piezas fundamentales:</strong> por un lado, la pila, que puede recargarse cuantas veces se desee; y por otro lado, el <Link href="/atomizadores" className="text-primary font-bold hover:underline">atomizador</Link>, que es el encargado de convertir el e-líquido en vapor, con aromas, con o sin nicotina o incluso con aroma tabaco.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 mb-2">Variedad</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Una de las características que suele llamar a la atención del consumidor a la hora de pasarse a los cigarrillos electrónicos a es la posibilidad de escoger entre un <strong>sinfín de fragancias y graduaciones de nicotina.</strong>
                    </p>
                </div>
            </div>

            {/* Block 3: Footer/Conclusion Area - Full Text */}
            <div className="mb-12 border-b border-gray-100 pb-12">
                <p className="text-gray-800 mb-6 leading-relaxed">
                    <strong>En <Link href="/" className="text-primary font-bold hover:underline">iVapeo</Link>, contamos con una amplia gama de e-liquids que provienen de diferentes casas comerciales nacionales y del resto del sector, con certificaciones sanitarias y de la autoridad de consumo española</strong>, muy apreciados por los usuarios, para disfrutar de una increíble sesión con increíbles gustos y de aroma delicioso.
                </p>
                
                <div className="text-sm text-gray-500 space-y-4 md:columns-2 gap-8">
                    <p>
                        Como siempre con la opción de disfrutar tu gusto favorito, y como es habitual en la web, con la política de ofrecerte artículos, ya sean e-liquids para cigarrillos electrónicos, <Link href="/kits" className="text-primary hover:underline">kits cigarrillos electrónicos</Link>, cargadores, claromizadores, mini packs, sistemas dual coil, <Link href="/resistencias" className="text-primary hover:underline">hilo resistivo</Link>, claromizador, drip, drops, una pila, y como no, en todo caso dispositivos con los mejores precios y envíos sin coste con plazo de entrega urgente.
                    </p>
                    <p>
                        Desde que empezó a comercializarse y con el paso del tiempo, el número de consumidores interesados en hacerse con cigarrillos electrónicos no ha parado de crecer. iVapeo se ha instaurado como uno de los principales comercios dedicados a la venta de cigarro electrónicos más eliquids para cigarrillos electrónicos lo que no es de extrañar debido a la extensa diversidad de soluciones que ofrece para los gustos de todo tipo de consumidor. <strong className="text-gray-900 block mt-2">Y TÚ, ¿HAS PROBADO YA EL E-CIGARRETTE?</strong>
                    </p>
                </div>
            </div>

            {/* Block 4: Why Buy? - Full Text */}
            <article className="mb-12">
                <h2 className="text-xl md:text-2xl font-black text-gray-900 uppercase mb-4">
                    ¿POR QUÉ COMPRAR CIGARRILLOS ELECTRÓNICOS EN IVAPEO?
                </h2>
                <div className="text-gray-600 text-sm leading-relaxed space-y-4 md:columns-2 gap-8">
                    <p>
                        ¿Eres consciente de los claros beneficios del cigarrillo electrónico para la salud? ¿Sabes que adquirir un cigarrillos electrónicos es más que una tendencia a fecha de hoy tras el boom del 2016, 2017 y 2018? Si todavía no has obtenido respuesta alguna para estas cuestiones, iVapeo te las resuelve, seguro que no te quedará ninguna duda del porque los cigarrillos electrónicos son para ti el principio para dejar de fumar si ese fuera tu objetivo o simplemente el modo de iniciarse en el placer de formar parte del club de los que ya se han pasado a los dispositivos de vapeo electrónicos:
                    </p>
                    <p>
                        Antes de enumerar las ventajas de adquirir cigarrillos electrónicos, nos gustaría adelantarte un dato importante y que seguramente te ayudará como factor decisivo para adquirir un cigarrillo electrónico. Por si no lo sabías, un estudio de usuarios que se han pasado a esta estupenda alternativa, un 66% afirma haber conseguido dejar de fumar. El otro 33% restante reconoce haber disminuido su hábito de consumo. Esto es ya un aporte que mucho dice acerca de los e-cig como eficaz opción para las personas que quieren dejar de fumar. Sin embargo, no es la única virtud del cigarrillo electrónico.
                    </p>
                </div>
            </article>

            {/* Block 5: Comparison Tabaco vs Vapeo - Full Text Table */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 items-start">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-sm">
                    <div className="grid grid-cols-2 gap-4 text-center mb-4">
                        <div className="font-black uppercase text-gray-900">Tabaco</div>
                        <div className="font-black uppercase text-primary">Vapeo</div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center gap-2 border-b border-gray-200 pb-2">
                            <div className="w-1/2 text-right text-gray-500 text-xs">Combustión, alquitrán y ceniza</div>
                            <div className="text-gray-300 text-[10px]">VS</div>
                            <div className="w-1/2 text-left text-primary font-medium text-xs">Vaporización limpia (0 alquitrán)</div>
                        </div>
                        <div className="flex justify-between items-center gap-2 border-b border-gray-200 pb-2">
                            <div className="w-1/2 text-right text-gray-500 text-xs">Humo perjudicial fumador pasivo</div>
                            <div className="text-gray-300 text-[10px]">VS</div>
                            <div className="w-1/2 text-left text-primary font-medium text-xs">Vapor inocuo para entorno</div>
                        </div>
                        <div className="flex justify-between items-center gap-2 border-b border-gray-200 pb-2">
                            <div className="w-1/2 text-right text-gray-500 text-xs">Envejece piel y mancha dientes</div>
                            <div className="text-gray-300 text-[10px]">VS</div>
                            <div className="w-1/2 text-left text-primary font-medium text-xs">Sin efectos estéticos negativos</div>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                            <div className="w-1/2 text-right text-gray-500 text-xs">Gasto económico elevado</div>
                            <div className="text-gray-300 text-[10px]">VS</div>
                            <div className="w-1/2 text-left text-primary font-medium text-xs">Ahorro considerable mensual</div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 leading-tight">
                        Los beneficios de usar cigarrillos electrónicos hoy van mucho más allá de la mera idea que tenemos sobre ellos como recurso para dejar de fumar.
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                        Según numerosos estudios médicos realizados por diferentes universidades de medicina y organismos internacionales de diferentes ámbitos de la sociedad, los cigarros electrónicos son menos dañinos que el tabaco para la salud porque:
                    </p>
                    <ul className="space-y-2 text-gray-600 text-xs">
                        <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span>El e-cig no contienen alquitrán ni otras sustancias cancerígenas; además, en iVapeo los tenemos disponible un amplio surtido de cigarrillo electronico sin nicotina o con nicotina.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span>El vapeo con los pitillos electrónicos no dañan el medio ambiente, ya que no expulsan humo.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span>El vapeo con cigarrillo electrónico no perjudica al fumador pasivo o a otros.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span>Vapear con cigarrillo electrónico supone un gran ahorro.</span>
                        </li>
                    </ul>
                    <p className="text-gray-500 text-xs leading-relaxed bg-gray-50 p-3 rounded-lg">
                        El vapeo con cigarrillo electrónico no causa mal olor bucal. Puedes adquirir eliquids sin nicotina sólo por el placer de vapear con tu cigarrillo electrónico, es una manera perfecta de disfrutar del placer con mejor salud. Estas son solo algunas de las excelentes utilidades de adquirir cigarrillos electrónicos. Haz tu pedido ahora y te haremos el envio por mensajería urgente para que puedas empezar a vapear desde ya. ¿Te animas a probar los cigarros electrónicos y líquidos de iVapeo?
                    </p>
                </div>
            </div>

            {/* Block 6: Why Use E-Cig? - Full Text */}
            <article className="mb-12">
                <h2 className="text-xl font-black text-gray-900 uppercase mb-4">
                    ¿POR QUÉ USAR UN E CIGARRO ELECTRÓNICO EN LUGAR DEL TABACO TRADICIONAL Y SER DE LOS VAPEADORES?
                </h2>
                <div className="text-gray-600 text-sm leading-relaxed space-y-4 md:columns-2 gap-8">
                    <p>
                        Si hiciésemos una encuesta cuyo objetivo fuese descubrir el enigma entre escoger vapeadores o permanecer con el tabaco tradicional, probablemente te sorprendiera el resultado final. iVapeo no es la única compañía del sector de los e-cigs que se ha preguntado la misma cuestión. Sin embargo, sí que es la única que lo ha comprobado. ¿Y sabes qué opción ganó la batalla? Obviamente, los vapeadores.
                    </p>
                    <p>
                        Desde iVapeo, la tienda online de cigarrillo electronico, te animamos a hacer la prueba y preguntar a varios amigos. Verás que muchos preferirán los vapeadores como mejor elección a cualquier otra alternativa. Pero, ¿por qué prefieren el cigarrillo electrónico a ellos? Muy fácil. Hoy en día, uno de los criterios de los que más se guia la población para adquirir los productos que necesita es el que atañe a la economía. Si comparamos dos artículos que satisfacen una misma necesidad (el cigarrillo electrónico por un lado y el tabaco de siempre por otro), pero uno es mucho más económico que otro, ¿con cuál te quedas? Con el más barato, ¿no? Pues en ese sentido, los vapeadores salen ganando. Y ya si hablamos de los precios de los cigarrillos electrónicos de iVapeo, no hay competidor que valga, porque como ves puedes comprar un cigarrillo electrónico barato.
                    </p>
                    <p>
                        Como se puede ver, la salud y el ahorro son dos de las mejores características de los cigarros de vapor. Los cigarrillos electrónicos que imitan exactamente a un cigarrillo normal no suelen ser una elección adecuada por lo general, porque no reúnen las características de uso de un vapeador avanzado, duración de pila, golpe de vapor. No te resistas a probar los mejores vapeadores. Con solo hacer una vista rápida por nuestro catálogo podrás escoger el producto que más se adapte a tus necesidades. No te arrepentirás.
                    </p>
                </div>
            </article>

            {/* Block 7: How it works - Full Text */}
            <article className="mb-12 bg-blue-900 text-white rounded-2xl p-8">
                <h2 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-yellow-400" /> ¿Cómo Funciona El Cigarro Electrónico?
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-blue-100 text-sm leading-relaxed">
                    <p>
                        Lo primero que hay que aclarar es que existen una gran variedad de modelos en España cada uno de ellos con diferentes funcionalidades y potencias, desde los más sencillos a los que son realmente dispositivos muy avanzados. Aún así el funcionamiento y concepto técnico es muy similar en todos ellos, los cigarros están formados por una batería, claromizadores o atomizadores, el recipiente para nuestro líquido premium favorito, una resistencia eléctrica y la boquilla para que se aspire el vapor.
                    </p>
                    <div>
                        <p className="mb-4">
                            El funcionamiento es sencillo, al presionar el botón se calienta la resistencia con la energía de la batería, pasando el líquido de los claromizadores a esta y produciendo un gran aporte de vapor para que se aspire el vapor.
                        </p>
                        <p className="opacity-80 text-xs">
                            En función de nuestros gustos o si es nuestro primer cigarro podemos elegir un modelo sencillo o uno con funcionalidades premium. En función del modelo nos encontraremos con una batería de mayor o menor duración, la duración dependerá de la cantidad de carga que soporte y de los voltios de a los que funcione el dispositivo pudiendo ser según el modelo una opción regulable o fija.
                        </p>
                    </div>
                </div>
            </article>

            {/* Block 8: Atomizer Details - Full Text */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-black text-gray-900 uppercase mb-2 flex items-center gap-2 text-sm">
                        <Cloud className="w-4 h-4 text-primary" /> Atomizador
                    </h3>
                    <p className="text-gray-600 text-xs mb-4">
                        El objetivo de los claromizadores es contener y calentar los líquidos a través de la resistencia, para expulsarlo por la boquilla vaporizada lista para que se aspire.
                    </p>
                    <h4 className="font-bold text-gray-900 text-xs mb-1">¿QUÉ ES EL ATOMIZADOR?</h4>
                    <p className="text-gray-600 text-xs mb-4">
                        El atomizador también es un tanque y tiene la misma función que el claromizador, pero el atomizador tiene mayores rendimientos y potencia que el claromizador. En su interior encontraremos algodón y la resistencia para calentar. Se trata de sistemas apropiados para usuarios más avanzados ya que se necesitan conocimientos del funcionamiento y mantenimiento de dispositivos más avanzados que con un claromizador.
                    </p>
                    <div className="space-y-2 text-xs">
                        <div className="bg-white p-2 rounded border border-gray-200">
                            <strong className="block text-primary">- RDA:</strong>
                            <span className="text-gray-500">Suelen ser utilizados por los usuarios avanzados. La ventaja principal es que es el sistema de mayores cantidades para inhalar vapor.</span>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200">
                            <strong className="block text-primary">- RTA:</strong>
                            <span className="text-gray-500">Son parecidos a los RDA, pero de uso con mayores niveles de comodidad que los anteriores. La tecnología ha avanzado tanto que prácticamente ya tienen similar rendimiento que los sistemas RDA.</span>
                        </div>
                    </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                    <h3 className="font-black text-yellow-800 uppercase mb-2 flex items-center gap-2 text-sm">
                        <Battery className="w-4 h-4" /> Batería
                    </h3>
                    <p className="text-yellow-900/80 text-xs leading-relaxed mb-4">
                        La pila recargable siempre va a tener una función importante, proporcionar de energía las resistencias para vaporizar. Las opciones son muchas y estas irán condicionadas al tipo de aparato a usar, desde las sencillas a las de voltaje variable de los dispositivos avanzados.
                    </p>
                    <div className="bg-white/50 p-3 rounded border border-yellow-200/50">
                        <h4 className="font-bold text-yellow-900 text-xs mb-1">¿Qué Tipos de Cigarrillo Electrónico Existen?</h4>
                        <ul className="text-xs text-yellow-900/70 space-y-2">
                            <li>
                                <strong className="text-yellow-900 block">Modelos Básicos:</strong> 
                                Entre este tipo cigarrillos electrónicos encontramos los sencillos y la elección de muchos consumidores cuando se van a iniciar, antes de pasar a artículos premium con muchas formas y tamaños diferentes. Se caracterizan por ser ligeros poco voluminosos y son los de mayores similitudes a los pitillos tradicionales. suelen tener una potencia de 15-20W.
                            </li>
                            <li>
                                <strong className="text-yellow-900 block">Modelos Avanzados o MOD:</strong> 
                                Existen otros cigarrillos electrónicos que se dividen a su vez entre mecánicos y eléctricos estos últimos son los más avanzados y configurables. Este tipo ya son artículos premium, su diferencia con los modelos anteriores es básicamente en cuanto a potencia, capacidad de configuración de la forma de utilización a los gustos y necesidades específicas de cada momento y su autonomía, pueden llegar a 350W de potencia. Muchos aseguran que se trata de el mejor cigarrillo electrónico. En nuestra tienda de vapeo contamos con todos los cigarrillos electrónicos que existen en el mercado. Con estos modelos es cuando realmente se llega a disfrutar del todo el potencial.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="font-black text-green-800 uppercase mb-2 flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4" /> ¿Cuál es el precio?
                    </h3>
                    <p className="text-xs text-green-900/70 leading-relaxed">
                        La buena noticia es que existen para todo tipo de bolsillos. puedes comprar cigarrillos electrónicos completos o vapers desechables desde 9.90€ y otros sistemas más avanzados por hasta 99.99€. Como puedes comprobar los precios de los cigarrillos electrónicos es muy amplio y al final va a depender de lo que quieres invertir y si buscas algo de características avanzadas y tecnológicas.
                    </p>
                </div>
            </div>

            {/* Block 9: Expert Tip - Compact */}
            <div className="mb-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
                <h3 className="font-black text-gray-900 uppercase mb-2 text-sm">
                    ¡CONSEJO IVAPEO! CONSEJO PARA LA MEJOR EXPERIENCIA DE VAPEO
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Lo importante es escoger el cigarrillo electrónico que realmente se vaya a adecuar a tus necesidades y gustos, seguro que puedes encontrar un buen dispositivo con una buena relación calidad / precio. Y si necesitas nuestro apoyo para tomar una decisión, te presentaremos diferentes series de varios niveles que seguro que te podrá ayudar a decidirte.
                </p>
            </div>

            {/* Block 10: Brands & E-liquids - Full Text */}
            <article className="mb-12 text-center">
                <h2 className="text-xl font-black text-gray-900 uppercase mb-4">
                    LAS MEJORES MARCAS DE CIGARRILLO ELECTRÓNICO Y E LÍQUIDOS
                </h2>
                <p className="max-w-4xl mx-auto text-gray-600 text-sm leading-relaxed mb-6">
                    Tenemos la política es tener productos de marcas de altas calidades para nuestros clientes, en el apartado de e-liquid, tanto en la variante que contiene nicotina como en los e-liquids con gusto y aromas, como en el apartado de cigarrillos electrónicos, claromizadores, drip, pilas, sistemas de dual coil, base para que te hagas tu propio e-liquid premium con tus fragancias preferidas, nos ha convertido en el sitio Top de internet donde adquirir tu cigarrillo electronico a buen precio, con envios gratis a cualquier parte de España. Algunas de las marcas con las que trabajamos son:
                </p>
                
                <div className="flex flex-wrap justify-center gap-1.5 text-xs text-gray-500 mb-6 max-w-4xl mx-auto">
                        {["Ego Ce4", "Smok Alien", "Kit Eleaf", "Vaporesso Wismec", "Kanger Tech", "Istick", "Innokin", "Halo", "Big Baby", "Vision", "Smok", "Stick", "Aio", "Joyetech ego aio kit", "Kangertech", "Vape pen 22", "Hangsen", "Smoktech", "Velo", "Reserve", "Revenger", "Vaper", "Desert", "Exceed", "Crest", "Wotofo", "Kings", "Wismec", "Coilart", "Breeze", "Ikuu", "Ijoy Innokin", "Ijust", "Nautilus", "Cubis", "Athos", "Dpro", "Pachamama"].map((brand, i) => (
                        <span key={i} className="bg-gray-100 px-2 py-0.5 rounded-md border border-gray-200">
                            {brand}
                        </span>
                        ))}
                </div>

                <p className="text-primary font-bold text-sm max-w-3xl mx-auto">
                    Aspiere y podrás comprobar como fumar el tipo de eliquid con y sin nicotina más natural y menos perjudicial para tú salud y un exito a nivel mundial, Si no sabes por donde empezar prueba con alguno de los populares kits.
                </p>
            </article>

            {/* Block 11: E-liquid Composition - Full Text */}
            <div className="mb-12 bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-lg font-black text-gray-900 uppercase mb-4">
                    ¿QUÉ TIENE EL LÍQUIDO DEL CIGARRILLO ELECTRÓNICO?
                </h3>
                <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-600">
                    <div>
                        <p className="mb-4">
                            La principal ventaja desde dicho punto de vista es que no tiene combustión y no se producen ni monóxido de carbono ni alquitrán. A diferencia del tabaco tradicional que contiene miles de ingredientes desconocidos, el e-liquid, es elaborado básicamente con 4 ingrediente la etiqueta. Aquí actúa impidiendo que se sequen y mejorando vaporización.
                        </p>
                    </div>
                </div>
            </div>

        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mt-6">
          <Button 
            variant="outline" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="gap-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-full h-12 px-8 text-base font-bold shadow-sm hover:shadow-md"
          >
            {isExpanded ? (
              <>
                Leer menos <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Leer más sobre cigarrillos electrónicos <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>

      </div>
    </section>
  );
}
