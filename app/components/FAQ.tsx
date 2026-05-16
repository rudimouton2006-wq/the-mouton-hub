"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

// ---------------------------------------------------------
// FAQ DATA 
// ---------------------------------------------------------
const FAQ_DATA = [
  {
    question: "If I choose the R150/month web package, do I own the website?",
    answer: "Absolutely. The .co.za domain is registered in your name. Takumi Tech simply manages the server environment, security, and updates for you."
  },
  {
    question: "Do you do on-site repairs or only drop-offs?",
    answer: "For standard fixes, you can drop off your computer. However, for internet setups or heavy hardware installations within the Cape Town region, we can easily come directly to you."
  },
  {
    question: "How do I pay for IT support?",
    answer: "Once a ticket is logged, we do a quick check of the problem. You will receive a clear quote for parts and labor before any work starts. There are never any surprise bills."
  },
  {
    question: "How long do computer repairs usually take?",
    answer: "Most software issues and standard physical repairs are completed within 24 to 48 hours. If we need to order specific parts for your machine, we will tell you the exact timeline upfront."
  },
  {
    question: "Do I have to pay a monthly fee, or can I just pay when something breaks?",
    answer: "You can absolutely just pay when something breaks! Our monthly retainer is just an optional extra for local businesses that want priority support and weekly system checks."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 py-24 z-10 will-change-transform">
      
      {/* HEADER */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00E5FF] mr-4 opacity-50" />
          <span className="text-[10px] sm:text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase font-bold flex items-center gap-2">
            <HelpCircle className="w-3 h-3" /> Client Intel
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00E5FF] ml-4 opacity-50" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-medium max-w-xl mx-auto">
          Everything you need to know about how we work, how we bill, and how we protect your tech.
        </p>
      </div>

      {/* ACCORDION LIST (SOLID STATE) */}
      <div className="flex flex-col gap-4">
        {FAQ_DATA.map((faq, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-[#05080F] border rounded-2xl overflow-hidden transition-all duration-300 transform-gpu ${
                isActive ? "border-[#00E5FF]/40 shadow-lg" : "border-white/5 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <span className={`text-sm md:text-base font-bold pr-4 transition-colors duration-300 ${isActive ? "text-[#00E5FF]" : "text-white group-hover:text-gray-200"}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isActive ? "bg-[#00E5FF]/10" : "bg-[#080C16] border border-white/5 group-hover:bg-white/5"}`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-500 transform-gpu ${isActive ? "rotate-180 text-[#00E5FF]" : "text-gray-400 group-hover:text-white"}`} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="will-change-transform"
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-400 text-sm leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}