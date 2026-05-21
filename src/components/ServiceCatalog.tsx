import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, Wallet, Percent, Banknote, Coins, Briefcase, GraduationCap, 
  ArrowLeftRight, PiggyBank, Cpu, Heart, Activity, Stethoscope, ShoppingCart, 
  Plane, Hotel, Utensils, Store, ChefHat, Leaf, Smartphone, Car, Bike, Truck, 
  Users, BookOpen, Globe
} from 'lucide-react';
import { staggerContainer } from '../lib/animations';

type Category = 'all' | 'financial' | 'transport' | 'travel' | 'food' | 'healthcare' | 'shopping' | 'utilities' | 'enterprise';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  tag: string;
  category: Category;
  path: string;
  color: string; // tailwind gradient classes
}

const allServices: ServiceItem[] = [
  // ── Financial Hub ──────────────────────────────────────────────
  {
    title: "Digital Credit Line",
    description: "Instant digital credit limit with real-time biometric verification and flexible dynamic repayment cycles.",
    icon: <CreditCard size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tag: "Credit", category: "financial", path: "/services/digital-credit-line",
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "0% Interest Credit",
    description: "Exclusive zero-interest credit line up to 45 days on partner merchant networks and marketplace checkouts.",
    icon: <Percent size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=600&q=80",
    tag: "0% APR", category: "financial", path: "/services/zero-interest-credit",
    color: "from-violet-500 to-indigo-600"
  },
  {
    title: "Personal Loan",
    description: "Hassle-free personal loans up to ₹5,00,000 with customized multi-year tenure options and low interest rates.",
    icon: <Banknote size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
    tag: "Lending", category: "financial", path: "/services/personal-loan",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Instant Virtual Loan",
    description: "Fully automated virtual loan underwriting and disbursal straight into your Finway wallet in under 120 seconds.",
    icon: <Coins size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80",
    tag: "Virtual Loan", category: "financial", path: "/services/instant-virtual-loan",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Immediate Credit 15k",
    description: "Quick emergency micro-loans of ₹15,000 for unexpected bills, with single-tap instant approval.",
    icon: <Wallet size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=600&q=80",
    tag: "Micro Credit", category: "financial", path: "/services/immediate-credit-15k",
    color: "from-fuchsia-500 to-purple-600"
  },
  {
    title: "Virtual Credit 50k",
    description: "Instantly generated digital credit limit of ₹50,000 to shop online safely with rotating CVV numbers.",
    icon: <CreditCard size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?w=600&q=80",
    tag: "Virtual Credit", category: "financial", path: "/services/virtual-credit-50k",
    color: "from-indigo-400 to-cyan-600"
  },
  {
    title: "Business Credit Card",
    description: "Optimize corporate spending with premium metal commercial cards offering automated expense reporting.",
    icon: <Briefcase size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    tag: "Corporate", category: "enterprise", path: "/services/business-credit-card",
    color: "from-slate-600 to-slate-800"
  },
  {
    title: "Student Credit Card",
    description: "Build credit history early with tailored student cards featuring zero joining fees and study material rewards.",
    icon: <GraduationCap size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    tag: "Student First", category: "financial", path: "/services/student-credit-card",
    color: "from-teal-500 to-emerald-600"
  },
  {
    title: "International Student Card",
    description: "Multi-currency travel and credit card for students abroad, with waived international transaction markups.",
    icon: <Globe size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80",
    tag: "Global Study", category: "financial", path: "/services/international-student-card",
    color: "from-sky-500 to-blue-600"
  },
  {
    title: "Transfer Cashback",
    description: "Receive instant 1% cashback directly in your unified wallet on all domestic peer-to-peer bank transfers.",
    icon: <ArrowLeftRight size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1556742402-f86a9fb0e0e0?w=600&q=80",
    tag: "Cashback Reward", category: "financial", path: "/services/transfer-cashback",
    color: "from-green-500 to-teal-600"
  },
  {
    title: "Saving Increment",
    description: "Automated spare-change rounding on all daily transactions, invested directly in gold or liquid funds.",
    icon: <PiggyBank size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f9040?w=600&q=80",
    tag: "Savings", category: "financial", path: "/services/saving-increment",
    color: "from-emerald-500 to-green-600"
  },
  {
    title: "Scholarship Platform",
    description: "Apply for corporate-sponsored, verified educational grant and scholarship pipelines directly.",
    icon: <BookOpen size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1511203466129-824e631920d7?w=600&q=80",
    tag: "Grants & Study", category: "financial", path: "/services/scholarship-platform",
    color: "from-amber-500 to-orange-600"
  },
  // ── Enterprise ─────────────────────────────────────────────────
  {
    title: "Payment Gateway",
    description: "Robust checkout integration supporting UPI, NetBanking, and credit/debit cards with low merchant MDR.",
    icon: <Cpu size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tag: "Enterprise Pay", category: "enterprise", path: "/services/payment-gateway",
    color: "from-slate-700 to-indigo-900"
  },
  {
    title: "Kitchen Partner",
    description: "B2B commercial kitchen setups, supply chains, and inventory management for food creators.",
    icon: <ChefHat size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
    tag: "Partner B2B", category: "enterprise", path: "/services/kitchen-partner",
    color: "from-orange-600 to-red-700"
  },
  // ── Healthcare ─────────────────────────────────────────────────
  {
    title: "Healthcare Cashback",
    description: "Earn up to 10% instant rebate on medicines, clinical lab test bookings, and hospital bills.",
    icon: <Heart size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    tag: "Wellness Promo", category: "healthcare", path: "/services/healthcare-cashback",
    color: "from-rose-500 to-pink-600"
  },
  {
    title: "Care Credit Card",
    description: "Flexible, zero-cost health credit card designed to finance complex medical procedures and surgeries.",
    icon: <Activity size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    tag: "Medical Credit", category: "healthcare", path: "/services/care-credit-card",
    color: "from-red-500 to-rose-600"
  },
  {
    title: "OPD Credit Card",
    description: "Specialized card offering instant cash-backed allowances for out-patient diagnostics and consultations.",
    icon: <Stethoscope size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&q=80",
    tag: "OPD Credit", category: "healthcare", path: "/services/opd-credit-card",
    color: "from-pink-500 to-red-500"
  },
  {
    title: "Medicash Card",
    description: "Tax-saving pre-paid health benefits card to purchase pharma goods and general wellness checks.",
    icon: <Activity size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1582719478185-1ba4c6ce0e6a?w=600&q=80",
    tag: "Prepaid Health", category: "healthcare", path: "/services/medicash-card",
    color: "from-fuchsia-500 to-rose-600"
  },
  // ── Travel & Stays ─────────────────────────────────────────────
  {
    title: "Travel Booking",
    description: "Plan entire itineraries, book national and international flights, and reserve train tickets seamlessly.",
    icon: <Plane size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&q=80",
    tag: "Travel Portal", category: "travel", path: "/services/travel-booking",
    color: "from-sky-500 to-blue-600"
  },
  {
    title: "Hotels",
    description: "Book verified budget stays to luxury resorts with exclusive ecosystem loyalty cashbacks.",
    icon: <Hotel size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    tag: "Hotel Bookings", category: "travel", path: "/services/hotels",
    color: "from-blue-500 to-cyan-600"
  },
  // ── Rides & Transport ──────────────────────────────────────────
  {
    title: "Cab Ride",
    description: "Instantly hail partner point-to-point city cabs with predictable, surge-free pricing models.",
    icon: <Car size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1519183071298-a2962d1d8b1d?w=600&q=80",
    tag: "Hail Cab", category: "transport", path: "/services/cab-ride",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Bike Ride",
    description: "Quick, micro-mobility bike sharing networks for navigating heavy city traffic congestion.",
    icon: <Bike size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1502776679549-b1d2f9a3c7b4?w=600&q=80",
    tag: "Micro Mobility", category: "transport", path: "/services/bike-ride",
    color: "from-lime-500 to-green-600"
  },
  {
    title: "Transport Pick and Drop",
    description: "Reliable luggage, freight, or business inventory pick-and-drop logistics with active tracking.",
    icon: <Truck size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    tag: "Logistics Hub", category: "transport", path: "/services/transport-pick-drop",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Sharing Cab",
    description: "Environmentally friendly, affordable daily carpools for regular office routes.",
    icon: <Users size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1588345938223-e5d0e90a2e85?w=600&q=80",
    tag: "Ride Pool", category: "transport", path: "/services/sharing-cab",
    color: "from-teal-500 to-cyan-600"
  },
  {
    title: "Sharing Cab (Outstation)",
    description: "Book long-distance shared inter-city cabs for weekend travels at deeply discounted rates.",
    icon: <Car size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1533106418989-88406c7cc4e6?w=600&q=80",
    tag: "Outstation Pool", category: "transport", path: "/services/sharing-cab-outstation",
    color: "from-indigo-500 to-blue-600"
  },
  // ── Food & Delivery ────────────────────────────────────────────
  {
    title: "Food Delivery",
    description: "Order from top-tier local restaurants with 30-minute hot delivery guarantee.",
    icon: <Utensils size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    tag: "Food Delivery", category: "food", path: "/services/food-delivery",
    color: "from-orange-500 to-red-500"
  },
  // ── Shopping & Campus ──────────────────────────────────────────
  {
    title: "Marketplace",
    description: "Shop electronics, fashion, and home goods directly inside the unified Finway application.",
    icon: <ShoppingCart size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d296e?w=600&q=80",
    tag: "All-in-One Mall", category: "shopping", path: "/services/marketplace",
    color: "from-violet-500 to-purple-600"
  },
  {
    title: "Campus Store",
    description: "Student portal for textbooks, reference guides, devices, and campus merchandise.",
    icon: <Store size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80",
    tag: "Campus Tech", category: "shopping", path: "/services/campus-store",
    color: "from-amber-500 to-orange-600"
  },
  // ── Utilities & Green ──────────────────────────────────────────
  {
    title: "Recharge and Bills",
    description: "Instant mobile talktime recharges, broadband subscriptions, gas, and power utility bills.",
    icon: <Smartphone size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
    tag: "Utility Pay", category: "utilities", path: "/services/recharge-bills",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Green Exchange",
    description: "Trade eco-conscious carbon credits and redeem points by supporting renewable projects.",
    icon: <Leaf size={22} />,
    imageUrl: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=600&q=80",
    tag: "Eco Exchange", category: "utilities", path: "/services/green-exchange",
    color: "from-green-500 to-emerald-600"
  },
];

