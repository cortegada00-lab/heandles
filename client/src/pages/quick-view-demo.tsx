import { ProductSection } from "@/components/home/product-section";
import { mockProduct, mockHardwareProduct } from "@/lib/mock-data";
import { Product } from "@/lib/mock-data";

export default function QuickViewDemoPage() {
  
  // 1. Longfill with Wizard (Capacity + Content)
  const longfillWizard: Product = {
    ...mockProduct,
    id: "demo-longfill-wizard",
    name: "Longfill Premium Wizard (60ml/12ml)",
    type: "longfill",
    price: 14.95,
    bottleCapacity: 60,
    contentAmount: 12,
    image: "https://www.ivapeo.com/img/p/3/0/9/2/6/30926-large_default.jpg", // Placeholder
    attributes: { type: "Longfill", flavorType: "Postre" },
    // Ensure no conflicting types
    tierPricing: undefined,
    variants: undefined
  };

  // 2. Longfill Legacy (No Wizard props)
  const longfillLegacy: Product = {
    ...mockProduct,
    id: "demo-longfill-legacy",
    name: "Longfill Legacy (Standard)",
    type: "longfill",
    price: 12.50,
    image: "https://www.ivapeo.com/img/p/3/0/9/2/7/30927-large_default.jpg", // Placeholder
    attributes: { type: "Longfill", flavorType: "Frutal" },
    // Ensure no conflicting types
    tierPricing: undefined,
    variants: undefined,
    bottleCapacity: undefined,
    contentAmount: undefined
  };

  // 3. Hardware (Colors + Accessories)
  const hardwareKit: Product = {
    ...mockHardwareProduct,
    id: "demo-hardware",
    name: "Vaporesso Gen 200 Kit",
    type: "hardware",
    price: 54.90,
    // Ensure no conflicting types
    tierPricing: undefined
  };

  // 4. Consumable (Volume + Variants)
  const consumable: Product = {
    ...mockProduct,
    id: "demo-consumable",
    name: "Resistencias GTX Mesh (Pack 5)",
    type: "consumable",
    price: 14.50,
    tierPricing: [
      { quantity: 3, discountPercentage: 5, label: "Pack Ahorro" },
      { quantity: 5, discountPercentage: 10, label: "Super Precio" }
    ],
    variants: [
      { id: "gtx-0.2", name: "0.2Ω Mesh", stock: 100 },
      { id: "gtx-0.3", name: "0.3Ω Mesh", stock: 50 },
      { id: "gtx-0.6", name: "0.6Ω Mesh", stock: 20 }
    ],
    image: "https://www.ivapeo.com/11748-home_default/resistencia-gtx-vaporesso.webp",
    attributes: { type: "Resistencia", brand: "Vaporesso" },
    // Ensure no conflicting types
    bottleCapacity: undefined,
    contentAmount: undefined,
    colors: []
  };

  const demoProducts = [longfillWizard, longfillLegacy, hardwareKit, consumable];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
            <h1 className="text-3xl font-black text-gray-900 mb-4">Galería de Vistas Rápidas (Quick Add)</h1>
            <p className="text-gray-600 max-w-2xl">
                Esta página demuestra los diferentes tipos de popups de "Compra Rápida" según el tipo de producto.
                Haz clic en el botón <strong>AÑADIR</strong> de cada tarjeta para ver la configuración específica.
            </p>
        </div>

        <div className="space-y-12">
            {/* Section 1: All Together */}
            <ProductSection 
                title="Todos los Ejemplos" 
                subtitle="Diferentes configuraciones de Quick Add"
                products={demoProducts}
                showSidebar={false}
            />

            {/* Detailed Explanation Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-lg mb-2">1. Longfill (Wizard)</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Detecta propiedades <code>bottleCapacity</code> y <code>contentAmount</code>.
                        Muestra el asistente completo de mezcla (Nicotina + Sales/Freebase + VG/PG).
                    </p>
                    <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200">
                        <span className="text-xs font-mono text-gray-400">Product 1 Preview</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-lg mb-2">2. Longfill (Legacy)</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Tipo <code>longfill</code> sin datos de capacidad.
                        Muestra el selector simple de nicotina (0, 1.5, 3, 6mg).
                    </p>
                    <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200">
                        <span className="text-xs font-mono text-gray-400">Product 2 Preview</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-lg mb-2">3. Hardware (Kit)</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Tipo <code>hardware</code>. Muestra selector de <strong>Color</strong> (visual) y accesorios compatibles (cross-selling).
                    </p>
                    <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200">
                        <span className="text-xs font-mono text-gray-400">Product 3 Preview</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-lg mb-2">4. Consumable (Volume)</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Tiene <code>tierPricing</code> y <code>variants</code>.
                        Muestra selector de variantes (Ohmios) y tabla de descuentos por volumen.
                    </p>
                    <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200">
                        <span className="text-xs font-mono text-gray-400">Product 4 Preview</span>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
}