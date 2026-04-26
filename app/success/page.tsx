"use client";
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function Success() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 reveal">
      <div className="glass-card p-12 rounded-[3rem] max-w-lg w-full text-center relative overflow-hidden">
        {/* Animated Scanline for that technical feel */}
        <div className="scanline opacity-20" />
        
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-blue-500/10 rounded-full animate-pulse">
            <CheckCircle2 size={64} className="text-blue-500" />
          </div>
        </div>

        <h2 className="text-4xl font-black tracking-tighter mb-4 uppercase">
          Transmission <span className="text-gradient">Complete.</span>
        </h2>
        
        <p className="text-gray-500 mb-10 leading-relaxed font-mono text-sm">
          DIAGNOSTIC DATA RECEIVED. <br />
          LEAD ENGINEER RUDI MOUTON WILL REVIEW YOUR TICKET WITHIN 24 HOURS.
        </p>

        <Link href="/" className="inline-block px-10 py-4 bg-blue-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
          Return to Dashboard
        </Link>
      </div>
    </main>
  );
}