const tabs: { id: Category; label: string; emoji: string }[] = [
  { id: 'all',        label: 'All Services',       emoji: '✦' },
  { id: 'financial',  label: 'Financial Hub',       emoji: '💳' },
  { id: 'transport',  label: 'Rides & Transport',   emoji: '🚕' },
  { id: 'travel',     label: 'Travel & Stays',      emoji: '✈️' },
  { id: 'food',       label: 'Food & Delivery',     emoji: '🍔' },
  { id: 'healthcare', label: 'Healthcare',           emoji: '🏥' },
  { id: 'shopping',   label: 'Shopping & Campus',   emoji: '🛍️' },
  { id: 'utilities',  label: 'Utilities & Green',   emoji: '⚡' },
  { id: 'enterprise', label: 'Enterprise',           emoji: '🏢' },
];

const categoryMeta: Record<Category, { title: string; subtitle: string; gradient: string }> = {
  all:        { title: 'Everything in One Place',      subtitle: 'While competitors have a different app for each service, Finway unifies all 30+ into one.', gradient: 'from-indigo-600 via-purple-600 to-pink-500' },
  financial:  { title: 'Financial Hub',                subtitle: 'Credit lines, loans, cards, cashbacks, and savings — your complete financial toolkit.', gradient: 'from-indigo-600 to-purple-600' },
  transport:  { title: 'Rides & Transport',            subtitle: 'City cabs, bike rides, shared pools, and outstation logistics — all in one tap.', gradient: 'from-yellow-500 to-orange-600' },
  travel:     { title: 'Travel & Stays',               subtitle: 'Flights, hotels, and outstation trips booked seamlessly without leaving the app.', gradient: 'from-sky-500 to-blue-600' },
  food:       { title: 'Food & Delivery',              subtitle: 'Hot meals from top restaurants delivered to your door in 30 minutes.', gradient: 'from-orange-500 to-red-500' },
  healthcare: { title: 'Healthcare',                   subtitle: 'From pharmacy cashbacks to medical credit cards — stay covered, always.', gradient: 'from-rose-500 to-pink-600' },
  shopping:   { title: 'Shopping & Campus',            subtitle: 'Marketplace for everyone and a dedicated campus store for students.', gradient: 'from-violet-500 to-purple-600' },
  utilities:  { title: 'Utilities & Green',            subtitle: 'Pay bills, recharge plans, and earn green credits for eco-friendly choices.', gradient: 'from-green-500 to-teal-600' },
  enterprise: { title: 'Enterprise Solutions',         subtitle: 'Payment gateways and B2B kitchen setups built to scale your business.', gradient: 'from-slate-600 to-indigo-800' },
};

