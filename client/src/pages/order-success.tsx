import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Home, Package, Printer, ShoppingBag } from "lucide-react";
import { Link } from "wouter";
import ivapeoLogo from "@/assets/ivapeo-logo.webp";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function OrderSuccessPage() {
  // Mock Order Data
  const orderId = "ORD-2025-8392";
  const orderDate = new Date().toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="container-custom max-w-3xl">
          
          {/* Success Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            
            {/* Header */}
            <div className="bg-green-50 p-8 text-center border-b border-green-100">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200 animate-in zoom-in duration-500">
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">¡Gracias por tu compra!</h1>
              <p className="text-green-700 font-medium">Tu pedido ha sido confirmado y se está procesando.</p>
            </div>

            {/* Order Details */}
            <div className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Número de pedido</p>
                  <p className="text-xl font-bold text-gray-900">{orderId}</p>
                </div>
                <div>
                   <p className="text-sm text-gray-500 mb-1">Fecha del pedido</p>
                   <p className="font-medium text-gray-900">{orderDate}</p>
                </div>
                <Button variant="outline" className="gap-2 text-gray-600">
                  <Printer className="w-4 h-4" /> Imprimir recibo
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Package className="w-4 h-4 text-primary" /> Dirección de envío
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-600 leading-relaxed">
                    <p className="font-bold text-gray-900">Juan Pérez</p>
                    <p>Calle de Ejemplo 123, 4º A</p>
                    <p>08001 Barcelona</p>
                    <p>España</p>
                    <p className="mt-2 text-xs text-gray-400">Tel: +34 600 000 000</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-primary" /> Resumen
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-xl space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">45.90 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Envío (Express 24h)</span>
                      <span className="font-medium text-green-600">Gratis</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="font-bold text-gray-900">Total Pagado</span>
                      <span className="font-black text-lg text-primary">45.90 €</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8 flex gap-4 items-start">
                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0 text-blue-600 mt-1">
                   <Package className="w-4 h-4" />
                 </div>
                 <div>
                   <h4 className="font-bold text-blue-900 mb-1">¿Qué sucede ahora?</h4>
                   <p className="text-sm text-blue-800/80">
                     Te hemos enviado un email de confirmación a <strong>juan@ejemplo.com</strong>. 
                     Tu pedido será preparado en breve y recibirás otro correo con el número de seguimiento cuando salga de nuestro almacén.
                   </p>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/">
                  <Button className="w-full sm:w-auto h-12 px-8 font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 rounded-xl">
                    Volver a la tienda
                  </Button>
                </Link>
                <Link href="/account">
                  <Button variant="outline" className="w-full sm:w-auto h-12 px-8 font-bold border-gray-200 rounded-xl">
                    Ver mi pedido
                  </Button>
                </Link>
              </div>

            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
