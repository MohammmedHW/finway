import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GradientText } from '../components/ui/GradientText';
import { fadeIn, staggerContainer } from '../lib/animations';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Format the ID for display
  const title = id ? id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ') : 'Service';

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 md:px-6 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to all services
          </Link>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Global <GradientText>{title}</GradientText> Infrastructure
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mb-10">
              A fully integrated suite of {title.toLowerCase()} products designed for speed, scale, and global reach. Build the exact experience you want with our powerful APIs.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex gap-4">
              <Button size="lg" className="gap-2">
                Start Building <ExternalLink size={18} />
              </Button>
              <Button size="lg" variant="outline">
                Read the Docs
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold dark:text-white mb-4">Enterprise-grade features out of the box</h2>
            <p className="text-slate-600 dark:text-slate-400">Everything you need to launch and scale your {title.toLowerCase()} operations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-indigo-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white mb-2">Feature Headline {i}</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Detailed description of this specific feature. It explains how this benefits the enterprise using the platform and highlights the technical superiority.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
