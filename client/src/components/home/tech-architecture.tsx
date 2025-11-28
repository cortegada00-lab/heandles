import { Database, Server, Smartphone, Globe, ArrowRight, Lock, Search, ShieldCheck, Layers } from "lucide-react";

export function TechArchitecture() {
  return (
    // Hidden on mobile as requested ("bloques sobran")
    <section className="hidden md:block py-20 bg-gray-50 border-t border-gray-200">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Arquitectura Headless Profesional</h2>
          <p className="text-gray-600 text-lg">
            Tu PrestaShop actual sigue siendo el motor. Nosotros construimos un Ferrari a su alrededor.
            Máxima seguridad, SEO mejorado y cero pérdida de datos.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            
            {/* Backend (PrestaShop) */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto text-blue-600">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-center mb-4 text-gray-900">1. Tu PrestaShop Actual</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Catálogo y Stock seguros</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Gestión de Pedidos actual</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Módulos de Pago/Envío</li>
              </ul>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block bg-white rounded-full p-2 border border-gray-200">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* API Layer */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto text-purple-600">
                <Server className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-center mb-4 text-gray-900">2. Conexión Segura API</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Lock className="w-4 h-4 text-green-500" /> Encriptación SSL</li>
                <li className="flex items-center gap-2"><Layers className="w-4 h-4 text-green-500" /> Sincronización Real-time</li>
                <li className="flex items-center gap-2"><Search className="w-4 h-4 text-green-500" /> Compatible con Módulos clave</li>
              </ul>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block bg-white rounded-full p-2 border border-gray-200">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Frontend (React) */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-primary/20 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-3 right-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                LO NUEVO
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto text-primary">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-center mb-4 text-gray-900">3. Tienda React Moderna</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> Carga Instantánea (0.5s)</li>
                <li className="flex items-center gap-2"><Search className="w-4 h-4 text-primary" /> SEO Google Friendly (SSR)</li>
                <li className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-primary" /> App-like en Móvil</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0 bg-blue-100 p-3 rounded-full text-blue-600">
             <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-blue-900 text-lg mb-1">¿Y mis módulos de PrestaShop?</h4>
            <p className="text-blue-800/80 text-sm">
              Los módulos de gestión (facturación, stock, ERP, pagos como Redsys/PayPal) <strong>siguen funcionando igual</strong> en el backend. 
              Solo sustituimos los módulos visuales (sliders, popups) por código moderno mucho más rápido y limpio.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
