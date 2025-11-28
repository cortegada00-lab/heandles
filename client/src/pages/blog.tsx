import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { SeoHead } from "@/components/shared/seo-head";
import imgVape from "@assets/generated_images/High_tech_vape_mod_kit_444d8fd5.png";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Guía definitiva de Vapeo para Principiantes 2025",
    excerpt: "¿Nuevo en el vapeo? Te explicamos todo lo que necesitas saber sobre mods, pods, resistencias y líquidos para empezar con buen pie.",
    category: "Guías",
    author: "Equipo iVapeo",
    date: "20 Nov 2025",
    readTime: "5 min",
    image: imgVape,
    featured: true
  },
  {
    id: 2,
    title: "Sales de Nicotina vs Líquidos Tradicionales: ¿Cuál elegir?",
    excerpt: "Analizamos las diferencias clave entre las sales de nicotina y la nicotina de base libre para que elijas la mejor opción para ti.",
    category: "Consejos",
    author: "Carlos V.",
    date: "18 Nov 2025",
    readTime: "4 min",
    image: imgVape,
    featured: false
  },
  {
    id: 3,
    title: "Top 5 Mejores Pods del 2025",
    excerpt: "Hemos probado los últimos lanzamientos de Vaporesso, Voopoo y Uwell. Aquí tienes nuestro ranking definitivo.",
    category: "Reviews",
    author: "Ana M.",
    date: "15 Nov 2025",
    readTime: "6 min",
    image: imgVape,
    featured: false
  },
  {
    id: 4,
    title: "Mantenimiento básico: Cómo limpiar tu dispositivo",
    excerpt: "Aprende a limpiar y mantener tu vaper para alargar su vida útil y mantener el mejor sabor.",
    category: "Tutoriales",
    author: "Equipo iVapeo",
    date: "10 Nov 2025",
    readTime: "3 min",
    image: imgVape,
    featured: false
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground flex flex-col">
      <SeoHead 
        title="Blog de Vapeo | Novedades y Guías - IVAPEO"
        description="Descubre las últimas novedades, guías y consejos sobre el mundo del vapeo en el blog de iVapeo."
      />
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Header */}
        <div className="bg-gray-50 py-12 border-b border-gray-100">
          <div className="container-custom">
             <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
               <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
               <ChevronRight className="w-3 h-3" />
               <span className="font-medium text-gray-900">Blog</span>
             </div>
             <h1 className="text-3xl md:text-4xl font-heading font-black text-gray-900 mb-4">
               Blog & Novedades
             </h1>
             <p className="text-gray-600 max-w-2xl text-lg">
               Tu fuente de información sobre vapeo. Guías, reviews, y las últimas noticias del sector.
             </p>
          </div>
        </div>

        <div className="container-custom py-12">
          
          {/* Featured Post */}
          <div className="mb-16">
            {blogPosts.filter(p => p.featured).map(post => (
              <div key={post.id} className="group grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-video md:aspect-auto md:h-full overflow-hidden bg-gray-100 relative">
                   <img 
                     src={post.image} 
                     alt={post.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary">Destacado</Badge>
                   </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                   <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">
                      <span className="text-primary">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                   </div>
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                     {post.title}
                   </h2>
                   <p className="text-gray-500 mb-6 leading-relaxed line-clamp-3">
                     {post.excerpt}
                   </p>
                   <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
                         <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-gray-500" />
                         </div>
                         {post.author}
                      </div>
                      <Button variant="link" className="text-primary font-bold p-0 hover:no-underline group/btn">
                        Leer artículo <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {["Todos", "Guías", "Reviews", "Consejos", "Noticias", "Tutoriales"].map((cat, i) => (
              <Button 
                key={cat} 
                variant={i === 0 ? "default" : "outline"} 
                size="sm" 
                className={i === 0 ? "bg-black text-white hover:bg-gray-800" : "border-gray-200 text-gray-600 hover:bg-gray-50"}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(p => !p.featured).map(post => (
              <article key={post.id} className="flex flex-col group bg-white border-b border-gray-100 pb-8 md:border-none md:pb-0">
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 mb-6 relative">
                   <img 
                     src={post.image} 
                     alt={post.title} 
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                   <Badge variant="secondary" className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-black font-bold text-[10px] uppercase tracking-wider shadow-sm">
                      {post.category}
                   </Badge>
                </div>
                <div className="flex-1 flex flex-col">
                   <div className="flex items-center gap-3 text-xs font-medium text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                     {post.title}
                   </h3>
                   <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                     {post.excerpt}
                   </p>
                   <div className="mt-auto pt-4 border-t border-dashed border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-900">{post.author}</span>
                      <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        Leer más <ArrowRight className="w-3 h-3" />
                      </span>
                   </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
