import Link from "next/link";
import { AlertTriangle, Home, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
      
      <div className="w-32 h-32 bg-red-500/10 border border-red-500/30 rounded-3xl flex items-center justify-center mb-8 relative animate-pulse shadow-[0_0_50px_rgba(239,68,68,0.2)]">
        <AlertTriangle className="w-16 h-16 text-red-500 relative z-10" />
        <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
      </div>

      <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4 text-white">
        Error <span className="text-red-500">404</span>
      </h1>
      
      <div className="flex items-center gap-2 text-red-400 font-mono text-xs md:text-sm uppercase tracking-widest mb-6 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
        <Terminal className="w-4 h-4" /> System Path Not Found
      </div>

      <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed mb-10">
        The requested URL was not found on this server. The directory may have been moved, deleted, or you experienced a navigation routing failure.
      </p>

      <Link 
        href="/" 
        className="px-8 py-4 bg-white hover:bg-gray-200 text-black rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2"
      >
        <Home className="w-4 h-4" /> Reboot System (Return Home)
      </Link>

    </main>
  );
}