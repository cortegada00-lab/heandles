import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from "sonner";

interface FavoriteItem {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  rating: number;
  reviews: number;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
  favoriteCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  const addToFavorites = (item: FavoriteItem) => {
    setFavorites(current => {
      const exists = current.find(fav => fav.id === item.id);
      if (exists) return current;
      
      toast.success("Agregado a Favoritos", {
        description: (
          <div className="flex items-center gap-3 mt-2">
            <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden shrink-0 border border-gray-200">
              <img src={item.image} alt="" className="w-full h-full object-contain p-1" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-900 line-clamp-2">{item.name}</p>
              <p className="text-[10px] text-gray-500">Guardado en favoritos</p>
            </div>
          </div>
        ),
        duration: 2000,
      });
      
      return [...current, item];
    });
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(current => {
      const removed = current.find(fav => fav.id === id);
      if (removed) {
        toast.success("Eliminado de Favoritos", {
          duration: 2000,
        });
      }
      return current.filter(fav => fav.id !== id);
    });
  };

  const isFavorite = (id: string): boolean => {
    return favorites.some(fav => fav.id === id);
  };

  const favoriteCount = favorites.length;

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite, favoriteCount }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
