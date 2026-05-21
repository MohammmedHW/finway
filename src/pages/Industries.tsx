import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, GraduationCap, Stethoscope } from 'lucide-react';
import { GradientText } from '../components/ui/GradientText';
import { fadeIn, staggerContainer } from '../lib/animations';

export const Industries: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
      <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Built for <GradientText>every industry</GradientText>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Tailored solutions and specialized infrastructure for the unique challenges of your sector.
        </p>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-8">
        {[
          { title: "Financial Services", icon: <Landmark size={32} /> },
          { title: "Healthcare", icon: <Stethoscope size={32} /> },
          { title: "Education", icon: <GraduationCap size={32} /> },
          { title: "Real Estate", icon: <Building2 size={32} /> }
        ].map((industry, i) => (
          <motion.div key={i} variants={fadeIn} className="glass-card p-8 rounded-3xl flex items-start gap-6 hover:-translate-y-1 transition-transform duration-300">
            <div className="text-indigo-600 dark:text-indigo-400 p-4 bg-indigo-50 dark:bg-slate-800 rounded-2xl">
              {industry.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold dark:text-white mb-2">{industry.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                End-to-end compliant infrastructure designed to accelerate digital transformation in the {industry.title.toLowerCase()} sector.
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
