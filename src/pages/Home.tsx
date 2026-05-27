import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CreditCard, Zap, Globe, ArrowRight, ShoppingBag,
  Utensils, Truck, Plane, Smartphone, Heart,
  Home as HomeIcon, Wifi, Monitor, Lock,
  TrendingUp, Users, Star, CheckCircle, Award, Clock, MapPin,
  ChevronDown, ChevronUp, Send, Check, Bell,
  ShoppingCart, Landmark,Leaf, ChefHat, Car, GraduationCap,ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ServiceCatalog } from '../components/ServiceCatalog';
import { ImageCard } from '../components/ui/ImageCard';
import { ChartCard } from '../components/ui/ChartCard';
import { fadeIn, staggerContainer } from '../lib/animations';

/* ───────────────────── data ───────────────────── */

const stats = [
  { label: 'Registered Users', value: '5K+', icon: Users },
  { label: 'Monthly Transactions', value: '12K+', icon: TrendingUp },
  { label: 'Partner Merchants', value: '150+', icon: Star },
  { label: 'Pan India Service', value: '28 States', icon: Landmark },
];

const comparisonPoints = [
  { feature: "Ecosystem Integration", traditional: "12+ different apps, passwords & KYC", Fiinway: "Single sign-on, unified data & security" },
  { feature: "Loyalty Points", traditional: "Scattered points, 90% expiry rate", Fiinway: "Unified Fiinway Coins (1 Coin = ₹1)" },
  { feature: "App Size on Device", traditional: "Over 2.5 GB of device storage used", Fiinway: "Fully streamlined 85 MB package size" },
  { feature: "Processing Fees", traditional: "Convenience charges & gate percentages", Fiinway: "Zero hidden charges, direct routing" },
  { feature: "Ecosystem Security", traditional: "Varying safety compliance per app", Fiinway: "SOC 2 Type II, 256-bit secure end-to-end" },
  { feature: "Customer Support", traditional: "Multiple phone lines, days of delays", Fiinway: "24/7 Unified Helpdesk with AI Assistant" }
];

const onboardingSteps = [
  { number: "01", title: "Create One Account", desc: "Download the Fiinway app and do a simple secure verification using device biometrics." },
  { number: "02", title: "Choose Modules", desc: "Configure your dashboard homepage. Hide or pin services according to your daily needs." },
  { number: "03", title: "Link Wallet & Cards", desc: "Connect your bank accounts or apply for our premium zero-annual-fee metal credit card." },
  { number: "04", title: "Scale and Earn", desc: "Transact seamlessly, earn unified cashback coins, or toggle business services for enterprise." }
];

const faqs = [
  {
    q: "Is the Fiinway Credit Card really zero-fee?",
    a: "Yes! There are no joining or hidden annual fees for the first 12 months. Starting year two, the nominal fee is waived automatically if you spend over ₹1,50,000 annually across the ecosystem."
  },
  {
    q: "How does the Food Delivery or Campus Store purchase work?",
    a: "All merchant orders, from hot food delivery to student books, are processed inside the Finway app. Transactions are backed by your digital credit line or virtual cards, meaning you checkout in a single tap without switching apps."
  },
  {
    q: "Can I manage both my consumer services and business logistics on the same app?",
    a: "Absolutely! Fiinway has a Profile Selector. Toggle between 'Personal Profile' (for food delivery, travel booking, marketplace, student credit card) and 'Enterprise Console' (for payment gateway, kitchen partner, business credit card, transport pick and drop) instantly. While competitors force you to download and manage 10+ different apps for these services, Finway brings everything under one unified dashboard."
  },
  {
    q: "What security compliance does Fiinway possess?",
    a: "Fiinway is a fully certified SOC 2 Type II enterprise platform. We adhere to PCI-DSS Level 1 compliance for payments, secure data at rest with AES-256 encryption, and run continuous automated vulnerability threat detection."
  },
  {
    q: "Where can I spend the Fiinway Coins I earn?",
    a: "Every transaction across any ecosystem service (e.g. booking travel, ordering food, recharging bills, or buying campus study materials) earns you Fiinway Coins. 1 Coin is equal to ₹1. You can redeem coins directly at checkout on any service."
  }
];

