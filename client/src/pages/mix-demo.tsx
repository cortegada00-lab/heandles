import { MixWizard } from "@/components/product/mix-wizard";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useState } from "react";

export default function MixDemoPage() {
  const [mixes, setMixes] = useState<any>({});

  const scenarios = [
    {
      title: "Mini Longfill 30ml",
      capacity: 30,
      content: 10,
      description: "Botella de 30ml con 10ml de aroma. Espacio libre: 20ml."
    },
    {
      title: "Estándar Longfill 60ml",
      capacity: 60,
      content: 12,
      description: "Botella de 60ml con 12ml de aroma. Espacio libre: 48ml."
    },
    {
      title: "Maxi Longfill 100ml",
      capacity: 100,
      content: 20,
      description: "Botella de 100ml con 20ml de aroma. Espacio libre: 80ml."
    },
    {
      title: "XL Longfill 120ml",
      capacity: 120,
      content: 24,
      description: "Botella de 120ml con 24ml de aroma. Espacio libre: 96ml."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Simulación de Algoritmo de Mezcla</h1>
          <p className="text-gray-600 mb-12">
            Demostración de cómo el sistema calcula automáticamente los ingredientes (Nicokits + Base) 
            para diferentes formatos de botella, optimizando costes y reduciendo desperdicios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="mb-6 border-b border-gray-100 pb-4">
                    <h2 className="text-xl font-bold text-gray-900">{scenario.title}</h2>
                    <p className="text-sm text-gray-500 mt-1">{scenario.description}</p>
                </div>
                
                <MixWizard 
                    bottleCapacity={scenario.capacity}
                    aromaContent={scenario.content}
                    onMixChange={(mix) => setMixes(prev => ({ ...prev, [scenario.title]: mix }))}
                />

                {/* Debug View */}
                <div className="mt-4 bg-slate-900 rounded-lg p-4 font-mono text-xs text-green-400 overflow-hidden">
                    <p className="text-slate-400 font-bold mb-2 uppercase tracking-wider">Datos calculados (JSON):</p>
                    <pre>{JSON.stringify(mixes[scenario.title], null, 2)}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
