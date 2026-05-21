import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { hoverScale } from '../../lib/animations';
import { Link } from 'react-router-dom';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
  externalUrl?: string;
  internalPath?: string;
  tag?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  externalUrl = "#",
  internalPath,
  tag
}) => {
  // Default abstract visual pattern if no image is provided
  const displayImage = imageUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80";

  return (
    <motion.div
      variants={hoverScale}
      whileHover="hover"
      whileTap="tap"
      className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group relative border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md"
    >
      {/* Gradient glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Card Image Header */}
      <div className="relative h-44 w-full overflow-hidden">
        <img 
          src={displayImage} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
        
        {tag && (
          <span className="absolute top-4 left-4 bg-indigo-600/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full shadow-md">
            {tag}
          </span>
        )}
      </div>

      {/* Floating Icon Badge */}
      <div className="relative px-6">
        <div className="absolute -top-7 left-6 w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-slate-100/80 dark:border-slate-700/50">
          {icon}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 pt-10 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          {internalPath ? (
            <Link 
              to={internalPath}
              className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              Explore Now <ArrowRight size={14} />
            </Link>
          ) : (
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
              Ecosystem Core
            </span>
          )}

          {externalUrl && externalUrl !== "#" && (
            <a 
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors"
              title="Official Site"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
