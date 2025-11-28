export function CombinationBadges() {
  const variants = [
    { id: "default", label: "Estándar" },
    { id: "bulk", label: "Pack x2" },
    { id: "bundle", label: "Pack x3" }
  ];

  return (
    <div className="flex flex-wrap gap-1 mt-1">
      {variants.map((v) => (
        <span
          key={v.id}
          className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded border border-blue-200"
        >
          {v.label}
        </span>
      ))}
    </div>
  );
}
