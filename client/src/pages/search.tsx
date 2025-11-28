import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Heart, Filter, ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { SeoHead } from "@/components/shared/seo-head";
import { useState } from "react";
import { useFavorites } from "@/lib/favorites-context";
import { ProductSpecsChips } from "@/components/product/product-specs-chips";
import { QuickAddPopover } from "@/components/product/quick-add-popover";

const mockSearchResults = [
  { id: "1", name: "OXVA Unicoil Pod Kit", brand: "OXVA", price: 34.99, rating: 4.8, reviews: 156, image: "https://via.placeholder.com/300x300?text=OXVA+Pod", productCategory: "kit", attributes: { userLevel: "Principiante", tankCapacity: "2ml", batteryCapacity: "1000mAh", drawType: "MTL" } },
  { id: "2", name: "Vaper Pro 3000 Kit", brand: "Vaper", price: 49.99, rating: 4.5, reviews: 89, image: "https://via.placeholder.com/300x300?text=Vaper+Pro", productCategory: "kit", attributes: { userLevel: "Intermedio", tankCapacity: "3ml", batteryCapacity: "1500mAh", drawType: "DL" } },
  { id: "3", name: "Pod System Ultra", brand: "Generic", price: 29.99, rating: 4.3, reviews: 45, image: "https://via.placeholder.com/300x300?text=Pod+System", productCategory: "kit", attributes: { userLevel: "Principiante", tankCapacity: "2.5ml", batteryCapacity: "1200mAh", drawType: "MTL" } },
  { id: "4", name: "Kit Vaper Pro 2024", brand: "Vaper", price: 59.99, rating: 4.6, reviews: 234, image: "https://via.placeholder.com/300x300?text=Vaper+Kit", productCategory: "kit", attributes: { userLevel: "Avanzado", tankCapacity: "5ml", batteryCapacity: "2500mAh", drawType: "DL" } },
  { id: "5", name: "Vapers Pod", brand: "Generic", price: 24.99, rating: 4.1, reviews: 67, image: "https://via.placeholder.com/300x300?text=Vapers+Pod", productCategory: "kit", attributes: { userLevel: "Principiante", tankCapacity: "2ml", batteryCapacity: "800mAh", drawType: "MTL" } },
  { id: "6", name: "OXVA Vessel Pod System", brand: "OXVA", price: 39.99, rating: 4.9, reviews: 201, image: "https://via.placeholder.com/300x300?text=OXVA+Vessel", productCategory: "kit", attributes: { userLevel: "Intermedio", tankCapacity: "3ml", batteryCapacity: "1300mAh", drawType: "MTL" } },
];

const oxvaProducts = [
  { id: "ox1", name: "OXVA Unicoil Pod Kit 2024", brand: "OXVA", price: 34.99, rating: 4.8, reviews: 156, image: "https://via.placeholder.com/300x300?text=OXVA+Unicoil", productCategory: "kit", attributes: { userLevel: "Principiante", tankCapacity: "2ml", batteryCapacity: "1000mAh", drawType: "MTL" } },
  { id: "ox2", name: "OXVA Vessel Pod System", brand: "OXVA", price: 39.99, rating: 4.9, reviews: 201, image: "https://via.placeholder.com/300x300?text=OXVA+Vessel", productCategory: "kit", attributes: { userLevel: "Intermedio", tankCapacity: "3ml", batteryCapacity: "1300mAh", drawType: "MTL" } },
  { id: "ox3", name: "OXVA UMP Pod Kit", brand: "OXVA", price: 29.99, rating: 4.7, reviews: 178, image: "https://via.placeholder.com/300x300?text=OXVA+UMP", productCategory: "kit", attributes: { userLevel: "Intermedio", tankCapacity: "2.5ml", batteryCapacity: "1200mAh", drawType: "MTL" } },
  { id: "ox4", name: "OXVA Armor Pod", brand: "OXVA", price: 44.99, rating: 4.9, reviews: 245, image: "https://via.placeholder.com/300x300?text=OXVA+Armor", productCategory: "kit", attributes: { userLevel: "Avanzado", tankCapacity: "4ml", batteryCapacity: "1600mAh", drawType: "DL" } },
];

