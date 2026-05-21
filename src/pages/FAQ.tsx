import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { GradientText } from '../components/ui/GradientText';
import { fadeIn, staggerContainer } from '../lib/animations';

const faqs = [
  {
    question: "What is the Finway Ecosystem?",
    answer: "Finway Ecosystem is a comprehensive enterprise platform that combines global payments, cloud infrastructure, AI solutions, logistics, and more into a single unified API and dashboard experience."
  },
  {
    question: "How do I get started?",
    answer: "You can create an account and start testing in our sandbox environment immediately. For production deployment, you'll need to complete our enterprise verification process."
  },
  {
    question: "What is the pricing model?",
    answer: "We offer modular, pay-as-you-go pricing for all services. You only pay for what you use. Volume discounts are automatically applied as your usage scales. Contact sales for custom enterprise agreements."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We employ military-grade encryption, zero-trust architecture, and undergo regular third-party audits. We are compliant with SOC 2, GDPR, HIPAA, and PCI DSS Level 1."
  },
  {
    question: "Do you offer SLAs?",
    answer: "Yes, we guarantee 99.99% uptime across all core services, backed by financially significant service level agreements for our enterprise tier customers."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
      <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Frequently Asked <GradientText>Questions</GradientText>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Everything you need to know about the product and billing.
        </p>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            variants={fadeIn}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-semibold text-lg text-slate-900 dark:text-white">{faq.question}</span>
              <ChevronDown 
                className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                size={20}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-5 pt-0 text-slate-600 dark:text-slate-400 border-t border-slate-200/50 dark:border-slate-700/50 pt-4 mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
