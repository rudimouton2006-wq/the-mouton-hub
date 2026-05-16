"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ---------------------------------------------------------
// ANIMATION VARIANTS
// ---------------------------------------------------------
const mobileMenuVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  },
  exit: { 
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: { duration: 0.2 }
  }
};

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

  // Simplified navigation terminology
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Support Hub", path: "/schedule" },
    { name: "About Us", path: "/engineer" },
  ];

  return (
    <>
      {/* --------------------------------------------------------- */}
      {/* DESKTOP & HEADER MATRIX */}
      {/* --------------------------------------------------------- */}
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          isScrolled
            ? "bg-[#030508]/80 backdrop-blur-2xl border-b border-white/[0.05] py-4 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Elite Brand Node */}
            <Link 
              href="/" 
              className="group flex items-center gap-3 z-[101]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#00E5FF]/10 group-hover:border-[#00E5FF]/30 group-hover:scale-105 shadow-inner">
                <Terminal className="w-4 h-4 text-white transition-colors duration-500 group-hover:text-[#00E5FF]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans flex items-center gap-1.5">
                Takumi Tech <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] mb-1" />
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
                    className={`relative text-xs font-bold uppercase tracking-widest transition-colors duration-300 py-2 group ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {/* Active State Line */}
                    {isActive && (
                      <motion.span 
                        layoutId="activeNavLine"
                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] rounded-full" 
                      />
                    )}
                    {/* Hover State Line */}
                    {!isActive && (
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white/30 rounded-full transition-all duration-300 group-hover:w-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Call to Action */}
            <div className="hidden md:flex items-center">
              <Link
                href="/ticket"
                className="group relative px-6 py-2.5 bg-transparent border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-500 overflow-hidden isolate"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/20 to-[#2563EB]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <div className="absolute inset-0 border border-[#00E5FF]/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 shadow-[inset_0_0_20px_rgba(0,229,255,0.2)]" />
                <span className="relative z-10 drop-shadow-md">Log a Ticket</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden relative z-[101] p-2 text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#00E5FF]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* --------------------------------------------------------- */}
      {/* MOBILE OVERLAY MATRIX */}
      {/* --------------------------------------------------------- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-[100dvh] z-[90] bg-[#030508]/95 backdrop-blur-3xl md:hidden flex flex-col justify-center px-6 border-b border-white/5"
          >
            {/* Mobile Ambient Glow */}
            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-[#00E5FF]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#8B5CF6]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

            <motion.nav 
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-6 relative z-10 w-full"
            >
              {navLinks.map((link, index) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div key={link.name} variants={mobileItemVariants}>
                    <Link
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center gap-6 overflow-hidden w-full py-2"
                    >
                      <span className={`text-xs font-mono tracking-widest transition-colors duration-300 ${isActive ? 'text-[#00E5FF]' : 'text-gray-600 group-hover:text-[#00E5FF]'}`}>
                        0{index + 1}
                      </span>
                      <span
                        className={`text-3xl font-black uppercase tracking-tight transition-all duration-300 ${
                          isActive ? "text-white translate-x-2" : "text-[#A1A1AA] group-hover:text-white group-hover:translate-x-2"
                        }`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }} 
              animate={{ opacity: 1, scaleX: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10 relative z-10 origin-left" 
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.4 }}
              className="w-full relative z-10"
            >
              <Link
                href="/ticket"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-5 bg-[#00E5FF] text-[#030508] font-black uppercase tracking-widest text-xs rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300"
              >
                Log a Ticket
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}