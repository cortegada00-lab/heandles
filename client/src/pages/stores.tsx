import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Navigation, Star, Facebook, Instagram, Youtube, Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { SeoHead } from "@/components/shared/seo-head";
import registerLogo from "@/assets/register-logo.png";

interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  hours: string[];
  image: string;
  mapUrl: string;
  features?: string[];
}

const stores: Store[] = [
  {
    id: 1,
    name: "Tienda Plaza de España",
    address: "Gran Via de les Corts Catalanes, 426",
    city: "Barcelona",
    postalCode: "08015",
    phone: "932 205 451",
    hours: [
      "Lunes a Jueves: 10:00h - 14:00h / 17:00h - 20:30h",
      "Viernes y Sábado: 10:00h - 16:00h / 17:00h - 20:30h",
      "Domingo: Cerrado"
    ],
    image: "https://www.ivapeo.com/img/cms/cmsNew/fotogranvia.webp",
    mapUrl: "https://maps.app.goo.gl/qNdB7sLveWSitewv7",
    features: ["Zona de Cata", "Sala de Estar"]
  },
  {
    id: 2,
    name: "Tienda Av. Meridiana",
    address: "Avinguda Meridiana 510",
    city: "Barcelona",
    postalCode: "08030",
    phone: "689 648 477",
    hours: [
      "Lunes a Sábado: 10:00h - 14:00h / 17:00h - 20:30h",
      "Domingo: Cerrado"
    ],
    image: "https://www.ivapeo.com/img/cms/meridiana_2.webp",
    mapUrl: "https://www.google.es/maps/place/Cigarrillos+electronicos+iVapeo.com/@41.437438,2.1829103,17z/data=!4m12!1m6!3m5!1s0x12a4bcdf6e2cd9f9:0xd1972506a8ff1394!2sCigarrillos+electronicos+iVapeo.com!8m2!3d41.437434!4d2.185099!3m4!1s0x12a4bcdf6e2cd9f9:0xd1972506a8ff1394!8m2!3d41.437434!4d2.185099"
  },
  {
    id: 3,
    name: "Tienda Arc de Triomf",
    address: "Ronda de Sant Pere 49",
    city: "Barcelona",
    postalCode: "08010",
    phone: "935 167 167",
    hours: [
      "Lunes a Sábado: 10:00h - 14:00h / 17:00h - 20:30h",
      "Domingo: Cerrado"
    ],
    image: "https://www.ivapeo.com/img/cms/arco-ivapeo.webp",
    mapUrl: "https://www.google.es/maps/place/Cigarrillos+electr%C3%B3nicos+iVapeo+Arco+de+Triunfo/@41.3900367,2.1734103,16z/data=!4m8!1m2!2m1!1sIVAPEO!3m4!1s0x0:0xc506ac43f5b81ab9!8m2!3d41.3914209!4d2.1789019"
  },
  {
    id: 4,
    name: "Tienda Sants",
    address: "Plaza de sants 4",
    city: "Barcelona",
    postalCode: "08028",
    phone: "935 466 406",
    hours: [
      "Lunes a Sábado: 10:00h - 14:00h / 17:00h - 20:30h",
      "Domingo: Cerrado"
    ],
    image: "https://www.ivapeo.com/img/cms/sants.webp",
    mapUrl: "https://www.google.es/maps/place/Cigarrillos+electronicos+vape+shop+barcelona+sants/@41.4067626,2.1251819,13z/data=!4m8!1m2!2m1!1sivapeo+sants!3m4!1s0x12a49885f858bdcb:0x4353bb86a7d5889d!8m2!3d41.375973!4d2.135304"
  },
  {
    id: 5,
    name: "Tienda Terrassa",
    address: "Calle Arquimedes 42",
    city: "Terrassa",
    postalCode: "08224",
    phone: "931 169 015",
    hours: [
      "Lunes a Sábado: 10:00h - 14:00h / 17:00h - 20:30h",
      "Domingo: Cerrado"
    ],
    image: "https://www.ivapeo.com/img/cms/TERRASSA.webp",
    mapUrl: "https://www.google.es/maps/place/Cigarrillos+electr%C3%B3nicos+iVapeo+Terrassa/@41.558014,2.0042133,17z/data=!4m12!1m6!3m5!1s0x12a4929369d2011d:0x129ccdf39d3acf46!2sCigarrillos+electr%C3%B3nicos+iVapeo+Terrassa!8m2!3d41.55801!4d2.006402!3m4!1s0x12a4929369d2011d:0x129ccdf39d3acf46!8m2!3d41.55801!4d2.006402"
  },
  {
    id: 6,
    name: "Tienda Santa Coloma",
    address: "Rambla Sant Sebastian 54",
    city: "Santa Coloma de Gramenet",
    postalCode: "08921",
    phone: "931 546 633",
    hours: [
      "Lunes a Sábado: 10:00h - 14:00h / 17:00h - 20:30h",
      "Domingo: Cerrado"
    ],
    image: "https://www.ivapeo.com/img/cms/santacoloma-ivapeo.webp",
    mapUrl: "https://www.google.es/maps/place/Cigarrillos+electr%C3%B3nicos+iVapeo+Santa+Coloma/@41.450756,2.2093368,17z/data=!4m12!1m6!3m5!1s0x12a4bd7ae0f7e137:0xa5debda7583ceaef!2sCigarrillos+electr%C3%B3nicos+iVapeo+Santa+Coloma!8m2!3d41.450752!4d2.2115255!3m4!1s0x12a4bd7ae0f7e137:0xa5debda7583ceaef!8m2!3d41.450752!4d2.2115255"
  },
  {
    id: 7,
    name: "Tienda Sabadell",
    address: "Ronda de Zamenhof 110",
    city: "Sabadell",
    postalCode: "08208",
    phone: "938 679 916",
    hours: [
      "Lunes a Sábado: 10:00h - 14:00h / 17:00h - 20:30h",
      "Domingo: Cerrado"
    ],
    image: "https://www.ivapeo.com/img/cms/sabadell2.webp",
    mapUrl: "https://www.google.es/maps/place/Cigarrillos+electr%C3%B3nicos+iVapeo+Sabadell/@41.5505863,2.0974905,17z/data=!4m12!1m6!3m5!1s0x12a49525893c19dd:0x8e7ef79a9577d11c!2sCigarrillos+electr%C3%B3nicos+iVapeo+Sabadell!8m2!3d41.5505823!4d2.0996792!3m4!1s0x12a49525893c19dd:0x8e7ef79a9577d11c!8m2!3d41.5505823!4d2.0996792%20target="
  },
  {
    id: 8,
    name: "Tienda Mataró",
    address: "Avinguda de Jaume Recoder, 53",
    city: "Mataró",
    postalCode: "08301",
    phone: "935 17 47 00",
    hours: [
      "Lunes a Sábado: 10:00h - 14:00h / 17:00h - 20:30h",
      "Domingo: Cerrado"
    ],
    image: "https://www.ivapeo.com/img/cms/mataro-tienda.webp",
    mapUrl: "https://maps.app.goo.gl/BkhGNeXiwccLf4gV9"
  }
];

