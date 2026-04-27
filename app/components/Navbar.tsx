"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll listener for the glassmorphic transition
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is active
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
    { name: "Support Hub", path: "/schedule" },
    { name: "Engineer", path: "/engineer" },
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
            
            {/* Elite Brand Node */}
            <Link 
              href="/" 
              className="group flex items-center gap-3 z-[101]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:bg-[#00E5FF]/10 group-hover:border-[#00E5FF]/30">
                <Terminal className="w-4 h-4 text-white transition-colors duration-500 group-hover:text-[#00E5FF]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans flex items-center gap-1">
                Takumi Tech <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] mb-1" />
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`relative text-xs font-semibold uppercase tracking-widest transition-colors duration-300 py-2 ${
                      isActive ? "text-[#00E5FF]" : "text-[#A1A1AA] hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Call to Action */}
            <div className="hidden md:flex items-center">
              <Link
                href="/ticket"
                className="px-6 py-2.5 bg-transparent border border-[#00E5FF]/30 text-white font-bold text-xs uppercase tracking-widest hover:bg-[#00E5FF]/10 hover:border-[#00E5FF] transition-all duration-300 rounded-md shadow-[0_0_15px_rgba(0,229,255,0.05)] hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
              >
                Log a Ticket
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden relative z-[101] p-2 text-white hover:text-[#00E5FF] transition-colors"
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
        className={`fixed inset-0 z-[90] bg-[#050505]/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden flex flex-col justify-center px-6 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00E5FF]/10 rounded-full blur-[100px] pointer-events-none" />

        <nav className="flex flex-col gap-8 relative z-10">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center gap-4 overflow-hidden"
              >
                <span className={`text-sm font-mono tracking-widest transition-colors duration-300 ${isActive ? 'text-[#00E5FF]' : 'text-gray-600 group-hover:text-[#00E5FF]'}`}>
                  0{index + 1}
                </span>
                <span
                  className={`text-3xl font-black uppercase tracking-tight transition-all duration-500 ${
                    isActive ? "text-white translate-x-2" : "text-[#A1A1AA] group-hover:text-white group-hover:translate-x-2"
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
          href="/ticket"
          onClick={() => setIsMobileMenuOpen(false)}
          className="relative z-10 flex items-center justify-center w-full py-5 bg-[#00E5FF] text-[#050505] font-black uppercase tracking-widest text-sm rounded-lg shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:bg-[#00E5FF]/90 transition-colors"
        >
          Log a Ticket
        </Link>
      </div>
    </>
  );
}