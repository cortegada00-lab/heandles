import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import ivapeoLogo from "@/assets/ivapeo-logo.webp";

export function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-12 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/">
               <img src={ivapeoLogo} alt="IVAPEO" className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Tu tienda de confianza para productos de vapeo. Calidad, rapidez y el mejor servicio garantizado desde 2014.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold uppercase tracking-wider mb-6 text-xs">Categorías</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/eliquids" className="hover:text-primary transition-colors">E-Liquids</Link></li>
              <li><Link href="/kits" className="hover:text-primary transition-colors">Vape Kits</Link></li>
              <li><Link href="/disposables" className="hover:text-primary transition-colors">Desechables</Link></li>
              <li><Link href="/fabricantes" className="hover:text-primary transition-colors">Fabricantes</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog & Guías</Link></li>
              <li><Link href="/ofertas" className="hover:text-primary transition-colors text-red-500 font-medium">Ofertas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold uppercase tracking-wider mb-6 text-xs">Información</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/sobre-nosotros" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/sobre-nosotros" className="hover:text-primary transition-colors">Nuestras Tiendas</Link></li>
              <li><Link href="/ayuda" className="hover:text-primary transition-colors">Estado del Pedido</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ's</Link></li>
              <li><Link href="/envios" className="hover:text-primary transition-colors">Envíos y Entregas</Link></li>
              <li><Link href="/devoluciones" className="hover:text-primary transition-colors">Devoluciones</Link></li>
              <li><Link href="/ayuda" className="hover:text-primary transition-colors">Centro de Ayuda</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold uppercase tracking-wider mb-6 text-xs">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Calle de Fuencarral, 45<br/>28004 Madrid</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>910 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hola@ivapeo.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
             <p className="text-xs text-gray-500">© 2025 IVAPEO. Todos los derechos reservados.</p>
             <div className="flex gap-4 text-xs text-gray-400">
               <Link href="/aviso-legal" className="hover:text-primary transition-colors">Aviso Legal</Link>
               <Link href="/privacidad" className="hover:text-primary transition-colors">Privacidad</Link>
               <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
             </div>
          </div>
          
          <div className="flex items-center gap-2 opacity-80 grayscale hover:grayscale-0 transition-all">
             <div className="h-6 px-2 border border-gray-200 rounded flex items-center justify-center bg-white"><span className="font-bold text-blue-800 text-[10px]">VISA</span></div>
             <div className="h-6 px-2 border border-gray-200 rounded flex items-center justify-center bg-white"><span className="font-bold text-red-600 text-[10px]">Mastercard</span></div>
             <div className="h-6 px-2 border border-gray-200 rounded flex items-center justify-center bg-white"><span className="font-bold text-blue-500 text-[10px] italic">PayPal</span></div>
             <div className="h-6 px-2 border border-gray-200 rounded flex items-center justify-center bg-white"><span className="font-bold text-black text-[10px]">Apple Pay</span></div>
          </div>
        </div>

        {/* Age Warning */}
        <div className="mt-8 pt-4 border-t border-gray-100 text-center">
           <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
             Prohibida la venta a menores de 18 años. Los productos con nicotina son altamente adictivos.
           </p>
        </div>
      </div>
    </footer>
  );
}
