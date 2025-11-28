import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, MessageCircle, Upload } from "lucide-react";
import { SeoHead } from "@/components/shared/seo-head";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <SeoHead title="Contacte con Nosotros - iVapeo" description="Ponte en contacto con nosotros. Estamos aquí para ayudarte." />
      <Navbar />

      <main className="flex-1 bg-white">
        {/* Page Header */}
        <div className="bg-gray-50 border-b border-gray-100 py-8">
            <div className="container-custom">
                <h1 className="text-3xl font-heading font-bold text-gray-900 uppercase">Contacte con nosotros</h1>
            </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[300px] md:h-[450px] bg-gray-100 relative">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.423696428056!2d2.1743099!3d41.3887901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f7c4d671cd%3A0x7d9f1b9d7b8b8b0!2sRonda%20de%20Sant%20Pere%2C%2049%2C%2008010%20Barcelona!5e0!3m2!1sen!2ses!4v1620000000000!5m2!1sen!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
        </div>

        <div className="container-custom py-12 md:py-16">
            <div className="grid md:grid-cols-12 gap-12">
                {/* Left Column: Contact Info */}
                <div className="md:col-span-4 space-y-8">
                    <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">IVAPEO</h2>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0 group-hover:bg-gray-100 transition-colors">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm leading-relaxed mt-2.5">
                                    Ronda Sant Pere 49 - CP 08010 - Barcelona
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0 group-hover:bg-gray-100 transition-colors">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-medium mt-2.5">
                                    +34 935.167.167
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <a href="https://wa.me/34647010979" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0 group-hover:bg-green-100 transition-colors cursor-pointer animate-pulse">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                            <div>
                                <p className="text-gray-500 text-sm font-medium mb-0.5 mt-0.5">WhatsApp</p>
                                <a href="https://wa.me/34647010979" target="_blank" rel="noopener noreferrer" className="text-green-600 text-sm font-bold hover:underline cursor-pointer">
                                    +34 647 010 979 (Clic para chatear)
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0 group-hover:bg-gray-100 transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-medium mt-2.5">
                                    soporte@ivapeo.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="md:col-span-8">
                    <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">CONTACTE CON NOSOTROS</h2>
                    
                    <form className="space-y-6 bg-white p-1">
                        <div className="grid md:grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="subject" className="text-gray-500 font-normal text-sm uppercase tracking-wide">Asunto</Label>
                                <Select defaultValue="customer-service">
                                    <SelectTrigger className="w-full bg-white border-gray-200 h-10 text-gray-600">
                                        <SelectValue placeholder="Seleccionar asunto" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="customer-service">Servicio al cliente</SelectItem>
                                        <SelectItem value="webmaster">Webmaster</SelectItem>
                                        <SelectItem value="devoluciones">Devoluciones</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-gray-500 font-normal text-sm uppercase tracking-wide">Dirección de correo electrónico</Label>
                                <Input id="email" type="email" placeholder="su@email.com" className="bg-white border-gray-200 h-10" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="order-ref" className="text-gray-500 font-normal text-sm uppercase tracking-wide">Referencia del pedido</Label>
                                <div className="relative">
                                    <Select>
                                        <SelectTrigger className="w-full bg-white border-gray-200 text-gray-400 h-10">
                                            <SelectValue placeholder="Seleccionar referencia" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">-- No tengo pedidos recientes --</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <span className="absolute -bottom-5 left-0 text-[10px] text-gray-400 uppercase">opcional</span>
                                </div>
                            </div>

                            <div className="space-y-2 pt-4">
                                <Label htmlFor="file" className="text-gray-500 font-normal text-sm uppercase tracking-wide">Archivo adjunto</Label>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <div className="flex-1 bg-gray-50 border border-gray-200 rounded-md h-10 flex items-center px-3 text-sm text-gray-400">Ningún archivo seleccionado</div>
                                    <Button type="button" className="bg-[#007ab7] hover:bg-[#006da3] text-white font-bold px-6 h-10 shrink-0 transition-colors">
                                        SELECCIONAR ARCHIVO
                                    </Button>
                                </div>
                                <span className="text-[10px] text-gray-400 uppercase block">opcional</span>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-gray-500 font-normal text-sm uppercase tracking-wide">Mensaje</Label>
                                <Textarea 
                                    id="message" 
                                    placeholder="¿Cómo podemos ayudarle?" 
                                    className="min-h-[150px] bg-white border-gray-200 resize-none p-4" 
                                />
                            </div>

                            <div className="flex items-center space-x-2 pt-2">
                                <Checkbox id="gdpr" className="border-gray-300" />
                                <label
                                    htmlFor="gdpr"
                                    className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-500"
                                >
                                    Acepto las <a href="/privacidad" className="underline text-gray-700 hover:text-primary">políticas de privacidad GDRP</a>.
                                </label>
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button type="submit" className="bg-[#bedb8b] hover:bg-[#afd370] text-white font-bold uppercase px-8 py-3 h-auto text-sm md:text-base shadow-sm rounded transition-colors">
                                    Enviar
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}