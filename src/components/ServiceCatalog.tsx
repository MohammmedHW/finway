import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CreditCard, Wallet, Percent, Banknote, Coins, Briefcase, GraduationCap,
  ArrowLeftRight, PiggyBank, Cpu, Heart, Activity, Stethoscope, ShoppingCart,
  Plane, Hotel, Utensils, Store, ChefHat, Leaf, Smartphone, Car, Bike, Truck,
  Users, BookOpen, Globe, QrCode, Zap, Tv, Building2, Building, Cross,
  Pill, Package, Send, TrendingUp, Star, RefreshCcw, CircleDollarSign,
  CalendarDays, ReceiptText, ShoppingBag, Repeat, BadgePercent, Landmark
} from 'lucide-react';
import { staggerContainer } from '../lib/animations';

/* ─────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────── */
type Category =
  | 'financial'
  | 'payment'
  | 'healthcare'
  | 'ecommerce'
  | 'travel'
  | 'student'
  | 'merchant'
  | 'lifestyle';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  tag: string;
  category: Category;
  subCategory: string;
  color: string;
  path: string;
}

/* ─────────────────────────────────────────────────
   ALL SERVICES DATA
───────────────────────────────────────────────── */
const allServices: ServiceItem[] = [

  // ══════════════════════════════════════════════
  // 1. FINANCIAL & CREDIT SERVICES
  // ══════════════════════════════════════════════

  // 💳 Credit & Loan Solutions
  {
    title: 'Digital Credit Line',
    description: 'Get instant access to a digital credit limit up to ₹5 Lakh with real-time biometric verification and flexible repayment cycles.',
    icon: <CreditCard size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    tag: 'Up to ₹5 Lakh', category: 'financial', subCategory: '💳 Credit & Loan Solutions',
    color: 'from-indigo-500 to-purple-600', path: '/services/digital-credit-line',
  },
  {
    title: 'Zero-Interest Credit',
    description: 'Exclusive 0% interest credit line valid up to 45 days across partner merchant networks and online checkouts.',
    icon: <Percent size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=600&q=80',
    tag: '0% APR', category: 'financial', subCategory: '💳 Credit & Loan Solutions',
    color: 'from-violet-500 to-indigo-600', path: '/services/zero-interest-credit',
  },
  {
    title: 'Personal Loan',
    description: 'Hassle-free personal loans up to ₹5,00,000 with customized tenure options, low interest rates, and zero hidden charges.',
    icon: <Banknote size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80',
    tag: 'Quick Disbursal', category: 'financial', subCategory: '💳 Credit & Loan Solutions',
    color: 'from-blue-500 to-indigo-600', path: '/services/personal-loan',
  },
  {
    title: 'Instant Virtual Loan',
    description: 'Fully automated loan underwriting and disbursal straight into your Fiinway wallet in under 120 seconds.',
    icon: <Coins size={20} />,
    imageUrl: 'https://www.homecredit.co.in/sites/default/files/2025-03/instant-personal-loan-in-3-easy-steps-750x800.webp',
    tag: 'In 120 Seconds', category: 'financial', subCategory: '💳 Credit & Loan Solutions',
    color: 'from-purple-500 to-pink-600', path: '/services/instant-virtual-loan',
  },
  {
    title: 'Immediate Credit ₹15,000',
    description: 'Emergency micro-credit of ₹15,000 for unexpected expenses, with single-tap instant approval and no paperwork.',
    icon: <Wallet size={20} />,
    imageUrl: 'https://blogassets.airtel.in/wp-content/uploads/2026/01/Website-Banner_PL_15000.png',
    tag: 'Emergency Credit', category: 'financial', subCategory: '💳 Credit & Loan Solutions',
    color: 'from-fuchsia-500 to-purple-600', path: '/services/immediate-credit-15k',
  },
  {
    title: 'Virtual Credit ₹50,000',
    description: 'Instantly generated digital credit limit of ₹50,000 for safe online shopping with rotating CVV protection.',
    icon: <CreditCard size={20} />,
    imageUrl: 'https://backend.quadient.com/files/default/2022-08/image-virtual-credit-cards-your-business-everything-you-need-to-know.png',
    tag: '₹50K Limit', category: 'financial', subCategory: '💳 Credit & Loan Solutions',
    color: 'from-indigo-400 to-cyan-600', path: '/services/virtual-credit-50k',
  },

  // 🏦 Cards & Credit Products
  {
    title: 'Business Credit Card',
    description: 'Premium metal commercial cards with automated expense reporting, high credit limits, and exclusive corporate rewards.',
    icon: <Briefcase size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    tag: 'Corporate', category: 'financial', subCategory: '🏦 Cards & Credit Products',
    color: 'from-slate-600 to-slate-800', path: '/services/business-credit-card',
  },
  {
    title: 'Student Credit Card',
    description: 'Build credit history early with zero joining fees, study material rewards, and student-exclusive cashback offers.',
    icon: <GraduationCap size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
    tag: 'Student First', category: 'financial', subCategory: '🏦 Cards & Credit Products',
    color: 'from-teal-500 to-emerald-600', path: '/services/student-credit-card',
  },
  {
    title: 'International Student Card',
    description: 'Multi-currency travel & credit card for students abroad with zero international transaction markup and global acceptance.',
    icon: <Globe size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80',
    tag: 'Global Study', category: 'financial', subCategory: '🏦 Cards & Credit Products',
    color: 'from-sky-500 to-blue-600', path: '/services/international-student-card',
  },

  // 💸 Cashback & Savings
  {
    title: '1% Transfer Cashback',
    description: 'Earn instant 1% cashback directly into your Fiinway wallet on every domestic peer-to-peer bank transfer.',
    icon: <ArrowLeftRight size={20} />,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDWMSMa9NwIH97rW7m6GkaQoSxKb97L0Lmw&s',
    tag: 'Instant Cashback', category: 'financial', subCategory: '💸 Cashback & Savings',
    color: 'from-green-500 to-teal-600', path: '/services/transfer-cashback',
  },
  {
    title: 'Savings Increment Benefits',
    description: 'Automated spare-change rounding on all daily transactions, invested directly into gold or liquid mutual funds.',
    icon: <PiggyBank size={20} />,
    imageUrl: 'https://www.axis.bank.in/images/default-source/blog/jpeg/salary-increment.jpg',
    tag: 'Auto-Save', category: 'financial', subCategory: '💸 Cashback & Savings',
    color: 'from-emerald-500 to-green-600', path: '/services/saving-increment',
  },
  {
    title: 'Daily Collection Benefits',
    description: 'Earn tiered reward points and cashback on every daily transaction. The more you transact, the more you earn.',
    icon: <CalendarDays size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    tag: 'Daily Rewards', category: 'financial', subCategory: '💸 Cashback & Savings',
    color: 'from-amber-500 to-yellow-600', path: '/services/daily-collection-benefits',
  },
  {
    title: 'Monthly Collection Rewards',
    description: 'Unlock premium monthly cashback milestones and loyalty rewards based on your cumulative monthly spend volume.',
    icon: <Star size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
    tag: 'Monthly Bonus', category: 'financial', subCategory: '💸 Cashback & Savings',
    color: 'from-orange-500 to-red-500', path: '/services/monthly-collection-rewards',
  },

  // ══════════════════════════════════════════════
  // 2. PAYMENT & BANKING SERVICES
  // ══════════════════════════════════════════════

  // 💰 Digital Transactions
  {
    title: 'Money Transfer',
    description: 'Instant, secure, zero-fee money transfers across all Indian banks via UPI, NEFT, IMPS, and the Fiinway wallet.',
    icon: <Send size={20} />,
    imageUrl: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-mobile-money-transferring-banking-concept-vector-hand-holding-smartphone-dollar-and-png-image_5204362.jpg',
    tag: 'Instant Transfer', category: 'payment', subCategory: '💰 Digital Transactions',
    color: 'from-blue-500 to-indigo-600', path: '/services/money-transfer',
  },
  {
    title: 'QR Payment System',
    description: 'Accept and make payments via dynamic QR codes at any merchant. Fast, contactless, and completely secure.',
    icon: <QrCode size={20} />,
    imageUrl: 'https://www.mindgate.solutions/wp-content/uploads/2025/04/understanding-qr-code-payments-for-seamless-transactions.jpg.webp',
    tag: 'Scan & Pay', category: 'payment', subCategory: '💰 Digital Transactions',
    color: 'from-violet-500 to-purple-600', path: '/services/qr-payment',
  },
  {
    title: 'Wallet Services',
    description: 'A unified digital wallet to store, manage, and spend your cashbacks, rewards, and loaded funds seamlessly.',
    icon: <Wallet size={20} />,
    imageUrl: 'https://cdn.sanity.io/images/9sed75bn/production/7a6cddc4a6cc60c40be31ebc1f9424bf21be0384-896x504.png?auto=format',
    tag: 'Digital Wallet', category: 'payment', subCategory: '💰 Digital Transactions',
    color: 'from-indigo-500 to-sky-600', path: '/services/wallet-services',
  },
  {
    title: 'Payment Gateway Integration',
    description: 'Enterprise-grade checkout integration supporting UPI, Net Banking, and cards with industry-low MDR rates.',
    icon: <Cpu size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    tag: 'Enterprise Pay', category: 'payment', subCategory: '💰 Digital Transactions',
    color: 'from-slate-700 to-indigo-900', path: '/services/payment-gateway',
  },

  // 📲 Recharge & Utility
  {
    title: 'Mobile Recharge',
    description: 'Instantly recharge any mobile number across all operators with exclusive cashback on every prepaid top-up.',
    icon: <Smartphone size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
    tag: 'All Operators', category: 'payment', subCategory: '📲 Recharge & Utility',
    color: 'from-cyan-500 to-blue-500', path: '/services/mobile-recharge',
  },
  {
    title: 'Electricity Bill Payment',
    description: 'Pay electricity bills for all state DISCOMs instantly with auto-reminder alerts before your due date.',
    icon: <Zap size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    tag: 'All DISCOMs', category: 'payment', subCategory: '📲 Recharge & Utility',
    color: 'from-yellow-500 to-amber-600', path: '/services/electricity-bill',
  },
  {
    title: 'DTH Recharge',
    description: 'Recharge your DTH connection across Tata Play, Airtel, Dish TV, and more with exclusive channel pack offers.',
    icon: <Tv size={20} />,
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/9/MN/FU/VP/158662105/dth-recharge-service.jpeg',
    tag: 'All Providers', category: 'payment', subCategory: '📲 Recharge & Utility',
    color: 'from-rose-500 to-pink-600', path: '/services/dth-recharge',
  },
  {
    title: 'Utility Bill Payments',
    description: 'Pay gas, water, broadband, and insurance premium bills from a single dashboard with autopay scheduling.',
    icon: <ReceiptText size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    tag: 'All-in-One Bills', category: 'payment', subCategory: '📲 Recharge & Utility',
    color: 'from-teal-500 to-green-600', path: '/services/utility-bills',
  },

  // ══════════════════════════════════════════════
  // 3. HEALTHCARE & MEDICAL SERVICES
  // ══════════════════════════════════════════════

  // 🏥 Medical Financial Support
  {
    title: 'Healthcare Cashback',
    description: 'Earn up to 10% instant cashback on medicines, lab test bookings, hospital bills, and health check-up packages.',
    icon: <Heart size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
    tag: 'Up to 10% Back', category: 'healthcare', subCategory: '🏥 Medical Financial Support',
    color: 'from-rose-500 to-pink-600', path: '/services/healthcare-cashback',
  },
  {
    title: 'Care Credit Card',
    description: 'Flexible, zero-cost EMI health credit card designed for financing complex medical procedures and planned surgeries.',
    icon: <Activity size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    tag: 'Medical Credit', category: 'healthcare', subCategory: '🏥 Medical Financial Support',
    color: 'from-red-500 to-rose-600', path: '/services/care-credit-card',
  },
  {
    title: 'OPD Credit Card',
    description: 'Specialized card offering instant cash-backed allowances for out-patient diagnostics, lab tests, and specialist consultations.',
    icon: <Stethoscope size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&q=80',
    tag: 'OPD Credit', category: 'healthcare', subCategory: '🏥 Medical Financial Support',
    color: 'from-pink-500 to-red-500', path: '/services/opd-credit-card',
  },
  {
    title: 'Medicash Card',
    description: 'Tax-saving pre-paid health benefits card to purchase pharma goods, vitamins, and general wellness services.',
    icon: <Pill size={20} />,
    imageUrl: 'https://5.imimg.com/data5/XM/BS/DO/SELLER-9442637/metrozone-medicash-card-services.png',
    tag: 'Prepaid Health', category: 'healthcare', subCategory: '🏥 Medical Financial Support',
    color: 'from-fuchsia-500 to-rose-600', path: '/services/medicash-card',
  },

  // 💊 Medical Expense Coverage
  {
    title: 'Hospital Payments',
    description: 'Pay hospital bills directly from your Fiinway wallet or credit line with no-cost EMI options for IPD admissions.',
    icon: <Building2 size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    tag: 'IPD & OPD', category: 'healthcare', subCategory: '💊 Medical Expense Coverage',
    color: 'from-red-600 to-rose-700', path: '/services/hospital-payments',
  },
  {
    title: 'Clinic Payments',
    description: 'Effortlessly settle consultation fees at partner clinics with QR-based instant payment and digital receipts.',
    icon: <Cross size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
    tag: 'Clinic Pay', category: 'healthcare', subCategory: '💊 Medical Expense Coverage',
    color: 'from-orange-500 to-red-500', path: '/services/clinic-payments',
  },
  {
    title: 'Nursing Home Payments',
    description: 'Simplified billing for nursing home stays and post-surgical recovery care, with Fiinway credit support.',
    icon: <Building size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80',
    tag: 'Care Homes', category: 'healthcare', subCategory: '💊 Medical Expense Coverage',
    color: 'from-rose-600 to-fuchsia-700', path: '/services/nursing-home-payments',
  },
  {
    title: 'Medical Store Benefits',
    description: 'Special discount cards and cashback offers at partner pharmacy chains and online medicine delivery platforms.',
    icon: <Pill size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
    tag: 'Pharma Savings', category: 'healthcare', subCategory: '💊 Medical Expense Coverage',
    color: 'from-emerald-500 to-teal-600', path: '/services/medical-store-benefits',
  },

  // ══════════════════════════════════════════════
  // 4. E-COMMERCE & MARKETPLACE
  // ══════════════════════════════════════════════

  // 🛒 Shopping & Commerce
  {
    title: 'Online Marketplace',
    description: 'Shop electronics, fashion, home goods, and more directly inside the unified Fiinway app with integrated credit.',
    icon: <ShoppingCart size={20} />,
    imageUrl: 'https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/what-is-an-online-marketplace.webp',
    tag: 'All-in-One Mall', category: 'ecommerce', subCategory: '🛒 Shopping & Commerce',
    color: 'from-violet-500 to-purple-600', path: '/services/marketplace',
  },
  {
    title: 'New Product Sales',
    description: 'Browse and buy verified new products across every category with Fiinway credit integration and buyer protection.',
    icon: <ShoppingBag size={20} />,
    imageUrl: 'https://f.hubspotusercontent30.net/hubfs/3365633/iStock-1060973372.jpg',
    tag: 'Brand New', category: 'ecommerce', subCategory: '🛒 Shopping & Commerce',
    color: 'from-blue-500 to-indigo-600', path: '/services/new-product-sales',
  },
  {
    title: 'Old Product Resale',
    description: 'List and sell your pre-owned electronics, books, and household items to a trusted community of Fiinway users.',
    icon: <Repeat size={20} />,
    imageUrl: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/118062_699085.png',
    tag: 'Pre-Owned', category: 'ecommerce', subCategory: '🛒 Shopping & Commerce',
    color: 'from-amber-500 to-orange-600', path: '/services/old-product-resale',
  },
  {
    title: 'Green Exchange Platform',
    description: 'Trade eco-conscious carbon credits and redeem reward points by supporting verified renewable energy projects.',
    icon: <Leaf size={20} />,
    imageUrl: 'https://greenexchange.com.au/__static/ed0985731411f0c03be4215cf12271ce/images-unsplash-com(2)',
    tag: 'Eco Exchange', category: 'ecommerce', subCategory: '🛒 Shopping & Commerce',
    color: 'from-green-500 to-emerald-600', path: '/services/green-exchange',
  },

  // 🏫 Campus Commerce
  {
    title: 'Campus Store',
    description: 'Student portal for textbooks, reference guides, lab equipment, gadgets, and exclusive campus merchandise.',
    icon: <Store size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80',
    tag: 'Campus Tech', category: 'ecommerce', subCategory: '🏫 Campus Commerce',
    color: 'from-amber-500 to-orange-600', path: '/services/campus-store',
  },
  {
    title: 'Student Essentials Marketplace',
    description: 'Curated marketplace for hostellers and students — stationery, appliances, and daily essentials at student prices.',
    icon: <ShoppingCart size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80',
    tag: 'For Students', category: 'ecommerce', subCategory: '🏫 Campus Commerce',
    color: 'from-teal-500 to-cyan-600', path: '/services/student-essentials',
  },
  {
    title: 'Kitchen Partner Network',
    description: 'B2B commercial kitchen setup, supply chain management, and bulk inventory purchasing for food entrepreneurs.',
    icon: <ChefHat size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80',
    tag: 'Partner B2B', category: 'ecommerce', subCategory: '🏫 Campus Commerce',
    color: 'from-orange-600 to-red-700', path: '/services/kitchen-partner',
  },

  // ══════════════════════════════════════════════
  // 5. TRAVEL & TRANSPORT SERVICES
  // ══════════════════════════════════════════════
  // 🚖 Ride Services
  {
    title: 'Cab Ride (Local & Outstation)',
    description: 'Instantly hail city cabs or book outstation trips with transparent, surge-free pricing and driver-tracking.',
    icon: <Car size={20} />,
    imageUrl: 'https://www.innovarental.in/imgs/image.jpg',
    tag: 'Book Cab', category: 'travel', subCategory: '🚖 Ride Services',
    color: 'from-yellow-500 to-orange-500', path: '/services/cab-ride',
  },
  {
    title: 'Bike Ride',
    description: 'Quick, affordable bike rides to navigate heavy city traffic. Earn cashback on your first 10 weekly rides.',
    icon: <Bike size={20} />,
    imageUrl: 'https://www.shutterstock.com/image-photo/young-indian-couple-riding-on-600nw-2602923967.jpg',
    tag: 'Micro Mobility', category: 'travel', subCategory: '🚖 Ride Services',
    color: 'from-lime-500 to-green-600', path: '/services/bike-ride',
  },
  {
    title: 'Sharing Cab (Local)',
    description: 'Eco-friendly and budget-friendly daily shared cabs for your regular office and college commutes.',
    icon: <Users size={20} />,
    imageUrl: 'https://www.gtccabs.com/uploads/Deeplinkimage/141878374.jpg',
    tag: 'Ride Pool', category: 'travel', subCategory: '🚖 Ride Services',
    color: 'from-teal-500 to-cyan-600', path: '/services/sharing-cab',
  },
  {
    title: 'Sharing Cab (Outstation)',
    description: 'Book long-distance shared inter-city cabs for weekend getaways and holidays at deeply discounted fares.',
    icon: <Car size={20} />,
    imageUrl: 'https://www.teamtweaks.com/blog/wp-content/uploads/2020/02/ride-sharing-vs-ride-hailing.png',
    tag: 'Outstation Pool', category: 'travel', subCategory: '🚖 Ride Services',
    color: 'from-indigo-500 to-blue-600', path: '/services/sharing-cab-outstation',
  },
  
// ✈ Travel Booking
  {
    title: 'Travel Ticket Booking',
    description: 'Plan and book domestic and international flights and train tickets with Fiinway credit and exclusive offers.',
    icon: <Plane size={20} />,
    imageUrl: 'https://productimages.withfloats.com/serviceimages/tile/66e04db7fb564407d5b4b299Flight-Tickets-Rule',
    tag: 'Flights & Trains', category: 'travel', subCategory: '✈️ Travel Booking',
    color: 'from-sky-500 to-blue-600', path: '/services/travel-booking',
  },
  {
    title: 'Hotel Booking & Stay',
    description: 'Book verified budget stays to luxury resorts with exclusive Fiinway ecosystem cashbacks and loyalty points.',
    icon: <Hotel size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    tag: 'Hotels & Resorts', category: 'travel', subCategory: '✈️ Travel Booking',
    color: 'from-blue-500 to-cyan-600', path: '/services/hotels',
  },

 

  // 📦 Logistics & Delivery
  {
    title: 'Transport Pick & Drop',
    description: 'Reliable same-day pick-and-drop logistics for luggage, parcels, or business inventory with live GPS tracking.',
    icon: <Truck size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    tag: 'Logistics Hub', category: 'travel', subCategory: '📦 Logistics & Delivery',
    color: 'from-orange-500 to-red-500', path: '/services/transport-pick-drop',
  },
  {
    title: 'Parcel & Delivery Support',
    description: 'Send and receive parcels with Fiinway-verified delivery partners. Get real-time status updates on every shipment.',
    icon: <Package size={20} />,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8c3NfCaAljhrE570uoTax5i5Q7bTx97tv2w&s',
    tag: 'Track & Send', category: 'travel', subCategory: '📦 Logistics & Delivery',
    color: 'from-amber-500 to-yellow-600', path: '/services/parcel-delivery',
  },
 
  // ══════════════════════════════════════════════
  // 6. STUDENT & EDUCATION SERVICES
  // ══════════════════════════════════════════════

  // 🎓 Student Financial Support
  {
    title: 'Student Credit Card',
    description: 'Build credit history early with zero joining fees, study material rewards, and student-exclusive cashback offers.',
    icon: <GraduationCap size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
    tag: 'Zero Fee Card', category: 'student', subCategory: '🎓 Student Financial Support',
    color: 'from-teal-500 to-emerald-600', path: '/services/student-credit-card',
  },
  {
    title: 'International Student Card',
    description: 'Multi-currency card for students studying abroad — zero forex markup, accepted globally, powered by Fiinway.',
    icon: <Globe size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80',
    tag: 'Study Abroad', category: 'student', subCategory: '🎓 Student Financial Support',
    color: 'from-sky-500 to-blue-600', path: '/services/international-student-card',
  },
  {
    title: 'Scholarship Platform',
    description: 'Discover and apply for verified corporate-sponsored scholarships, educational grants, and fellowship programs.',
    icon: <BookOpen size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1511203466129-824e631920d7?w=600&q=80',
    tag: 'Grants & Awards', category: 'student', subCategory: '🎓 Student Financial Support',
    color: 'from-amber-500 to-orange-600', path: '/services/scholarship-platform',
  },

  // 🏫 Campus Solutions
  {
    title: 'Campus Store',
    description: 'Shop for textbooks, devices, stationery, and campus merchandise at discounted student prices with Fiinway credit.',
    icon: <Store size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80',
    tag: 'Campus Shop', category: 'student', subCategory: '🏫 Campus Solutions',
    color: 'from-amber-500 to-orange-600', path: '/services/campus-store',
  },
  {
    title: 'Student Cashback Benefits',
    description: 'Earn special student-tier cashback on food, transport, stationery, and entertainment across Fiinway ecosystem.',
    icon: <BadgePercent size={20} />,
    imageUrl: 'https://the-updates.com/wp-content/uploads/2025/10/How-to-Get-a-Student-Credit-Card-as-an-International-Student-2026-1024x683.png',
    tag: 'Student Perks', category: 'student', subCategory: '🏫 Campus Solutions',
    color: 'from-violet-500 to-purple-600', path: '/services/student-cashback',
  },

  // ══════════════════════════════════════════════
  // 7. MERCHANT & BUSINESS SOLUTIONS
  // ══════════════════════════════════════════════

  // 🏪 Merchant Services
  {
    title: 'Merchant QR Payments',
    description: 'Accept UPI and wallet payments via a smart dynamic QR code. Get instant settlements and daily payment reports.',
    icon: <QrCode size={20} />,
    imageUrl: 'https://modefin.com/wp-content/uploads/2023/10/Static-QR-code-payment.jpg',
    tag: 'Accept Payments', category: 'merchant', subCategory: '🏪 Merchant Services',
    color: 'from-indigo-600 to-purple-700', path: '/services/merchant-qr',
  },
  {
    title: 'Business Wallet',
    description: 'A dedicated business wallet to manage receivables, payables, and operational funds with full transaction history.',
    icon: <Landmark size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    tag: 'Business Wallet', category: 'merchant', subCategory: '🏪 Merchant Services',
    color: 'from-slate-600 to-slate-800', path: '/services/business-wallet',
  },
  {
    title: 'Collection Management',
    description: 'Automate due collection from customers with smart reminders, recurring payment links, and real-time dashboards.',
    icon: <CircleDollarSign size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    tag: 'Auto Collect', category: 'merchant', subCategory: '🏪 Merchant Services',
    color: 'from-teal-600 to-emerald-700', path: '/services/collection-management',
  },

  // 📈 Business Financial Tools
  {
    title: 'Business Credit Card',
    description: 'Metal commercial cards with high limits, automated expense categorization, GST-ready reports, and team cards.',
    icon: <Briefcase size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    tag: 'Corporate Card', category: 'merchant', subCategory: '📈 Business Financial Tools',
    color: 'from-zinc-700 to-slate-900', path: '/services/business-credit-card',
  },
  {
    title: 'Payment Gateway',
    description: 'Robust checkout integration for your website or app with support for all payment modes and low transaction fees.',
    icon: <Cpu size={20} />,
    imageUrl: 'https://www.datocms-assets.com/110819/1700751752-payment_gateway.jpg?auto=format&crop=focalpoint&fit=crop&h=513&w=1026',
    tag: 'Dev Ready API', category: 'merchant', subCategory: '📈 Business Financial Tools',
    color: 'from-blue-700 to-indigo-900', path: '/services/payment-gateway',
  },
  {
    title: 'Instant Credit Support',
    description: 'Get working capital credit instantly approved for your business with minimal documentation and same-day disbursal.',
    icon: <TrendingUp size={20} />,
    imageUrl: 'https://www.indusind.bank.in/iblogs/wp-content/uploads/What-Is-Instant-Approval-Credit-Cards__.jpg',
    tag: 'Working Capital', category: 'merchant', subCategory: '📈 Business Financial Tools',
    color: 'from-emerald-600 to-green-700', path: '/services/instant-credit-support',
  },

  // ══════════════════════════════════════════════
  // 8. DAILY LIFESTYLE SERVICES
  // ══════════════════════════════════════════════

  // 🍔 Food & Essentials
  {
    title: 'Food Delivery',
    description: 'Order hot meals from top-rated local restaurants and cloud kitchens with a 30-minute guaranteed delivery.',
    icon: <Utensils size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    tag: '30 Min Delivery', category: 'lifestyle', subCategory: '🍔 Food & Essentials',
    color: 'from-orange-500 to-red-500', path: '/services/food-delivery',
  },
  {
    title: 'Kitchen Partner Services',
    description: 'Partner with Fiinway as a cloud kitchen — get orders, manage inventory, and process payments all in one place.',
    icon: <ChefHat size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80',
    tag: 'Cloud Kitchen', category: 'lifestyle', subCategory: '🍔 Food & Essentials',
    color: 'from-red-600 to-orange-700', path: '/services/kitchen-partner-lifestyle',
  },

  // 📱 Everyday Utilities
  {
    title: 'Recharge',
    description: 'Top-up mobile, DTH, and data cards instantly for any operator or provider — with cashback on every recharge.',
    icon: <RefreshCcw size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
    tag: 'Instant Top-Up', category: 'lifestyle', subCategory: '📱 Everyday Utilities',
    color: 'from-cyan-500 to-sky-600', path: '/services/recharge',
  },
  {
    title: 'Bill Payments',
    description: 'Manage and pay all your monthly bills — electricity, gas, water, insurance — from a single organized dashboard.',
    icon: <ReceiptText size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    tag: 'All Bills', category: 'lifestyle', subCategory: '📱 Everyday Utilities',
    color: 'from-teal-500 to-green-600', path: '/services/bill-payments',
  },
  {
    title: 'Cashback Rewards',
    description: 'Earn and redeem Fiinway Points on every daily spend — groceries, rides, dining, and utilities — every single day.',
    icon: <BadgePercent size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
    tag: 'Daily Rewards', category: 'lifestyle', subCategory: '📱 Everyday Utilities',
    color: 'from-violet-500 to-indigo-600', path: '/services/cashback-rewards',
  },
];



