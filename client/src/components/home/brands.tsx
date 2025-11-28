import { Star } from "lucide-react";

const brands = [
  { name: "Vaporesso", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" }, // Placeholder
  { name: "Voopoo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
  { name: "Smok", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
  { name: "Oxva", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
  { name: "ElfBar", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
  { name: "Lost Mary", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
];

export function Brands() {
  return (
    <section className="py-8 md:py-12 border-y border-gray-100 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="w-full md:w-48 shrink-0 text-left md:text-left">
            <h3 className="font-black text-base md:text-lg uppercase tracking-wide text-gray-900">Marcas<br/><span className="text-primary">Destacadas</span></h3>
            <div className="h-1 w-12 bg-primary mt-1 md:mt-2"></div>
          </div>
          
          <div className="flex-1 w-full overflow-hidden">
            {/* Mobile: Horizontal Scroll, Desktop: Flex Space Between */}
            <div className="flex overflow-x-auto md:overflow-visible md:flex-wrap justify-start md:justify-between items-center gap-8 md:gap-8 opacity-100 md:opacity-60 md:grayscale md:hover:grayscale-0 transition-all duration-500 pb-4 md:pb-0 scrollbar-hide">
              {/* Using text placeholders for now as logos need specific assets, but styled to look like logos */}
              {brands.map((brand, idx) => (
                <div key={idx} className="text-xl md:text-2xl font-black text-gray-400 hover:text-gray-900 transition-colors cursor-pointer select-none whitespace-nowrap shrink-0">
                  {brand.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
