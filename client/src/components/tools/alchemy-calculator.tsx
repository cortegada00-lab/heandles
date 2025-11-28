import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FlaskConical, Droplets, Beaker, Info, RotateCcw, Calculator, ShoppingCart, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function AlchemyCalculator() {
  // Inputs
  const [targetAmount, setTargetAmount] = useState(100); // ml
  const [aromaPercentage, setAromaPercentage] = useState(15); // %
  const [targetNicotine, setTargetNicotine] = useState(3); // mg/ml
  
  // Constants
  const NICOKIT_STRENGTH = 20; // mg/ml standard
  const NICOKIT_VOLUME = 10; // ml

  // Results State
  const [recipe, setRecipe] = useState({
    aromaMl: 0,
    nicokitsCount: 0,
    nicokitsMl: 0,
    baseMl: 0,
    totalMl: 0
  });

  useEffect(() => {
    calculateRecipe();
  }, [targetAmount, aromaPercentage, targetNicotine]);

  const calculateRecipe = () => {
    // 1. Calculate Aroma needed
    const aromaMl = (targetAmount * aromaPercentage) / 100;

    // 2. Calculate Nicotine needed
    // Total mg needed = targetAmount * targetNicotine
    const totalMgNeeded = targetAmount * targetNicotine;
    
    // Nicokits needed (ml) = totalMgNeeded / NICOKIT_STRENGTH
    const nicokitsMlRaw = totalMgNeeded / NICOKIT_STRENGTH;
    
    // Round nicokits to nearest half unit (5ml) for realism, or keep precise? 
    // Usually people use full 10ml bottles. Let's try to be precise first but display bottles.
    // Actually, for alchemy, you often adjust base to fit the nicokits.
    // Let's do exact math first.
    
    const nicokitsMl = nicokitsMlRaw;
    const nicokitsCount = nicokitsMl / NICOKIT_VOLUME;

    // 3. Calculate Base needed
    // Base = Total - Aroma - Nicokits
    let baseMl = targetAmount - aromaMl - nicokitsMl;

    // Edge case: Impossible mix (more aroma + nico than total)
    if (baseMl < 0) {
      baseMl = 0;
    }

    setRecipe({
      aromaMl,
      nicokitsCount,
      nicokitsMl,
      baseMl,
      totalMl: targetAmount
    });
  };

  const VisualBottle = () => {
    const total = recipe.totalMl || 100;
    const getPercent = (val: number) => (val / total) * 100;

    return (
      <div className="relative w-32 h-64 mx-auto bg-gray-100 rounded-2xl border-4 border-gray-300 overflow-hidden shadow-inner flex flex-col-reverse">
        {/* Glass reflections */}
        <div className="absolute top-0 right-4 w-2 h-full bg-white/30 z-20 rounded-full filter blur-[1px]"></div>
        <div className="absolute top-0 left-4 w-1 h-full bg-white/10 z-20 rounded-full"></div>

        {/* Liquid Layers */}
        
        {/* Aroma Layer (Bottom or Top? Usually mixed, but stacked for viz) */}
        <div 
          className="bg-purple-500 w-full transition-all duration-500 relative group"
          style={{ height: `${getPercent(recipe.aromaMl)}%` }}
        >
            <div className="absolute inset-0 bg-purple-400/50 animate-pulse"></div>
            <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 text-xs font-bold text-purple-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                Aroma {recipe.aromaMl.toFixed(1)}ml
                <div className="w-2 h-[1px] bg-purple-300 ml-1"></div>
            </div>
        </div>

        {/* Nicotine Layer */}
        <div 
          className="bg-orange-400 w-full transition-all duration-500 relative group"
          style={{ height: `${getPercent(recipe.nicokitsMl)}%` }}
        >
            <div className="absolute inset-0 bg-orange-300/50 animate-pulse delay-75"></div>
             <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 text-xs font-bold text-orange-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                Nicotina {recipe.nicokitsMl.toFixed(1)}ml
                <div className="w-2 h-[1px] bg-orange-300 ml-1"></div>
            </div>
        </div>

        {/* Base Layer */}
        <div 
          className="bg-blue-300 w-full transition-all duration-500 relative group"
          style={{ height: `${getPercent(recipe.baseMl)}%` }}
        >
             <div className="absolute inset-0 bg-blue-200/50 animate-pulse delay-150"></div>
             <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                Base {recipe.baseMl.toFixed(1)}ml
                <div className="w-2 h-[1px] bg-blue-300 ml-1"></div>
            </div>
        </div>

        {/* Bottle Neck (Visual Only) */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-gray-200 border-x-4 border-gray-300 z-10"></div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-1 shadow-2xl">
        <div className="bg-white rounded-xl p-6 md:p-8">
            
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-6">
                <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                    <FlaskConical className="w-8 h-8" />
                </div>
                <div>
                    <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Calculadora de Alquimia</h2>
                    <p className="text-gray-500 text-sm">Crea tu e-liquid perfecto en segundos</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                
                {/* CONTROLS */}
                <div className="lg:col-span-7 space-y-8">
                    
                    {/* 1. Amount */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <Label className="text-sm font-bold text-gray-700 uppercase">1. Cantidad Total a Fabricar</Label>
                            <span className="text-2xl font-black text-blue-600">{targetAmount}ml</span>
                        </div>
                        <div className="flex gap-2 mb-2">
                            {[60, 100, 120, 200].map(v => (
                                <button 
                                    key={v}
                                    onClick={() => setTargetAmount(v)}
                                    className={cn(
                                        "px-3 py-1 text-xs font-bold rounded-md border transition-all",
                                        targetAmount === v ? "bg-blue-600 text-white border-blue-600" : "bg-white border-gray-200 text-gray-600 hover:border-blue-300"
                                    )}
                                >
                                    {v}ml
                                </button>
                            ))}
                        </div>
                        <Slider 
                            value={[targetAmount]} 
                            onValueChange={(v) => setTargetAmount(v[0])} 
                            min={10} max={500} step={10}
                            className="py-2"
                        />
                    </div>

                    {/* 2. Aroma */}
                    <div className="space-y-4">
                         <div className="flex justify-between items-end">
                            <Label className="text-sm font-bold text-gray-700 uppercase">2. Porcentaje de Aroma</Label>
                            <span className="text-2xl font-black text-purple-600">{aromaPercentage}%</span>
                        </div>
                        <div className="flex gap-2 mb-2">
                            {[10, 15, 20, 25].map(v => (
                                <button 
                                    key={v}
                                    onClick={() => setAromaPercentage(v)}
                                    className={cn(
                                        "px-3 py-1 text-xs font-bold rounded-md border transition-all",
                                        aromaPercentage === v ? "bg-purple-600 text-white border-purple-600" : "bg-white border-gray-200 text-gray-600 hover:border-purple-300"
                                    )}
                                >
                                    {v}%
                                </button>
                            ))}
                        </div>
                        <Slider 
                            value={[aromaPercentage]} 
                            onValueChange={(v) => setAromaPercentage(v[0])} 
                            min={1} max={40} step={1}
                            className="py-2"
                        />
                        <p className="text-[11px] text-gray-400 italic flex items-center gap-1">
                            <Info className="w-3 h-3" /> Lo recomendado por el fabricante suele ser 15-20%
                        </p>
                    </div>

                    {/* 3. Nicotine */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <Label className="text-sm font-bold text-gray-700 uppercase">3. Nicotina Deseada</Label>
                            <span className="text-2xl font-black text-orange-500">{targetNicotine}mg</span>
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            {[0, 1.5, 3, 6, 12].map(v => (
                                <button 
                                    key={v}
                                    onClick={() => setTargetNicotine(v)}
                                    className={cn(
                                        "py-2 text-sm font-bold rounded-lg border-2 transition-all",
                                        targetNicotine === v 
                                            ? "bg-orange-50 text-orange-600 border-orange-500" 
                                            : "bg-white border-gray-100 text-gray-500 hover:border-orange-200"
                                    )}
                                >
                                    {v}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>

                {/* RESULTS */}
                <div className="lg:col-span-5 bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden">
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>

                    <VisualBottle />

                    <div className="w-full mt-8 space-y-3 relative z-10">
                        <div className="flex items-center justify-between bg-white p-3 rounded-lg border-l-4 border-purple-500 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="bg-purple-100 p-2 rounded-md"><Droplets className="w-4 h-4 text-purple-600" /></div>
                                <span className="font-bold text-gray-700">Aroma</span>
                            </div>
                            <span className="font-black text-xl text-purple-600">{recipe.aromaMl.toFixed(0)}ml</span>
                        </div>

                        <div className="flex items-center justify-between bg-white p-3 rounded-lg border-l-4 border-orange-400 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="bg-orange-100 p-2 rounded-md"><Zap className="w-4 h-4 text-orange-500" /></div>
                                <div>
                                    <span className="font-bold text-gray-700 block leading-none">Nicokits</span>
                                    <span className="text-[10px] text-gray-400">20mg/ml (10ml)</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="font-black text-xl text-orange-500 block leading-none">
                                    {Number.isInteger(recipe.nicokitsCount) 
                                        ? recipe.nicokitsCount 
                                        : parseFloat(recipe.nicokitsCount.toFixed(1))} {recipe.nicokitsCount === 1 ? "Nicokit" : "Nicokits"}
                                </span>
                                <span className="text-[10px] text-gray-400">({recipe.nicokitsMl.toFixed(0)}ml totales)</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between bg-white p-3 rounded-lg border-l-4 border-blue-400 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 p-2 rounded-md"><Beaker className="w-4 h-4 text-blue-500" /></div>
                                <span className="font-bold text-gray-700">Base (VG/PG)</span>
                            </div>
                            <span className="font-black text-xl text-blue-500">{recipe.baseMl.toFixed(0)}ml</span>
                        </div>
                    </div>
                    
                    <div className="w-full mt-6">
                        <Button className="w-full bg-gray-900 hover:bg-black text-white font-bold h-12 shadow-xl">
                            <ShoppingCart className="w-4 h-4 mr-2" /> Añadir Ingredientes al Carrito
                        </Button>
                    </div>

                </div>

            </div>
        </div>
      </div>
    </div>
  );
}
