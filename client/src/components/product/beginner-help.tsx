import { HelpCircle, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export function BeginnerHelp() {
  return (
    <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3 animate-in fade-in zoom-in duration-300">
      <div className="bg-blue-100 p-2 rounded-full shrink-0">
        <HelpCircle className="w-5 h-5 text-blue-600" />
      </div>
      <div>
        <h4 className="font-bold text-blue-900 text-sm mb-1">¿Es tu primer vapeador?</h4>
        <p className="text-xs text-blue-800/80 mb-2 leading-relaxed">
          No te preocupes si tienes dudas. Hemos preparado una guía rápida para empezar o puedes optar por nuestros packs todo incluido.
        </p>
        <Link href="/guides/starter-guide">
          <span className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer underline decoration-blue-300 hover:decoration-blue-700 transition-all">
            Ver Guía para Principiantes <ExternalLink className="w-3 h-3" />
          </span>
        </Link>
      </div>
    </div>
  );
}
