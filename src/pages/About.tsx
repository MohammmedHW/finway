import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket } from 'lucide-react';
import { GradientText } from '../components/ui/GradientText';
import { fadeIn, staggerContainer } from '../lib/animations';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeIn} className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Building the <GradientText>infrastructure</GradientText> of the internet economy
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Fiinway was founded with a simple mission: to unify the fragmented landscape of enterprise services into a single, cohesive, and beautiful platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div variants={fadeIn} className="glass-card p-8 rounded-3xl">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400">
              To increase the GDP of the internet by providing businesses of all sizes with the essential tools they need to operate on a global scale—from consumer credit and digital cards to food delivery, travel bookings, and enterprise payment gateways.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="glass-card p-8 rounded-3xl">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
              <Rocket size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400">
              We envision a world where starting and scaling an enterprise is as simple as creating an account. No more managing 50 different vendors—just one unified ecosystem.
            </p>
          </motion.div>
        </div>

        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl font-bold dark:text-white mb-12">By the numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">150+</p>
              <p className="text-slate-500 font-medium">Countries supported</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">99.99%</p>
              <p className="text-slate-500 font-medium">Platform uptime</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10M+</p>
              <p className="text-slate-500 font-medium">Global users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">24/7</p>
              <p className="text-slate-500 font-medium">Enterprise support</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
