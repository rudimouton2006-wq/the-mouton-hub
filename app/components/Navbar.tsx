"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X, ChevronRight, Wrench } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Hardware", href: "/shop" },
    { name: "Schedule", href: "/schedule" },
    { name: "Engineer", href: "/engineer" },
  ];

  return (
    <>
      {/* Desktop & Top Bar Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-2xl border-b border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : "bg-gradient-to-b from-black/80 to-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none z-50 relative" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400/50">
              <Terminal className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="font-black text-white tracking-tighter uppercase text-xl group-hover:text-blue-400 transition-colors hidden sm:block">
              The Mouton Hub
            </span>
          </Link>

          {/* Desktop Nav Routing & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* The Glass Link Container */}
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-2xl backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 ${isActive ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-blue-400/50" : "text-gray-400 hover:text-white hover:bg-white/10"}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            
            {/* The Restored Support Portal CTA */}
            <Link 
              href="/contact" 
              className="hidden lg:flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] border border-blue-400/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              Support Portal <Wrench className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white z-50 relative focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:bg-white/10 backdrop-blur-md"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] md:hidden flex flex-col justify-center px-8 ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col space-y-6 max-w-sm mx-auto w-full relative z-50">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-4 border-b border-white/10 transition-all duration-500 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
                style={{ transitionDelay: `${isOpen ? i * 100 : 0}ms` }}
              >
                <span className={`text-2xl font-black uppercase tracking-wider ${isActive ? "text-blue-400 drop-shadow-[0_0_15px_rgba(0,163,255,0.4)]" : "text-gray-300 hover:text-white"}`}>
                  {link.name}
                </span>
                <ChevronRight className={`w-6 h-6 ${isActive ? "text-blue-400" : "text-gray-600"}`} />
              </Link>
            );
          })}

          <div 
            className={`mt-8 transition-all duration-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ transitionDelay: `${isOpen ? navLinks.length * 100 : 0}ms` }}
          >
            <Link 
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-5 bg-blue-600 rounded-xl text-center font-black text-sm text-white uppercase tracking-widest shadow-[0_10px_30px_rgba(37,99,235,0.3)] block border border-blue-400/50 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
            >
              Support Portal <Wrench className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Ambient background glow for mobile menu */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none z-0" />
      </div>
    </>
  );
}