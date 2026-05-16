"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Support Hub", href: "/schedule" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Ultra-lightweight scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 transform-gpu ${
          isScrolled ? "bg-[#030508] border-b border-white/5 shadow-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <Link href="/" className="group flex items-center gap-3 w-max" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-10 h-10 rounded-xl bg-[#080C16] border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 transform-gpu">
              <Terminal className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[#00E5FF]" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans flex items-center gap-1.5">
              Takumi Tech <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mb-1" />
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? "text-[#00E5FF]" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* CALL TO ACTION BUTTON */}
            <Link 
              href="/ticket"
              className="group flex items-center gap-2 px-6 py-2.5 bg-white text-[#030508] text-xs font-black uppercase tracking-widest rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              Log a Ticket <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY (HARDWARE ACCELERATED) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#030508] pt-24 px-6 flex flex-col md:hidden will-change-transform"
          >
            <div className="flex flex-col gap-6 mt-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-black uppercase tracking-widest border-b border-white/5 pb-4 transition-colors ${
                      isActive ? "text-[#00E5FF]" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <Link 
                href="/ticket"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 px-6 py-5 bg-[#00E5FF] text-[#030508] text-sm font-black uppercase tracking-widest rounded-xl"
              >
                Log a Ticket <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}