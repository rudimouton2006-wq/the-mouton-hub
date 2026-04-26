"use client";
import Link from "next/link";
import { ChevronDown, ShieldCheck, Zap, Server, ArrowRight } from "lucide-react";
import { useState } from "react";
import DecodeText from "./components/DecodeText";
import MagneticWrapper from "./components/MagneticWrapper";
import RevealWrapper from "./components/RevealWrapper";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you do house calls and on-site support?",
      answer: "Yes. I am based in Oakdale, Bellville, but I deploy across the entire Cape Town region for on-site network setups, dead-zone elimination, and physical infrastructure. I am also available globally for remote software diagnostics."
    },
    {
      question: "Is there a warranty on sourced parts?",
      answer: "Absolutely. All components sourced through The Mouton Hub carry their full, original manufacturer warranties. I only deploy hardware from verified local and global distribution channels."
    },
    {
      question: "What is your standard turnaround time?",
      answer: "Standard hardware diagnostics are completed within 24-48 hours. Please note that operational bandwidth fluctuates around my university engineering schedules, so always check the live status banner at the top of the site for real-time ETA updates."
    },
    {
      question: "Can you handle commercial or business networks?",
      answer: "Yes. Leveraging active industry experience from commercial IT environments, I apply enterprise-grade standards to small business infrastructure, ensuring maximum uptime and security."
    },
    {
      question: "How does the remote diagnostic process work?",
      answer: "You book a 15-minute slot via the Scheduling Engine. We connect via Google Meet, where I triage software errors, OS configurations, or network issues directly. If it requires physical intervention, we immediately upgrade to a hardware drop-off."
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center overflow-hidden">
      
      {/* Hero Section */}
      <section className="w-full max-w-5xl mb-24 text-center mt-10 md:mt-20" aria-label="Introduction">
        <RevealWrapper delay={0} direction="up">
          <div className="inline-flex items-center justify-center gap-2 text-blue-400 font-mono text-xs md:text-sm uppercase tracking-widest mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.15)]">
            <Zap className="w-4 h-4 text-yellow-400 animate-pulse" aria-hidden="true" /> Systems Currently Online
          </div>
        </RevealWrapper>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
          <DecodeText text="Precision" /> <br className="hidden md:block"/>
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(0,163,255,0.2)]">
            <DecodeText text="Engineering." delay={800} />
          </span>
        </h1>
        
        <RevealWrapper delay={1200} direction="up">
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10">
            The Mouton Hub provides enterprise-grade IT infrastructure, network deployments, and hardware diagnostics for the local sector. Stop guessing with your tech. Let an engineer handle it.
          </p>
        </RevealWrapper>
        
        <RevealWrapper delay={1400} direction="up">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <MagneticWrapper pullStrength={0.15}>
              <Link href="/contact" className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-sm text-center uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 min-h-[56px] ring-1 ring-blue-400/50">
                Log Diagnostic Ticket <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </MagneticWrapper>
            
            <MagneticWrapper pullStrength={0.15}>
              <Link href="/services" className="w-full md:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl font-black text-sm text-center uppercase tracking-widest transition-all min-h-[56px] flex items-center justify-center backdrop-blur-sm">
                View Architecture
              </Link>
            </MagneticWrapper>
          </div>
        </RevealWrapper>
      </section>

      {/* Trust Indicators */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-32" aria-label="Core Competencies">
        <RevealWrapper delay={0}>
          <article className="glass-card p-8 rounded-[2rem] border-white/5 text-center flex flex-col items-center group transition-all duration-500 hover:border-blue-500/50 hover:bg-blue-900/10 h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,163,255,0.1)]">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-500/20">
              <ShieldCheck className="w-8 h-8 text-blue-400" aria-hidden="true" />
            </div>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">Certified Diagnostics</h2>
            <p className="text-sm text-gray-400 leading-relaxed">NQF Level 5 IT Support standards applied strictly to every repair and deployment.</p>
          </article>
        </RevealWrapper>
        
        <RevealWrapper delay={150}>
          <article className="glass-card p-8 rounded-[2rem] border-white/5 text-center flex flex-col items-center group transition-all duration-500 hover:border-blue-500/50 hover:bg-blue-900/10 h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,163,255,0.1)]">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-500/20">
              <Server className="w-8 h-8 text-blue-400" aria-hidden="true" />
            </div>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">Commercial Grade</h2>
            <p className="text-sm text-gray-400 leading-relaxed">Enterprise-level network protocols safely scaled down for households and SMEs.</p>
          </article>
        </RevealWrapper>

        <RevealWrapper delay={300}>
          <article className="glass-card p-8 rounded-[2rem] border-white/5 text-center flex flex-col items-center group transition-all duration-500 hover:border-blue-500/50 hover:bg-blue-900/10 h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,163,255,0.1)]">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-500/20">
              <Zap className="w-8 h-8 text-blue-400" aria-hidden="true" />
            </div>
            <h2 className="text-white font-bold uppercase tracking-wider mb-3">Rapid Deployment</h2>
            <p className="text-sm text-gray-400 leading-relaxed">Full Cape Town dispatch radius with standardized 24-48 hour turnaround targets.</p>
          </article>
        </RevealWrapper>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-3xl" aria-label="Frequently Asked Questions">
        <RevealWrapper direction="up" delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-4">Client Briefing (FAQ)</h2>
            <p className="text-sm text-gray-400">Operational parameters and common inquiries.</p>
          </div>
        </RevealWrapper>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <RevealWrapper key={index} delay={index * 100}>
              <div className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === index ? 'border-blue-500/50 shadow-[0_0_30px_rgba(0,163,255,0.1)] bg-blue-900/5' : 'border-white/5 hover:border-white/20'}`}>
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 inset-0 rounded-2xl min-h-[70px] group"
                >
                  <span className={`font-bold text-sm md:text-base pr-4 transition-colors ${openFaq === index ? 'text-blue-400' : 'text-white group-hover:text-gray-200'}`}>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === index ? 'bg-blue-500/20' : 'bg-white/5 group-hover:bg-white/10'}`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${openFaq === index ? "rotate-180 text-blue-400" : "text-gray-400"}`} aria-hidden="true" />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${openFaq === index ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
                  aria-hidden={openFaq !== index}
                >
                  <p className="p-6 pt-0 text-sm text-gray-300 leading-relaxed border-t border-white/5 mt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

    </main>
  );
}