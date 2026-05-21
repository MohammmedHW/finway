import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { GradientText } from '../components/ui/GradientText';
import { Button } from '../components/ui/Button';
import { fadeIn, staggerContainer, slideInFromLeft, slideInFromRight } from '../lib/animations';

export const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
      <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Get in <GradientText>touch</GradientText>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Our global team is here to help you build your next generation enterprise infrastructure.
        </p>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        
        <motion.div variants={slideInFromLeft} className="glass-card p-8 rounded-3xl">
          <h2 className="text-2xl font-bold dark:text-white mb-6">Send us a message</h2>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                <input type="text" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                <input type="text" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Doe" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Work Email</label>
              <input type="email" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="john@company.com" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
              <textarea rows={4} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="How can we help?"></textarea>
            </div>
            <Button size="lg" className="w-full mt-2">Send Message</Button>
          </form>
        </motion.div>

        <motion.div variants={slideInFromRight} className="flex flex-col justify-center gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold dark:text-white mb-1">Global Headquarters</h3>
              <p className="text-slate-600 dark:text-slate-400">100 Finway Way<br />San Francisco, CA 94105<br />United States</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold dark:text-white mb-1">Sales & Support</h3>
              <p className="text-slate-600 dark:text-slate-400">+1 (800) 123-4567<br />Available 24/7</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-pink-600 dark:text-pink-400 shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold dark:text-white mb-1">Email</h3>
              <p className="text-slate-600 dark:text-slate-400">sales@Finway-ecosystem.example.com<br />support@Finway-ecosystem.example.com</p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};
