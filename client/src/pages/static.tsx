import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Separator } from "@/components/ui/separator";

export default function StaticPage({ title, content }: { title?: string, content?: string }) {
  // If no props, try to infer from URL (simple mock)
  const pageTitle = title || "Página de Información";
  
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="container-custom py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black mb-6">{pageTitle}</h1>
          <Separator className="mb-8" />
          
          <div className="prose prose-lg text-gray-600">
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <>
                <p>Esta es una página simulada para el prototipo.</p>
                <p>En una tienda real, aquí iría el contenido legal, política de envíos o información corporativa.</p>
                <h3>Secciones típicas:</h3>
                <ul>
                  <li>Información detallada</li>
                  <li>Cláusulas legales</li>
                  <li>Datos de contacto</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}