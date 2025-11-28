import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ProductTabsProps {
  description: string;
  specs: { name: string; value: string }[];
}

// 3. SEO Description (Accordion) Logic moved here as requested
function SeoDescription({ content }: { content: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative mb-6">
      <div 
        className={`prose prose-sm max-w-none text-gray-600 transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[2000px]' : 'max-h-[200px] mask-gradient-to-b'}`}
        style={!isExpanded ? { maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' } : {}}
        dangerouslySetInnerHTML={{ __html: content }} 
      />
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full mt-4 flex items-center justify-center gap-1 text-xs font-bold text-primary hover:underline uppercase tracking-wide py-2 bg-gray-50/50 rounded hover:bg-gray-50 transition-colors"
      >
        {isExpanded ? (
          <>Leer menos <ChevronUp className="w-3 h-3" /></>
        ) : (
          <>Leer descripción completa <ChevronDown className="w-3 h-3" /></>
        )}
      </button>
    </div>
  );
}

export function ProductTabs({ description, specs }: ProductTabsProps) {
  return (
    <div className="mt-16">
      <Tabs defaultValue="description" className="w-full">
        <div className="border-b border-gray-200 mb-8">
          <TabsList className="h-auto p-0 bg-transparent gap-8">
            <TabsTrigger 
              value="description" 
              className="h-12 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none px-0 text-base font-bold text-gray-500 bg-transparent"
            >
              Descripción
            </TabsTrigger>
            <TabsTrigger 
              value="specs" 
              className="h-12 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none px-0 text-base font-bold text-gray-500 bg-transparent"
            >
              Especificaciones
            </TabsTrigger>
            <TabsTrigger 
              value="reviews" 
              className="h-12 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none px-0 text-base font-bold text-gray-500 bg-transparent"
            >
              Opiniones
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="description" className="animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed">
              {/* Replaced standard HTML render with SEO Accordion Component */}
              <SeoDescription content={description} />
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 sticky top-24">
                <h4 className="font-bold text-blue-900 mb-4">Preguntas Frecuentes</h4>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1" className="border-blue-200">
                    <AccordionTrigger className="text-sm font-bold text-blue-800 hover:no-underline">¿Qué incluye la caja?</AccordionTrigger>
                    <AccordionContent className="text-sm text-blue-700/80">
                      El kit suele incluir el dispositivo, cable de carga y manual. Verifica la descripción para detalles exactos.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2" className="border-blue-200">
                    <AccordionTrigger className="text-sm font-bold text-blue-800 hover:no-underline">¿Garantía?</AccordionTrigger>
                    <AccordionContent className="text-sm text-blue-700/80">
                      Todos nuestros dispositivos tienen 3 años de garantía oficial en España.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="specs">
           <div className="border border-gray-200 rounded-xl overflow-hidden">
             <table className="w-full text-sm text-left">
               <tbody>
                 {specs.map((spec, idx) => (
                   <tr key={idx} className="border-b border-gray-100 last:border-0">
                     <th className="py-4 px-6 bg-gray-50 font-bold text-gray-900 w-1/3">{spec.name}</th>
                     <td className="py-4 px-6 text-gray-600">{spec.value}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <p>Aquí se cargarían las opiniones reales de los clientes (Widget de TrustPilot o similar).</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