export default function SearchPage() {
  const location = window.location.search;
  const searchParams = new URLSearchParams(location);
  const searchTerm = searchParams.get("q") || "vaper";
  
  const [currentOxvaSlide, setCurrentOxvaSlide] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();

  const shouldShowOxva = ["vaper", "vapers", "kit", "vaper", "pod", "pods", "oxva"].some(term =>
    searchTerm.toLowerCase().includes(term) || term.includes(searchTerm.toLowerCase())
  );

  const filteredResults = mockSearchResults.filter(product =>
    (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!selectedBrand || product.brand === selectedBrand) &&
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  const handleNextSlide = () => {
    setCurrentOxvaSlide((prev) => (prev + 1) % oxvaProducts.length);
  };

  const currentProduct = oxvaProducts[currentOxvaSlide];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SeoHead
        title={`Resultados de búsqueda: ${searchTerm} | IVAPEO`}
        description={`${filteredResults.length} productos encontrados para "${searchTerm}"`}
      />
      
      <Navbar />

      <main className="flex-1">
        <div className="container-custom py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-10 text-sm text-gray-600">
            <Link href="/">
              <a className="hover:text-primary transition-colors">Inicio</a>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-semibold">Búsqueda: {searchTerm}</span>
          </nav>

          {/* OXVA Featured Mini Carousel - Above Results */}
          {shouldShowOxva && (
            <div className="mb-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl overflow-hidden shadow-lg">
              <div className="px-8 py-8 flex items-center justify-between gap-8">
                {/* Left - Info */}
                <div className="flex-1 text-white">
                  <p className="text-xs font-black tracking-wider mb-2 text-blue-100">MARCA DESTACADA</p>
                  <h3 className="text-2xl font-black mb-3">{currentProduct.name}</h3>
                  <p className="text-3xl font-black mb-4">{currentProduct.price.toFixed(2)}€</p>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                    ))}
                    <span className="text-sm text-blue-100">({currentProduct.reviews} opiniones)</span>
                  </div>
                </div>

                {/* Center - Mini Image */}
                <div className="w-40 h-40 bg-white/20 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={currentProduct.image} 
                    alt={currentProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right - Navigation */}
                <div className="flex flex-col items-center gap-4 flex-shrink-0">
                  <button 
                    onClick={handleNextSlide}
                    className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 text-blue-600 font-bold flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  <div className="flex justify-center gap-2">
                    {oxvaProducts.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentOxvaSlide(idx)}
                        className={`rounded-full transition-all ${
                          idx === currentOxvaSlide ? "w-3 h-3 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* LEFT: Filters */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 border border-gray-200 sticky top-24 space-y-6">
                <div>
                  <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                    <Filter className="w-5 h-5" /> Filtrar
                  </h3>
                </div>

                {/* Brands Filter */}
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-bold text-sm text-gray-900 mb-3">Marca</h4>
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={selectedBrand === null}
                        onChange={() => setSelectedBrand(null)}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">Todas</span>
                    </label>
                    {["OXVA", "Vaper", "Generic"].map(brand => (
                      <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                        <input 
                          type="checkbox"
                          checked={selectedBrand === brand}
                          onChange={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                          className="w-4 h-4 rounded border-gray-300"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-bold text-sm text-gray-900 mb-4">Precio</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Menos de 30€", range: [0, 30] },
                      { label: "30€ - 50€", range: [30, 50] },
                      { label: "50€ - 100€", range: [50, 100] },
                    ].map(item => (
                      <label key={item.label} className="flex items-center gap-2 cursor-pointer group">
                        <input 
                          type="radio"
                          name="price"
                          checked={priceRange[0] === item.range[0] && priceRange[1] === item.range[1]}
                          onChange={() => setPriceRange(item.range)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h4 className="font-bold text-sm text-gray-900 mb-3">Valoración</h4>
                  <div className="space-y-2">
                    {[5, 4, 3].map(stars => (
                      <label key={stars} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded" />
                        <div className="flex gap-0.5">
                          {[...Array(stars)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          ))}
                          {[...Array(5 - stars)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 text-gray-300" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">+ arriba</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT: Results Grid */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-black text-gray-900 mb-2">
                  {filteredResults.length} resultados
                </h2>
                <p className="text-sm text-gray-600">Para "{searchTerm}"</p>
              </div>

              {filteredResults.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                  {filteredResults.map((product) => (
                    <div key={product.id} className="group bg-white rounded-xl overflow-visible border border-gray-200 hover:shadow-2xl transition-all h-full flex flex-col hover:-translate-y-1 relative">
                      <Link href="/product" className="flex-1 flex flex-col">
                        {/* Image - Larger */}
                        <div className="aspect-square overflow-hidden relative bg-gray-50/50 p-6 rounded-t-xl">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300 mix-blend-multiply"
                          />
                          {product.brand === "OXVA" && (
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                              ⭐ DESTACADO
                            </div>
                          )}
                        </div>
                        
                        {/* Heart Button - Outside Image */}
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (isFavorite(product.id)) {
                              removeFromFavorites(product.id);
                            } else {
                              addToFavorites({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image: product.image,
                                brand: product.brand,
                                rating: product.rating,
                                reviews: product.reviews
                              });
                            }
                          }}
                          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md transition-all hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
                        >
                          <Heart className={`w-5 h-5 transition-colors ${isFavorite(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`} />
                        </button>

                        {/* Info */}
                        <div className="p-6 flex-1 flex flex-col">
                          <p className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wide">{product.brand}</p>
                          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors flex-1 leading-tight">
                            {product.name}
                          </h3>
                          
                          <div className="mb-4">
                             <ProductSpecsChips product={product as any} />
                          </div>

                          <div className="flex items-center gap-1.5 mb-4 mt-auto">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-xs text-gray-600 font-medium">({product.reviews})</span>
                          </div>
                          
                          <div className="pt-4 border-t border-gray-50">
                             <p className="text-2xl font-black text-gray-900">{product.price.toFixed(2)}€</p>
                          </div>
                        </div>
                      </Link>

                      {/* Quick Add Button - Outside Link */}
                      <div className="px-6 pb-6 pt-0">
                        <QuickAddPopover product={product} triggerText="Añadir a Cesta" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">No encontramos productos</p>
                  <Link href="/">
                    <Button variant="outline">Volver al inicio</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
