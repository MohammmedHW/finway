import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../lib/animations';

export const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
      <motion.div variants={fadeIn} initial="hidden" animate="visible" className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">Terms of Service</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-sm text-slate-500 mb-8">Last updated: October 12, 2026</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">By accessing or using the Finway Ecosystem platform, APIs, or services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Use License</h2>
          <p className="mb-4">Permission is granted to temporarily use our services in accordance with your subscription plan. You may not modify, reverse engineer, or create derivative works of our software.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Enterprise SLAs</h2>
          <p className="mb-4">Enterprise customers are subject to the specific Service Level Agreements outlined in their individual contracts, which supersede these general terms in the event of a conflict.</p>
          
          <p className="text-slate-500 mt-12 text-sm italic">This is a placeholder terms of service for demonstration purposes.</p>
        </div>
      </motion.div>
    </div>
  );
};
