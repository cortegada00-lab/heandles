import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ChevronRight, ChevronDown, SlidersHorizontal, X, Zap, Tag, Check, Star, Rocket, Heart } from "lucide-react";
import { Link, useLocation } from "wouter";
import { ProductCard } from "@/components/product/product-card";
import { mockCategoryProducts } from "@/lib/mock-data";
import { SeoHead } from "@/components/shared/seo-head";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getDeliveryDate } from "@/lib/shipping";
import { Pagination } from "@/components/shared/pagination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { QuickAddPopover } from "@/components/product/quick-add-popover";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CategoryPage() {
  const [location] = useLocation();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Determine category from URL
  const isEliquids = location === "/eliquids";
  const categoryTitle = isEliquids ? "E-Líquidos" : "Kits y Mods";
  
  // Mock pagination
  const itemsPerPage = 12;
  const totalPages = Math.ceil(mockCategoryProducts.length / itemsPerPage);
  const currentProducts = mockCategoryProducts.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  // Mock filters
  const filters = {
    brands: ["Vaporesso", "Voopoo", "Smok", "Uwell", "Geekvape"],
    type: ["Kits Inicio", "Pods", "Mods", "Atomizadores"],
    power: ["< 20W", "20W - 50W", "50W - 100W", "> 100W"],
    battery: ["Integrada", "Externa 18650", "Externa 21700"]
  };

  // Sub-category pills
  const subCategories = [
    "Todos", "Kits de Inicio", "Pod Systems", "Mods", "Tanques", "Resistencias"
  ];

  // Generate mock variants for color swatches
  const getVariants = (id: number) => {
    const colors = [
      { bg: "bg-black", name: "Black" },
      { bg: "bg-gray-400", name: "Silver" },
      { bg: "bg-blue-600", name: "Blue" },
      { bg: "bg-red-600", name: "Red" },
      { bg: "bg-gradient-to-r from-purple-500 to-blue-500", name: "Rainbow" },
      { bg: "bg-green-600", name: "Green" },
    ];
    return colors.slice(0, 2 + (id % 5));
  };

  const FilterContent = () => (
    <div className="space-y-1 pb-12">
        <Accordion type="multiple" defaultValue={["brands", "type", "power"]} className="w-full">
          
          <AccordionItem value="brands" className="border-b border-gray-100">
            <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">Marca</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pb-2">
                {filters.brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-3">
                    <Checkbox id={brand} className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                    <label htmlFor={brand} className="text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="type" className="border-b border-gray-100">
            <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">Tipo</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pb-2">
                {filters.type.map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <Checkbox id={option} className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                    <label htmlFor={option} className="text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="power" className="border-b border-gray-100">
            <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">Potencia</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pb-2">
                {filters.power.map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <Checkbox id={option} className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                    <label htmlFor={option} className="text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="battery" className="border-b border-gray-100">
            <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 py-4">Batería</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pb-2">
                {filters.battery.map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <Checkbox id={option} className="rounded-sm border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                    <label htmlFor={option} className="text-sm text-gray-600 cursor-pointer hover:text-primary transition-colors">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        <div className="pt-6 mt-auto">
          <Button className="w-full font-bold uppercase tracking-wider" onClick={() => setMobileFiltersOpen(false)}>Aplicar Filtros</Button>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <SeoHead 
        title={`${categoryTitle} | IVAPEO`}
        description={`Descubre nuestra selección de ${categoryTitle}. Las mejores marcas al mejor precio.`}
      />
      <Navbar />

      <main className="pb-16">
        {/* Header Style UK ECIG STORE - Ultra Compressed */}
        <div className="bg-gray-50 py-2 border-b border-gray-100">
          <div className="container-custom">
             <div className="max-w-full">
               <Breadcrumbs items={[{ label: categoryTitle }]} className="mb-1 text-[10px]" />
               
               <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                 <h1 className="text-xl md:text-2xl font-heading font-bold text-gray-900 leading-none">
                   {categoryTitle}
                 </h1>
                 <p className="text-gray-500 text-[11px] leading-tight hidden md:block max-w-2xl">
                   Encuentra el dispositivo perfecto para tu estilo de vapeo. Desde pods compactos hasta mods potentes.
                 </p>
               </div>

               {/* Sub-category Pills */}
               <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 gap-1.5 scrollbar-hide snap-x">
                 {subCategories.map((cat, idx) => (
                   <button 
                     key={cat}
                     className={cn(
                       "px-3 py-1 rounded-full text-xs font-bold transition-all border whitespace-nowrap flex-shrink-0 snap-start",
                       idx === 0 
                         ? "bg-gray-900 text-white border-gray-900" 
                         : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                     )}
                   >
                     {cat}
                   </button>
                 ))}
               </div>
             </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="sticky top-[72px] z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 mb-8">
          <div className="container-custom flex items-center justify-between">
            <div className="flex items-center gap-2">
               {/* Mobile/Tablet Filter Button (Sheet) */}
               <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                 <SheetTrigger asChild>
                   <Button variant="outline" size="sm" className="h-9 gap-2 text-xs font-bold uppercase tracking-wide flex lg:hidden">
                     <SlidersHorizontal className="w-3 h-3" /> Filtros
                   </Button>
                 </SheetTrigger>
                 <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto">
                   <SheetHeader className="mb-6">
                     <SheetTitle className="text-left font-heading font-bold text-xl">Filtros</SheetTitle>
                   </SheetHeader>
                   <FilterContent />
                 </SheetContent>
               </Sheet>

               {/* Desktop Filter Label */}
               <Button variant="outline" size="sm" className="h-9 gap-2 text-xs font-bold uppercase tracking-wide hidden lg:flex pointer-events-none opacity-50">
                 <SlidersHorizontal className="w-3 h-3" /> Filtros
               </Button>
               <span className="text-xs text-gray-500 font-medium ml-2">{mockCategoryProducts.length} productos</span>
            </div>

            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide cursor-pointer text-gray-600 hover:text-gray-900">
                    Ordenar por <ChevronDown className="w-3 h-3" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Ordenar productos</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">Más vendidos</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Novedades</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Precio: Menor a Mayor</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Precio: Mayor a Menor</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Nombre: A-Z</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <div className="container-custom flex gap-8">
          {/* Sidebar Filters - Clean Vertical List */}
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-32 h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
            <FilterContent />
          </aside>

          {/* Product Grid - Updated to 4 columns max */}
          <div className="flex-1">
            {/* Top Pagination */}
            <div className="mb-6 flex justify-end">
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage}
                className="mt-0" 
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentProducts.map((product, i) => (
                <ProductCard 
                  key={product.id || i}
                  product={product}
                  badge={product.id.toString().endsWith('0') ? "NUEVO" : undefined}
                  type={product.id.toString().endsWith('5') ? "offer" : "standard"}
                />
              ))}
            </div>

            {/* Pagination */}
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
            />
          </div>
        </div>
        
        {/* SEO Content for E-Liquids */}
        {isEliquids && (
          <div className="container-custom mt-20 border-t border-gray-100 pt-16">
            <div className="prose prose-sm max-w-none text-gray-600">
              <h2 className="text-2xl font-black text-gray-900 uppercase mb-6">¿Qué son los e-líquidos de vapeo?</h2>
              <p className="mb-4">
                ¿Estás pensando en comprar un liquido para vaper con tu cigarro electronico y no sabes cual escoger? es normal ya que existen infinidad de los llamados líquido vaper. Desde nuestra tienda de vaper te queremos ayudar a comprar liquidos de la forma más fácil, para ello hemos hecho una selección con los mejores líquidos de vapeo. Escoge entre nuestra amplia gama de opciones todos ellos de gran calidad.
              </p>
              <p className="mb-4">
                Descubre nuestra extensa variedad de e-líquidos con sabores de liquidos de vaper donde podrás escoger la potencia de nicotina correcta. Por ejemplo, si quieres un vaper con nicotina, para sentir una experiencia de vapeo gratificante, no te preocupes, explora nuestra amplia selección de los mejores tenemos el liquido vaper perfecto para tí.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">¿Dónde comprar líquidos para vapear a buen precio?</h3>
              <p className="mb-4">
                Todos nuestros líquidos para cigarrillos además de ser de las mejores marcas, han sido elaborados con ingredientes que cuentan con materias primas de las mejores calidades del mercado. Así que no te preocupes, ya que tendrás una gama de líquidos de varios sabores
              </p>
              <p className="mb-4">
                Un e-liquid es el líquido del cigarro electrónico que vamos a utilizar con nuestro cigarro electrónico. Todos los cigarrillos electronicos necesitan líquidos de vapeo.
              </p>
              <p className="mb-4">
                El liquido para vapear esta compuesto por dos ingredientes que son la glicerina vegetal y el propilenglicol de primera calidad y presente en la industria alimentaria. A estos se le añade sabor con sabores y aromas naturales para todos los gustos.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Elegir la potencia de nicotina en tu e-liquid de vapeo</h3>
              <p className="mb-4">
                En principio ningún liquido contiene nicotina. Pero tú mismo puedes comprar la nicotina aparte escogiendo el nivel de concentración con el que quieres vapear, estos se llaman Nicokits.
              </p>
              <p className="mb-4">
                Este producto es necesario para poder vapear ya que el vapor se forma cuando calentamos el líquido seleccionado. Algunos contienen capsulas vaper que podrás cambiar cómodamente una vez se termine el líquido.
              </p>
              <p className="mb-4">
                Una de las ventajas que tienen los e-líquidos es que podemos elegir tanto la cantidad de nicotina que inhalar como el sabor del que queremos disfrutar con nuestro e-cig.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Tipos de líquidos para cigarrillos electrónicos</h3>
              <p className="mb-4">
                Lo primero que tienes que tener en cuenta a la hora de elegir un e-líquido para tu cigarrillo electrónico es el nivel de nicotina que buscas. Para mucho, el acto de vapear permite ir reduciendo poco a poco el consumo de esta sustancia, consiguiendo, así, una alternativa al tabaco. Para otros supone el control absoluto de la dosis de nicotina. Si hasta ahora eras fumador y quieres dejarlo, te informamos.
              </p>
              <p className="mb-4">
                Sea como sea, la primera elección de un eliquid es saber las diferentes concentraciones de consumo de nicotina, esto se traduce en una gran ventaja que que permite a los usuarios personalizar su experiencia de vapeo.
              </p>
              <p className="mb-4">
                Aunque cada marca de liquidos puede presentar diferentes formatos de diferentes concentraciones de nicotina, por norma general encontrarás:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Líquidos para vapear con nicotina de muy alta concentración:</strong> 24 mg de nicotina</li>
                <li><strong>líquidos con nicotina de alta concentración:</strong> 16-18 mg de nicotina</li>
                <li><strong>Concentración media:</strong> 10-12 mg de nicotina</li>
                <li><strong>Baja concentración:</strong> 6-8 mg de nicotina</li>
                <li><strong>Libre de nicotina:</strong> 0 mg de nicotina</li>
              </ul>
              <p className="mb-4">
                Además, es importante saber que puedes reducir su dosis de nicotina de forma gradual a diferencia de los cigarrillos convencionales. Puedes estar tranquilo y vapear con la dosis de nicotina que tu mismo decidas, hasta llegar a los líquido vaper sin nicotina 0mg al mejor precio del mercado dentro del mundo del vapeo.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Líquido vaper con los mejores sabores</h3>
              <p className="mb-4">
                Te presentamos la mejor gama de sabores de nuestros e-líquidos para vapear elaborados con ingredientes de primera calidad que puedes encontrar en nuestra tienda online.
              </p>

              <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3">Escoge el sabor con los mejores líquidos para vapear</h4>
              <p className="mb-4">
                Tanto si buscas un auténtico liquido de cigarro electrónico con un golpe de garganta de sabor a tabaco, como si prefieres otro tipo de aromas, los líquidos vapeadores son tantos que se adaptan a todos los gustos. Por ejemplo, los líquidos para vapear con tu cigarrillo tabaquiles donde encontrarás auténticos sabores a tabaco rubio, selección de líquidos cremosos un regalo para el paladar con decenas de opciones. Si prefieres tipos de sabores frutales te ofrecemos tipos como...
              </p>
              <p className="mb-4">
                Algunos prefieren las notas más dulces, otros los sabores de liquido de vapeo afrutados, los hay quienes prefieren los sabores de bebidas o las notas más refrescantes. Y por supuesto, también existen los forofos de los sabores más clásicos que encontrarán numerosas notas a tabaco para adaptarse a todos los paladares.
              </p>
              <p className="mb-4">
                Y tú, ¿eres de sabor fijo, o prefieres ir cambiando y probando diferentes líquidos vapeo? Estamos preparados para ofrecerte justo el liquidos para vaper que buscas. Personaliza tu vaper, encontrarás una amplia gama de versiones con los que podrás generar vapor con todo el sabor.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">El mejor líquido para tu cigarrillo electrónico</h3>
              <p className="mb-4">
                No existe un buen líquido de vapeo para cigarro electrónico que sea mejor que otro. El mejor cigarrillo es el que tiene el sabor que más te gusta y con un nivel de nicotina que satisface tus necesidades.
              </p>
              <p className="mb-4">
                ¿No consigues encontrar el sabor que buscas, o no te decides? Es hora de comprar los mejores liquidos para vapear. ¡Escríbenos! En iVapeo queremos que encuentres los líquidos que necesitas. Tenemos los mejores líquidos vaper!
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Puedes comprar las mejores marcas de líquidos mejor precio</h3>
              <p className="mb-4">
                Contamos con una selección de los mejores líquidos podrás encontrar las mejores marcas de líquidos para vapear de calidad.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6 text-sm text-gray-500">
                {[
                  "Halo eliquids", "Drops e-liquids", "Bombo eliquids", "Mamasan", "Kings Crest", 
                  "12 Monkeys Vape", "Herrera Liquidos", "Strawberry Queen", "Pachamama e liquid", "Coil Spill",
                  "Element eliquid", "Fruizee", "Barista Brew e liquid", "Oil4Vap", "Nasty Juice",
                  "Twist e liquid", "Halcyon Haze", "Moreish Puff", "Just Juice", "Sadboy e liquid",
                  "ChemNovatic Aromas", "7th Floor vapes", "Puffin Rascal", "Alquimia para Vapers", "Golden Era",
                  "Fruity Fuel", "Vixt", "Soda Freakz", "Joes Juice", "Cirkus liquid",
                  "Hangsen", "Ramsey Eliquids", "Odins Oven", "Chernobyl Juices", "Mondo Eliquids",
                  "Monster Club Eliquids", "Heaven Haze", "Kilo eliquids", "Relx", "Ossem Juice",
                  "Havana Dream", "Mr. Yum", "Mad Alchemist", "Ambar Juice", "Hyppe Plus",
                  "Elite Eliquids", "Donut King", "Ripe Vapes", "Oni Smokes", "Recargas Vuse",
                  "Vuse e liquids", "Vuse Epod 2 recargas"
                ].map((brand, i) => (
                  <span key={i} className="hover:text-primary cursor-default transition-colors">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