const blogs = [
  {
    title: "Scaling Fintech: How Fiinway Reached 12 Million Users",
    desc: "A deep dive into our core architectural decisions, micro-frontends structure, and real-time database clusters.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    date: "May 18, 2026",
    readTime: "5 min read",
    tag: "Fintech"
  },
  {
    title: "The Future of Hyper-local Commerce & AI Routing",
    desc: "How we optimized our unified logistics and transport pick-and-drop routing using machine learning predictive algorithms.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    date: "May 12, 2026",
    readTime: "7 min read",
    tag: "AI Logistics"
  },
  {
    title: "Designing for Dark Mode: Premium HSL Color Spaces",
    desc: "Exploring the engineering and design choices behind the Fiinway fluid theme toggle and glassmorphic micro-layouts.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80",
    date: "May 05, 2026",
    readTime: "4 min read",
    tag: "UX Design"
  }
];

const testimonials = [
  { name: 'Priya Sharma', role: 'CEO, TechVentures', text: 'Fiinway transformed our payment infrastructure. Transaction failures dropped by 90% within the first month.', rating: 5 },
  { name: 'Rahul Mehta', role: 'Founder, QuickBite', text: 'The food delivery integration is seamless. Our restaurant onboarding time went from 2 weeks to 2 days.', rating: 5 },
  { name: 'Sarah Johnson', role: 'CFO, GlobalRetail', text: 'The financial analytics dashboard gives us real-time insights that used to take our team days to compile.', rating: 5 },
];

const features = [
  { title: '99.99% Uptime', desc: 'Enterprise-grade infrastructure with global redundancy.', icon: Zap },
  { title: 'Bank-Level Security', desc: '256-bit encryption and PCI DSS Level 1 compliance.', icon: Lock },
  { title: 'Real-Time Analytics', desc: 'Live dashboards with AI-powered predictive insights.', icon: Monitor },
  { title: 'Global CDN', desc: 'Content delivered from 200+ edge locations worldwide.', icon: Wifi },
  { title: '24/7 Support', desc: 'Dedicated account managers and instant chat support.', icon: Clock },
  { title: 'Smart Routing', desc: 'AI-optimized delivery routes reducing times by 40%.', icon: MapPin },
];

