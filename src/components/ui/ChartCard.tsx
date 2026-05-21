import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

export interface ChartCardProps {
  title: string;
  value: string;
  trend: string;
  isPositive: boolean;
  data: number[];
}

export const ChartCard: React.FC<ChartCardProps> = ({
  title,
  value,
  trend,
  isPositive,
  data
}) => {
  const max = Math.max(...data);
  const BAR_AREA_HEIGHT = 96; // px — matches h-24

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl p-6 flex flex-col h-full overflow-hidden relative cursor-pointer group border border-slate-200/80 dark:border-slate-800/80"
    >
      {/* Subtle gradient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
          <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{title}</h3>
          <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{value}</p>
        </div>
        <div className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${
          isPositive 
            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40'
            : 'bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border border-rose-200/60 dark:border-rose-800/40'
        }`}>
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {trend}
        </div>
      </div>

      {/* Bar Chart */}
      <div className="relative z-10 mt-auto" style={{ height: BAR_AREA_HEIGHT }}>
        <div className="flex items-end gap-1.5 h-full w-full">
          {data.map((val, i) => {
            const barHeight = Math.max(6, (val / max) * BAR_AREA_HEIGHT);
            return (
              <div 
                key={i} 
                className="flex-1 flex flex-col justify-end h-full"
              >
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: barHeight }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full rounded-t-md transition-opacity duration-200 ${
                    isPositive 
                      ? 'bg-gradient-to-t from-indigo-600 to-indigo-400 dark:from-indigo-500 dark:to-indigo-300' 
                      : 'bg-gradient-to-t from-rose-500 to-rose-300 dark:from-rose-600 dark:to-rose-400'
                  } opacity-70 group-hover:opacity-100`}
                  style={{ minHeight: 6 }}
                />
              </div>
            );
          })}
        </div>

        {/* Baseline */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200 dark:bg-slate-700/50" />
      </div>
    </motion.div>
  );
};
