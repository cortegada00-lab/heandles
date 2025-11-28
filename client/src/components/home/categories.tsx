import { ArrowRight } from "lucide-react";
import imgCollection from "@assets/generated_images/Clean_product_collection_47785af6.png";

const categories = [
  {
    id: 1,
    title: "Kits de Inicio",
    count: "24 Productos",
    image: imgCollection,
  },
  {
    id: 2,
    title: "E-Liquids",
    count: "150+ Sabores",
    image: imgCollection,
  },
  {
    id: 3,
    title: "Pods Desechables",
    count: "Top Ventas",
    image: imgCollection,
  },
  {
    id: 4,
    title: "Accesorios",
    count: "Resistencias y más",
    image: imgCollection,
  }
];

export function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-2 text-gray-900">Explora por Categoría</h2>
            <p className="text-gray-500">Encuentra lo que necesitas para tu estilo</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-primary font-bold hover:underline gap-2 text-sm">
            VER TODO <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <a 
              key={cat.id} 
              href="#"
              className="group flex flex-col gap-4"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{cat.title}</h3>
                <p className="text-sm text-gray-500">{cat.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
