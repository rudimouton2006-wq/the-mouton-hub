"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Server, Globe, Briefcase, Lock, AlertTriangle, MessageSquare } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-start pb-32 pt-12 md:pt-24 z-10 selection:bg-[#00E5FF]/30 selection:text-white bg-[#030508]">
      
      {/* --------------------------------------------------------- */}
      {/* STATIC AMBIENT BACKGROUND (ZERO ANIMATION / ZERO CPU LOAD) */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-white/[0.02] to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#00E5FF]" /> Back to Main Terminal
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <ShieldCheck className="w-5 h-5 text-[#00E5FF]" />
            <span className="text-[10px] sm:text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase font-bold">
              Legal & Privacy
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
            Service Agreements & Operating Terms.
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
            Simple, clear agreements. Below are the precise rules regarding how we work, how we protect your hardware, and what you can expect from Takumi Tech. 
          </p>
        </motion.div>

        {/* --------------------------------------------------------- */}
        {/* THE TERMS MATRIX (SOLID STATE CARDS) */}
        {/* --------------------------------------------------------- */}
        <div className="flex flex-col gap-8 mb-16">

          {/* SECTION 1: HARDWARE & IT SUPPORT */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-[#05080F] border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
              <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20 shrink-0">
                <Server className="w-6 h-6 text-[#00E5FF]" />
              </div>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white">01. IT & Hardware Support</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full" /> Diagnostics & Quoting
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  Initial evaluation determines if a viable solution is possible. We do not perform unquoted or unapproved work. A diagnostic fee may be required before extensive testing begins; this fee is strictly credited toward your ensuing repair or project.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full" /> Data Loss & Backups
                </h3>
                <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-xl mb-3 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] font-mono text-gray-300 uppercase tracking-wide leading-relaxed">
                    It is the client's sole responsibility to ensure all critical data is securely backed up prior to any hardware service.
                  </p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  While we perform "best-effort" data preservation during repairs, Takumi Tech is strictly not liable for data loss during any hardware, OS, or software intervention.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full" /> Hardware Warranties
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  All component warranties are provided directly by the original manufacturer or vendor. Takumi Tech provides a 30-day labor warranty on our physical installations. We are not financially responsible for component failure due to manufacturer defects or power surges (loadshedding).
                </p>
              </div>
            </div>
          </motion.section>

          {/* SECTION 2: WEB DEVELOPMENT */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-[#05080F] border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
              <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center border border-[#8B5CF6]/20 shrink-0">
                <Globe className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white">02. Web Development Projects</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full" /> The Bespoke Build Scope
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  Our initial build fee covers professional design and development labor to establish your core site. The project scope is mutually locked before development begins.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full" /> Revisions & Hourly Overages
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  The initial build includes up to two (2) major rounds of revision. Any subsequent design changes, feature additions, or out-of-scope requests after launch will be billed at our standard student-friendly hourly rate of <strong>R150 per hour</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full" /> Digital Ownership
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  Once the final invoice is paid, you take 100% ownership of your website and domain name. You are free to move your hosting or self-manage the site via the provided Content Management System.
                </p>
              </div>
            </div>
          </motion.section>

          {/* SECTION 3: THE MANAGED RETAINER */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-[#05080F] border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center border border-[#F59E0B]/20 shrink-0">
                <Briefcase className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white">03. The Managed Retainer</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full" /> Controlled Time Allocation
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  The Web Managed Plan covers your hosting and exactly <strong>one (1) hour</strong> of dedicated update labor per month. The Full Business Retainer covers <strong>two (2) hours</strong>. Time does not roll over. Any massive updates exceeding this limit will be quoted separately at our discounted retainer rate.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full" /> Priority Response
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  Retainer clients receive priority support with a guaranteed 24-hour initial response window. This covers standard maintenance, weekly security scans, and general troubleshooting.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full" /> Cancellation Policy
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  The Takumi Retainer is a flexible, month-to-month agreement. You may cancel at any time, requiring only a clear 30-day written notice to offboard your hosting and services cleanly.
                </p>
              </div>
            </div>
          </motion.section>

          {/* SECTION 4: PRIVACY */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-[#05080F] border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20 shrink-0">
                <Lock className="w-6 h-6 text-[#10B981]" />
              </div>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white">04. Privacy & Data Protection</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                Your privacy is paramount. Takumi Tech does not sell, distribute, or unethically monitor your personal business data. During remote support or physical repairs, we only interact with the specific files and systems required to complete the requested job.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                All communications sent through our Smart Ticketing Engine are securely encrypted. We will never ask you for your personal passwords, banking PINs, or sensitive private keys.
              </p>
            </div>
          </motion.section>

        </div>

        {/* --------------------------------------------------------- */}
        {/* CONTACT / TICKET CALL TO ACTION */}
        {/* --------------------------------------------------------- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-b from-[#05080F] to-[#080C16] border border-white/5 shadow-xl">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-medium mb-8 max-w-xl mx-auto">
              If you need clarification on any of our terms, or if you are ready to start your project, log a ticket with our engineering team today.
            </p>
            <Link 
              href="/ticket"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00E5FF] text-[#030508] font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              <MessageSquare className="w-4 h-4" /> Contact Us / Log a Ticket
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}