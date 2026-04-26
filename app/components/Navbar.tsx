"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Terminal, Wrench } from "lucide-react";

const NAV_LINKS = [
  { name: "Dashboard", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Hardware", href: "/shop" },
  { name: "Schedule", href: "/schedule" },
  { name: "Engineer", href: "/engineer" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dynamic scroll listener for premium glass effect
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
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* --------------------------------------------------------- */}
      {/* DESKTOP & GLOBAL HEADER */}
      {/* --------------------------------------------------------- */}
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-[#050505]/80 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-4" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group relative z-[101]">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center border border-blue-400/30 shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-500">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase text-white group-hover:text-blue-400 transition-colors">
              The Mouton Hub
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Support CTA */}
          <div className="hidden lg:block">
            <Link 
              href="/contact"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all text-blue-400 hover:text-white hover:shadow-[0_0_20px_rgba(0,163,255,0.2)]"
            >
              Support Portal <Wrench className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-[101] w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* --------------------------------------------------------- */}
      {/* MOBILE NAVIGATION OVERLAY */}
      {/* --------------------------------------------------------- */}
      <div 
        className={`fixed inset-0 z-[99] bg-[#050505]/95 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col pt-32 px-6 pb-10 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto translate-y-0" 
            : "opacity-0 pointer-events-none -translate-y-10"
        }`}
      >
        <div className="flex-grow flex flex-col gap-4">
          {NAV_LINKS.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`p-6 rounded-2xl border flex items-center justify-between transition-all duration-500 delay-[${index * 50}ms] ${
                  isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                } ${
                  isActive 
                    ? "bg-blue-600/10 border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.15)]" 
                    : "bg-[#111] border-white/5 hover:border-white/20"
                }`}
              >
                <span className={`text-xl font-black uppercase tracking-wider ${isActive ? "text-blue-400" : "text-white"}`}>
                  {link.name}
                </span>
                <ChevronRight className={`w-6 h-6 ${isActive ? "text-blue-400" : "text-gray-600"}`} />
              </Link>
            );
          })}
        </div>

        {/* Mobile Support CTA at bottom */}
        <div className={`mt-auto transition-all duration-500 delay-300 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link 
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-6 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] text-white"
          >
            Access Support Portal <Wrench className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}