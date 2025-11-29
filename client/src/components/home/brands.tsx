import { Star } from "lucide-react";

const brands = [
  { name: "Vaporesso", logo: "VAPORESSO" },
  { name: "Voopoo", logo: "VOOPOO" },
  { name: "Smok", logo: "SMOK" },
  { name: "Oxva", logo: "OXVA" },
  { name: "ElfBar", logo: "ELFBAR" },
  { name: "Lost Mary", logo: "LOST MARY" },
  { name: "GeekVape", logo: "GEEKVAPE" },
  { name: "Uwell", logo: "UWELL" },
  { name: "Vaporesso", logo: "VAPORESSO" }, // Duplicate for loop
  { name: "Voopoo", logo: "VOOPOO" },
  { name: "Smok", logo: "SMOK" },
  { name: "Oxva", logo: "OXVA" },
];

export function Brands() {
  return (
    <section className="py-10 border-y border-gray-100 bg-white overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="container-custom mb-6">
          <div className="w-full text-left">
            <h3 className="font-black text-base md:text-lg uppercase tracking-wide text-gray-900">Marcas <span className="text-primary">Destacadas</span></h3>
            <div className="h-1 w-12 bg-primary mt-1"></div>
          </div>
      </div>
          
      <div className="w-full overflow-hidden flex relative mask-linear-fade">
        {/* Linear Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex animate-marquee items-center gap-12 md:gap-20 px-4 min-w-max">
            {[...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="group flex flex-col items-center justify-center gap-2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-300">
                {/* Logo Simulation */}
                <span className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter group-hover:text-primary transition-colors">
                    {brand.logo}
                </span>
                <div className="h-1 w-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
