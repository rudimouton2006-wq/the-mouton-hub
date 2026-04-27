import Link from "next/link";
import { Terminal, ShieldAlert, Lock, Server, FileText } from "lucide-react";

export const metadata = {
  title: "Operational Protocols | Takumi Tech",
  description: "Terms of service, privacy policies, and operational agreements for Takumi Tech infrastructure deployments.",
};

export default function TermsPage() {
  return (
    <div className="w-full flex flex-col items-center justify-start pt-12 md:pt-20 pb-24 relative z-10">
      
      {/* --------------------------------------------------------- */}
      {/* PROTOCOLS HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full max-w-4xl mx-auto text-center px-4 mb-20">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-500 mr-4" />
          <span className="text-xs font-mono text-gray-400 tracking-[0.3em] uppercase">Legal Designation</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-500 ml-4" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-6 leading-tight text-white">
          Operational <span className="text-gradient drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">Protocols</span>
        </h1>
        
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
          The following parameters dictate the service level agreements, privacy matrices, and operational terms between Takumi Tech and the deploying entity.
        </p>
      </section>

      {/* --------------------------------------------------------- */}
      {/* DOCUMENTATION MATRIX */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-[2rem] p-8 md:p-16 border border-white/10">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-10">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">Last Updated: April 2026</span>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Version 2.4.1</span>
          </div>

          <div className="space-y-16">
            
            {/* Clause 01: Service Level Agreement */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white">01. Infrastructure Deployment & SLA</h2>
              </div>
              <div className="prose prose-invert prose-p:text-gray-400 prose-p:text-sm prose-p:leading-relaxed prose-p:font-medium max-w-none">
                <p>
                  Takumi Tech guarantees a 99.99% uptime operational threshold for all bare-metal and hypervisor architectures deployed directly by our engineering division. This SLA is nullified if the client or any unauthorized third-party entity modifies kernel parameters, routing tables, or hardware configurations without prior written clearance from a Takumi Tech Lead Engineer.
                </p>
                <p>
                  Hardware procurement timelines are subject to global supply chain volatility. While we leverage our private logistics matrix to expedite high-density compute nodes, explicit delivery dates are estimates and not legally binding constraints.
                </p>
              </div>
            </div>

            {/* Clause 02: Zero-Trust Privacy Matrix */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white">02. Data Privacy & Cryptography</h2>
              </div>
              <div className="prose prose-invert prose-p:text-gray-400 prose-p:text-sm prose-p:leading-relaxed prose-p:font-medium max-w-none">
                <p>
                  Operating under a strict Zero-Trust philosophy, Takumi Tech does not harvest, cache, or analyze client payload data. Our diagnostic telemetry is strictly limited to hardware thermal dynamics, packet routing efficiency, and hypervisor resource allocation. 
                </p>
                <p>
                  All communication between the client and Takumi Tech via our digital portals is encrypted via AES-256-GCM. We will never request raw database dumps, unencrypted private keys, or root passwords during the diagnostic phase.
                </p>
              </div>
            </div>

            {/* Clause 03: Security Liability */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 text-red-400" />
                </div>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white">03. Threat Vector Liability</h2>
              </div>
              <div className="prose prose-invert prose-p:text-gray-400 prose-p:text-sm prose-p:leading-relaxed prose-p:font-medium max-w-none">
                <p>
                  While Takumi Tech deploys military-grade VLAN segmentation, deep packet inspection (DPI), and intrusion prevention systems (IPS), the client acknowledges that absolute security in a networked environment is a mathematical impossibility.
                </p>
                <p>
                  Takumi Tech holds zero liability for data exfiltration, ransomware encryption, or denial of service (DDoS) events resulting from zero-day exploits, social engineering of client personnel, or the use of deprecated hardware not sourced through our official logistics matrix.
                </p>
              </div>
            </div>

            {/* Clause 04: Contractual Termination */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white">04. Contractual Termination</h2>
              </div>
              <div className="prose prose-invert prose-p:text-gray-400 prose-p:text-sm prose-p:leading-relaxed prose-p:font-medium max-w-none">
                <p>
                  Either entity may terminate the active maintenance contract with a 30-day written notice. Upon termination, Takumi Tech will permanently purge all client diagnostic logs, architectural blueprints, and VPN routing keys from our secure servers within 72 hours. Hardware assets physically deployed on-site remain the property of the client provided all procurement invoices have been settled in full.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-mono text-gray-500 tracking-widest uppercase text-center sm:text-left flex items-center gap-2">
              <FileText className="w-3 h-3" /> End of Document
            </p>
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-[10px] uppercase tracking-widest transition-colors rounded-lg"
            >
              Contact Legal Entity
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}