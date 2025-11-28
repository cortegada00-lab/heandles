import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Heart } from "lucide-react";
import { Link } from "wouter";
import { SeoHead } from "@/components/shared/seo-head";
import { useFavorites } from "@/lib/favorites-context";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SeoHead
        title="Mis Favoritos | IVAPEO"
        description="Tu lista de productos favoritos de IVAPEO"
      />
      
      <Navbar />

      <main className="flex-1">
        <div className="container-custom py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-10 text-sm text-gray-600">
            <Link href="/">
              <a className="hover:text-primary transition-colors">Inicio</a>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-semibold">Mis Favoritos</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-black text-gray-900 mb-2">❤️ Mis Favoritos</h1>
            <p className="text-gray-600 text-lg">{favorites.length} producto{favorites.length !== 1 ? 's' : ''} guardado{favorites.length !== 1 ? 's' : ''}</p>
          </div>

          {favorites.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favorites.map((product) => (
                <div key={product.id} className="group">
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-square bg-gray-100 overflow-hidden relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <button 
                        onClick={() => removeFromFavorites(product.id)}
                        className="absolute top-3 right-3 bg-white rounded-full p-2.5 shadow-md hover:bg-red-50 transition-all hover:scale-110"
                      >
                        <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                      </button>
                    </div>

                    {/* Info */}
                    <div className="p-4 flex-1 flex flex-col">
                      <p className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wide">{product.brand}</p>
                      <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors flex-1 leading-tight">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600 font-medium">({product.reviews})</span>
                      </div>
                      <p className="text-2xl font-black text-gray-900 mb-4">{product.price.toFixed(2)}€</p>
                      <Link href="/product">
                        <Button size="sm" className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white font-bold text-sm h-10 rounded-lg">
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🤍</div>
              <p className="text-gray-600 text-xl mb-2 font-semibold">No tienes favoritos aún</p>
              <p className="text-gray-500 mb-8">Agrega productos a tu lista de favoritos haciendo clic en el corazón</p>
              <Link href="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explorar Productos
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
