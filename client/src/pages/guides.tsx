import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Smartphone, Droplets, Cherry, Info, AlertTriangle, Check, ArrowRight, ChevronRight, Flame, Leaf, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { SeoHead } from "@/components/shared/seo-head";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function GuidesPage() {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState("inicio");

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['inicio', 'nicotina', 'sabores', 'mantenimiento'].includes(hash)) {
      setActiveTab(hash);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <SeoHead 
        title="Guía de Iniciación al Vapeo - iVapeo" 
        description="Aprende todo lo necesario para empezar a vapear: qué dispositivo elegir, nivel de nicotina y sabores recomendados."
      />
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        {/* Hero Header */}
        <div className="bg-[#002B5C] text-white py-12 md:py-20 relative overflow-hidden">
          <div className="container-custom relative z-10 text-center">
             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wider mb-6">
                <Info className="w-3 h-3" /> Centro de Ayuda
             </div>
             <h1 className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tight">
               Todo lo que necesitas saber <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-cyan-400">para empezar</span>
             </h1>
             <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
               Dejar de fumar puede parecer complicado, pero hemos simplificado el proceso en esta guía rápida. Elige un tema y conviértete en un experto en minutos.
             </p>
          </div>
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]"></div>
        </div>

        <div className="container-custom -mt-8 relative z-20 pb-20">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-h-[600px]">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="border-b border-gray-100 bg-white sticky top-0 z-30">
                <TabsList className="flex w-full justify-start overflow-x-auto h-auto p-0 bg-transparent gap-0 md:gap-8 px-4 md:px-8 scrollbar-hide">
                  <TabsTrigger 
                    value="inicio" 
                    className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent rounded-none px-2 md:px-4 py-4 md:py-6 font-bold text-gray-500 text-sm md:text-base whitespace-nowrap flex items-center gap-2 transition-all"
                  >
                    <Smartphone className="w-4 h-4 md:w-5 md:h-5" /> Tu Primer Vaper
                  </TabsTrigger>
                  <TabsTrigger 
                    value="nicotina" 
                    className="data-[state=active]:text-purple-600 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:bg-transparent rounded-none px-2 md:px-4 py-4 md:py-6 font-bold text-gray-500 text-sm md:text-base whitespace-nowrap flex items-center gap-2 transition-all"
                  >
                    <Droplets className="w-4 h-4 md:w-5 md:h-5" /> Nivel de Nicotina
                  </TabsTrigger>
                  <TabsTrigger 
                    value="sabores" 
                    className="data-[state=active]:text-orange-600 data-[state=active]:border-b-2 data-[state=active]:border-orange-600 data-[state=active]:bg-transparent rounded-none px-2 md:px-4 py-4 md:py-6 font-bold text-gray-500 text-sm md:text-base whitespace-nowrap flex items-center gap-2 transition-all"
                  >
                    <Cherry className="w-4 h-4 md:w-5 md:h-5" /> Guía de Sabores
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="p-6 md:p-12">
                {/* TAB 1: INICIO */}
                <TabsContent value="inicio" className="m-0 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="grid md:grid-cols-2 gap-12 items-stretch">
                    <div className="flex flex-col justify-between">
                      <div>
                        <h2 className="text-3xl font-black text-gray-900 mb-6">¿Qué dispositivo es para mí?</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          Si tu objetivo es dejar de fumar, la regla de oro es la <strong>simplicidad</strong>. No necesitas un dispositivo grande con muchas luces y botones. Necesitas algo que funcione, que sea fácil de usar y que te dé una sensación similar al cigarrillo.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                          <h3 className="font-bold text-blue-900 flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">1</div>
                            Pods Recargables (Recomendado)
                          </h3>
                          <p className="text-sm text-blue-800/80 mb-3">
                            Son pequeños, ligeros y se activan al aspirar (como fumar). Solo tienes que rellenar el líquido.
                          </p>
                          <Link href="/kits">
                            <Button size="sm" variant="link" className="text-blue-700 p-0 h-auto font-bold">Ver Kits Recomendados <ArrowRight className="w-3 h-3 ml-1" /></Button>
                          </Link>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                          <h3 className="font-bold text-green-900 flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs">2</div>
                            Desechables (Lo más fácil)
                          </h3>
                          <p className="text-sm text-green-800/80 mb-3">
                            Usar y tirar. No hay que rellenar ni cargar. Perfecto para probar si te gusta el vapeo.
                          </p>
                          <Link href="/disposables">
                            <Button size="sm" variant="link" className="text-green-700 p-0 h-auto font-bold">Ver Desechables <ArrowRight className="w-3 h-3 ml-1" /></Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Real Product Comparison - Full Height */}
                    <div className="grid grid-cols-2 gap-6 h-full">
                      {/* Disposable */}
                      <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-8 border border-green-200 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex-1 flex items-center justify-center min-h-[280px] w-full">
                          <img 
                            src="https://www.ivapeo.com/28729-large_default/lost-mary-bm1000-lemon-lime-pod-2ml-20mg-elfbar.webp" 
                            alt="Lost Mary Desechable" 
                            className="h-64 w-auto object-contain"
                          />
                        </div>
                        <div className="mt-6 pt-6 border-t border-green-200 w-full">
                          <h4 className="font-black text-green-900 mb-2 text-lg">Desechable</h4>
                          <p className="text-sm text-green-700 font-medium">Usar y tirar<br/>Sin mantenimiento</p>
                        </div>
                      </div>

                      {/* Refillable Pod */}
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-200 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex-1 flex items-center justify-center min-h-[280px] w-full">
                          <img 
                            src="https://www.ivapeo.com/28574-large_default/oxva-nexlim-go-1800mah-40w-pod-kit-oxva.webp" 
                            alt="OXVA Nexlim Go Recargable" 
                            className="h-64 w-auto object-contain"
                          />
                        </div>
                        <div className="mt-6 pt-6 border-t border-blue-200 w-full">
                          <h4 className="font-black text-blue-900 mb-2 text-lg">Pod Recargable</h4>
                          <p className="text-sm text-blue-700 font-medium">Reutilizable<br/>Económico</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-8">
                    <h3 className="font-bold text-lg mb-4">Preguntas Frecuentes sobre Dispositivos</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>¿Cuánto dura un Pod?</AccordionTrigger>
                        <AccordionContent>
                          Un cartucho (pod) suele durar entre 1 y 2 semanas dependiendo del uso. Notarás que sabe a quemado cuando toque cambiarlo.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>¿Es más barato que fumar?</AccordionTrigger>
                        <AccordionContent>
                          Sí, rotundamente. Tras la inversión inicial (aprox 20-30€), el gasto mensual se reduce un 70-80% comparado con el tabaco tradicional.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </TabsContent>

                {/* TAB 2: NICOTINA */}
                <TabsContent value="nicotina" className="m-0 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="max-w-3xl mx-auto text-center mb-12">
                     <h2 className="text-3xl font-black text-gray-900 mb-4">Calculadora de Nicotina</h2>
                     <p className="text-gray-600">
                       Elegir la cantidad correcta es vital para no tener ansiedad. Es mejor empezar con un poco más y bajar, que quedarse corto y volver a fumar.
                     </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-2 border-transparent hover:border-purple-100 hover:shadow-lg transition-all cursor-pointer group">
                      <CardHeader className="text-center pb-2">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                           <Check className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl font-black">Fumador Social</CardTitle>
                        <p className="text-sm text-gray-500">Menos de 5 cigarrillos/día</p>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-3xl font-black text-purple-600 mb-1">3-6 mg</div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Líquido Normal</p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-purple-600 shadow-lg scale-105 relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Más Común
                      </div>
                      <CardHeader className="text-center pb-2">
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                           <Flame className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl font-black">Fumador Medio</CardTitle>
                        <p className="text-sm text-gray-500">Media cajetilla (10-15 cigs)</p>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-3xl font-black text-purple-600 mb-1">10-20 mg</div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Sales de Nicotina</p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-transparent hover:border-purple-100 hover:shadow-lg transition-all cursor-pointer group">
                      <CardHeader className="text-center pb-2">
                        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                           <AlertTriangle className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl font-black">Fumador Intenso</CardTitle>
                        <p className="text-sm text-gray-500">Más de 1 cajetilla/día</p>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-3xl font-black text-purple-600 mb-1">20 mg</div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Sales de Nicotina</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 flex gap-4 items-start">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-yellow-900 text-sm uppercase tracking-wide mb-1">Importante: Sales vs Líquido Normal</h4>
                      <p className="text-sm text-yellow-800/80">
                        Para dejar de fumar, recomendamos las <strong>Sales de Nicotina</strong>. Se absorben más rápido (como el tabaco) y no rascan la garganta, por lo que puedes vapear concentraciones altas sin toser.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                {/* TAB 3: SABORES */}
                <TabsContent value="sabores" className="m-0 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                   
                   {/* Intro Section */}
                   <div className="max-w-3xl">
                      <h2 className="text-3xl font-black text-gray-900 mb-4">Elige tu primer sabor</h2>
                      <p className="text-gray-600 leading-relaxed">
                         Muchos empiezan buscando sabor a tabaco, pero acaban prefiriendo frutales o postres. Lo bueno del vapeo es que sabe bien, a diferencia del tabaco quemado.
                       </p>
                   </div>

                   <div className="grid md:grid-cols-2 gap-12 items-start">
                     <div>
                       <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                          <Leaf className="w-5 h-5 text-green-600" /> Explora por Categoría
                       </h3>

                       <div className="space-y-6">
                         <Link href="/eliquids?sabor=tabaco">
                           <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all cursor-pointer">
                              <div className="w-12 h-12 rounded-full bg-[#8B4513]/10 text-[#8B4513] flex items-center justify-center shrink-0">
                                <Leaf className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900 group-hover:text-[#8B4513] transition-colors flex items-center justify-between">
                                  Tabaquiles <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h4>
                                <p className="text-sm text-gray-500">Secos, con notas de madera, caramelo o frutos secos. Ideales para transición.</p>
                              </div>
                           </div>
                         </Link>

                         <Link href="/eliquids?sabor=frutal">
                           <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all cursor-pointer">
                              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                                <Cherry className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors flex items-center justify-between">
                                  Frutales <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h4>
                                <p className="text-sm text-gray-500">Frescos, dulces y ligeros. Sandía, melón, fresa... Los más populares.</p>
                              </div>
                           </div>
                         </Link>

                         <Link href="/eliquids?sabor=postre">
                           <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all cursor-pointer">
                              <div className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                                <Sparkles className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors flex items-center justify-between">
                                  Postres <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h4>
                                <p className="text-sm text-gray-500">Vainilla, galletas, tartas. Para los más golosos.</p>
                              </div>
                           </div>
                         </Link>
                       </div>
                     </div>

                     <div>
                       <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                         <Sparkles className="w-5 h-5 text-yellow-500" /> Los Favoritos de la Comunidad
                       </h3>
                       <div className="space-y-4">
                         {/* Don Juan */}
                         <div className="bg-orange-50 rounded-xl p-4 border border-orange-100 flex items-center gap-4 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                               <Leaf className="w-6 h-6 text-orange-600" />
                            </div>
                            <div className="flex-1">
                                <div className="text-[10px] font-black text-orange-600 uppercase tracking-wider mb-0.5">Top Ventas</div>
                                <h4 className="font-bold text-gray-900 text-base leading-tight">Don Juan Reserve</h4>
                                <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                                  Tarta de nueces pecanas con chocolate y coco.
                                </p>
                            </div>
                            <Link href="/product">
                              <Button size="sm" className="h-8 w-8 p-0 rounded-full bg-orange-500 hover:bg-orange-600 text-white">
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            </Link>
                         </div>

                         {/* Watermelon */}
                         <div className="bg-red-50 rounded-xl p-4 border border-red-100 flex items-center gap-4 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                               <Cherry className="w-6 h-6 text-red-500" />
                            </div>
                            <div className="flex-1">
                                <div className="text-[10px] font-black text-red-500 uppercase tracking-wider mb-0.5">Frutal</div>
                                <h4 className="font-bold text-gray-900 text-base leading-tight">Watermelon Ice</h4>
                                <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                                  Sandía dulce y jugosa con un golpe de frescor.
                                </p>
                            </div>
                            <Link href="/product">
                              <Button size="sm" className="h-8 w-8 p-0 rounded-full bg-red-500 hover:bg-red-600 text-white">
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            </Link>
                         </div>

                         {/* Lemon Tart */}
                         <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100 flex items-center gap-4 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                               <Sparkles className="w-6 h-6 text-yellow-500" />
                            </div>
                            <div className="flex-1">
                                <div className="text-[10px] font-black text-yellow-600 uppercase tracking-wider mb-0.5">Postre</div>
                                <h4 className="font-bold text-gray-900 text-base leading-tight">Lemon Tart</h4>
                                <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                                  Crema de limón con merengue y masa quebrada.
                                </p>
                            </div>
                            <Link href="/product">
                              <Button size="sm" className="h-8 w-8 p-0 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white">
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            </Link>
                         </div>
                       </div>
                     </div>
                   </div>
                </TabsContent>

              </div>
            </Tabs>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
