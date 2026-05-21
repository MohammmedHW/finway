import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../components/ui/GradientText';
import { fadeIn } from '../lib/animations';

export const Careers: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
      <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Join the <GradientText>Finway</GradientText> Team
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
          Help us build the economic infrastructure of the internet. We're looking for passionate builders, thinkers, and innovators.
        </p>
      </motion.div>
      
      <motion.div variants={fadeIn} initial="hidden" animate="visible" className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold dark:text-white mb-4">Open Positions</h2>
        <p className="text-slate-500 mb-8">We are currently updating our careers portal. Please check back soon or send your resume to careers@Finway-ecosystem.example.com</p>
        <div className="animate-pulse flex flex-col gap-4">
          <div className="h-16 bg-slate-100 dark:bg-slate-800 rounded-xl w-full"></div>
          <div className="h-16 bg-slate-100 dark:bg-slate-800 rounded-xl w-full"></div>
          <div className="h-16 bg-slate-100 dark:bg-slate-800 rounded-xl w-full"></div>
        </div>
      </motion.div>
    </div>
  );
};