const categoryMeta: Record<Category, { title: string; subtitle: string; gradient: string }> = {
  financial:  { title: 'Financial & Credit Services',         subtitle: 'Credit lines, cards, loans, cashbacks, and savings — your complete financial toolkit in one app.', gradient: 'from-indigo-600 to-purple-600' },
  payment:    { title: 'Payment & Banking Services',          subtitle: 'Transfer money, pay bills, recharge, and accept payments — all with zero friction.', gradient: 'from-blue-600 to-indigo-600' },
  healthcare: { title: 'Healthcare & Medical Services',       subtitle: 'From pharmacy cashbacks to medical credit cards — stay covered for every health need.', gradient: 'from-rose-500 to-pink-600' },
  ecommerce:  { title: 'E-Commerce & Marketplace',           subtitle: 'Shop new, sell old, and trade green — a full commerce ecosystem built inside Fiinway.', gradient: 'from-violet-500 to-purple-600' },
  travel:     { title: 'Travel & Transport Services',         subtitle: 'Cab rides, bike shares, hotel bookings, and parcel logistics — all in one tab.', gradient: 'from-sky-500 to-blue-600' },
  student:    { title: 'Student & Education Services',        subtitle: 'Cards, scholarships, cashbacks, and campus solutions designed exclusively for students.', gradient: 'from-teal-500 to-emerald-600' },
  merchant:   { title: 'Merchant & Business Solutions',       subtitle: 'QR payments, business wallets, collection tools, and credit — built to grow your business.', gradient: 'from-slate-600 to-indigo-800' },
  lifestyle:  { title: 'Daily Lifestyle Services',            subtitle: 'Food delivery, recharges, bill payments, and daily cashbacks — life made effortless.', gradient: 'from-orange-500 to-red-500' },
};

