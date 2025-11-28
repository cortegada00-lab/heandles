import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check, Info, ArrowRight, ShieldCheck, Zap, Leaf, Droplets, Smartphone, Heart, Package, BookOpen, Star } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useCart } from "@/lib/cart-context";

export default function StarterPackPage() {
  const [step, setStep] = useState(1);
  const [_, setLocation] = useLocation();
  const { addToCart, clearCart } = useCart();
  
  const [preferences, setPreferences] = useState({
    deviceColor: "black",
    liquidType: "tabaco",
    flavorId: "tabaco-clasico",
    flavorName: "Tabaco Clásico",
    nicotineLevel: "media"
  });

  // Mock Data for Configurator
  const liquidTypes = [
    { id: "tabaco", name: "Tabaco", description: "Sabor clásico, ideal para transición", icon: Leaf, color: "bg-amber-100 text-amber-700" },
    { id: "frutal", name: "Frutal", description: "Dulce y refrescante", icon: Droplets, color: "bg-red-100 text-red-700" },
    { id: "mentol", name: "Mentol", description: "Golpe fresco y limpio", icon: Zap, color: "bg-blue-100 text-blue-700" }
  ];

  const flavorsByType: Record<string, Array<{id: string, name: string, img: string, stock: boolean}>> = {
    tabaco: [
      { id: "tabaco-clasico", name: "Tabaco Clásico", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "tabaco-rubio", name: "Tabaco Rubio", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "tabaco-caramelo", name: "Tabaco Caramelo", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "tabaco-vainilla", name: "Tabaco Vainilla", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "tabaco-seco", name: "Tabaco Seco", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: false }, // Out of stock
      { id: "tabaco-virginia", name: "Tabaco Virginia", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "tabaco-pipa", name: "Tabaco de Pipa", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: false }, // Out of stock
      { id: "tabaco-cafe", name: "Tabaco Café", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "tabaco-miel", name: "Tabaco Miel", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "american-blend", name: "American Blend", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
    ],
    frutal: [
      { id: "sandia", name: "Sandía Ice", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "fresa", name: "Fresa Silvestre", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "mango", name: "Mango Tropical", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "manzana", name: "Manzana Verde", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "melon", name: "Melón Dulce", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "arandanos", name: "Arándanos", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: false }, // Out of stock
      { id: "pina", name: "Piña Colada", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "limon", name: "Limón", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "cereza", name: "Cereza", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: false }, // Out of stock
      { id: "melocoton", name: "Melocotón", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
    ],
    mentol: [
      { id: "menta", name: "Menta Fresca", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "hierbabuena", name: "Hierbabuena", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "mentol-fuerte", name: "Mentol Fuerte", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "eucalipto", name: "Eucalipto", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "menta-polar", name: "Menta Polar", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "chicle-menta", name: "Chicle de Menta", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: false }, // Out of stock
      { id: "mojito", name: "Mojito", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "menta-frutal", name: "Menta Frutal", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "menta-choco", name: "Menta Chocolate", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: true },
      { id: "menta-lima", name: "Lima Menta", img: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp", stock: false }, // Out of stock
    ]
  };

  const nicotineLevels = [
    { id: "baja", name: "Fumador Social", desc: "< 5 cigs/día", level: "6mg", type: "Líquido Normal" },
    { id: "media", name: "Fumador Medio", desc: "Media cajetilla", level: "10mg", type: "Sales de Nicotina" },
    { id: "alta", name: "Fumador Intenso", desc: "1 cajetilla o más", level: "20mg", type: "Sales de Nicotina" }
  ];

  const updatePreference = (key: string, value: any) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const handleAddToCart = () => {
    // Clear current cart to ensure only one starter pack is purchased
    clearCart();

    // 1. Add the Device
    addToCart({
      id: "device-xros-4",
      name: "Vaporesso XROS 4 Kit",
      price: 24.90,
      quantity: 1,
      image: "https://www.ivapeo.com/28574-large_default/oxva-nexlim-go-1800mah-40w-pod-kit-oxva.webp",
      variant: "Negro"
    });

    // 2. Add the Liquids
    addToCart({
      id: `liquid-${preferences.flavorId}`,
      name: `Pack 3 Líquidos - ${preferences.flavorName}`,
      price: 15.00,
      quantity: 1,
      image: "https://www.ivapeo.com/img/cms/fmm_home/image6.webp",
      variant: `${preferences.nicotineLevel === 'baja' ? '6mg' : preferences.nicotineLevel === 'media' ? '10mg Sales' : '20mg Sales'}`
    });

    // Redirect to cart
    setLocation("/cart");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="relative bg-[#002B5C] text-white overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
           
           <div className="container-custom relative z-10 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                 <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-blue-200 text-xs font-bold uppercase tracking-wider mb-6">
                    <ShieldCheck className="w-4 h-4" /> Garantía de Éxito
                 </div>
                 <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight">
                    Deja de fumar <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-cyan-400">sin complicaciones</span>
                 </h1>
                 <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
                    Hemos diseñado este Pack de Inicio con todo lo que necesitas: el dispositivo más fácil de usar y los líquidos perfectos para tu nivel.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      onClick={() => document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-[#FFD600] hover:bg-[#E6C000] text-black font-black text-lg h-14 px-8 rounded-full shadow-[0_0_20px_rgba(255,214,0,0.3)]"
                    >
                      Configurar mi Pack
                    </Button>
                    <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-bold h-14 rounded-full">
                      ¿Cómo funciona?
                    </Button>
                 </div>
              </div>
              
              <div className="relative">
                 <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                    <div className="absolute -top-6 -right-6 bg-green-500 text-white font-black text-sm px-4 py-2 rounded-full shadow-lg animate-bounce">
                       AHORRAS 15%
                    </div>
                    <img 
                       src="https://www.ivapeo.com/28574-large_default/oxva-nexlim-go-1800mah-40w-pod-kit-oxva.webp" 
                       alt="Starter Pack" 
                       className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                 </div>
                 {/* Decorative Circles */}
                 <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                 <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
              </div>
           </div>
        </div>

        {/* Why this pack? */}
        <section className="py-16 bg-gray-50">
           <div className="container-custom">
              <div className="text-center max-w-2xl mx-auto mb-16">
                 <h2 className="text-3xl font-black text-gray-900 mb-4">¿Por qué recomendamos este sistema?</h2>
                 <p className="text-gray-600">Olvídate de botones complicados, fugas o mantenimiento difícil. El Vaporesso XROS 4 es el iPhone de los vapers.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                       <Smartphone className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Automático y Simple</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Sin botones. Simplemente aspira y funciona. Se ajusta solo para darte la mejor calada.</p>
                 </div>
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                       <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Tecnología Anti-Fugas</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Sistema SSS Leak-Resistant. Llévalo en el bolsillo sin miedo a manchas.</p>
                 </div>
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                       <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Carga Ultra Rápida</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Batería para todo el día. Y si se agota, carga al 100% en solo 30 minutos.</p>
                 </div>
              </div>

              {/* Maintenance Guide - Integrated Here */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
             <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Check className="w-3 h-3" /> Facilísimo
             </div>
             <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Mantenimiento en 30 segundos</h2>
             <p className="text-gray-500">Tan fácil que no te dará pereza</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 hidden md:block"></div>
             
             <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 border border-blue-100">1</div>
                <div>
                   <h4 className="font-bold text-lg mb-2 text-gray-900">Rellenar el líquido</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">Retira la boquilla negra (haciendo "clic" lateral) y rellena por el orificio rojo. Espera 5 min la primera vez.</p>
                </div>
             </div>
             
             <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 border border-orange-100">2</div>
                <div>
                   <h4 className="font-bold text-lg mb-2 text-gray-900">Cambiar el cartucho</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">¿Sabe a quemado? (Aprox cada 2 semanas). Tira el cartucho entero a la basura y pon uno nuevo. Listo.</p>
                </div>
             </div>
          </div>
        </div>

        {/* What's in the box & Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" /> ¿Qué incluye la caja?
              </h3>
              <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                       <Smartphone className="w-4 h-4" />
                    </div>
                    1x Dispositivo Vaporesso XROS 4
                 </li>
                 <li className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                       <Droplets className="w-4 h-4" />
                    </div>
                    1x Pack de 3 Líquidos (Sabor a elegir)
                 </li>
                 <li className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                       <Zap className="w-4 h-4" />
                    </div>
                    1x Cable de carga USB-C
                 </li>
                 <li className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                       <BookOpen className="w-4 h-4" />
                    </div>
                    1x Manual de usuario en español
                 </li>
              </ul>
           </div>

           <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-xl text-blue-900 mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500 fill-red-500" /> Historias de éxito
              </h3>
              <div className="space-y-6">
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                    <div className="flex items-center gap-1 text-yellow-400 mb-2">
                       <Star className="w-3 h-3 fill-current" />
                       <Star className="w-3 h-3 fill-current" />
                       <Star className="w-3 h-3 fill-current" />
                       <Star className="w-3 h-3 fill-current" />
                       <Star className="w-3 h-3 fill-current" />
                    </div>
                    <p className="text-sm text-gray-600 italic mb-3">"Llevaba 15 años fumando y con este pack lo dejé en 2 días. Es increíblemente fácil de usar."</p>
                    <p className="text-xs font-bold text-gray-900">- Carlos M. <span className="text-green-600 font-normal">· Compra verificada</span></p>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                    <div className="flex items-center gap-1 text-yellow-400 mb-2">
                       <Star className="w-3 h-3 fill-current" />
                       <Star className="w-3 h-3 fill-current" />
                       <Star className="w-3 h-3 fill-current" />
                       <Star className="w-3 h-3 fill-current" />
                       <Star className="w-3 h-3 fill-current" />
                    </div>
                    <p className="text-sm text-gray-600 italic mb-3">"Me daba miedo no saber usarlo, pero la guía de 30 segundos es real. Súper recomendable."</p>
                    <p className="text-xs font-bold text-gray-900">- Laura G. <span className="text-green-600 font-normal">· Compra verificada</span></p>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </section>

  {/* FAQ Section */}
  <section className="py-16 bg-white border-t border-gray-100">
     <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
           <h2 className="text-2xl font-black text-gray-900 mb-2">Preguntas Frecuentes</h2>
           <p className="text-gray-500">Resolvemos tus dudas antes de empezar</p>
        </div>
        
        <div className="space-y-4">
           <div className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
              <h4 className="font-bold text-lg text-gray-900 mb-2">¿Cuánto dura cada recambio?</h4>
              <p className="text-gray-500 text-sm">Cada cartucho suele durar entre 10 y 15 días dependiendo del uso. Sabrás que toca cambiarlo cuando el sabor empiece a saber un poco a quemado.</p>
           </div>
           <div className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
              <h4 className="font-bold text-lg text-gray-900 mb-2">¿Es más barato que fumar?</h4>
              <p className="text-gray-500 text-sm">Sí, mucho más. Un fumador medio gasta unos 150€/mes en tabaco. Con el vapeo, el gasto mensual (líquidos y recambios) suele rondar los 30-40€. Ahorras más de 1000€ al año.</p>
           </div>
           <div className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
              <h4 className="font-bold text-lg text-gray-900 mb-2">¿Qué nivel de nicotina elijo?</h4>
              <p className="text-gray-500 text-sm">Si fumas menos de media cajetilla, elige "Fumador Social" o "Medio". Si fumas una cajetilla o más, elige "Intenso" (20mg). Siempre puedes bajar el nivel en tu próximo pedido.</p>
           </div>
        </div>
     </div>
  </section>

        {/* CONFIGURATOR */}
        <section id="configurator" className="py-16 md:py-24">
           <div className="container-custom max-w-5xl">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                 <div className="bg-gray-900 text-white p-8 text-center">
                    <h2 className="text-3xl font-black mb-2">Configura tu Pack de Inicio</h2>
                    <p className="text-gray-400">Personalízalo en 4 sencillos pasos</p>
                 </div>
                 
                 <div className="p-8 md:p-12">
                    {/* Steps Indicator */}
                    <div className="flex justify-center mb-12">
                       <div className="flex items-center gap-4">
                          {[1, 2, 3, 4].map((i) => (
                             <div key={i} className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= i ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                                   {i}
                                </div>
                                {i < 4 && <div className={`w-6 md:w-12 h-1 bg-gray-100 mx-1 md:mx-2 ${step > i ? 'bg-primary' : ''}`}></div>}
                             </div>
                          ))}
                       </div>
                    </div>

                    {/* STEP 1: LIQUID CATEGORY */}
                    {step === 1 && (
                       <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                          <h3 className="text-2xl font-bold text-center mb-8">¿Qué tipo de sabor prefieres?</h3>
                          <div className="grid md:grid-cols-3 gap-6">
                             {liquidTypes.map((type) => (
                                <div 
                                  key={type.id}
                                  onClick={() => { updatePreference('liquidType', type.id); setStep(2); }}
                                  className={`cursor-pointer rounded-2xl p-6 border-2 transition-all hover:shadow-lg group ${preferences.liquidType === type.id ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-primary/50'}`}
                                >
                                   <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${type.color} group-hover:scale-110 transition-transform`}>
                                      <type.icon className="w-8 h-8" />
                                   </div>
                                   <h4 className="font-bold text-lg mb-2">{type.name}</h4>
                                   <p className="text-gray-500 text-sm">{type.description}</p>
                                </div>
                             ))}
                          </div>
                       </div>
                    )}

                    {/* STEP 2: SPECIFIC FLAVOR */}
                    {step === 2 && (
                       <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-2">Elige tu sabor favorito</h3>
                            <p className="text-gray-500">Has elegido {liquidTypes.find(l => l.id === preferences.liquidType)?.name}</p>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                             {flavorsByType[preferences.liquidType]?.filter(f => f.stock).map((flavor) => (
                                <div 
                                  key={flavor.id}
                                  onClick={() => { 
                                    updatePreference('flavorId', flavor.id); 
                                    updatePreference('flavorName', flavor.name);
                                    setStep(3); 
                                  }}
                                  className={`cursor-pointer rounded-xl p-4 border-2 transition-all hover:shadow-md text-center ${preferences.flavorId === flavor.id ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-primary/50'}`}
                                >
                                   <div className="w-full aspect-square bg-gray-50 rounded-lg mb-3 overflow-hidden flex items-center justify-center">
                                      <img src={flavor.img} alt={flavor.name} className="w-full h-full object-contain mix-blend-multiply" />
                                   </div>
                                   <h4 className="font-bold text-sm leading-tight">{flavor.name}</h4>
                                </div>
                             ))}
                          </div>

                          <div className="flex justify-center mt-8">
                             <Button variant="ghost" onClick={() => setStep(1)} className="text-gray-400 hover:text-gray-600">
                                Volver atrás
                             </Button>
                          </div>
                       </div>
                    )}

                    {/* STEP 3: NICOTINE LEVEL */}
                    {step === 3 && (
                       <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                          <h3 className="text-2xl font-bold text-center mb-2">¿Cuánto fumas actualmente?</h3>
                          <p className="text-center text-gray-500 mb-8">Esto nos ayuda a elegir la potencia de nicotina correcta</p>
                          
                          <div className="grid md:grid-cols-3 gap-6">
                             {nicotineLevels.map((level) => (
                                <div 
                                  key={level.id}
                                  onClick={() => { updatePreference('nicotineLevel', level.id); setStep(4); }}
                                  className={`cursor-pointer rounded-2xl p-6 border-2 transition-all hover:shadow-lg relative overflow-hidden ${preferences.nicotineLevel === level.id ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-primary/50'}`}
                                >
                                   {level.id === 'media' && (
                                      <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">RECOMENDADO</div>
                                   )}
                                   <h4 className="font-bold text-xl mb-1">{level.name}</h4>
                                   <p className="text-gray-500 text-sm mb-6">{level.desc}</p>
                                   
                                   <div className="bg-white rounded-xl p-4 border border-gray-100">
                                      <div className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Te enviaremos:</div>
                                      <div className="font-black text-2xl text-primary">{level.level}</div>
                                      <div className="text-xs font-medium text-gray-600">{level.type}</div>
                                   </div>
                                </div>
                             ))}
                          </div>
                          
                          <div className="flex justify-center mt-8">
                             <Button variant="ghost" onClick={() => setStep(2)} className="text-gray-400 hover:text-gray-600">
                                Volver atrás
                             </Button>
                          </div>
                       </div>
                    )}

                    {/* STEP 4: SUMMARY */}
                    {step === 4 && (
                       <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                          <div className="grid md:grid-cols-2 gap-12 items-center">
                             <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <h3 className="font-bold text-lg text-gray-900 mb-6">Resumen de tu Pack</h3>
                                <ul className="space-y-4">
                                   <li className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                                         <Smartphone className="w-5 h-5" />
                                      </div>
                                      <div>
                                         <p className="font-bold text-gray-900">Vaporesso XROS 4</p>
                                         <p className="text-xs text-gray-500">Color Aleatorio (Negro/Plata)</p>
                                      </div>
                                   </li>
                                   <li className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 shrink-0">
                                         <Droplets className="w-5 h-5" />
                                      </div>
                                      <div>
                                         <p className="font-bold text-gray-900">Pack 3 Líquidos</p>
                                         <p className="text-xs text-gray-500">
                                            Sabor: <span className="font-bold text-primary">{preferences.flavorName}</span>
                                         </p>
                                      </div>
                                   </li>
                                   <li className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 shrink-0">
                                         <Zap className="w-5 h-5" />
                                      </div>
                                      <div>
                                         <p className="font-bold text-gray-900">Nivel de Nicotina</p>
                                         <p className="text-xs text-gray-500">
                                            {nicotineLevels.find(l => l.id === preferences.nicotineLevel)?.level} ({nicotineLevels.find(l => l.id === preferences.nicotineLevel)?.type})
                                         </p>
                                      </div>
                                   </li>
                                </ul>
                             </div>
                             
                             <div className="text-center md:text-left">
                                <div className="mb-6">
                                   <span className="text-gray-400 line-through text-xl font-bold mr-3">45.90€</span>
                                   <span className="text-4xl font-black text-primary">39.90€</span>
                                </div>
                                <Button 
                                  onClick={handleAddToCart}
                                  className="w-full md:w-auto bg-[#FFD600] hover:bg-[#E6C000] text-black font-black text-lg h-14 px-12 rounded-full shadow-xl mb-4"
                                >
                                   Añadir Pack al Carrito
                                </Button>
                                <p className="text-sm text-gray-500 flex items-center justify-center md:justify-start gap-2">
                                   <Check className="w-4 h-4 text-green-500" /> Envío Gratis 24h incluido
                                </p>
                                
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                   <Button variant="ghost" onClick={() => setStep(3)} className="text-gray-400 hover:text-gray-600">
                                      Cambiar configuración
                                   </Button>
                                </div>
                             </div>
                          </div>
                       </div>
                    )}
                 </div>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}