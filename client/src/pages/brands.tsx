import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { SeoHead } from "@/components/shared/seo-head";
import { useState } from "react";

// Mock Data for Brands (Updated from live site)
const brands = [
  { id: 1, name: "Vaporesso", logo: "https://www.ivapeo.com/img/m/52.jpg", count: 124 },
  { id: 2, name: "Voopoo", logo: "https://www.ivapeo.com/img/m/58.jpg", count: 89 },
  { id: 3, name: "GeekVape", logo: "https://www.ivapeo.com/img/m/55.jpg", count: 76 },
  { id: 4, name: "Smok", logo: "https://www.ivapeo.com/img/m/34.jpg", count: 112 },
  { id: 5, name: "Uwell", logo: "https://www.ivapeo.com/img/m/64.jpg", count: 45 },
  { id: 6, name: "ElfBar", logo: "https://www.ivapeo.com/img/m/96.jpg", count: 32 },
  { id: 7, name: "Lost Mary", logo: "https://www.ivapeo.com/img/m/102.jpg", count: 28 },
  { id: 8, name: "Oxva", logo: "https://www.ivapeo.com/img/m/88.jpg", count: 54 },
  { id: 9, name: "Bombo", logo: "https://www.ivapeo.com/img/m/12.jpg", count: 67 },
  { id: 10, name: "Kings Crest", logo: "https://www.ivapeo.com/img/m/23.jpg", count: 15 },
  { id: 11, name: "Pachamama", logo: "https://www.ivapeo.com/img/m/44.jpg", count: 21 },
  { id: 12, name: "Vampire Vape", logo: "https://www.ivapeo.com/img/m/18.jpg", count: 43 },
  { id: 13, name: "JustFog", logo: "https://www.ivapeo.com/img/m/38.jpg", count: 12 },
  { id: 14, name: "Eleaf", logo: "https://www.ivapeo.com/img/m/28.jpg", count: 34 },
  { id: 15, name: "Aspire", logo: "https://www.ivapeo.com/img/m/6.jpg", count: 56 },
  { id: 16, name: "Dinner Lady", logo: "https://www.ivapeo.com/img/m/45.jpg", count: 23 },
  { id: 17, name: "Nasty Juice", logo: "https://www.ivapeo.com/img/m/42.jpg", count: 31 },
  { id: 18, name: "Riot Squad", logo: "https://www.ivapeo.com/img/m/77.jpg", count: 19 },
  { id: 19, name: "Drifter", logo: "https://www.ivapeo.com/img/m/82.jpg", count: 14 },
  { id: 20, name: "Elux", logo: "https://www.ivapeo.com/img/m/99.jpg", count: 22 },
  { id: 21, name: "A&L", logo: "https://www.ivapeo.com/img/m/107.jpg", count: 18 },
  { id: 22, name: "Halo", logo: "https://www.ivapeo.com/img/m/9.jpg", count: 42 },
  { id: 23, name: "Atmos Lab", logo: "https://www.ivapeo.com/img/m/16.jpg", count: 33 },
  { id: 24, name: "Drops", logo: "https://www.ivapeo.com/img/m/25.jpg", count: 51 },
  { id: 25, name: "Five Pawns", logo: "https://www.ivapeo.com/img/m/87.jpg", count: 12 },
  { id: 26, name: "Hellvape", logo: "https://www.ivapeo.com/img/m/124.jpg", count: 25 },
  { id: 27, name: "Joyetech", logo: "https://www.ivapeo.com/img/m/4.jpg", count: 38 },
  { id: 28, name: "Just Juice", logo: "https://www.ivapeo.com/img/m/212.jpg", count: 29 },
  { id: 29, name: "La Tabaccheria", logo: "https://www.ivapeo.com/img/m/230.jpg", count: 16 },
  { id: 30, name: "Molicel", logo: "https://www.ivapeo.com/img/m/317.jpg", count: 8 },
];

const alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function BrandsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("ALL");

  const filteredBrands = brands.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLetter = selectedLetter === "ALL" || 
                          (selectedLetter === "#" ? /^\d/.test(brand.name) : brand.name.toUpperCase().startsWith(selectedLetter));
    return matchesSearch && matchesLetter;
  });

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <SeoHead 
        title="Fabricantes y Marcas de Vapeo | IVAPEO"
        description="Descubre las mejores marcas de cigarrillos electrónicos y e-liquids: Vaporesso, Voopoo, Smok, Geekvape y muchas más."
      />
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Hero Header */}
        <div className="bg-gray-50 py-12 border-b border-gray-100">
          <div className="container-custom text-center">
             <h1 className="text-3xl md:text-4xl font-heading font-black text-gray-900 mb-4 uppercase tracking-tight">
               Nuestras Marcas
             </h1>
             <p className="text-gray-600 max-w-2xl mx-auto text-lg">
               Trabajamos únicamente con los fabricantes líderes del sector para garantizarte la máxima calidad, seguridad e innovación en cada producto.
             </p>
          </div>
        </div>

        {/* Controls Section (Sticky) */}
        <div className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
           <div className="container-custom space-y-4">
              {/* Search & Mobile Filter */}
              <div className="max-w-md mx-auto relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                 <Input 
                   placeholder="Buscar fabricante..." 
                   className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors rounded-full"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
              </div>

              {/* Alphabet Filter (Desktop) */}
              <div className="hidden md:flex flex-wrap justify-center gap-1">
                 <button
                   onClick={() => setSelectedLetter("ALL")}
                   className={`px-3 py-1 rounded text-xs font-bold transition-all ${selectedLetter === "ALL" ? "bg-primary text-white" : "text-gray-500 hover:bg-gray-100"}`}
                 >
                   TODAS
                 </button>
                 {alphabet.map(char => (
                   <button
                     key={char}
                     onClick={() => setSelectedLetter(char)}
                     className={`w-8 h-8 flex items-center justify-center rounded text-xs font-bold transition-all ${selectedLetter === char ? "bg-primary text-white" : "text-gray-500 hover:bg-gray-100"}`}
                   >
                     {char}
                   </button>
                 ))}
              </div>
           </div>
        </div>

        {/* Brands Grid */}
        <div className="container-custom py-12">
           {filteredBrands.length > 0 ? (
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
               {filteredBrands.map((brand) => (
                 <Link key={brand.id} href={`/search?q=${brand.name.toLowerCase()}`}>
                   <div className="group bg-white rounded-xl border border-gray-100 p-6 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer h-full relative overflow-hidden">
                      
                      {/* Logo Area */}
                      <div className="w-full aspect-[3/2] flex items-center justify-center p-2 relative z-10">
                         <img 
                           src={brand.logo} 
                           alt={brand.name} 
                           className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 mix-blend-multiply"
                           onError={(e) => {
                             e.currentTarget.style.display = 'none';
                             e.currentTarget.nextElementSibling?.classList.remove('hidden');
                           }}
                         />
                         {/* Fallback Text Logo */}
                         <div className="hidden text-xl font-black text-gray-300 uppercase group-hover:text-primary transition-colors">
                           {brand.name}
                         </div>
                      </div>
                      
                      {/* Name & Count */}
                      <div className="text-center relative z-10">
                         <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{brand.name}</h3>
                         <p className="text-xs text-gray-400 mt-1">{brand.count} productos</p>
                      </div>

                      {/* Hover Decoration */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                   </div>
                 </Link>
               ))}
             </div>
           ) : (
             <div className="text-center py-20">
               <p className="text-xl font-bold text-gray-300 mb-4">No se encontraron fabricantes</p>
               <Button variant="outline" onClick={() => { setSearchTerm(""); setSelectedLetter("ALL"); }}>
                 Limpiar filtros
               </Button>
             </div>
           )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
