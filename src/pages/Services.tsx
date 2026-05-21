import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, Wallet, Percent, Banknote, Coins, Briefcase, GraduationCap, 
  ArrowLeftRight, PiggyBank, Cpu, Heart, Activity, Stethoscope, ShoppingCart, 
  Plane, Hotel, Utensils, Store, ChefHat, Leaf, Smartphone, Car, Bike, Truck, 
  Users, BookOpen
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
      title: "Digital Credit Line",
      description: "Instant digital credit limit with real-time biometric verification and flexible dynamic repayment cycles.",
      icon: <CreditCard size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      tag: "Credit",
      category: "financial",
      path: "/services/digital-credit-line"
    },
    {
      title: "0% Interest Credit",
      description: "Exclusive zero-interest credit line up to 45 days on partner merchant networks and marketplace checkouts.",
      icon: <Percent size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=600&q=80",
      tag: "0% APR",
      category: "financial",
      path: "/services/zero-interest-credit"
    },
    {
      title: "Personal Loan",
      description: "Hassle-free personal loans up to ₹5,00,000 with customized multi-year tenure options and low interest rates.",
      icon: <Banknote size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
      tag: "Lending",
      category: "financial",
      path: "/services/personal-loan"
    },
    {
      title: "Instant Virtual Loan",
      description: "Fully automated virtual loan underwriting and disbursal straight into your Finway wallet in under 120 seconds.",
      icon: <Coins size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80",
      tag: "Virtual Loan",
      category: "financial",
      path: "/services/instant-virtual-loan"
    },
    {
      title: "Immediate Credit 15k",
      description: "Quick emergency micro-loans of ₹15,000 for unexpected bills, with single-tap instant approval.",
      icon: <Wallet size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=600&q=80",
      tag: "Micro Credit",
      category: "financial",
      path: "/services/immediate-credit-15k"
    },
    {
      title: "Virtual Credit 50k",
      description: "Instantly generated digital credit limit of ₹50,000 to shop online safely with rotating CVV numbers.",
      icon: <CreditCard size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?w=600&q=80",
      tag: "Virtual Credit",
      category: "financial",
      path: "/services/virtual-credit-50k"
    },
    {
      title: "Business Credit Card",
      description: "Optimize corporate spending with premium metal commercial cards offering automated expense reporting.",
      icon: <Briefcase size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      tag: "Corporate",
      category: "enterprise",
      path: "/services/business-credit-card"
    },
    {
      title: "Student Credit Card",
      description: "Build credit history early with tailored student cards featuring zero joining fees and study material rewards.",
      icon: <GraduationCap size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
      tag: "Student First",
      category: "financial",
      path: "/services/student-credit-card"
    },
    {
      title: "International Student Card",
      description: "Multi-currency travel and credit card for students abroad, with waived international transaction markups.",
      icon: <GraduationCap size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80",
      tag: "Global Study",
      category: "financial",
      path: "/services/international-student-card"
    },
    {
      title: "Transfer Cashback",
      description: "Receive instant 1% cashback directly in your unified wallet on all domestic peer-to-peer bank transfers.",
      icon: <ArrowLeftRight size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1556742402-f86a9fb0e0e0?w=600&q=80",
      tag: "Cashback Reward",
      category: "financial",
      path: "/services/transfer-cashback"
    },
    {
      title: "Saving Increment",
      description: "Automated spare-change rounding on all daily transactions, invested directly in gold or liquid funds.",
      icon: <PiggyBank size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f9040?w=600&q=80",
      tag: "Savings",
      category: "financial",
      path: "/services/saving-increment"
    },
    {
      title: "Payment Gateway",
      description: "Robust checkout integration supporting UPI, NetBanking, and credit/debit cards with low merchant MDR.",
      icon: <Cpu size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      tag: "Enterprise Pay",
      category: "enterprise",
      path: "/services/payment-gateway"
    },
    {
      title: "Healthcare Cashback",
      description: "Earn up to 10% instant rebate on medicines, clinical lab test bookings, and hospital bills.",
      icon: <Heart size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
      tag: "Wellness Promo",
      category: "financial",
      path: "/services/healthcare-cashback"
    },
    {
      title: "Care Credit Card",
      description: "Flexible, zero-cost health credit card designed to finance complex medical procedures and surgeries.",
      icon: <Activity size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
      tag: "Medical Credit",
      category: "financial",
      path: "/services/care-credit-card"
    },
    {
      title: "OPD Credit Card",
      description: "Specialized card offering instant cash-backed allowances for out-patient diagnostics and consultations.",
      icon: <Stethoscope size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&q=80",
      tag: "OPD Credit",
      category: "financial",
      path: "/services/opd-credit-card"
    },
    {
      title: "Medicash Card",
      description: "Tax-saving pre-paid health benefits card to purchase pharma goods and general wellness checks.",
      icon: <Activity size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1582719478185-1ba4c6ce0e6a?w=600&q=80",
      tag: "Prepaid Health",
      category: "financial",
      path: "/services/medicash-card"
    },
    {
      title: "Marketplace",
      description: "Shop electronics, fashion, and home goods directly inside the unified Finway application.",
      icon: <ShoppingCart size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d296e?w=600&q=80",
      tag: "All-in-One Mall",
      category: "consumer",
      path: "/services/marketplace"
    },
    {
      title: "Travel Booking",
      description: "Plan entire itineraries, book national and international flights, and reserve train tickets seamlessly.",
      icon: <Plane size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&q=80",
      tag: "Travel Portal",
      category: "consumer",
      path: "/services/travel-booking"
    },
    {
      title: "Hotels",
      description: "Book verified budget stays to luxury resorts with exclusive ecosystem loyalty cashbacks.",
      icon: <Hotel size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
      tag: "Hotel Bookings",
      category: "consumer",
      path: "/services/hotels"
    },
    {
      title: "Food Delivery",
      description: "Order from top-tier local restaurants with 30-minute hot delivery guarantee.",
      icon: <Utensils size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
      tag: "Food Delivery",
      category: "consumer",
      path: "/services/food-delivery"
    },
    {
      title: "Campus Store",
      description: "Student portal for textbooks, reference guides, devices, and campus merchandise.",
      icon: <Store size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80",
      tag: "Campus Tech",
      category: "consumer",
      path: "/services/campus-store"
    },
    {
      title: "Kitchen Partner",
      description: "B2B commercial kitchen setups, supply chains, and inventory management for food creators.",
      icon: <ChefHat size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
      tag: "Partner B2B",
      category: "enterprise",
      path: "/services/kitchen-partner"
    },
    {
      title: "Green Exchange",
      description: "Trade eco-conscious carbon credits and redeem points by supporting renewable projects.",
      icon: <Leaf size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=600&q=80",
      tag: "Eco Exchange",
      category: "consumer",
      path: "/services/green-exchange"
    },
    {
      title: "Recharge and Bills",
      description: "Instant mobile talktime recharges, broadband subscriptions, gas, and power utility bills.",
      icon: <Smartphone size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
      tag: "Utility Pay",
      category: "consumer",
      path: "/services/recharge-bills"
    },
    {
      title: "Cab Ride",
      description: "Instantly hail partner point-to-point city cabs with predictable, surge-free pricing models.",
      icon: <Car size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1519183071298-a2962d1d8b1d?w=600&q=80",
      tag: "Hail Cab",
      category: "consumer",
      path: "/services/cab-ride"
    },
    {
      title: "Bike Ride",
      description: "Quick, micro-mobility bike sharing networks for navigating heavy city traffic congestion.",
      icon: <Bike size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1502776679549-b1d2f9a3c7b4?w=600&q=80",
      tag: "Micro Mobility",
      category: "consumer",
      path: "/services/bike-ride"
    },
    {
      title: "Transport Pick and Drop",
      description: "Reliable luggage, freight, or business inventory pick-and-drop logistics services with active tracking.",
      icon: <Truck size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      tag: "Logistics Hub",
      category: "consumer",
      path: "/services/transport-pick-drop"
    },
    {
      title: "Sharing Cab",
      description: "Environmentally friendly, affordable daily carpools for regular office routes.",
      icon: <Users size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1588345938223-e5d0e90a2e85?w=600&q=80",
      tag: "Ride Pool",
      category: "consumer",
      path: "/services/sharing-cab"
    },
    {
      title: "Sharing Cab (Outstation)",
      description: "Book long-distance shared inter-city cabs for weekend travels at deeply discounted rates.",
      icon: <Car size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1533106418989-88406c7cc4e6?w=600&q=80",
      tag: "Outstation Pool",
      category: "consumer",
      path: "/services/sharing-cab-outstation"
    },
    {
      title: "Scholarship Platform",
      description: "Apply for corporate-sponsored, verified educational grant and scholarship pipelines directly.",
      icon: <BookOpen size={22} />,
      imageUrl: "https://images.unsplash.com/photo-1511203466129-824e631920d7?w=600&q=80",
      tag: "Grants & Study",
      category: "financial",
      path: "/services/scholarship-platform"
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
          From ordering food, recharging bills, booking travel, to managing credit lines – all in one place. Competitors split these services across multiple separate apps; Finway unifies them.
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
