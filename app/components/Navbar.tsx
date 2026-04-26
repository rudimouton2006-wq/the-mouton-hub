"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Terminal, Search } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

const NAV_LINKS = [
  { name: "Services", href: "/services" },
  { name: "Sourcing", href: "/shop" },
  { name: "Schedule", href: "/schedule" },
  { name: "Engineer", href: "/engineer" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    // Passive listener ensures the main thread isn't blocked during rapid scrolling
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Guarantee mobile menu closes autonomously on route change
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
        scrolled 
          ? "bg-[#050505]/80 backdrop-blur-2xl border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* LOGO: TAKUMI TECH */}
        <Link href="/" className="flex items-center gap-3 group relative z-10">
          <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500">
            <Terminal className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase text-white group-hover:text-blue-400 transition-colors">
            Takumi Tech
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6 px-6 py-2.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`text-xs font-black uppercase tracking-widest transition-all relative ${
                    isActive ? "text-blue-400" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 w-full h-px bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                  )}
                </Link>
              );
            })}
          </div>

          <MagneticWrapper pullStrength={0.1}>
            <Link 
              href="/contact" 
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-xs uppercase tracking-widest text-white transition-all shadow-[0_8px_20px_rgba(37,99,235,0.2)] flex items-center gap-2 group"
            >
              Log Ticket <Search className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            </Link>
          </MagneticWrapper>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 bg-[#050505] z-0 flex flex-col items-center justify-center gap-8 transition-all duration-700 lg:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 scanline opacity-10" aria-hidden="true" />
        
        {NAV_LINKS.map((link, idx) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className="text-4xl font-black uppercase tracking-tighter text-white hover:text-blue-400 transition-all flex items-center gap-4 group relative z-10"
            style={{ 
              transitionDelay: isOpen ? `${idx * 100}ms` : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <ChevronRight className="w-8 h-8 text-blue-600 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
            {link.name}
          </Link>
        ))}
        
        <Link 
          href="/contact" 
          className="mt-8 px-12 py-5 bg-blue-600 rounded-2xl font-black text-sm uppercase tracking-widest text-white shadow-[0_10px_40px_rgba(37,99,235,0.3)] relative z-10"
          style={{ 
            transitionDelay: isOpen ? `${NAV_LINKS.length * 100}ms` : '0ms',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Initialize Ticket
        </Link>
      </div>
    </nav>
  );
}