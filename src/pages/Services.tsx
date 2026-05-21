import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, Cloud, Briefcase, Shield, Smartphone, 
  ShoppingCart, BarChart, ShoppingBag, Utensils, Zap, Wallet, Plane
} from 'lucide-react';
import { GradientText } from '../components/ui/GradientText';
import { ServiceCard } from '../components/ui/ServiceCard';
import { fadeIn, staggerContainer } from '../lib/animations';

type Category = 'all' | 'consumer' | 'financial' | 'enterprise';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  tag: string;
  category: Category;
  path: string;
}

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const allServices: ServiceItem[] = [
    {
      title: "Online Food Orders",
      description: "Partnered with 50,000+ premium restaurants globally for 30-minute guaranteed hot delivery.",
      icon: <Utensils size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
      tag: "Hot Delivery",
      category: "consumer",
      path: "/services/food"
    },
    {
      title: "Grocery & Delivery",
      description: "Fresh organic produce, dairy, and household essentials delivered in 15 minutes or less.",
      icon: <ShoppingBag size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
      tag: "15-Min Delivery",
      category: "consumer",
      path: "/services/delivery"
    },
    {
      title: "Premium Credit Cards",
      description: "Ecosystem-integrated metal credit cards with zero joining fees and 5% airport cashbacks.",
      icon: <CreditCard size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=600&q=80",
      tag: "Credit Cards",
      category: "financial",
      path: "/services/credit-cards"
    },
    {
      title: "Financial Services",
      description: "Instant personal loans, customized mutual funds, and smart wealth management trackers.",
      icon: <Wallet size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
      tag: "Wealth Hub",
      category: "financial",
      path: "/services/finance"
    },
    {
      title: "Global Payments",
      description: "Accept and process online transactions in 135+ currencies with automated smart routing.",
      icon: <Zap size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      tag: "Pay APIs",
      category: "enterprise",
      path: "/services/payments"
    },
    {
      title: "Cloud & AI Solutions",
      description: "Secure, low-latency container hosting clusters integrated with predictive machine learning modules.",
      icon: <Cloud size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
      tag: "Infrastructure",
      category: "enterprise",
      path: "/services/cloud"
    },
    {
      title: "Business Logistics",
      description: "Enterprise-grade supply chain trackers, digital manifests, and automated sorting networks.",
      icon: <Briefcase size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      tag: "Logistics",
      category: "enterprise",
      path: "/services/logistics"
    },
    {
      title: "Travel & Flights",
      description: "Book regional flights, luxury holiday resort packages, and secure airport lounge reservations.",
      icon: <Plane size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&q=80",
      tag: "Finway Travel",
      category: "consumer",
      path: "/services/travel"
    },
    {
      title: "Cybersecurity Shield",
      description: "Zero-trust verification suites, threat detection, and automated compliance auditing.",
      icon: <Shield size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
      tag: "SOC 2 Type II",
      category: "enterprise",
      path: "/services/security"
    },
    {
      title: "5G eSIM Telecommunications",
      description: "Provision mobile data profiles and manage prepaid/postpaid recharges instantly.",
      icon: <Smartphone size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
      tag: "Connectivity",
      category: "consumer",
      path: "/services/telecom"
    },
    {
      title: "Headless E-commerce Engine",
      description: "Fast headless checkout architectures, shopping cart APIs, and custom storefront structures.",
      icon: <ShoppingCart size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&q=80",
      tag: "E-Commerce",
      category: "enterprise",
      path: "/services/ecommerce"
    },
    {
      title: "Real-Time Data Analytics",
      description: "Live pipeline telemetry metrics, business health reports, and user transaction dashboards.",
      icon: <BarChart size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      tag: "BI Portal",
      category: "enterprise",
      path: "/services/analytics"
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(s => s.category === activeCategory);

  const tabs: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Services' },
    { id: 'consumer', label: 'For You (Consumer)' },
    { id: 'financial', label: 'Financial Hub' },
    { id: 'enterprise', label: 'For Business' }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-20 min-h-screen">
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">OUR SERVICE CATALOG</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
          Everything you need to <GradientText>thrive</GradientText>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          From ordering your lunch or utility recharges to provisioning micro-service clusters and business logistics. Filter through our 12+ premium services.
        </p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-16 max-w-2xl mx-auto bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/50"
      >
        {tabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-bold transition-colors cursor-pointer select-none ${
                isActive 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200/50 dark:border-slate-850"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        layout
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={service.title}
              className="h-full"
            >
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
                imageUrl={service.imageUrl}
                tag={service.tag}
                internalPath={service.path}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
