import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../components/ui/GradientText';
import { fadeIn, staggerContainer } from '../lib/animations';
import { ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
      <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Fiinway <GradientText>Insights</GradientText>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          News, updates, and thoughts on the future of the internet economy.
        </p>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div key={i} variants={fadeIn} className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
            <div className="h-48 bg-slate-200 dark:bg-slate-800 w-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div className="p-6">
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-2">Technology • Oct 12, 2026</p>
              <h3 className="text-xl font-bold dark:text-white mb-3 group-hover:text-indigo-500 transition-colors">The Future of Enterprise Architecture</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                Discover how unified platforms are replacing fragmented microservices across Fortune 500 companies in the new era of computing.
              </p>
              <div className="flex items-center text-sm font-medium text-slate-900 dark:text-white gap-1 group-hover:gap-2 transition-all">
                Read article <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
