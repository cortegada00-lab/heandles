import { AlchemyCalculator } from "@/components/tools/alchemy-calculator";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SeoHead } from "@/components/shared/seo-head";

export default function AlchemyPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-foreground flex flex-col">
      <SeoHead 
        title="Calculadora de Alquimia | iVapeo" 
        description="Calcula las proporciones exactas para tus líquidos de vapeo. Herramienta fácil y precisa para alquimia."
      />
      <Navbar />
      
      <main className="flex-1 py-8 md:py-12">
        <div className="container-custom">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
                <span className="hover:text-primary cursor-pointer">Inicio</span>
                <span>/</span>
                <span className="hover:text-primary cursor-pointer">Herramientas</span>
                <span>/</span>
                <span className="font-bold text-gray-900">Calculadora de Alquimia</span>
            </div>

            <div className="text-center mb-10 max-w-2xl mx-auto">
                <h1 className="text-4xl font-heading font-black text-gray-900 mb-4 tracking-tight">
                    Laboratorio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Alquimia</span>
                </h1>
                <p className="text-gray-500 text-lg">
                    Diseña tus propios sabores con precisión milimétrica. Introduce tus preferencias y obtén la receta exacta.
                </p>
            </div>

            <AlchemyCalculator />
            
            {/* Pro Tips Section */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-xl">⏲️</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Tiempo de Maceración</h3>
                    <p className="text-sm text-gray-500">
                        Recuerda que los frutales suelen necesitar 3-7 días, mientras que los postres y tabaquiles requieren 2-4 semanas.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-xl">🌡️</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Conservación</h3>
                    <p className="text-sm text-gray-500">
                        Guarda tus mezclas en un lugar fresco y oscuro. La luz solar directa puede oxidar la nicotina.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-xl">🧪</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Seguridad</h3>
                    <p className="text-sm text-gray-500">
                        Usa guantes al manipular nicotina concentrada y mantén los productos fuera del alcance de niños y mascotas.
                    </p>
                </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
