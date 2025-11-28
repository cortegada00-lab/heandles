import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { FlaskConical, Droplets, Plus, Check, Info, ChevronRight, Beaker, Zap } from "lucide-react";

interface MixWizardProps {
  bottleCapacity: number; // e.g. 60
  aromaContent: number; // e.g. 12
  onMixChange: (mix: MixResult) => void;
  forceSalts?: boolean; // Override for 30ml or specific request
}

export interface MixResult {
  targetNicotine: number;
  nicokitsNeeded: number;
  baseNeeded: number;
  totalPrice: number;
  items: {
    type: 'nicokit' | 'base';
    id: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  selectedBase?: {
      id: string;
      name: string;
      volume: number;
  };
}

// Specific Bases provided by user
const AVAILABLE_BASES = [
    { id: 'base-oil4vap-70', name: 'Base Oil4Vap 70ml (100% VG)', volume: 70, price: 3.50 },
    { id: 'base-oil4vap-85', name: 'Base Oil4Vap 85ml (100% VG)', volume: 85, price: 4.20 },
    { id: 'base-oil4vap-90', name: 'Base Oil4Vap 90ml (100% VG)', volume: 90, price: 4.50 },
];

export function MixWizard({ bottleCapacity, aromaContent, onMixChange, forceSalts = false }: MixWizardProps) {
  const [targetNicotine, setTargetNicotine] = useState<number>(0);

  // Constants
  const NICOKIT_STRENGTH = 20; // mg/ml standard
  const NICOKIT_VOLUME = 10; // ml
  const NICOKIT_PRICE = 1.50;

  // Heuristic: If bottle is small (<= 30ml) or user forced salts, use Salts logic
  const isSaltMode = forceSalts || bottleCapacity <= 30;

  // Options based on mode
  const nicOptions = isSaltMode ? [0, 6.6, 10, 15] : [0, 1.5, 3, 6];

  // Calculate Recipe
  const calculateMix = (nic: number) => {
    // Logic improved to handle different bottle capacities (e.g. 30ml vs 60ml)
    
    let nicokitsToAdd = 0;
    let nicokitType = "20mg"; // Default
    let nicokits0mgToAdd = 0;
    let items = [];
    let bestBase = null;
    
    if (isSaltMode) {
        // SALT MODE LOGIC (30ml / Pods)
        // Using Bar Juice Bombo Salts: 10mg, 15mg, 20mg
        // Space in 30ml bottle (10ml aroma) = 20ml.
        // We have 2 slots of 10ml to fill.
        
        if (nic === 0) {
            // 0mg Target: Fill with 0mg Nicokits (or Base 10ml if exists, but we use 0mg nicokits as per request)
            nicokits0mgToAdd = 2; // Fill the 20ml gap
        } else if (nic === 6.6) {
            // 6.6mg Target (approx 200mg total in 30ml)
            // Economical option: 2x 10mg Salt (200mg total)
            // Total: 200mg / 30ml = 6.66mg/ml
            items.push({
                type: 'nicokit', id: 'salt-10mg', name: 'Nicokit Salt 10mg', quantity: 2, price: NICOKIT_PRICE
            });
            nicokitsToAdd = 2;
        } else if (nic === 10) {
            // 10mg Target (300mg total in 30ml)
            // Slot 1: 15mg Salt (150mg)
            // Slot 2: 15mg Salt (150mg)
            // Total: 300mg / 30ml = 10mg/ml
            items.push({
                type: 'nicokit', id: 'salt-15mg', name: 'Nicokit Salt 15mg', quantity: 2, price: NICOKIT_PRICE
            });
            nicokitsToAdd = 2;
        } else if (nic === 15) {
             // 15mg Target (450mg total in 30ml) - HARD LIMIT 20mg/ml
             // Best effort: 2x 20mg Salt = 400mg total -> 13.33mg/ml
             // This is the closest legal option to "15mg"
             items.push({
                type: 'nicokit', id: 'salt-20mg', name: 'Nicokit Salt 20mg', quantity: 2, price: NICOKIT_PRICE
            });
            nicokitsToAdd = 2;
        }

    } else {
        // FREEBASE MODE LOGIC (Standard)
        if (nic === 0) {
            nicokitsToAdd = 0;
        } else {
            const totalMgNeeded = bottleCapacity * nic; // e.g. 30ml * 3mg = 90mg
            
            // Calculate kits based on 20mg (200mg total) or 10mg (100mg total) options
            // We want to be within ±10% of target mg if possible, or just round to nearest kit
            
            // Try with 20mg kits (200mg each)
            const kits20mg = Math.round(totalMgNeeded / 200);
            const diff20mg = Math.abs(totalMgNeeded - (kits20mg * 200));
            
            // Try with 10mg kits (100mg each) - Usually for 1.5mg or small bottles
            const kits10mg = Math.round(totalMgNeeded / 100);
            const diff10mg = Math.abs(totalMgNeeded - (kits10mg * 100));
            
            if (diff10mg < diff20mg) {
                nicokitsToAdd = kits10mg;
                nicokitType = "10mg";
            } else {
                nicokitsToAdd = kits20mg;
                nicokitType = "20mg";
            }
            
            // Special case: 1.5mg usually means "half a 20mg nicokit" or "one 10mg nicokit"
            // For 60ml: 60 * 1.5 = 90mg -> 1x 10mg kit (100mg) is perfect.
            // For 30ml: 30 * 1.5 = 45mg -> 0.5x 10mg kit? 
            // If kits < 1 but > 0, round up to 1 (can't buy half)
            if (totalMgNeeded > 0 && nicokitsToAdd === 0) {
                 nicokitsToAdd = 1;
                 nicokitType = "10mg"; // Safer to go lower
            }
        }

        // Standard Items Construction
        if (nicokitsToAdd > 0) {
            items.push({
                type: 'nicokit',
                id: `nicokit-${nicokitType}`,
                name: `Nicokit ${nicokitType}`,
                quantity: nicokitsToAdd,
                price: NICOKIT_PRICE
            });
        }
    }
    
    // Calculate Remaining Space
    // NOTE: In salt mode, we manually handled filler above (nicokits0mgToAdd logic inside items),
    // but we need to calculate remaining space for the Base logic below if not salt mode.
    
    const nicokitVol = (nicokitsToAdd + nicokits0mgToAdd) * 10;
    let remainingSpace = bottleCapacity - aromaContent - nicokitVol;
    
    // Base Logic (Only if space remains > 0)
    // If Salt Mode, we usually fill everything with nicokits (0mg or salts), so remaining should be 0.
    
    // Find best base strategy
    // If remaining space is small (<= 20ml), it's cheaper/better to use 0mg Nicokits than a 70ml Base
    const USE_NICOKIT_AS_BASE_THRESHOLD = 20;
    
    if (remainingSpace > 0) {
        if (remainingSpace <= USE_NICOKIT_AS_BASE_THRESHOLD) {
            // Use 0mg Nicokits for filling
            const extra0mg = Math.ceil(remainingSpace / 10);
            nicokits0mgToAdd += extra0mg;
            
            items.push({
                type: 'nicokit',
                id: `nicokit-0mg`,
                name: `Nicokit 0mg (Relleno)`,
                quantity: extra0mg,
                price: NICOKIT_PRICE
            });
            
            // Update remaining space (effectively 0 for base calculation)
            remainingSpace = 0;
        } else {
            // Use Large Base Bottle
            // Sort bases by volume ascending
            const sortedBases = [...AVAILABLE_BASES].sort((a, b) => a.volume - b.volume);
            
            // Find first one that fits
            bestBase = sortedBases.find(b => b.volume >= remainingSpace);
            
            // Fallback: if none fit (e.g. need 200ml), pick the largest? Or just the largest available?
            if (!bestBase) {
                bestBase = sortedBases[sortedBases.length - 1];
            }
        }
    }
    
    // Add Base Item if needed
    if (bestBase) {
        items.push({
            type: 'base',
            id: bestBase.id,
            name: bestBase.name,
            quantity: 1,
            price: bestBase.price
        });
    }
    
    // Calculate total price from items list
    const finalTotalPrice = items.reduce((acc, item) => acc + (item.quantity * item.price), 0);

    const result: MixResult = {
        targetNicotine: nic,
        nicokitsNeeded: nicokitsToAdd + nicokits0mgToAdd,
        baseNeeded: remainingSpace,
        totalPrice: finalTotalPrice,
        items: items as any,
        selectedBase: bestBase ? { id: bestBase.id, name: bestBase.name, volume: bestBase.volume } : undefined
    };

    return result;
  };

  useEffect(() => {
    const result = calculateMix(targetNicotine);
    onMixChange(result);
  }, [targetNicotine, forceSalts, bottleCapacity]);

  const currentMix = calculateMix(targetNicotine);

  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3">
         <div className={cn("p-2 rounded-lg", isSaltMode ? "bg-pink-100 text-pink-600" : "bg-purple-100 text-purple-600")}>
            <FlaskConical className="w-5 h-5" />
         </div>
         <div>
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">
                {isSaltMode ? "Asistente de Sales (30ml)" : "Asistente de Mezcla"}
            </h3>
            <p className="text-xs text-gray-500">Calcula los ingredientes necesarios para {bottleCapacity}ml</p>
         </div>
      </div>

      <div className="p-5 space-y-6">
         
         {/* 1. Select Nicotine */}
         <div>
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-3">
                1. ¿Qué nivel de nicotina deseas?
            </label>
            <div className="grid grid-cols-4 gap-2">
                {nicOptions.map((level) => (
                    <button 
                        key={level}
                        onClick={() => setTargetNicotine(level)}
                        className={cn(
                            "relative py-2.5 rounded-xl border-2 transition-all flex flex-col items-center justify-center overflow-hidden",
                            targetNicotine === level 
                                ? (isSaltMode ? "border-pink-600 bg-pink-50 text-pink-700 shadow-sm" : "border-purple-600 bg-purple-50 text-purple-700 shadow-sm")
                                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                        )}
                    >
                        <span className="font-black text-lg leading-none">{level}</span>
                        <span className="text-[10px] font-medium uppercase">mg/ml</span>
                        {targetNicotine === level && (
                            <div className="absolute top-0 right-0 p-1">
                                <div className={cn("w-2 h-2 rounded-full", isSaltMode ? "bg-pink-600" : "bg-purple-600")}></div>
                            </div>
                        )}
                    </button>
                ))}
            </div>
         </div>

         {/* 2. Visual Recipe */}
         <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm relative overflow-hidden">
            {/* Background Stripes */}
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50 pointer-events-none"></div>

            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-3 z-10 relative">
                2. Tu Receta Automática
            </label>
            
            <div className="space-y-3 relative z-10">
                {/* AROMA (Fixed) */}
                <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 group-hover:border-gray-300 transition-colors">
                            <Droplets className="w-4 h-4 text-gray-500" />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-gray-900 block">Aroma (Incluido)</span>
                            <span className="text-[10px] text-gray-500">{aromaContent}ml en bote de {bottleCapacity}ml</span>
                        </div>
                    </div>
                    <Check className="w-4 h-4 text-green-500" />
                </div>

                {/* SEPARATOR */}
                <div className="h-px bg-gray-100 ml-11"></div>

                {/* NICOKITS */}
                {currentMix.items.filter(i => i.type === 'nicokit').map((item, idx) => (
                     <div key={idx} className="flex items-center justify-between transition-all duration-300">
                        <div className="flex items-center gap-3">
                            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center border", isSaltMode ? "bg-pink-50 border-pink-100 text-pink-500" : "bg-orange-50 border-orange-100 text-orange-500")}>
                                <Zap className="w-4 h-4" />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-gray-900 block">
                                    {item.quantity}x {item.name}
                                </span>
                                <span className="text-[10px] text-gray-500">
                                    Sales de Nicotina
                                </span>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-gray-600">+{item.quantity * item.price}€</span>
                    </div>
                ))}

                {/* BASE */}
                {currentMix.items.filter(i => i.type === 'base').map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between transition-all duration-300">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 text-blue-500">
                                <Beaker className="w-4 h-4" />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-gray-900 block">
                                    {item.name}
                                </span>
                                <span className="text-[10px] text-gray-500">
                                    Base VG/PG
                                </span>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-blue-600">+{item.price.toFixed(2)}€</span>
                    </div>
                ))}
                
                {/* Empty State if no additives */}
                {currentMix.items.length === 0 && (
                    <div className="text-center py-2 text-xs text-gray-400 italic">
                        Solo necesitas el aroma.
                    </div>
                )}

            </div>

            {/* Summary Footer */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                <span className="text-[10px] font-medium text-gray-500">Precio extra ingredientes</span>
                <span className="text-sm font-black text-gray-900">+{currentMix.totalPrice.toFixed(2)}€</span>
            </div>
         </div>

      </div>
    </div>
  );
}