/* ─────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────── */
export const ServiceCatalog: React.FC = () => {
 const orderedCategories: Category[] = [
  'travel',
  'ecommerce',
  'healthcare',
  'merchant',
  'financial',
  'payment',
  'student',
  'lifestyle',
];

  return (
    <div className="w-full">


      {/* ── Category Header ── */}
     <div className="container mx-auto px-4 md:px-6 py-12 space-y-20">
  {orderedCategories.map((category) => {
    const meta = categoryMeta[category];

    const services = allServices.filter(
      (s) => s.category === category
    );

    const grouped = services.reduce<Record<string, ServiceItem[]>>(
      (acc, s) => {
        if (!acc[s.subCategory]) acc[s.subCategory] = [];
        acc[s.subCategory].push(s);
        return acc;
      },
      {}
    );

    return (
      <section key={category} className="space-y-10">
        {/* Category Header */}
        <div>
          <h2
            className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${meta.gradient} bg-clip-text text-transparent`}
          >
            {meta.title}
          </h2>

          <p className="text-slate-500 dark:text-slate-400 max-w-3xl mt-3">
            {meta.subtitle}
          </p>
        </div>

        {/* Sub Categories */}
        {Object.entries(grouped).map(([subCat, services]) => (
          <div key={subCat}>
            {/* Sub Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                {subCat}
              </h3>

              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent" />

              <span className="text-xs font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
                {services.length} service
                {services.length > 1 ? 's' : ''}
              </span>
            </div>

            {/* Cards Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {services.map((service) => (
                <motion.div
                  layout
                  key={service.title + service.subCategory}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25 }}
                  className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <span className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase">
                      {service.tag}
                    </span>

                    <div
                      className={`absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      {service.icon}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                      {service.title}
                    </h4>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-500 ease-out`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </section>
    );
  })}
</div>
    </div>
  );
};
