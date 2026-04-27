"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll physics engine
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Passive listener for 60fps performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Terminal", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Logistics", path: "/shop" },
    { name: "Engineers", path: "/engineer" },
  ];

  return (
    <>
      {/* --------------------------------------------------------- */}
      {/* DESKTOP & HEADER MATRIX */}
      {/* --------------------------------------------------------- */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Node */}
            <Link 
              href="/" 
              className="group flex items-center gap-3 z-[101]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-sm transition-transform duration-500 group-hover:rotate-90">
                <Terminal className="w-5 h-5 transition-transform duration-500 group-hover:-rotate-90" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter uppercase leading-none text-white">Takumi</span>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 leading-none mt-1">Systems</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`relative text-xs font-mono uppercase tracking-widest transition-colors duration-300 py-2 ${
                      isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Call to Action */}
            <div className="hidden md:flex items-center">
              <Link
                href="/schedule"
                className="px-6 py-2.5 bg-transparent border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                Initialize Comms
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden relative z-[101] p-2 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* --------------------------------------------------------- */}
      {/* MOBILE OVERLAY MATRIX */}
      {/* --------------------------------------------------------- */}
      <div
        className={`fixed inset-0 z-[90] bg-[#050505] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden flex flex-col justify-center px-6 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />

        <nav className="flex flex-col gap-6 relative z-10">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center gap-4 overflow-hidden"
              >
                <span className={`text-sm font-mono tracking-widest transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-gray-600 group-hover:text-cyan-400'}`}>
                  0{index + 1}
                </span>
                <span
                  className={`text-4xl sm:text-5xl font-black uppercase tracking-tighter transition-all duration-500 ${
                    isActive ? "text-white translate-x-2" : "text-gray-400 group-hover:text-white group-hover:translate-x-2"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="w-full h-px bg-white/10 my-10 relative z-10" />

        <Link
          href="/schedule"
          onClick={() => setIsMobileMenuOpen(false)}
          className="relative z-10 flex items-center justify-center w-full py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors"
        >
          Initialize Comms
        </Link>
      </div>
    </>
  );
}