import { Link, useLocation } from "wouter";
import { Home, LayoutGrid, Tag, User } from "lucide-react";
import { useState } from "react";
import { MobileMenu } from "./mobile-menu";
import { useAuth } from "@/lib/auth-context";

export function BottomNav() {
  const [location, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, status, logout } = useAuth();

  const isActive = (path: string) => location === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 md:hidden">
      <div className="grid grid-cols-4 h-[60px] pb-[env(safe-area-inset-bottom)]">
        
        {/* Home */}
        <Link href="/" className={`flex flex-col items-center justify-center w-full h-full cursor-pointer transition-colors ${isActive('/') ? 'text-primary' : 'text-gray-500'}`}>
            <Home className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium">Inicio</span>
        </Link>

        {/* Categories / Menu Trigger */}
        <MobileMenu 
            open={isMenuOpen} 
            onOpenChange={setIsMenuOpen}
            trigger={
                <div className={`flex flex-col items-center justify-center w-full h-full cursor-pointer transition-colors ${isMenuOpen ? 'text-primary' : 'text-gray-500'}`}>
                    <LayoutGrid className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-medium">Categorías</span>
                </div>
            }
        />

        {/* Offers */}
        <Link href="/ofertas" className={`flex flex-col items-center justify-center w-full h-full cursor-pointer transition-colors ${isActive('/ofertas') ? 'text-red-600' : 'text-gray-500'}`}>
            <Tag className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium">Ofertas</span>
        </Link>

        {/* Account */}
        <Link href={user ? "/account" : "/login"} className={`flex flex-col items-center justify-center w-full h-full cursor-pointer transition-colors ${isActive('/account') || isActive('/login') ? 'text-primary' : 'text-gray-500'}`}>
            <User className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium">Mi Cuenta</span>
        </Link>
        
      </div>
    </div>
  );
}