/* ───────────────────── component ───────────────────── */
export const Home: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">

      {/* ════════════════ SECTION 1 — HERO ════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-10 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">India's #1 Super-App Ecosystem</span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                Everything You Need.<br />
                <span className="text-gradient bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">One Platform.</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
                From ordering dinner and booking flights to managing credit cards and scaling your enterprise — Fiinway is the all-in-one platform powering 12 million+ users across 40 countries.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="gap-2 shadow-lg shadow-indigo-500/25">
                  Get Started Free <ArrowRight size={18} />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Watch Demo
                </Button>
              </motion.div>

              {/* trust badges */}
              <motion.div variants={fadeIn} className="mt-12 flex items-center gap-6 text-slate-400 dark:text-slate-500">
                <div className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-500" /> PCI-DSS Certified</div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-500" /> SOC 2 Compliant</div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-500" /> ISO 27001</div>
              </motion.div>
            </motion.div>

            {/* floating cards in a half circle */}
            {/* floating cards in a moving half-circle carousel */}
       <div className="relative h-[620px] hidden lg:block overflow-visible">
  {/* Center glow adjusted to the right */}
  <div className="absolute top-1/2 right-[10%] translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

  <div className="absolute inset-0 flex items-center justify-end pr-20">
    <div className="relative w-[1px] h-[1px]">
      {[
        {
          id: 1,
          content: (
            <div className="w-[280px] glass-card p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white"><CreditCard size={16} /></div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Fiinway Platinum</p>
                  </div>
                </div>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">₹5,00,000</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5"><div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full w-3/5" /></div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2">5% cashback active</p>
            </div>
          )
        },
        {
          id: 2,
          content: (
            <div className="w-[280px] glass-card p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white"><Utensils size={16} /></div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Food Order</p>
                  <p className="text-[11px] text-emerald-600 font-medium">On the way</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mb-2"><Clock size={12} /> 12 mins</div>
            </div>
          )
        },
        {
          id: 3,
          content: (
            <div className="w-[280px] glass-card p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white"><Plane size={16} /></div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Flight to Dubai</p>
                  <p className="text-[11px] text-sky-600 font-medium">Confirmed</p>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 4,
          content: (
            <div className="w-[280px] glass-card p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white"><ShoppingCart size={16} /></div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">MacBook Pro</p>
                  <p className="text-[11px] text-pink-600 font-medium">Out for Delivery</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">0% EMI Active</p>
            </div>
          )
        },
        {
          id: 5,
          content: (
            <div className="w-[280px] glass-card p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white"><TrendingUp size={16} /></div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Portfolio</p>
                  <p className="text-[11px] text-emerald-600 font-medium">+12.4%</p>
                </div>
              </div>
              <p className="text-lg font-bold text-slate-900 dark:text-white">₹14,28,900</p>
            </div>
          )
        },
        {
          id: 6,
          content: (
            <div className="w-[280px] glass-card p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white"><ChefHat size={16} /></div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Kitchen Partner</p>
                  <p className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">Payout Disbursed</p>
                </div>
              </div>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">₹42,500 <span className="text-[10px] font-normal text-slate-400">earned today</span></p>
            </div>
          )
        },
        {
          id: 7,
          content: (
            <div className="w-[280px] glass-card p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-900"><Car size={16} /></div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Cab Booking</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Driver Arriving</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs mt-1">
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400 font-mono">MH-12-QQ-4412</span>
                <span className="font-bold text-slate-900 dark:text-white">OTP: 5821</span>
              </div>
            </div>
          )
        },
        {
          id: 8,
          content: (
            <div className="w-[280px] glass-card p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white"><GraduationCap size={16} /></div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Student ID Pass</p>
                    <p className="text-[10px] text-slate-400">IIT Bombay Campus</p>
                  </div>
                </div>
                <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-2 py-0.5 rounded-full">Active</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1"><div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-1 rounded-full w-4/5" /></div>
            </div>
          )
        },
        {
          id: 9,
          content: (
            <div className="w-[280px] glass-card p-4 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white"><Leaf size={16} /></div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Green Exchange</p>
                  <p className="text-[11px] text-green-600 font-medium">Offset Dashboard</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">14.2 kg CO₂ saved • 120 Credits</p>
            </div>
          )
        }
      ].map((card, i, arr) => {
        const totalCards = arr.length;
        const segmentOffset = (i / totalCards) * 360;

        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 1 }}
            animate={{
              rotate: [0 + segmentOffset, 360 + segmentOffset]
            }}
            transition={{
              duration: 36,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/2 left-1/2 w-[1px] h-[1px]"
            style={{ originX: "0px", originY: "0px" }}
          >
            <motion.div
              style={{ left: -340 }} // Adjusted to -340 for perfectly snug spacing without collisions
              className="absolute -translate-x-1/2 -translate-y-1/2"
              animate={{
                rotate: [0 - segmentOffset, -360 - segmentOffset]
              }}
              transition={{
                duration: 36,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Floating micro-animation layer */}
              <motion.div
                animate={{ y: ["-6px", "6px"] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.35
                }}
                whileHover={{ scale: 1.05, zIndex: 50 }}
              >
                {card.content}
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 2 — STATS BAR ════════════════ */}
      <section className="border-y border-slate-200/80 dark:border-slate-850 bg-slate-50/80 dark:bg-slate-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeIn} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-slate-800 flex items-center justify-center mx-auto mb-3 text-indigo-600 dark:text-indigo-400 border border-slate-100 dark:border-slate-700/50">
                  <s.icon size={22} />
                </div>
                <p className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">{s.value}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ SECTION 3 — ALL SERVICES (Dynamic Catalog) ════════════════ */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">OUR ECOSYSTEM</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              30+ Connected Services, <span className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-600">One Unified App</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Explore our comprehensive suite of services. Use the interactive filters below to discover how everything connects within the Fiinway ecosystem.
            </p>
          </motion.div>
        </div>

        <ServiceCatalog />
      </section>

      {/* ════════════════ SECTION 4 — HOW IT WORKS ════════════════ */}
      <section className="py-24 bg-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-indigo-300 text-sm font-semibold mb-4">SIMPLE PIPELINE</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">How The Ecosystem Works</h2>
            <p className="text-lg text-indigo-200/80">Follow our streamlined 4-step pipeline to integrate the super-app capabilities into your personal and business routine.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* connecting line for screens above md */}
            <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 z-0" />

            {onboardingSteps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 group-hover:scale-110 transition-transform duration-300 inline-block">{step.number}</span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-indigo-300"><Check size={16} /></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-sm text-indigo-200/70 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 5 — DAILY NEEDS (Premium Image Cards) ════════════════ */}
    <section className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-200/60 dark:border-slate-900/80 relative overflow-hidden">
      {/* Optional subtle background glow for dark mode aesthetic */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/5 dark:bg-orange-500/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeIn} 
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-wider uppercase mb-4 border border-orange-100 dark:border-orange-900/30">
            DAILY CHORES
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">
            Your Daily Chores, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-red-500">Accelerated.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Hot meals, all-in-one marketplace shopping, mobile recharges, and transport pick-and-drop services delivered to you seamlessly inside our unified ecosystem.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer} 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { title: 'Food Delivery', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', tag: '30 min delivery', icon: <Utensils size={20} /> },
            { title: 'Marketplace', img: 'https://assets.torryharrisproducts.com/home/blogs/online-marketplace/banner.png', tag: 'All-in-one store', icon: <ShoppingCart size={20} /> },
            { title: 'Recharge and Bills', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80', tag: 'Utility Pay', icon: <Smartphone size={20} /> },
            { title: 'Transport Pick & Drop', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', tag: 'Instant Pickup', icon: <Truck size={20} /> },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeInOut' } }}
              className="group relative h-[420px] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/70 bg-white dark:bg-slate-900/40 shadow-sm hover:shadow-xl hover:border-orange-500/20 dark:hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-end"
            >
              {/* Background Image Container with dynamic hover scale */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.95] dark:brightness-[0.85]" 
                />
                {/* Advanced Multi-stage Gradient Overlay for deep contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              </div>

              {/* Floating Header Tag */}
              <div className="absolute top-4 left-4 z-20">
                <span className="backdrop-blur-md bg-white/80 dark:bg-black/40 text-slate-900 dark:text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 dark:border-white/10 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  {item.tag}
                </span>
              </div>

              {/* Action Indicator Arrow */}
              <div className="absolute top-4 right-4 z-20 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center backdrop-blur-sm shadow-md">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Modern Glassmorphism Content Panel */}
              <div className="relative z-20 p-6 m-4 rounded-2xl backdrop-blur-xl bg-white/90 dark:bg-slate-950/75 border border-white/40 dark:border-slate-800/50 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                {/* Icon Wrapper with accent brand color */}
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3 font-medium">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  Access rapid delivery with automated tracking updates and instant payment features directly on your mobile handset.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

      {/* ════════════════ SECTION 6 — FINANCIAL DASHBOARD (charts) ════════════════ */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">

          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 text-sm font-semibold mb-4">
              FINANCIAL ANALYTICS
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              Real-Time Platform{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                Analytics
              </span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400">
              Interactive financial trackers showing operational capacity,
              revenue growth margins, and transaction details in real time.
            </p>
          </motion.div>

          {/* Top Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <ChartCard
              title="Platform Gross Volume"
              value="₹42.50 Cr"
              trend="+12.5% MoM"
              isPositive={true}
              data={[30, 45, 35, 60, 50, 75, 65, 90]}
            />

            <ChartCard
              title="Active Digital Wallets"
              value="1.84M Users"
              trend="+8.2% Weekly"
              isPositive={true}
              data={[20, 25, 22, 30, 35, 32, 40, 45]}
            />

            <ChartCard
              title="Average Order Value"
              value="₹2,340.50"
              trend="-3.1% (Optimized)"
              isPositive={false}
              data={[40, 38, 35, 37, 33, 30, 28, 25]}
            />
          </div>

          {/* Revenue Chart */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Annual Transaction Growth
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Platform-wide transaction scale (in crores)
                </p>
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2">
                {["1M", "6M", "1Y"].map((label) => (
                  <button
                    key={label}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Graph */}
            <div className="h-72">
              <div className="flex items-end gap-3 h-full">
                {[
                  { month: "Jan", value: 45 },
                  { month: "Feb", value: 58 },
                  { month: "Mar", value: 42 },
                  { month: "Apr", value: 71 },
                  { month: "May", value: 65 },
                  { month: "Jun", value: 80 },
                  { month: "Jul", value: 92 },
                  { month: "Aug", value: 85 },
                  { month: "Sep", value: 96 },
                  { month: "Oct", value: 88 },
                  { month: "Nov", value: 100 },
                  { month: "Dec", value: 110 },
                ].map((bar, i) => (
                  <div
                    key={i}
                    className="flex-1 h-full flex flex-col justify-end items-center"
                  >
                    {/* Animated Bar */}
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: i * 0.05,
                        ease: "easeOut",
                      }}
                      style={{
                        height: `${(bar.value / 110) * 100}%`,
                        transformOrigin: "bottom",
                      }}
                      className="w-full rounded-t-xl bg-gradient-to-t from-indigo-600 via-violet-500 to-purple-400 shadow-lg"
                    />

                    {/* Month */}
                    <span className="mt-3 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {bar.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ SECTION 7 — COMPARISON MATRIX ════════════════ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200/85 dark:border-slate-800/80">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-4">THE COMPARISON</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              How Fiinway Compares
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">See how switching to a unified ecosystem improves device storage, checkout times, and cashback efficiencies.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="overflow-x-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left border-collapse bg-white dark:bg-slate-900">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                  <th className="p-6 font-bold text-slate-800 dark:text-slate-200">Comparison Feature</th>
                  <th className="p-6 font-bold text-slate-500 dark:text-slate-400">Traditional / Standalone Apps</th>
                  <th className="p-6 font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/20">Fiinway Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {comparisonPoints.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                    <td className="p-6 font-semibold text-slate-900 dark:text-white">{item.feature}</td>
                    <td className="p-6 text-slate-500 dark:text-slate-400">{item.traditional}</td>
                    <td className="p-6 text-indigo-700 dark:text-indigo-300 font-medium bg-indigo-50/20 dark:bg-indigo-950/10">{item.Fiinway}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ SECTION 8 — CREDIT CARDS SHOWCASE ════════════════ */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.span variants={fadeIn} className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-indigo-300 text-sm font-semibold mb-4">Fiinway CARDS</motion.span>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold mb-6">
                The Card That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Rewards You</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-slate-300 mb-10 max-w-lg">Premium metal credit cards with industry-leading rewards, complimentary airport lounge access, and zero foreign transaction fees.</motion.p>

              <motion.div variants={staggerContainer} className="space-y-4">
                {['5% cashback on all food delivery & marketplace orders', 'Complimentary lounge access at 1,200+ airports', 'Zero annual fee for the first year', 'Instant EMI conversion on any purchase'].map((feat, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/30 flex items-center justify-center flex-shrink-0"><CheckCircle size={14} className="text-indigo-400" /></div>
                    <span className="text-slate-300">{feat}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeIn} className="mt-10">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 border-0 shadow-lg">Apply Now</Button>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative flex justify-center">
              <div className="relative">
                <div className="w-80 h-48 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 shadow-2xl shadow-purple-500/30 transform -rotate-6">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-8 rounded bg-yellow-300/80" />
                    <Wifi size={20} className="text-white/60 rotate-90" />
                  </div>
                  <p className="text-white/60 text-sm tracking-[0.3em] mb-2">•••• •••• •••• 4829</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-white/40 uppercase">Card Holder</p>
                      <p className="text-sm text-white font-semibold">Fiinway PLATINUM</p>
                    </div>
                    <p className="text-sm text-white/80 font-bold">VISA</p>
                  </div>
                </div>
                <div className="absolute top-6 left-6 w-80 h-48 rounded-2xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-6 shadow-2xl transform rotate-6 -z-10 border border-slate-700">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-8 rounded bg-amber-400/80" />
                    <Wifi size={20} className="text-white/40 rotate-90" />
                  </div>
                  <p className="text-white/40 text-sm tracking-[0.3em] mb-2">•••• •••• •••• 7316</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-white/30 uppercase">Card Holder</p>
                      <p className="text-sm text-white/60 font-semibold">Fiinway GOLD</p>
                    </div>
                    <p className="text-sm text-white/50 font-bold">VISA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 9 — TRAVEL BOOKING ════════════════ */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 text-sm font-semibold mb-4">TRAVEL & BOOKING</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              Explore the World with <span className="text-gradient bg-gradient-to-r from-sky-500 to-blue-600">Fiinway Travel</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Flights, hotels, holidays & exclusive lounge access — all at unbeatable prices.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Travel Booking', desc: 'Plan entire itineraries, book flights, and reserve train tickets seamlessly inside a single unified app.', icon: <Plane size={20} />, img: 'https://travelbeetourism.com/images/flightticket.jpg?w=600&q=80' },
              { title: 'Hotels', desc: 'Book verified budget stays to luxury resorts with exclusive loyalty cashbacks in the same platform.', icon: <HomeIcon size={20} />, img: 'https://img.magnific.com/premium-vector/hotel-building-isolated-city-street-vector-illustration-flat-cartoon_101884-680.jpg?semt=ais_hybrid&w=740&q=80' },
              { title: 'Sharing Cab (Outstation)', desc: 'Book long-distance shared inter-city cabs for weekend travels at deeply discounted rates.', icon: <Globe size={20} />, img: 'https://media.istockphoto.com/id/1141727347/vector/yellow-taxi-order-or-share-flat-line-illustration.jpg?s=612x612&w=0&k=20&c=a9d6IIhBYQpydgG-tabE7f25bKi_7nVdzO-BSRheVNc=' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn}>
                <ImageCard
                  title={item.title}
                  description={item.desc}
                  imageUrl={item.img}
                  icon={item.icon}
                  tag="Best Prices"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ SECTION 10 — FAQ ACCORDION ════════════════ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200/85 dark:border-slate-800/80">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">QUESTIONS</span>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Everything you need to know about setting up wallets, cashbacks, and deliveries.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="glass-card overflow-hidden border border-slate-200 dark:border-slate-800"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="font-bold text-slate-900 dark:text-white text-base md:text-lg">{faq.q}</span>
                    <span className="text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-800/60"
                      >
                        <p className="p-6 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 11 — FEATURES GRID ════════════════ */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-4">WHY Fiinway</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              Built for <span className="text-gradient bg-gradient-to-r from-emerald-500 to-teal-500">Scale & Security</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Enterprise-grade infrastructure that powers millions of transactions every single day.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeIn} className="glass-card p-8 group hover:shadow-2xl transition-shadow duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/20">
                  <f.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ SECTION 12 — LATEST INSIGHTS (News Grid) ════════════════ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200/85 dark:border-slate-800/80">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4">LATEST NEWS</span>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Ecosystem News & Insights</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Keep up to date with product releases, engineering write-ups, and technology breakthroughs.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <motion.article
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="glass-card overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col h-full group cursor-pointer hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">{blog.tag}</span>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-white dark:bg-slate-900">
                  <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500 mb-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">{blog.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">{blog.desc}</p>
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 mt-auto">
                    Read Post &rarr;
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 13 — TESTIMONIALS ════════════════ */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-sm font-semibold mb-4">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              Loved by <span className="text-gradient bg-gradient-to-r from-amber-500 to-orange-500">Millions</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeIn} className="glass-card p-8">
                <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={18} className="text-amber-400 fill-amber-400" />)}</div>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">{t.name[0]}</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ SECTION 14 — PARTNER BRANDS ════════════════ */}
      <section className="py-16 border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-10">Trusted by leading brands worldwide</motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-wrap justify-center items-center gap-12">
            {['Microsoft', 'Google', 'Amazon', 'Visa', 'Mastercard', 'Samsung'].map((brand, i) => (
              <motion.div key={i} variants={fadeIn} className="text-2xl font-bold text-slate-300 dark:text-slate-700 hover:text-slate-500 dark:hover:text-slate-500 transition-colors cursor-default">{brand}</motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ SECTION 15 — MOBILE APP CTA ════════════════ */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.span variants={fadeIn} className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-600 dark:text-fuchsia-400 text-sm font-semibold mb-4">MOBILE APP</motion.span>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                Your Whole Life, <span className="text-gradient bg-gradient-to-r from-fuchsia-500 to-pink-500">In Your Pocket</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">Download the Fiinway app and access all 12+ services from a single interface. Available on iOS and Android.</motion.p>

              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="flex items-center gap-3 px-5 py-3 bg-black rounded-xl cursor-pointer hover:bg-slate-800 transition-colors">
                  <div className="text-white">
                    <p className="text-[10px] leading-none">Download on the</p>
                    <p className="text-lg font-semibold leading-tight">App Store</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-black rounded-xl cursor-pointer hover:bg-slate-800 transition-colors">
                  <div className="text-white">
                    <p className="text-[10px] leading-none">Get it on</p>
                    <p className="text-lg font-semibold leading-tight">Google Play</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-2"><Award size={16} className="text-amber-500" /><span className="text-sm text-slate-600 dark:text-slate-400">4.8★ Rating</span></div>
                <div className="flex items-center gap-2"><Users size={16} className="text-indigo-500" /><span className="text-sm text-slate-600 dark:text-slate-400">12M+ Downloads</span></div>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex justify-center">
              <div className="relative w-64 h-[500px] bg-slate-900 rounded-[3rem] border-4 border-slate-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-8 bg-slate-900 flex justify-center items-end pb-1">
                  <div className="w-24 h-4 bg-black rounded-b-2xl" />
                </div>
                <div className="mt-8 p-4 h-full bg-gradient-to-b from-indigo-500 to-purple-600 flex flex-col items-center pt-12">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-4"><Zap size={32} className="text-white" /></div>
                  <p className="text-white font-bold text-xl mb-1">Fiinway</p>
                  <p className="text-white/60 text-xs mb-8">Ecosystem</p>
                  <div className="grid grid-cols-3 gap-3 w-full">
                    {[Utensils, ShoppingBag, CreditCard, Plane, Heart, Truck].map((Icon, i) => (
                      <div key={i} className="w-full aspect-square rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                        <Icon size={20} className="text-white" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 16 — NEWSLETTER SIGNUP ════════════════ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200/85 dark:border-slate-800/80">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="w-16 h-16 rounded-3xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mx-auto mb-6 border border-slate-100 dark:border-slate-800">
              <Bell size={24} className="animate-bounce" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Stay Connected with Fiinway</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">Get monthly product updates, developer logs, and priority invites to card distributions directly to your inbox.</p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form
                  key="subscribe-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-grow px-5 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all"
                  />
                  <Button type="submit" className="gap-2 shrink-0 py-3.5 px-6 shadow-md">
                    Subscribe <Send size={14} />
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="subscribe-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm font-semibold max-w-md mx-auto flex items-center justify-center gap-2"
                >
                  <CheckCircle size={18} /> Subscribed Successfully! We will keep you updated.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ SECTION 17 — FINAL CTA ════════════════ */}
      <section className="py-6 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 shadow-2xl">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-[60px]" />
            </div>
            <div className="relative z-10 p-12 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Ready to Experience the<br />Future of Everything?
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Join 12 million+ users who trust Fiinway for their daily needs and business operations. Start for free, scale without limits.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-white hover:bg-slate-100 border-0 shadow-lg font-bold">Create Free Account</Button>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
                  Talk to Sales <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-12" />
    </div>
  );
};
