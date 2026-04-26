import Link from "next/link";
import { Terminal, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black/80 border-t border-white/5 backdrop-blur-xl mt-auto z-20 relative">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 -ml-1">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Terminal className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <span className="font-black text-white tracking-tighter uppercase text-lg group-hover:text-blue-400 transition-colors">
                The Mouton Hub
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Enterprise-grade IT infrastructure, network deployments, and hardware diagnostics engineered for the local sector.
            </p>
          </div>

          {/* Column 2: Systems Directory */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Systems Directory</h3>
            <nav className="flex flex-col gap-3" aria-label="Footer Navigation">
              <Link href="/services" className="text-sm text-gray-400 hover:text-blue-400 transition-colors w-fit focus:outline-none focus:text-blue-400">Service Architecture</Link>
              <Link href="/shop" className="text-sm text-gray-400 hover:text-blue-400 transition-colors w-fit focus:outline-none focus:text-blue-400">Hardware Sourcing Hub</Link>
              <Link href="/schedule" className="text-sm text-gray-400 hover:text-blue-400 transition-colors w-fit focus:outline-none focus:text-blue-400">Scheduling Engine</Link>
              <Link href="/engineer" className="text-sm text-gray-400 hover:text-blue-400 transition-colors w-fit focus:outline-none focus:text-blue-400">Lead Engineer Profile</Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors w-fit focus:outline-none focus:text-blue-400">Log Diagnostic Ticket</Link>
            </nav>
          </div>

          {/* Column 3: Operational Base */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Operational Base</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Oakdale, Bellville<br/>Cape Town, ZA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" aria-hidden="true" />
                <a href="https://wa.me/27818281861" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400">
                  WhatsApp Direct Sync
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" aria-hidden="true" />
                <span>Operating hours synced to Academic Bandwidth</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-mono uppercase tracking-widest text-center md:text-left">
            © {currentYear} Systems Architecture. All Rights Reserved.
          </p>
          <Link 
            href="/terms" 
            className="text-[10px] font-black text-blue-500 hover:text-blue-400 uppercase tracking-widest transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-3 py-2 bg-blue-500/10 hover:bg-blue-500/20"
          >
            Terms of Engineering (Legal)
          </Link>
        </div>

      </div>
    </footer>
  );
}