export default function StoresPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <SeoHead 
        title="Tiendas IVAPEO - Encuentra tu tienda de vapeo más cercana"
        description="Visita nuestras tiendas de vapeo en Barcelona, Mataró, Terrassa y Sabadell. Zona de cata, asesoramiento experto y los mejores precios."
      />
      <Navbar />
      
      <main className="flex-1 pb-20">
        {/* Header */}
        <div className="bg-[#002B5C] text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
          <div className="container-custom relative z-10 text-center">
             <Badge className="bg-white/10 hover:bg-white/20 text-white border-0 mb-4 backdrop-blur-sm">
               <MapPin className="w-3 h-3 mr-1" /> +8 Puntos de Venta
             </Badge>
             <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 tracking-tight">
               Ven a vernos.
             </h1>
             <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
               Todas nuestras tiendas cuentan con zona de cata con <span className="text-white font-bold">más de 150 sabores</span> y sala de estar para que disfrutes de la mejor experiencia de vapeo.
             </p>
          </div>
        </div>

        <div className="container-custom -mt-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stores.map((store) => (
              <Card key={store.id} className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 md:hidden"></div>
                    <img 
                      src={store.image} 
                      alt={store.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {store.features && (
                       <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                         {store.features.map((feature, i) => (
                           <Badge key={i} className="bg-primary/90 backdrop-blur-sm border-0 text-white text-[10px] uppercase tracking-wider font-bold w-fit shadow-sm">
                             <Star className="w-3 h-3 mr-1 fill-current" /> {feature}
                           </Badge>
                         ))}
                       </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8 flex flex-col justify-between bg-white h-full">
                    <div>
                      <h3 className="text-xl font-black text-[#0a1a2a] mb-4 leading-tight group-hover:text-primary transition-colors">
                        {store.name}
                      </h3>
                      
                      <div className="space-y-4 text-sm text-gray-600">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>
                            <span className="block font-medium text-gray-900">{store.address}</span>
                            {store.postalCode} {store.city}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-primary shrink-0" />
                          <a href={`tel:${store.phone.replace(/\s/g, '')}`} className="hover:text-primary font-medium transition-colors">
                            {store.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            {store.hours.map((hour, idx) => (
                              <p key={idx} className={hour.includes("Cerrado") ? "text-red-500 font-medium" : ""}>
                                {hour}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <a 
                        href={store.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full block"
                      >
                        <Button variant="outline" className="w-full border-gray-200 hover:border-primary hover:text-primary font-bold gap-2 group/btn">
                          <Navigation className="w-4 h-4 group-hover/btn:text-primary transition-colors" />
                          Cómo llegar
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
