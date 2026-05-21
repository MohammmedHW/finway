import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../components/ui/GradientText';
import { fadeIn } from '../lib/animations';

export const Solutions: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <motion.div variants={fadeIn} initial="hidden" animate="visible" className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          <GradientText>Enterprise Solutions</GradientText>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
          Custom integrated ecosystems designed specifically for your organization's most complex challenges. Contact our sales team to architect your solution.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors font-medium">
          Contact Solution Architects
        </button>
      </motion.div>
    </div>
  );
};