export const ServiceCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredServices = activeCategory === 'all'
    ? allServices
    : allServices.filter(s => s.category === activeCategory);

  const meta = categoryMeta[activeCategory];

  return (
    <div className="w-full">
      {/* ── Filter Tabs ── */}
      <div className="sticky top-[76px] z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`relative flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <span>{tab.emoji}</span>
                  <span>{tab.label}</span>
                  {isActive && (
                    <span className="ml-1 px-1.5 py-0.5 rounded-md bg-white/20 text-[11px] font-bold">
                      {filteredServices.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Category Header ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="container mx-auto px-4 md:px-6 pt-12 pb-8"
        >
          <div className={`inline-flex items-center gap-3 mb-3`}>
            <span className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${meta.gradient} bg-clip-text text-transparent`}>
              {meta.title}
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{meta.subtitle}</p>
        </motion.div>
      </AnimatePresence>

      {/* ── Service Grid ── */}
      <div className="container mx-auto px-4 md:px-6 pb-24">
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.title}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25 }}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {/* Tag badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase">
                    {service.tag}
                  </span>
                  {/* Icon bubble */}
                  <div className={`absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                    {service.icon}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-500 ease-out`} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredServices.length === 0 && (
          <div className="text-center py-24 text-slate-400">
            <p className="text-6xl mb-4">🔍</p>
            <p className="text-xl font-semibold">No services in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};
