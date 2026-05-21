import React from 'react';
import { motion } from 'framer-motion';
import { hoverScale } from '../../lib/animations';
import { ExternalLink } from 'lucide-react';

export interface ImageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon?: React.ReactNode;
  linkUrl?: string;
  tag?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  imageUrl,
  icon,
  linkUrl = "#",
  tag
}) => {
  return (
    <motion.div
      variants={hoverScale}
      whileHover="hover"
      whileTap="tap"
      className="glass-card rounded-3xl overflow-hidden group cursor-pointer h-[400px] flex flex-col relative border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300"
    >
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>
      
      {tag && (
        <span className="absolute top-4 left-4 bg-indigo-600/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full shadow-md z-10">
          {tag}
        </span>
      )}

      {icon && (
        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white z-10">
          {icon}
        </div>
      )}
      
      <div className="relative z-10 p-6 mt-auto flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{title}</h3>
        <p className="text-slate-200 text-sm mb-4 line-clamp-2">{description}</p>
        
        <a 
          href={linkUrl}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full self-start hover:bg-white/30 transition-colors"
        >
          Explore <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};
