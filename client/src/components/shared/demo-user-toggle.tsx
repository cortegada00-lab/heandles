import { useUser, UserType } from "@/lib/user-context";
import { Button } from "@/components/ui/button";

export function DemoUserToggle() {
  const { userType, setUserType } = useUser();

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white shadow-2xl border border-gray-200 p-2 rounded-lg flex items-center gap-2 hidden md:flex animate-in slide-in-from-bottom-5">
      <span className="text-xs font-bold text-gray-500 uppercase">Vista:</span>
      <div className="flex bg-gray-100 p-1 rounded-md">
        <button 
          onClick={() => setUserType("guest")}
          className={`px-3 py-1 text-[10px] font-bold rounded uppercase transition-all ${userType === "guest" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
        >
          Invitado
        </button>
        <button 
          onClick={() => setUserType("active")}
          className={`px-3 py-1 text-[10px] font-bold rounded uppercase transition-all ${userType === "active" ? "bg-white text-green-600 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
        >
          Activo
        </button>
        <button 
          onClick={() => setUserType("dormant")}
          className={`px-3 py-1 text-[10px] font-bold rounded uppercase transition-all ${userType === "dormant" ? "bg-white text-purple-600 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
        >
          Dormido
        </button>
      </div>
    </div>
  );
}
