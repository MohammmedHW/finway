import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../lib/animations';

export const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
      <motion.div variants={fadeIn} initial="hidden" animate="visible" className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-sm text-slate-500 mb-8">Last updated: October 12, 2026</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">At Finway Ecosystem, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share your personal information when you use our website, APIs, and services.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Use of Information</h2>
          <p className="mb-4">We may use the information we collect about you to provide, maintain, and improve our services, including to process transactions, send related information, and verify identities.</p>
          
          <p className="text-slate-500 mt-12 text-sm italic">This is a placeholder privacy policy for demonstration purposes.</p>
        </div>
      </motion.div>
    </div>
  );
};
