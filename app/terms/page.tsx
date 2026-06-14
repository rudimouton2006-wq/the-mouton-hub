"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Server, Globe, Briefcase, Lock, AlertTriangle, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export default function TermsPage() {
  // Enables smooth scrolling for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start pt-28 pb-32 relative selection:bg-[#00E5FF]/30 selection:text-white bg-[#030508] overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#00E5FF]/5 via-[#2563EB]/5 to-transparent blur-3xl opacity-30" />
      </div>

      {/* Main Container - Adjusted for Sidebar Layout */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* --------------------------------------------------------- */}
        {/* STICKY SIDEBAR (TABLE OF CONTENTS) */}
        {/* --------------------------------------------------------- */}
        <aside className="hidden lg:flex flex-col w-64 shrink-0 sticky top-32 h-max gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-wider w-max mb-2">
              <ArrowLeft className="w-4 h-4 text-[#00E5FF]" /> Back to Home
            </Link>
            <h3 className="text-white font-bold tracking-tight text-lg border-b border-white/10 pb-4">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-3">
              <a href="#hardware" className="group flex items-center gap-3 text-sm font-medium text-gray-400 hover:text-white transition-all">
                <Server className="w-4 h-4 text-gray-600 group-hover:text-[#00E5FF] transition-colors" />
                01. IT &amp; Hardware
              </a>
              <a href="#webdev" className="group flex items-center gap-3 text-sm font-medium text-gray-400 hover:text-white transition-all">
                <Globe className="w-4 h-4 text-gray-600 group-hover:text-[#8B5CF6] transition-colors" />
                02. Web Projects
              </a>
              <a href="#retainer" className="group flex items-center gap-3 text-sm font-medium text-gray-400 hover:text-white transition-all">
                <Briefcase className="w-4 h-4 text-gray-600 group-hover:text-[#F59E0B] transition-colors" />
                03. The Retainer
              </a>
              <a href="#privacy" className="group flex items-center gap-3 text-sm font-medium text-gray-400 hover:text-white transition-all">
                <Lock className="w-4 h-4 text-gray-600 group-hover:text-[#10B981] transition-colors" />
                04. Privacy Policy
              </a>
            </nav>
          </div>
        </aside>

        {/* --------------------------------------------------------- */}
        {/* MAIN CONTENT AREA */}
        {/* --------------------------------------------------------- */}
        <div className="flex-1 flex flex-col gap-10 w-full">
          
          {/* Header */}
          <div className="flex flex-col gap-6 lg:hidden mb-4">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider w-max">
              <ArrowLeft className="w-4 h-4 text-[#00E5FF]" /> Back to Home
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#00E5FF]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF]">Legal &amp; Privacy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Service Agreements <br className="hidden sm:block" />&amp; Operating Terms.
            </h1>
            <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
              Simple, clear agreements. Below are the precise rules regarding how we work, how we protect your hardware, and what you can expect from Takumi Tech.
            </p>
          </div>

          {/* SECTION 01: IT & HARDWARE */}
          <motion.section 
            id="hardware"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-[#0A0D14] border border-white/10 rounded-3xl p-8 md:p-10 scroll-mt-32"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20 shrink-0">
                <Server className="w-6 h-6 text-[#00E5FF]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">01. IT &amp; Hardware Support</h2>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-sm font-bold text-[#00E5FF] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Diagnostics &amp; Quoting
                </h3>
                <ul className="flex flex-col gap-3 text-gray-400 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>Initial evaluation determines if a viable solution is possible.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>We strictly do not perform any unquoted or unapproved work.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>A diagnostic fee may apply before extensive testing begins. This fee is credited toward your ensuing repair.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#00E5FF] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Data Loss &amp; Backups
                </h3>
                
                {/* RE-ENGINEERED WARNING BOX */}
                <div className="p-5 rounded-r-2xl bg-red-500/10 border-l-4 border-red-500 mb-5 flex items-start gap-4">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-red-200 leading-relaxed">
                    It is the client&apos;s sole responsibility to ensure all critical data is securely backed up prior to any hardware service.
                  </p>
                </div>

                <ul className="flex flex-col gap-3 text-gray-400 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>We perform &quot;best-effort&quot; data preservation during all repairs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>Takumi Tech is strictly not liable for data loss during any hardware, OS, or software intervention.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#00E5FF] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Hardware Warranties
                </h3>
                <ul className="flex flex-col gap-3 text-gray-400 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>Component warranties are provided directly by the original manufacturer.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>We provide a 30-day labor warranty specifically on our physical installations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>We are not financially responsible for component failure due to manufacturer defects or power surges (loadshedding).</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* SECTION 02: WEB DEV */}
          <motion.section 
            id="webdev"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-[#0A0D14] border border-white/10 rounded-3xl p-8 md:p-10 scroll-mt-32"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center border border-[#8B5CF6]/20 shrink-0">
                <Globe className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">02. Web Development Projects</h2>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-sm font-bold text-[#8B5CF6] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" /> The Bespoke Build Scope
                </h3>
                <ul className="flex flex-col gap-3 text-gray-400 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>Our initial build fee covers professional design and development labor.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>The project scope and exact requirements are mutually locked before development begins.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#8B5CF6] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" /> Revisions &amp; Hourly Overages
                </h3>
                <ul className="flex flex-col gap-3 text-gray-400 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>The initial build includes up to two (2) major rounds of revision.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>Subsequent design changes or out-of-scope requests after launch are billed at <strong>R150 per hour</strong>.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#8B5CF6] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" /> Digital Ownership
                </h3>
                <ul className="flex flex-col gap-3 text-gray-400 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>Once the final invoice is paid, you take 100% ownership of your website and domain name.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>You are completely free to migrate your hosting or self-manage the site via the provided CMS.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* SECTION 03: RETAINER */}
          <motion.section 
            id="retainer"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-[#0A0D14] border border-white/10 rounded-3xl p-8 md:p-10 scroll-mt-32"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center border border-[#F59E0B]/20 shrink-0">
                <Briefcase className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">03. The Managed Retainer</h2>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-sm font-bold text-[#F59E0B] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" /> Controlled Time Allocation
                </h3>
                <ul className="flex flex-col gap-3 text-gray-400 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>The Web Managed Plan covers hosting and exactly <strong>one (1) hour</strong> of dedicated update labor per month.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>The Full Business Retainer covers <strong>two (2) hours</strong> of support labor per month.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>Allocated time does not roll over to the next month. Massive updates exceeding the limit are quoted separately at our discounted retainer rate.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#F59E0B] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" /> Priority Response
                </h3>
                <ul className="flex flex-col gap-3 text-gray-400 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>Retainer clients receive priority queueing with a guaranteed 24-hour initial response window.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>This covers standard maintenance, weekly security scans, and general troubleshooting.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#F59E0B] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" /> Cancellation Policy
                </h3>
                <ul className="flex flex-col gap-3 text-gray-400 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>The Takumi Retainer is a highly flexible, month-to-month agreement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span>You may cancel at any time, requiring only a clear 30-day written notice to cleanly offboard your services.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* SECTION 04: PRIVACY */}
          <motion.section 
            id="privacy"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-[#0A0D14] border border-white/10 rounded-3xl p-8 md:p-10 scroll-mt-32"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20 shrink-0">
                <Lock className="w-6 h-6 text-[#10B981]" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">04. Privacy &amp; Data Protection</h2>
            </div>

            <div className="flex flex-col gap-6">
               <ul className="flex flex-col gap-4 text-gray-400 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span><strong>Total Discretion:</strong> Takumi Tech does not sell, distribute, or unethically monitor your personal or business data.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span><strong>Restricted Access:</strong> During remote support or physical repairs, we exclusively interact with the specific files and systems required to complete the requested job.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span><strong>End-to-End Encryption:</strong> All communications sent through our Smart Ticketing Engine are securely encrypted.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                    <span><strong>Zero-Trust Protocol:</strong> We will never ask you for your personal passwords, banking PINs, or sensitive private keys.</span>
                  </li>
                </ul>
            </div>
          </motion.section>

          {/* BOTTOM CTA */}
          <div className="mt-8 mb-12 bg-[#0A0D14] border border-white/10 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Still have questions?</h2>
            <p className="text-gray-400 text-sm mb-8">
              If you need clarification on any of our terms, or if you are ready to start your project, log a ticket with our engineering team today.
            </p>
            <Link href="/ticket" className="inline-flex items-center gap-3 px-8 py-4 bg-[#00E5FF] text-[#030508] font-bold uppercase tracking-wider text-sm rounded-2xl hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 hover:-translate-y-1">
              <MessageCircle className="w-5 h-5" /> Contact Us / Log a Ticket
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}