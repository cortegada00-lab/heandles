import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, ShieldCheck, CreditCard, Truck, Gift, Tag, LogIn, ChevronLeft, Minus, Plus } from "lucide-react";
import ivapeoLogo from "@/assets/ivapeo-logo.webp";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { useCart } from "@/lib/cart-context";

export default function CartPage() { // Serving as Checkout Page
  const [_, setLocation] = useLocation();
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();
  const shipping = 0; // Free according to screenshots
  const taxes = (subtotal / 1.21) * 0.21; // Approx VAT calculation
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-foreground flex flex-col">
      {/* Simplified Checkout Header */}
      <header className="bg-white py-4 border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="container-custom flex items-center justify-between">
            <Link href="/" className="text-sm text-primary hover:underline flex items-center gap-1 font-medium">
                <ChevronLeft className="w-4 h-4" /> Volver
            </Link>
            <Link href="/">
                <img src={ivapeoLogo} alt="IVAPEO" className="h-8 md:h-10 mx-auto" />
            </Link>
            <div className="w-16"></div> {/* Spacer for centering */}
        </div>
      </header>

      <main className="flex-1 py-8 md:py-12">
        <div className="container-custom max-w-6xl">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* LEFT COLUMN: Checkout Form */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Login Prompt */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <span className="text-sm font-medium text-gray-700">¿Tienes cuenta con ivapeo? Inicia Sesión</span>
                <Link href="/login">
                  <Button className="w-full sm:w-auto font-bold bg-primary hover:bg-primary/90">
                      <LogIn className="w-4 h-4 mr-2" /> Iniciar sesión
                  </Button>
                </Link>
              </div>

              {/* Separator "O Compra como invitado" */}
              <div className="relative text-center">
                  <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200"></span></div>
                  <span className="relative bg-gray-50 px-4 text-xs text-gray-400 uppercase font-bold tracking-wider">O Compra como invitado</span>
              </div>

              {/* Email */}
              <div className="space-y-4">
                <h2 className="font-bold text-lg text-gray-900">Email</h2>
                <Input placeholder="Email" className="bg-white h-11" />
                <div className="flex items-center space-x-2">
                    <Checkbox id="offers" />
                    <Label htmlFor="offers" className="text-sm font-normal text-gray-600 cursor-pointer">Suscríbete y recibe un 10% en tu próxima compra</Label>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-4">
                <h2 className="font-bold text-lg text-gray-900">Dirección De Entrega</h2>
                <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Primer nombre" className="bg-white h-11" />
                    <Input placeholder="Apellido" className="bg-white h-11" />
                </div>
                <Input placeholder="Dirección Línea 1" className="bg-white h-11" />
                <Input placeholder="Línea de dirección 2" className="bg-white h-11" />
                <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Código Postal / Postal" className="bg-white h-11" />
                    <Input placeholder="Ciudad" className="bg-white h-11" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Select defaultValue="es">
                        <SelectTrigger className="bg-white h-11">
                            <SelectValue placeholder="País" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="es">España</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="bg-white h-11">
                            <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="bcn">Barcelona</SelectItem>
                            <SelectItem value="mad">Madrid</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Input placeholder="Teléfono móvil" className="bg-white h-11" />
                <Input placeholder="Título Dirección" className="bg-white h-11" />
                <Input placeholder="Otra información" className="bg-white h-11" />
                
                <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="billing" defaultChecked />
                    <Label htmlFor="billing" className="text-sm font-bold text-gray-900 cursor-pointer">Misma dirección de factura</Label>
                </div>
              </div>

              {/* Delivery Method */}
              <div className="space-y-4">
                <h2 className="font-bold text-lg text-gray-900">Método De Entrega</h2>
                
                {/* Warning Box */}
                <div className="bg-red-50 border border-red-100 text-red-600 p-3 rounded text-sm flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-red-200 text-red-600 flex items-center justify-center font-bold text-xs">!</span>
                    Por favor, seleccione la opción de entrega.
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-lg cursor-pointer hover:border-primary transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                            <span className="font-bold text-gray-700 text-sm flex items-center gap-2">
                                <span className="text-red-600 font-black italic">Express</span> Servicio 24H
                            </span>
                        </div>
                        <div className="text-right">
                            <div className="font-bold text-gray-900">Gratis</div>
                            <div className="text-[10px] text-gray-400">Envío gratuito a partir de 28€</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-lg cursor-pointer hover:border-primary transition-colors">
                         <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                            <span className="font-bold text-gray-700 text-sm">
                                RECOGIDA EN TIENDA
                            </span>
                        </div>
                        <div className="text-right">
                            <div className="font-bold text-gray-900">Gratis</div>
                            <div className="text-[10px] text-gray-400">Envío gratuito a partir de 28€</div>
                        </div>
                    </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h2 className="font-bold text-lg text-gray-900">Método De Pago</h2>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
                     <div className="p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50">
                        <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                        <span className="text-sm font-medium text-gray-700">PAGO CON TARJETA</span>
                     </div>
                     <div className="p-4 flex items-center justify-between cursor-pointer bg-blue-50/50 border-l-4 border-l-primary">
                        <div className="flex items-center gap-3">
                             <div className="w-4 h-4 rounded-full border-[5px] border-primary bg-white"></div>
                             <span className="text-sm font-bold text-gray-900">BIZUM</span>
                        </div>
                        <span className="text-primary font-black italic tracking-tighter flex items-center gap-0.5"><span className="text-lg">%</span> bizum</span>
                     </div>
                     <div className="p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50">
                        <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                        <span className="text-sm font-medium text-gray-700">Pago por transferencia bancaria</span>
                     </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Summary */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
                <h2 className="font-bold text-lg mb-6 border-b border-gray-100 pb-4">Carrito De Compras</h2>
                
                {/* Items List */}
                <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
                    {items.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        Tu carrito está vacío
                      </div>
                    ) : items.map((item) => (
                        <div key={`${item.id}-${item.variant}`} className="flex gap-3">
                             <div className="w-12 h-12 bg-gray-50 rounded shrink-0 border border-gray-100 p-1">
                                <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                             </div>
                             <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start gap-2">
                                    <h4 className="text-[11px] font-bold text-gray-700 leading-tight uppercase line-clamp-2">{item.name}</h4>
                                    <span className="text-xs font-bold text-gray-900 shrink-0">{(item.price * item.quantity).toFixed(2)} €</span>
                                </div>
                                {item.variant && <div className="text-[10px] text-gray-500 mt-0.5">Opción: {item.variant === 'default' ? 'Estándar' : item.variant === 'bulk' ? 'Pack x2' : 'Pack x3'}</div>}
                                <div className="mt-1 flex items-center justify-between">
                                    <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">En stock</span>
                                    
                                    <div className="flex items-center gap-2">
                                      <div className="flex items-center border border-gray-200 rounded h-6">
                                        <button 
                                          onClick={() => updateQuantity(item.id, -1)}
                                          className="w-6 h-full flex items-center justify-center hover:bg-gray-50 text-gray-500"
                                        >
                                          <Minus className="w-3 h-3" />
                                        </button>
                                        <span className="w-6 text-center text-[10px] font-bold text-gray-900">{item.quantity}</span>
                                        <button 
                                          onClick={() => updateQuantity(item.id, 1)}
                                          className="w-6 h-full flex items-center justify-center hover:bg-gray-50 text-gray-500"
                                        >
                                          <Plus className="w-3 h-3" />
                                        </button>
                                      </div>
                                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500">
                                        <Trash2 className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                </div>
                             </div>
                        </div>
                    ))}
                </div>

                {/* Coupon */}
                <div className="flex gap-2 mb-6">
                    <div className="relative flex-1">
                        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input placeholder="Ingrese su cupón aquí" className="pl-9 bg-gray-50 h-10 text-sm" />
                    </div>
                    <Button variant="outline" className="h-10 px-6 font-bold bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-700">Solicitar</Button>
                </div>

                {/* Totals */}
                <div className="space-y-3 border-t border-gray-100 pt-4 mb-6">
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Total parcial</span>
                        <span className="font-medium">{subtotal.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Transporte</span>
                        <span className="font-medium text-green-600">Gratis</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Impuestos incluidos</span>
                        <span className="font-medium">{taxes.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between items-end pt-2 border-t border-gray-100 mt-2">
                        <span className="font-bold text-lg text-gray-900">Total</span>
                        <span className="font-black text-2xl text-gray-900">{total.toFixed(2)} €</span>
                    </div>
                </div>

                {/* Comment */}
                <div className="mb-6">
                    <Textarea placeholder="Añadir Comentarios Sobre Su Pedido" className="bg-gray-50 min-h-[80px] text-sm resize-none" />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-2">
                        <Checkbox id="terms" className="mt-0.5" defaultChecked />
                        <Label htmlFor="terms" className="text-[11px] text-gray-600 leading-tight cursor-pointer">
                            Estoy de acuerdo con los <span className="text-primary hover:underline">términos del servicio</span> y los acepto sin reservas.
                        </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                        <Checkbox id="gdpr" className="mt-0.5" defaultChecked />
                        <Label htmlFor="gdpr" className="text-[11px] text-gray-600 leading-tight cursor-pointer">
                            Acepto las condiciones generales y la política de confidencialidad de la ley GDRP <span className="text-red-500">*</span>
                        </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                        <Checkbox id="age" className="mt-0.5" defaultChecked />
                        <Label htmlFor="age" className="text-[11px] text-gray-600 leading-tight cursor-pointer">
                            Soy mayor de 18 años <span className="text-red-500">*</span>
                        </Label>
                    </div>
                </div>

                {/* Pay Button */}
                <Button 
                  onClick={() => {
                    clearCart();
                    setLocation("/order-success");
                  }}
                  className="w-full h-14 text-lg font-bold bg-[#84cc16] hover:bg-[#65a30d] text-white uppercase tracking-wide shadow-lg shadow-lime-500/20 rounded-lg"
                >
                    Pagar
                </Button>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-white py-8 border-t border-gray-200 mt-auto">
         <div className="container-custom">
             <div className="grid md:grid-cols-4 gap-8 text-[11px] text-gray-500">
                <div className="space-y-2">
                    <h4 className="font-bold text-gray-900 uppercase text-xs">Contáctanos</h4>
                    <p>Ronda de Sant Pere, 49</p>
                    <p>08010 - Barcelona (Central)</p>
                    <p className="mt-2">935.167.167</p>
                    <p>soporte@ivapeo.com</p>
                </div>
                <div className="space-y-2">
                    <h4 className="font-bold text-gray-900 uppercase text-xs">Servicio</h4>
                    <p>Garantía y devolución</p>
                    <p>FAQ's</p>
                    <p>Nosotros</p>
                </div>
                <div className="space-y-2">
                    <h4 className="font-bold text-gray-900 uppercase text-xs">Información</h4>
                    <p>Mi cuenta</p>
                    <p>Historial de pedidos</p>
                    <p>Política de privacidad</p>
                </div>
                <div className="space-y-2">
                    <h4 className="font-bold text-gray-900 uppercase text-xs">Newsletter</h4>
                    <p className="mb-2">Suscríbete a nuestro newsletter!</p>
                    <div className="flex">
                        <Input placeholder="Su dirección de correo" className="h-8 text-xs rounded-r-none border-r-0" />
                        <Button className="h-8 rounded-l-none bg-black text-[10px] font-bold px-3">SUBSCRIBE</Button>
                    </div>
                </div>
             </div>
             <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400">
                <p>© Copyright 2025 iVapeo. Todos los derechos reservados</p>
                <div className="flex gap-2">
                    <div className="px-2 py-1 bg-gray-100 rounded border border-gray-200 font-bold text-blue-800">VISA</div>
                    <div className="px-2 py-1 bg-gray-100 rounded border border-gray-200 font-bold text-red-600">MasterCard</div>
                </div>
             </div>
         </div>
      </footer>
    </div>
  );
}
