const fs = require('fs');

const content = fs.readFileSync('src/pages/Services.tsx', 'utf8');
const lines = content.split('\n');

const imports = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, Wallet, Percent, Banknote, Coins, Briefcase, GraduationCap, 
  ArrowLeftRight, PiggyBank, Cpu, Heart, Activity, Stethoscope, ShoppingCart, 
  Plane, Hotel, Utensils, Store, ChefHat, Leaf, Smartphone, Car, Bike, Truck, 
  Users, BookOpen, Globe
} from 'lucide-react';
import { staggerContainer } from '../lib/animations';\n\n`;

const dataEndIndex = lines.findIndex(line => line.includes('export const Services: React.FC = () => {'));
const dataLines = lines.slice(11, dataEndIndex).join('\n'); 

// The filter tabs start around line 349
const tabsStartIndex = lines.findIndex(line => line.includes('{/* ── Filter Tabs ── */}'));
// The component ends just before the last few lines
const compBodyLines = lines.slice(tabsStartIndex, lines.length - 3).join('\n');

const compLines = `
export const ServiceCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredServices = activeCategory === 'all'
    ? allServices
    : allServices.filter(s => s.category === activeCategory);

  const meta = categoryMeta[activeCategory];

  return (
    <div className="w-full">
${compBodyLines}
    </div>
  );
};
`;

fs.writeFileSync('src/components/ServiceCatalog.tsx', imports + dataLines + compLines);
console.log('Successfully created ServiceCatalog component.');
