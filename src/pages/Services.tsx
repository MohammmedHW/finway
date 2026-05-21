import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../components/ui/GradientText';
import { fadeIn } from '../lib/animations';
import { ServiceCatalog } from '../components/ServiceCatalog';

export const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* ── Hero Banner ── */}
      <section className="py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[100px]" />
        </div>
        <motion.div
          variants={fadeIn} initial="hidden" animate="visible"
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4 tracking-wide uppercase">
            Our Full Ecosystem
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            <GradientText>30+ Services.</GradientText><br />
            <span className="text-slate-900 dark:text-white">One Super-App.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Competitors make you download <strong className="text-slate-800 dark:text-slate-200">a different app for every service</strong> — Finway puts all 30+ in one place.
          </p>

          {/* Competitor callout strip */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {['Ola for cabs', 'Swiggy for food', 'MakeMyTrip for travel', 'HDFC for credit', 'PharmEasy for health', '...and 10+ more apps'].map((label, i) => (
              <span key={i} className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${i === 5 ? 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 line-through opacity-70'}`}>
                {label}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-slate-300 dark:bg-slate-700" />
            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">vs. Finway — all in one</span>
            <div className="h-px w-12 bg-slate-300 dark:bg-slate-700" />
          </div>
        </motion.div>
      </section>

      <ServiceCatalog />
    </div>
  );
};
