import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Plus } from "lucide-react";
import imgProduct from "@assets/generated_images/Clean_product_collection_47785af6.png";

const products = [
  {
    id: 1,
    name: "OXVA Xlim Pro Kit",
    category: "Pod System",
    price: "29.90€",
    originalPrice: "35.00€",
    isNew: true,
    image: imgProduct
  },
  {
    id: 2,
    name: "Don Juan Reserve 100ml",
    category: "E-Liquid",
    price: "18.50€",
    originalPrice: null,
    isNew: false,
    image: imgProduct
  },
  {
    id: 3,
    name: "Vaporesso Gen 200 Kit",
    category: "Mod Kit",
    price: "54.90€",
    originalPrice: "65.00€",
    isNew: false,
    image: imgProduct
  },
  {
    id: 4,
    name: "Elf Bar 600 V2 Blue Razz",
    category: "Desechable",
    price: "7.50€",
    originalPrice: "9.00€",
    isNew: false,
    image: imgProduct
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center text-gray-900">
          Tendencias de la Semana
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl p-4 border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-square rounded-xl bg-gray-100 mb-4 overflow-hidden">
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-2 py-1 rounded z-10">
                    NUEVO
                  </span>
                )}
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500 z-10">
                  <Heart className="w-4 h-4" />
                </button>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col">
                <div className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wide">{product.category}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                    )}
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  </div>
                  <Button size="icon" className="rounded-full bg-gray-900 hover:bg-primary text-white h-10 w-10 shadow-md transition-colors">
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
