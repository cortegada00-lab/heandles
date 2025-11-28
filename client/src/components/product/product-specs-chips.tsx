import { Product } from "@/lib/mock-data";

export function ProductSpecsChips({ product }: { product: Product }) {
  let chips: { label: string; value: string }[] = [];

  if (product.productCategory === "kit" || product.type === "hardware") {
    // Para kits y hardware
    chips = [
      product.attributes?.userLevel && { label: "Nivel", value: product.attributes.userLevel },
      product.attributes?.tankCapacity && { label: "Tanque", value: product.attributes.tankCapacity },
      product.attributes?.batteryCapacity && { label: "Batería", value: product.attributes.batteryCapacity },
      product.attributes?.drawType && { label: "Calada", value: product.attributes.drawType },
    ].filter(Boolean) as typeof chips;
  } else if (product.productCategory === "eliquid" || product.type === "eliquid" || product.type === "longfill") {
    // Para líquidos
    chips = [
      product.attributes?.nicotine && { label: "Nic", value: product.attributes.nicotine },
      product.attributes?.type && { label: "Tipo", value: product.attributes.type },
      product.attributes?.flavorType && { label: "Sabor", value: product.attributes.flavorType },
      product.attributes?.ratio && { label: "Ratio", value: product.attributes.ratio },
    ].filter(Boolean) as typeof chips;
  }

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {chips.slice(0, 4).map((chip, idx) => (
        <span
          key={idx}
          className="text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-full bg-gray-100 text-gray-700 whitespace-nowrap"
        >
          {chip.label}: {chip.value}
        </span>
      ))}
    </div>
  );
}
