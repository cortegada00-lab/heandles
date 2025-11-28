import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, MapPin, User, LogOut, ChevronRight, Truck, Settings, Plus, Edit, Trash } from "lucide-react";
import { Link } from "wouter";
import imgProduct from "@assets/generated_images/Premium_e-liquid_bottles_132f9a1b.png";
import { useState } from "react";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="min-h-screen bg-gray-50 text-foreground font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container-custom">
          
          <div className="grid md:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-3">
               <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
                 <div className="p-6 border-b border-gray-100 text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">😎</div>
                    <h2 className="font-bold text-gray-900">Hola, Vaper</h2>
                    <p className="text-xs text-gray-500">Cliente VIP</p>
                 </div>
                 <nav className="p-2">
                    <Button 
                      variant="ghost" 
                      onClick={() => setActiveTab("orders")}
                      className={`w-full justify-start gap-3 font-bold ${activeTab === "orders" ? "bg-primary/5 text-primary" : "text-gray-600 hover:text-primary hover:bg-primary/5"}`}
                    >
                       <Package className="w-4 h-4" /> Mis Pedidos
                    </Button>
                    <Button 
                      variant="ghost" 
                      onClick={() => setActiveTab("addresses")}
                      className={`w-full justify-start gap-3 font-bold ${activeTab === "addresses" ? "bg-primary/5 text-primary" : "text-gray-600 hover:text-primary hover:bg-primary/5"}`}
                    >
                       <MapPin className="w-4 h-4" /> Direcciones
                    </Button>
                    <Button 
                      variant="ghost" 
                      onClick={() => setActiveTab("profile")}
                      className={`w-full justify-start gap-3 font-bold ${activeTab === "profile" ? "bg-primary/5 text-primary" : "text-gray-600 hover:text-primary hover:bg-primary/5"}`}
                    >
                       <User className="w-4 h-4" /> Datos Personales
                    </Button>
                    <div className="h-px bg-gray-100 my-2"></div>
                    <Button variant="ghost" className="w-full justify-start gap-3 font-bold text-red-500 hover:text-red-600 hover:bg-red-50">
                       <LogOut className="w-4 h-4" /> Cerrar Sesión
                    </Button>
                 </nav>
               </div>
            </div>

            {/* Content */}
            <div className="md:col-span-9">
               
               {/* ORDERS TAB */}
               {activeTab === "orders" && (
                 <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <h1 className="text-2xl font-bold text-gray-900 mb-6">Mis Pedidos Recientes</h1>
                   <div className="space-y-4">
                      {[1, 2].map((order) => (
                        <div key={order} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                          <div className="bg-gray-50 p-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 text-sm">
                             <div className="flex gap-6">
                                <div>
                                   <div className="text-gray-500 text-xs uppercase font-bold">Pedido Realizado</div>
                                   <div className="font-bold text-gray-900">18 Nov 2025</div>
                                </div>
                                <div>
                                   <div className="text-gray-500 text-xs uppercase font-bold">Total</div>
                                   <div className="font-bold text-gray-900">45.50€</div>
                                </div>
                                <div>
                                   <div className="text-gray-500 text-xs uppercase font-bold">Enviar a</div>
                                   <div className="font-bold text-gray-900 text-primary cursor-pointer">Mi Casa</div>
                                </div>
                             </div>
                             <div className="flex items-center gap-4">
                                <div className="text-xs font-bold text-gray-500"># ORD-2025-{order}839</div>
                                <Button size="sm" variant="outline">Ver Factura</Button>
                             </div>
                          </div>
                          
                          <div className="p-6">
                             <div className="flex items-center gap-4 mb-6">
                                <Truck className="w-5 h-5 text-green-600" />
                                <div>
                                   <div className="font-bold text-green-700">Entregado el 19 Nov</div>
                                   <div className="text-xs text-gray-500">El paquete fue entregado en mano</div>
                                </div>
                             </div>

                             <div className="flex gap-4">
                                <div className="w-20 h-20 bg-gray-50 rounded-lg p-2 border border-gray-100">
                                   <img src={imgProduct} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1">
                                   <h4 className="font-bold text-gray-900 mb-1">Don Juan Reserve 100ml - Kings Crest</h4>
                                   <p className="text-xs text-gray-500 mb-2">Nicotina: 3mg</p>
                                   <Button size="sm" className="bg-primary text-white">Comprar de nuevo</Button>
                                </div>
                             </div>
                          </div>
                        </div>
                      ))}
                   </div>
                 </div>
               )}

               {/* ADDRESSES TAB */}
               {activeTab === "addresses" && (
                 <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <div className="flex items-center justify-between mb-6">
                     <h1 className="text-2xl font-bold text-gray-900">Mis Direcciones</h1>
                     <Button className="bg-black text-white hover:bg-gray-800"><Plus className="w-4 h-4 mr-2" /> Añadir Nueva</Button>
                   </div>
                   
                   <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-6 rounded-xl border border-primary ring-1 ring-primary shadow-sm relative">
                         <div className="absolute top-4 right-4 bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase">Predeterminada</div>
                         <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><MapPin className="w-4 h-4" /> Mi Casa</h3>
                         <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                           Calle Mayor 123, 4º A<br/>
                           28013 Madrid<br/>
                           España
                         </p>
                         <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="text-xs"><Edit className="w-3 h-3 mr-1" /> Editar</Button>
                            <Button variant="outline" size="sm" className="text-xs text-red-500 hover:text-red-600"><Trash className="w-3 h-3 mr-1" /> Eliminar</Button>
                         </div>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-gray-200 border-dashed flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors min-h-[200px]">
                         <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 text-gray-400">
                           <Plus className="w-6 h-6" />
                         </div>
                         <h3 className="font-bold text-gray-900 text-sm">Añadir otra dirección</h3>
                      </div>
                   </div>
                 </div>
               )}

               {/* PROFILE TAB */}
               {activeTab === "profile" && (
                 <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                   <h1 className="text-2xl font-bold text-gray-900 mb-8">Datos Personales</h1>
                   
                   <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <Label>Nombre</Label>
                        <Input defaultValue="Vaper" />
                      </div>
                      <div className="space-y-2">
                        <Label>Apellidos</Label>
                        <Input defaultValue="Pro" />
                      </div>
                   </div>

                   <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input defaultValue="cliente@ivapeo.com" disabled className="bg-gray-50" />
                      </div>
                      <div className="space-y-2">
                        <Label>Teléfono</Label>
                        <Input defaultValue="+34 600 000 000" />
                      </div>
                   </div>

                   <div className="pt-6 border-t border-gray-100 flex justify-end">
                      <Button className="bg-primary text-white hover:bg-primary/90">Guardar Cambios</Button>
                   </div>
                 </div>
               )}

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
