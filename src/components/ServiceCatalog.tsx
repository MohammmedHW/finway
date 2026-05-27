import React from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import {
  CreditCard, Wallet, Percent, Banknote, Coins, Briefcase, GraduationCap,
  ArrowLeftRight, PiggyBank, Cpu, Heart, Activity, Stethoscope, ShoppingCart,
  Plane, Hotel, Utensils, Store, ChefHat, Leaf, Smartphone, Car, Bike, Truck,
  Users, BookOpen, Globe, QrCode, Zap, Tv, Building2, Building, Cross,
  Pill, Package, Send, TrendingUp, Star, RefreshCcw, CircleDollarSign,
  CalendarDays, ReceiptText, ShoppingBag, Repeat, BadgePercent, Landmark
} from 'lucide-react';

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
    tag: 'Up to ₹5 Lakh', category: 'financial', subCategory: ' Credit & Loan Solutions',
    color: 'from-indigo-500 to-purple-600', path: '/services/digital-credit-line',
  },
  {
    title: 'Zero-Interest Credit',
    description: 'Exclusive 0% interest credit line valid up to 45 days across partner merchant networks and online checkouts.',
    icon: <Percent size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=600&q=80',
    tag: '0% APR', category: 'financial', subCategory: ' Credit & Loan Solutions',
    color: 'from-violet-500 to-indigo-600', path: '/services/zero-interest-credit',
  },
  {
    title: 'Personal Loan',
    description: 'Hassle-free personal loans up to ₹5,00,000 with customized tenure options, low interest rates, and zero hidden charges.',
    icon: <Banknote size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80',
    tag: 'Quick Disbursal', category: 'financial', subCategory: ' Credit & Loan Solutions',
    color: 'from-blue-500 to-indigo-600', path: '/services/personal-loan',
  },
  {
    title: 'Instant Virtual Loan',
    description: 'Fully automated loan underwriting and disbursal straight into your Fiinway wallet in under 120 seconds.',
    icon: <Coins size={20} />,
    imageUrl: 'https://www.homecredit.co.in/sites/default/files/2025-03/instant-personal-loan-in-3-easy-steps-750x800.webp?w=600&q=80',
    tag: 'In 120 Seconds', category: 'financial', subCategory: ' Credit & Loan Solutions',
    color: 'from-purple-500 to-pink-600', path: '/services/instant-virtual-loan',
  },
  {
    title: 'Immediate Credit ₹15,000',
    description: 'Emergency micro-credit of ₹15,000 for unexpected expenses, with single-tap instant approval and no paperwork.',
    icon: <Wallet size={20} />,
    imageUrl: 'https://blogassets.airtel.in/wp-content/uploads/2026/01/Website-Banner_PL_15000.png',
    tag: 'Emergency Credit', category: 'financial', subCategory: ' Credit & Loan Solutions',
    color: 'from-fuchsia-500 to-purple-600', path: '/services/immediate-credit-15k',
  },
  {
    title: 'Virtual Credit ₹50,000',
    description: 'Instantly generated digital credit limit of ₹50,000 for safe online shopping with rotating CVV protection.',
    icon: <CreditCard size={20} />,
    imageUrl: 'https://backend.quadient.com/files/default/2022-08/image-virtual-credit-cards-your-business-everything-you-need-to-know.png',
    tag: '₹50K Limit', category: 'financial', subCategory: ' Credit & Loan Solutions',
    color: 'from-indigo-400 to-cyan-600', path: '/services/virtual-credit-50k',
  },

  // 🏦 Cards & Credit Products
  {
    title: 'Business Credit Card',
    description: 'Premium metal commercial cards with automated expense reporting, high credit limits, and exclusive corporate rewards.',
    icon: <Briefcase size={20} />,
    imageUrl: 'https://www.livemint.com/lm-img/img/2025/07/04/1600x900/nbm_1751298506561_1751298527507_1751612891668.jpg',
    tag: 'Corporate', category: 'financial', subCategory: ' Cards & Credit Products',
    color: 'from-slate-600 to-slate-800', path: '/services/business-credit-card',
  },
  {
    title: 'Student Credit Card',
    description: 'Build credit history early with zero joining fees, study material rewards, and student-exclusive cashback offers.',
    icon: <GraduationCap size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
    tag: 'Student First', category: 'financial', subCategory: ' Cards & Credit Products',
    color: 'from-teal-500 to-emerald-600', path: '/services/student-credit-card',
  },
  {
    title: 'International Student Card',
    description: 'Multi-currency travel & credit card for students abroad with zero international transaction markup and global acceptance.',
    icon: <Globe size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80',
    tag: 'Global Study', category: 'financial', subCategory: ' Cards & Credit Products',
    color: 'from-sky-500 to-blue-600', path: '/services/international-student-card',
  },

  // 💸 Cashback & Savings
  {
    title: '1% Transfer Cashback',
    description: 'Earn instant 1% cashback directly into your Fiinway wallet on every domestic peer-to-peer bank transfer.',
    icon: <ArrowLeftRight size={20} />,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDWMSMa9NwIH97rW7m6GkaQoSxKb97L0Lmw&s',
    tag: 'Instant Cashback', category: 'financial', subCategory: ' Cashback & Savings',
    color: 'from-green-500 to-teal-600', path: '/services/transfer-cashback',
  },
  {
    title: 'Savings Increment Benefits',
    description: 'Automated spare-change rounding on all daily transactions, invested directly into gold or liquid mutual funds.',
    icon: <PiggyBank size={20} />,
    imageUrl: 'https://www.axis.bank.in/images/default-source/blog/jpeg/salary-increment.jpg',
    tag: 'Auto-Save', category: 'financial', subCategory: ' Cashback & Savings',
    color: 'from-emerald-500 to-green-600', path: '/services/saving-increment',
  },
  {
    title: 'Daily Collection Benefits',
    description: 'Earn tiered reward points and cashback on every daily transaction. The more you transact, the more you earn.',
    icon: <CalendarDays size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    tag: 'Daily Rewards', category: 'financial', subCategory: ' Cashback & Savings',
    color: 'from-amber-500 to-yellow-600', path: '/services/daily-collection-benefits',
  },
  {
    title: 'Monthly Collection Rewards',
    description: 'Unlock premium monthly cashback milestones and loyalty rewards based on your cumulative monthly spend volume.',
    icon: <Star size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
    tag: 'Monthly Bonus', category: 'financial', subCategory: ' Cashback & Savings',
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
    tag: 'Instant Transfer', category: 'payment', subCategory: ' Digital Transactions',
    color: 'from-blue-500 to-indigo-600', path: '/services/money-transfer',
  },
  {
    title: 'QR Payment System',
    description: 'Accept and make payments via dynamic QR codes at any merchant. Fast, contactless, and completely secure.',
    icon: <QrCode size={20} />,
    imageUrl: 'https://www.mindgate.solutions/wp-content/uploads/2025/04/understanding-qr-code-payments-for-seamless-transactions.jpg.webp',
    tag: 'Scan & Pay', category: 'payment', subCategory: ' Digital Transactions',
    color: 'from-violet-500 to-purple-600', path: '/services/qr-payment',
  },
  {
    title: 'Wallet Services',
    description: 'A unified digital wallet to store, manage, and spend your cashbacks, rewards, and loaded funds seamlessly.',
    icon: <Wallet size={20} />,
    imageUrl: 'https://cdn.sanity.io/images/9sed75bn/production/7a6cddc4a6cc60c40be31ebc1f9424bf21be0384-896x504.png?auto=format',
    tag: 'Digital Wallet', category: 'payment', subCategory: ' Digital Transactions',
    color: 'from-indigo-500 to-sky-600', path: '/services/wallet-services',
  },
  {
    title: 'Payment Gateway Integration',
    description: 'Enterprise-grade checkout integration supporting UPI, Net Banking, and cards with industry-low MDR rates.',
    icon: <Cpu size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    tag: 'Enterprise Pay', category: 'payment', subCategory: ' Digital Transactions',
    color: 'from-slate-700 to-indigo-900', path: '/services/payment-gateway',
  },

  // 📲 Recharge & Utility
  {
    title: 'Mobile Recharge',
    description: 'Instantly recharge any mobile number across all operators with exclusive cashback on every prepaid top-up.',
    icon: <Smartphone size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
    tag: 'All Operators', category: 'payment', subCategory: ' Recharge & Utility',
    color: 'from-cyan-500 to-blue-500', path: '/services/mobile-recharge',
  },
  {
    title: 'Electricity Bill Payment',
    description: 'Pay electricity bills for all state DISCOMs instantly with auto-reminder alerts before your due date.',
    icon: <Zap size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    tag: 'All DISCOMs', category: 'payment', subCategory: ' Recharge & Utility',
    color: 'from-yellow-500 to-amber-600', path: '/services/electricity-bill',
  },
  {
    title: 'DTH Recharge',
    description: 'Recharge your DTH connection across Tata Play, Airtel, Dish TV, and more with exclusive channel pack offers.',
    icon: <Tv size={20} />,
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/9/MN/FU/VP/158662105/dth-recharge-service.jpeg',
    tag: 'All Providers', category: 'payment', subCategory: ' Recharge & Utility',
    color: 'from-rose-500 to-pink-600', path: '/services/dth-recharge',
  },
  {
    title: 'Utility Bill Payments',
    description: 'Pay gas, water, broadband, and insurance premium bills from a single dashboard with autopay scheduling.',
    icon: <ReceiptText size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    tag: 'All-in-One Bills', category: 'payment', subCategory: ' Recharge & Utility',
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
    tag: 'Up to 10% Back', category: 'healthcare', subCategory: ' Medical Financial Support',
    color: 'from-rose-500 to-pink-600', path: '/services/healthcare-cashback',
  },
  {
    title: 'Care Credit Card',
    description: 'Flexible, zero-cost EMI health credit card designed for financing complex medical procedures and planned surgeries.',
    icon: <Activity size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    tag: 'Medical Credit', category: 'healthcare', subCategory: ' Medical Financial Support',
    color: 'from-red-500 to-rose-600', path: '/services/care-credit-card',
  },
  {
    title: 'OPD Credit Card',
    description: 'Specialized card offering instant cash-backed allowances for out-patient diagnostics, lab tests, and specialist consultations.',
    icon: <Stethoscope size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&q=80',
    tag: 'OPD Credit', category: 'healthcare', subCategory: ' Medical Financial Support',
    color: 'from-pink-500 to-red-500', path: '/services/opd-credit-card',
  },
  {
    title: 'Medicash Card',
    description: 'Tax-saving pre-paid health benefits card to purchase pharma goods, vitamins, and general wellness services.',
    icon: <Pill size={20} />,
    imageUrl: 'https://5.imimg.com/data5/XM/BS/DO/SELLER-9442637/metrozone-medicash-card-services.png',
    tag: 'Prepaid Health', category: 'healthcare', subCategory: ' Medical Financial Support',
    color: 'from-fuchsia-500 to-rose-600', path: '/services/medicash-card',
  },

  // 💊 Medical Expense Coverage
  {
    title: 'Hospital Payments',
    description: 'Pay hospital bills directly from your Fiinway wallet or credit line with no-cost EMI options for IPD admissions.',
    icon: <Building2 size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    tag: 'IPD & OPD', category: 'healthcare', subCategory: ' Medical Expense Coverage',
    color: 'from-red-600 to-rose-700', path: '/services/hospital-payments',
  },
  {
    title: 'Clinic Payments',
    description: 'Effortlessly settle consultation fees at partner clinics with QR-based instant payment and digital receipts.',
    icon: <Cross size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
    tag: 'Clinic Pay', category: 'healthcare', subCategory: ' Medical Expense Coverage',
    color: 'from-orange-500 to-red-500', path: '/services/clinic-payments',
  },
  {
    title: 'Nursing Home Payments',
    description: 'Simplified billing for nursing home stays and post-surgical recovery care, with Fiinway credit support.',
    icon: <Building size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80',
    tag: 'Care Homes', category: 'healthcare', subCategory: ' Medical Expense Coverage',
    color: 'from-rose-600 to-fuchsia-700', path: '/services/nursing-home-payments',
  },
  {
    title: 'Medical Store Benefits',
    description: 'Special discount cards and cashback offers at partner pharmacy chains and online medicine delivery platforms.',
    icon: <Pill size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
    tag: 'Pharma Savings', category: 'healthcare', subCategory: ' Medical Expense Coverage',
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
    imageUrl: 'https://entail.mayple.com/en-assets/mayple/6179a579f91da881be2c758b_morningbrewShVipPImS6kunsplash_5c8728bacb20daf02414ecbdf89e0418_2000-1699777146680.png',
    tag: 'All-in-One Mall', category: 'ecommerce', subCategory: ' Shopping & Commerce',
    color: 'from-violet-500 to-purple-600', path: '/services/marketplace',
  },
  {
    title: 'New Product Sales',
    description: 'Browse and buy verified new products across every category with Fiinway credit integration and buyer protection.',
    icon: <ShoppingBag size={20} />,
    imageUrl: 'https://f.hubspotusercontent30.net/hubfs/3365633/iStock-1060973372.jpg',
    tag: 'Brand New', category: 'ecommerce', subCategory: ' Shopping & Commerce',
    color: 'from-blue-500 to-indigo-600', path: '/services/new-product-sales',
  },
  {
    title: 'Old Product Resale',
    description: 'List and sell your pre-owned electronics, books, and household items to a trusted community of Fiinway users.',
    icon: <Repeat size={20} />,
    imageUrl: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/118062_699085.png',
    tag: 'Pre-Owned', category: 'ecommerce', subCategory: ' Shopping & Commerce',
    color: 'from-amber-500 to-orange-600', path: '/services/old-product-resale',
  },
  {
    title: 'Green Exchange Platform',
    description: 'Trade eco-conscious carbon credits and redeem reward points by supporting verified renewable energy projects.',
    icon: <Leaf size={20} />,
    imageUrl: 'https://greenexchange.com.au/__static/ed0985731411f0c03be4215cf12271ce/images-unsplash-com(2)',
    tag: 'Eco Exchange', category: 'ecommerce', subCategory: ' Shopping & Commerce',
    color: 'from-green-500 to-emerald-600', path: '/services/green-exchange',
  },

  // 🏫 Campus Commerce
  {
    title: 'Campus Store',
    description: 'Student portal for textbooks, reference guides, lab equipment, gadgets, and exclusive campus merchandise.',
    icon: <Store size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80',
    tag: 'Campus Tech', category: 'ecommerce', subCategory: ' Campus Commerce',
    color: 'from-amber-500 to-orange-600', path: '/services/campus-store',
  },
  {
    title: 'Student Essentials Marketplace',
    description: 'Curated marketplace for hostellers and students — stationery, appliances, and daily essentials at student prices.',
    icon: <ShoppingCart size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80',
    tag: 'For Students', category: 'ecommerce', subCategory: ' Campus Commerce',
    color: 'from-teal-500 to-cyan-600', path: '/services/student-essentials',
  },
  {
    title: 'Kitchen Partner Network',
    description: 'B2B commercial kitchen setup, supply chain management, and bulk inventory purchasing for food entrepreneurs.',
    icon: <ChefHat size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80',
    tag: 'Partner B2B', category: 'ecommerce', subCategory: ' Campus Commerce',
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
    imageUrl: 'https://lh3.googleusercontent.com/proxy/BezOz2ftH3Hr3I98owc1aPlmghbiJ0Dd_LQO5We8fAM-lgbffKVSPM4ZSar_jNFtLExSYvHwMi4tA7KFY1utzGDRMYZnz_ZXr40Bz2dmBIlfBh4',
    tag: 'Book Cab', category: 'travel', subCategory: ' Ride Services',
    color: 'from-yellow-500 to-orange-500', path: '/services/cab-ride',
  },
  {
    title: 'Bike Ride',
    description: 'Quick, affordable bike rides to navigate heavy city traffic. Earn cashback on your first 10 weekly rides.',
    icon: <Bike size={20} />,
    imageUrl: 'https://www.shutterstock.com/image-photo/young-indian-couple-riding-on-600nw-2602923967.jpg',
    tag: 'Micro Mobility', category: 'travel', subCategory: ' Ride Services',
    color: 'from-lime-500 to-green-600', path: '/services/bike-ride',
  },
  {
    title: 'Sharing Cab (Local)',
    description: 'Eco-friendly and budget-friendly daily shared cabs for your regular office and college commutes.',
    icon: <Users size={20} />,
    imageUrl: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201409/MIT-Taxi-Sharing-01.jpg?itok=jJ8hduTu',
    tag: 'Ride Pool', category: 'travel', subCategory: ' Ride Services',
    color: 'from-teal-500 to-cyan-600', path: '/services/sharing-cab',
  },
  {
    title: 'Sharing Cab (Outstation)',
    description: 'Book long-distance shared inter-city cabs for weekend getaways and holidays at deeply discounted fares.',
    icon: <Car size={20} />,
    imageUrl: 'https://mumbaipunetaxie.com/wp-content/uploads/2025/05/why-choose-mumbai-pune-taxi-scaled.webp?w=600&q=80',
    tag: 'Outstation Pool', category: 'travel', subCategory: ' Ride Services',
    color: 'from-indigo-500 to-blue-600', path: '/services/sharing-cab-outstation',
  },
  
// ✈ Travel Booking
  {
    title: 'Travel Ticket Booking',
    description: 'Plan and book domestic and international flights and train tickets with Fiinway credit and exclusive offers.',
    icon: <Plane size={20} />,
    imageUrl: 'https://productimages.withfloats.com/serviceimages/tile/66e04db7fb564407d5b4b299Flight-Tickets-Rule',
    tag: 'Flights & Trains', category: 'travel', subCategory: ' Travel Booking',
    color: 'from-sky-500 to-blue-600', path: '/services/travel-booking',
  },
  {
    title: 'Hotel Booking & Stay',
    description: 'Book verified budget stays to luxury resorts with exclusive Fiinway ecosystem cashbacks and loyalty points.',
    icon: <Hotel size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    tag: 'Hotels & Resorts', category: 'travel', subCategory: ' Travel Booking',
    color: 'from-blue-500 to-cyan-600', path: '/services/hotels',
  },

 

  // 📦 Logistics & Delivery
  {
    title: 'Transport Pick & Drop',
    description: 'Reliable same-day pick-and-drop logistics for luggage, parcels, or business inventory with live GPS tracking.',
    icon: <Truck size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    tag: 'Logistics Hub', category: 'travel', subCategory: ' Logistics & Delivery',
    color: 'from-orange-500 to-red-500', path: '/services/transport-pick-drop',
  },
  {
    title: 'Parcel & Delivery Support',
    description: 'Send and receive parcels with Fiinway-verified delivery partners. Get real-time status updates on every shipment.',
    icon: <Package size={20} />,
    imageUrl: 'https://manoharroadlines.com/wp-content/uploads/elementor/thumbs/General-Parcel-Services-r94vbxj3zmq8ksy3nlcdz3iky2nm2gs20oefcvsmio.jpg',
    tag: 'Track & Send', category: 'travel', subCategory: ' Logistics & Delivery',
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
    tag: 'Zero Fee Card', category: 'student', subCategory: ' Student Financial Support',
    color: 'from-teal-500 to-emerald-600', path: '/services/student-credit-card',
  },
  {
    title: 'International Student Card',
    description: 'Multi-currency card for students studying abroad — zero forex markup, accepted globally, powered by Fiinway.',
    icon: <Globe size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80',
    tag: 'Study Abroad', category: 'student', subCategory: ' Student Financial Support',
    color: 'from-sky-500 to-blue-600', path: '/services/international-student-card',
  },
  {
    title: 'Scholarship Platform',
    description: 'Discover and apply for verified corporate-sponsored scholarships, educational grants, and fellowship programs.',
    icon: <BookOpen size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1511203466129-824e631920d7?w=600&q=80',
    tag: 'Grants & Awards', category: 'student', subCategory: ' Student Financial Support',
    color: 'from-amber-500 to-orange-600', path: '/services/scholarship-platform',
  },

  // 🏫 Campus Solutions
  {
    title: 'Campus Store',
    description: 'Shop for textbooks, devices, stationery, and campus merchandise at discounted student prices with Fiinway credit.',
    icon: <Store size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80',
    tag: 'Campus Shop', category: 'student', subCategory: ' Campus Solutions',
    color: 'from-amber-500 to-orange-600', path: '/services/campus-store',
  },
  {
    title: 'Student Cashback Benefits',
    description: 'Earn special student-tier cashback on food, transport, stationery, and entertainment across Fiinway ecosystem.',
    icon: <BadgePercent size={20} />,
    imageUrl: 'https://the-updates.com/wp-content/uploads/2025/10/How-to-Get-a-Student-Credit-Card-as-an-International-Student-2026-1024x683.png',
    tag: 'Student Perks', category: 'student', subCategory: ' Campus Solutions',
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
    tag: 'Accept Payments', category: 'merchant', subCategory: ' Merchant Services',
    color: 'from-indigo-600 to-purple-700', path: '/services/merchant-qr',
  },
  {
    title: 'Business Wallet',
    description: 'A dedicated business wallet to manage receivables, payables, and operational funds with full transaction history.',
    icon: <Landmark size={20} />,
    imageUrl: 'https://zdblogs.zohowebstatic.com/sites/payments/academy/files/04_2.png',
    tag: 'Business Wallet', category: 'merchant', subCategory: ' Merchant Services',
    color: 'from-slate-600 to-slate-800', path: '/services/business-wallet',
  },
  {
    title: 'Collection Management',
    description: 'Automate due collection from customers with smart reminders, recurring payment links, and real-time dashboards.',
    icon: <CircleDollarSign size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    tag: 'Auto Collect', category: 'merchant', subCategory: 'Merchant Services',
    color: 'from-teal-600 to-emerald-700', path: '/services/collection-management',
  },

  // 📈 Business Financial Tools
  {
    title: 'Business Credit Card',
    description: 'Metal commercial cards with high limits, automated expense categorization, GST-ready reports, and team cards.',
    icon: <Briefcase size={20} />,
    imageUrl: 'https://www.livemint.com/lm-img/img/2025/07/04/1600x900/nbm_1751298506561_1751298527507_1751612891668.jpg',
    tag: 'Corporate Card', category: 'merchant', subCategory: ' Business Financial Tools',
    color: 'from-zinc-700 to-slate-900', path: '/services/business-credit-card',
  },
  {
    title: 'Payment Gateway',
    description: 'Robust checkout integration for your website or app with support for all payment modes and low transaction fees.',
    icon: <Cpu size={20} />,
    imageUrl: 'https://www.datocms-assets.com/110819/1700751752-payment_gateway.jpg?auto=format&crop=focalpoint&fit=crop&h=513&w=1026',
    tag: 'Dev Ready API', category: 'merchant', subCategory: ' Business Financial Tools',
    color: 'from-blue-700 to-indigo-900', path: '/services/payment-gateway',
  },
  {
    title: 'Instant Credit Support',
    description: 'Get working capital credit instantly approved for your business with minimal documentation and same-day disbursal.',
    icon: <TrendingUp size={20} />,
    imageUrl: 'https://www.indusind.bank.in/iblogs/wp-content/uploads/What-Is-Instant-Approval-Credit-Cards__.jpg',
    tag: 'Working Capital', category: 'merchant', subCategory: ' Business Financial Tools',
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
    tag: '30 Min Delivery', category: 'lifestyle', subCategory: ' Food & Essentials',
    color: 'from-orange-500 to-red-500', path: '/services/food-delivery',
  },
  {
    title: 'Kitchen Partner Services',
    description: 'Partner with Fiinway as a cloud kitchen — get orders, manage inventory, and process payments all in one place.',
    icon: <ChefHat size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80',
    tag: 'Cloud Kitchen', category: 'lifestyle', subCategory: ' Food & Essentials',
    color: 'from-red-600 to-orange-700', path: '/services/kitchen-partner-lifestyle',
  },

  // 📱 Everyday Utilities
  {
    title: 'Recharge',
    description: 'Top-up mobile, DTH, and data cards instantly for any operator or provider — with cashback on every recharge.',
    icon: <RefreshCcw size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
    tag: 'Instant Top-Up', category: 'lifestyle', subCategory: ' Everyday Utilities',
    color: 'from-cyan-500 to-sky-600', path: '/services/recharge',
  },
  {
    title: 'Bill Payments',
    description: 'Manage and pay all your monthly bills — electricity, gas, water, insurance — from a single organized dashboard.',
    icon: <ReceiptText size={20} />,
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    tag: 'All Bills', category: 'lifestyle', subCategory: ' Everyday Utilities',
    color: 'from-teal-500 to-green-600', path: '/services/bill-payments',
  },
  {
    title: 'Cashback Rewards',
    description: 'Earn and redeem Fiinway Points on every daily spend — groceries, rides, dining, and utilities — every single day.',
    icon: <BadgePercent size={20} />,
    imageUrl: 'https://www.shutterstock.com/image-vector/golden-coin-cashback-banner-bank-600nw-2607054243.jpg',
    tag: 'Daily Rewards', category: 'lifestyle', subCategory: ' Everyday Utilities',
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
   LAYOUT COMPONENTS
───────────────────────────────────────────────── */

// 1. Financial & Credit (3D "Vault" Credit Deck & Simulator)
const FinancialLayout = ({ grouped }: { grouped: Record<string, ServiceItem[]> }) => {
  const services = Object.values(grouped).flat();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeService = services[activeIndex] || services[0];
  
  // Calculator states
  const [amount, setAmount] = React.useState(150000);
  const [tenure, setTenure] = React.useState(12);

  // Simple calculations
  const interestRate = 12.5; // % per annum
  const totalRepayment = Math.round(amount * (1 + (interestRate / 100) * (tenure / 12)));
  const emi = Math.round(totalRepayment / tenure);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8 text-left">
      {/* Left Pane - 3D Card Deck */}
      <div className="lg:col-span-7 flex flex-col justify-center items-center relative py-12 min-h-[380px] bg-slate-100/40 dark:bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-slate-200/50 dark:border-slate-800/80">
        <div className="absolute top-6 left-6 text-xs uppercase font-extrabold tracking-widest text-indigo-500">
          Interactive Credit Vault
        </div>
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative w-72 h-48 sm:w-80 sm:h-52 flex items-center justify-center">
          {services.map((service, idx) => {
            const isActive = idx === activeIndex;
            const offset = idx - activeIndex;
            const absoluteOffset = Math.abs(offset);
            
            // Stack effect configurations
            if (absoluteOffset > 3) return null; // limit visible cards
            
            return (
              <motion.div
                key={service.title}
                onClick={() => setActiveIndex(idx)}
                style={{ zIndex: 10 - absoluteOffset }}
                animate={{
                  scale: isActive ? 1 : 0.9 - absoluteOffset * 0.05,
                  x: isActive ? 0 : offset * 25,
                  y: isActive ? 0 : absoluteOffset * 10,
                  rotate: isActive ? 0 : offset * 4,
                  opacity: isActive ? 1 : 0.4 - absoluteOffset * 0.1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`absolute w-72 h-44 sm:w-80 sm:h-48 rounded-2xl p-6 cursor-pointer select-none shadow-2xl flex flex-col justify-between overflow-hidden border border-white/20 bg-gradient-to-br ${service.color}`}
              >
                {/* Chip & Logo */}
                <div className="flex justify-between items-start">
                  <div className="w-10 h-8 bg-amber-400/80 rounded-md backdrop-blur-sm border border-amber-300/30 flex items-center justify-center shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 bottom-0 left-2 right-2 border-l border-r border-amber-600/30" />
                    <div className="absolute left-0 right-0 top-2 bottom-2 border-t border-b border-amber-600/30" />
                  </div>
                  <div className="text-white/80 font-black tracking-widest text-sm uppercase">FIINWAY</div>
                </div>

                {/* Details */}
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-white leading-tight truncate mb-1 text-left">
                    {service.title}
                  </h4>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-[10px] sm:text-xs font-mono text-white/70 uppercase tracking-widest">
                      {service.tag}
                    </div>
                    <div className="p-2 bg-white/20 rounded-xl text-white backdrop-blur-md">
                      {React.cloneElement(service.icon as React.ReactElement<any>, { size: 18 })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Indicators */}
        <div className="flex gap-2 mt-8 z-10">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-indigo-600' : 'w-2.5 bg-slate-300 dark:bg-slate-750'}`}
            />
          ))}
        </div>
      </div>

      {/* Right Pane - Benefits & Calculator */}
      <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
        {/* Subtle glowing radial blur */}
        <div className={`absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br ${activeService.color} opacity-20 blur-3xl rounded-full pointer-events-none`} />

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${activeService.color}`}>
              {activeService.tag}
            </span>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
              {activeService.subCategory}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white leading-tight text-left">
            {activeService.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-450 leading-relaxed text-left">
            {activeService.description}
          </p>

          <div className="h-px bg-slate-100 dark:bg-slate-800/80 my-4" />

          {/* Interactive Calculator widget */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 text-left">Benefits Calculator</h4>
            
            {/* Amount Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-550 dark:text-slate-400">Credit Needed</span>
                <span className="text-indigo-600 dark:text-indigo-400">₹{amount.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

            {/* Tenure Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-550 dark:text-slate-400">Repayment Period</span>
                <span className="text-indigo-600 dark:text-indigo-400">{tenure} Months</span>
              </div>
              <input
                type="range"
                min="3"
                max="24"
                step="3"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

            {/* Calculated values block */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 text-left">
                <div className="text-[10px] text-slate-400 font-extrabold uppercase">Monthly EMI</div>
                <div className="text-lg font-black text-slate-800 dark:text-white mt-1">₹{emi.toLocaleString('en-IN')}</div>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 text-left">
                <div className="text-[10px] text-slate-400 font-extrabold uppercase">Total Payback</div>
                <div className="text-lg font-black text-slate-800 dark:text-white mt-1">₹{totalRepayment.toLocaleString('en-IN')}</div>
              </div>
            </div>
          </div>
        </div>

        <button className={`mt-6 w-full py-4 rounded-2xl text-white font-bold flex items-center justify-center gap-2 shadow-lg bg-gradient-to-r ${activeService.color} hover:shadow-xl transition-all duration-300`}>
          Apply Instantly
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

// 2. Payment & Banking (The "Money Flow" Live Phone Mockup)
const PaymentLayout = ({ grouped }: { grouped: Record<string, ServiceItem[]> }) => {
  const services = Object.values(grouped).flat();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeService = services[activeIndex] || services[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8 text-left">
      {/* Left Pane - Live Phone Mockup with Custom Animated SVG screens */}
      <div className="lg:col-span-5 flex justify-center items-center py-8">
        <div className="relative w-64 h-[500px] bg-slate-950 rounded-[40px] p-3 shadow-2xl border-[6px] border-slate-800/90 ring-1 ring-slate-700/50 flex flex-col overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-20 flex items-center justify-center">
            <div className="w-12 h-1 bg-slate-900 rounded-full" />
            <div className="w-3.5 h-3.5 bg-slate-900 rounded-full ml-2 border border-slate-950/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-blue-900/60 rounded-full" />
            </div>
          </div>

          {/* Screen Content Wrapper */}
          <div className="w-full h-full bg-slate-900 rounded-[30px] p-4 flex flex-col justify-between relative overflow-hidden z-10 pt-8 text-white select-none">
            {/* Background Neon Pulse */}
            <div className={`absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-tr ${activeService.color} opacity-20 blur-3xl rounded-full`} />

            {/* Screen Header */}
            <div className="flex justify-between items-center text-xs text-slate-400 font-bold px-1">
              <span>Fiinway Pay</span>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Live</span>
              </div>
            </div>

            {/* Simulated Balance widget */}
            <div className="bg-slate-800/40 border border-slate-700/30 p-3.5 rounded-2xl backdrop-blur-md mt-4 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-extrabold tracking-wider">Wallet Balance</div>
              <div className="text-xl font-black mt-1">₹12,850.50</div>
            </div>

            {/* Live Interactive Canvas */}
            <div className="flex-1 flex flex-col justify-center items-center my-6 relative min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="w-full flex flex-col items-center justify-center text-center space-y-4"
                >
                  {/* Dynamic SVG Visuals depending on which payment service is active */}
                  {activeService.title.includes('Transfer') || activeService.title.includes('Money') ? (
                    <div className="relative flex flex-col items-center w-full">
                      <div className="flex gap-10 items-center justify-center relative w-full">
                        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white shadow-lg text-xs">ME</div>
                        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-white shadow-lg text-xs">YOU</div>
                        {/* Flying money path */}
                        <svg className="absolute w-24 h-12 overflow-visible" fill="none">
                          <motion.path
                            d="M 10 24 Q 48 -10 86 24"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />
                          <motion.circle
                            r="5"
                            fill="#f59e0b"
                            animate={{
                              offsetDistance: ["0%", "100%"]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            style={{ offsetPath: "path('M 10 24 Q 48 -10 86 24')" }}
                          />
                        </svg>
                      </div>
                      <div className="text-xs font-semibold text-emerald-400 mt-4 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        Transferring...
                      </div>
                    </div>
                  ) : activeService.title.includes('QR') || activeService.title.includes('Scan') ? (
                    <div className="relative flex flex-col items-center p-2 bg-white rounded-2xl shadow-xl">
                      <QrCode size={80} className="text-slate-900" />
                      {/* Scanning Line */}
                      <motion.div
                        animate={{ y: [0, 72, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-0.5 bg-indigo-500 shadow-md shadow-indigo-400"
                      />
                    </div>
                  ) : activeService.title.includes('Mobile') || activeService.title.includes('Recharge') || activeService.title.includes('DTH') || activeService.title.includes('Top-Up') ? (
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-20 border-4 border-slate-700 rounded-2xl relative p-2 flex items-end bg-slate-950 overflow-hidden shadow-inner">
                        {/* Filled dynamic battery */}
                        <motion.div
                          initial={{ height: "10%" }}
                          animate={{ height: "100%" }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className={`w-full bg-gradient-to-t ${activeService.color} rounded-lg`}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Zap size={20} className="text-white drop-shadow-md animate-pulse" />
                        </div>
                      </div>
                      <div className="text-xs font-bold text-sky-450 mt-3 animate-pulse">Charging Account...</div>
                    </div>
                  ) : (
                    // Utility payments / billing
                    <div className="flex flex-col items-center relative">
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, -2, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${activeService.color} flex items-center justify-center text-white shadow-xl shadow-indigo-500/20`}
                      >
                        <Zap size={28} />
                      </motion.div>
                      <div className="text-xs font-bold text-amber-450 mt-4 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        Settling Bill...
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Screen Footer */}
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-semibold border-t border-slate-800/80 pt-3 px-1">
              <span>Secure Gateway</span>
              <span>v3.42</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Pane - Sleek Interactive List */}
      <div className="lg:col-span-7 flex flex-col gap-4">
        {services.map((service, idx) => {
          const isActive = idx === activeIndex;
          return (
            <motion.div
              key={service.title}
              onClick={() => setActiveIndex(idx)}
              whileHover={{ x: 8 }}
              className={`p-5 rounded-[2rem] border cursor-pointer transition-all flex items-start gap-4 text-left ${isActive ? 'bg-white dark:bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-500/5' : 'bg-slate-50 dark:bg-slate-900/30 border-slate-100 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-900'}`}
            >
              {/* Icon Container with glowing active effect */}
              <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg transition-transform duration-300 ${isActive ? 'scale-110 rotate-6' : 'group-hover:scale-105'}`}>
                {React.cloneElement(service.icon as React.ReactElement<any>, { size: 22 })}
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold text-slate-950 dark:text-white leading-tight">
                    {service.title}
                  </h4>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400">
                    {service.tag}
                  </span>
                </div>
                
                {/* Expandable Description */}
                <motion.p
                  initial={false}
                  animate={{ height: isActive ? "auto" : "20px", opacity: isActive ? 1 : 0.6 }}
                  className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed overflow-hidden"
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// 3. Healthcare & Medical (The "Heartbeat" Pulse Grid)
const HealthcareLayout = ({ grouped }: { grouped: Record<string, ServiceItem[]> }) => {
  const services = Object.values(grouped).flat();
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);
  const [expandedIdx, setExpandedIdx] = React.useState<number | null>(null);

  return (
    <div className="relative mt-8 space-y-8 min-h-[400px] text-left">
      {/* Pulsing heartbeat background path */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-10 overflow-hidden">
        <svg className="w-full h-40 overflow-visible" fill="none">
          <motion.path
            d="M 0 80 L 200 80 L 230 40 L 250 140 L 270 20 L 290 100 L 310 80 L 500 80 L 530 20 L 550 140 L 570 60 L 590 100 L 610 80 L 1000 80"
            stroke="url(#pulseGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              strokeDasharray: ["0, 1000", "1000, 0"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <defs>
            <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {services.map((service, idx) => {
          const isHovered = hoveredIdx === idx;
          const isExpanded = expandedIdx === idx;

          return (
            <motion.div
              key={service.title}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              layout
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`p-6 rounded-[2.5rem] bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border transition-all duration-300 cursor-pointer shadow-xl ${isExpanded ? 'border-rose-500 dark:border-rose-500 md:col-span-2' : 'border-slate-200/50 dark:border-slate-800/85 hover:border-slate-350 dark:hover:border-slate-700'}`}
              onClick={() => setExpandedIdx(isExpanded ? null : idx)}
            >
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                {/* Glowing Pulsing Icon Container */}
                <div className="relative">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-xl z-10 relative`}>
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 26 })}
                  </div>
                  {/* Pulsing light rings */}
                  <motion.div
                    animate={isHovered ? { scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] } : { scale: 1, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} -z-10 blur-sm`}
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-rose-500">
                      {service.tag}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="text-[10px] font-bold text-slate-450 uppercase">
                      {service.subCategory}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-955 dark:text-white leading-tight text-left">
                    {service.title}
                  </h4>

                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 sm:line-clamp-none text-left">
                    {service.description}
                  </p>

                  {/* Fully Animated Expansion using layout animations */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-4 space-y-4 overflow-hidden"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="p-3.5 bg-rose-500/5 rounded-2xl border border-rose-500/10">
                            <div className="text-[10px] uppercase font-black text-rose-500 tracking-wider">Discount Rate</div>
                            <div className="text-sm font-extrabold text-slate-800 dark:text-slate-100 mt-1">Up to 10% Off</div>
                          </div>
                          <div className="p-3.5 bg-rose-500/5 rounded-2xl border border-rose-500/10">
                            <div className="text-[10px] uppercase font-black text-rose-500 tracking-wider">Payment Support</div>
                            <div className="text-sm font-extrabold text-slate-800 dark:text-slate-100 mt-1">Wallet & Credit</div>
                          </div>
                          <div className="p-3.5 bg-rose-500/5 rounded-2xl border border-rose-500/10">
                            <div className="text-[10px] uppercase font-black text-rose-500 tracking-wider">MDR Pricing</div>
                            <div className="text-sm font-extrabold text-slate-800 dark:text-slate-100 mt-1">0% interest options</div>
                          </div>
                        </div>
                        <p className="text-xs text-slate-400">
                          Fiinway Care Network guarantees standard cashless treatments at over 6,500 partner clinics and hospitals across India.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="text-xs font-bold text-rose-500 pt-2 flex items-center gap-1">
                    {isExpanded ? "Click to collapse" : "Click to view benefits"} &rarr;
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// 4. Ecommerce & Marketplace (3D "Unboxing" Product Showcase)
const EcommerceLayout = ({ grouped }: { grouped: Record<string, ServiceItem[]> }) => {
  const services = Object.values(grouped).flat();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 text-left">
      {services.map((service) => {
        // Isometric mouse/card tilt motion values
        const x = useMotionValue(0);
        const y = useMotionValue(0);

        // Map mouse movements into degrees of rotations
        const rotateX = useTransform(y, [-100, 100], [10, -10]);
        const rotateY = useTransform(x, [-100, 100], [-10, 10]);

        function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
          const rect = event.currentTarget.getBoundingClientRect();
          const width = rect.width;
          const height = rect.height;
          const mouseX = event.clientX - rect.left - width / 2;
          const mouseY = event.clientY - rect.top - height / 2;
          x.set(mouseX);
          y.set(mouseY);
        }

        function handleMouseLeave() {
          x.set(0);
          y.set(0);
        }

        return (
          <motion.div
            key={service.title}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl h-[360px] flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            {/* Background Image Showcase */}
            <div className="absolute inset-0 z-0">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
            </div>

            {/* Custom 3D "Unboxing" Top Flap Effect */}
            <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-white/10 to-transparent group-hover:h-8 transition-all duration-300 border-b border-white/5 z-20 pointer-events-none" />

            {/* Floating Price Tag/Tagline */}
            <div className="absolute top-5 right-5 z-20" style={{ transform: "translateZ(30px)" }}>
              <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase text-white shadow-lg bg-gradient-to-r ${service.color} border border-white/20`}>
                {service.tag}
              </span>
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-7 flex flex-col justify-between h-full text-left" style={{ transform: "translateZ(20px)" }}>
              {/* Product Box Icon Header */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-xl border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {React.cloneElement(service.icon as React.ReactElement<any>, { size: 24 })}
              </div>

              {/* Box Content details springing on hover */}
              <div className="space-y-3">
                <h4 className="text-2xl font-black text-white leading-tight">
                  {service.title}
                </h4>
                
                <p className="text-sm text-slate-350 leading-relaxed line-clamp-3 group-hover:text-slate-100 transition-colors">
                  {service.description}
                </p>

                {/* Micro unboxing flying buttons */}
                <div className="flex gap-3 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">
                  <span className="px-3 py-1 rounded-lg bg-white/10 text-white border border-white/10 text-[10px] font-bold">
                    100% Secure
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 text-white border border-white/10 text-[10px] font-bold">
                    Easy Return
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// 5. Travel & Transport (The "Wanderlust" SVG Route Tracker)
const TravelLayout = ({ grouped }: { grouped: Record<string, ServiceItem[]> }) => {
  const services = Object.values(grouped).flat();
  const [activeIdx, setActiveIdx] = React.useState(0);
  const activeService = services[activeIdx] || services[0];

  // Map each service to an SVG path coordinate along our custom route map
  // Desktop nodes coordinates
  const nodes = [
    { x: 50, y: 70 },
    { x: 180, y: 30 },
    { x: 320, y: 110 },
    { x: 450, y: 50 },
    { x: 580, y: 90 },
    { x: 720, y: 30 },
    { x: 860, y: 110 },
    { x: 980, y: 60 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8 relative text-left">
      {/* Left side: Custom travel route tracking visual */}
      <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-center items-center overflow-hidden min-h-[380px] relative">
        <div className="absolute top-6 left-6 text-xs uppercase font-extrabold tracking-widest text-sky-400 z-10">
          Wanderlust Map Route
        </div>

        {/* Abstract Sky background */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

        {/* Animated glowing SVG map */}
        <div className="relative w-full max-w-[620px] aspect-[16/9] z-10 flex items-center justify-center p-4">
          <svg viewBox="0 0 1000 150" className="w-full h-full overflow-visible">
            {/* The dotted track route */}
            <motion.path
              d="M 50 70 Q 180 30 320 110 T 580 90 T 860 110 T 980 60"
              fill="none"
              stroke="#1e293b"
              strokeWidth="6"
              strokeLinecap="round"
            />
            
            <motion.path
              d="M 50 70 Q 180 30 320 110 T 580 90 T 860 110 T 980 60"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="6 6"
            />

            {/* Glowing route nodes */}
            {services.map((service, idx) => {
              const node = nodes[idx] || { x: 50, y: 70 };
              const isActive = idx === activeIdx;

              return (
                <g key={service.title} className="cursor-pointer" onClick={() => setActiveIdx(idx)}>
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={isActive ? 16 : 8}
                    fill={isActive ? "#38bdf8" : "#1e293b"}
                    stroke={isActive ? "rgba(56,189,248,0.3)" : "rgba(255,255,255,0.1)"}
                    strokeWidth={isActive ? 10 : 2}
                    className="transition-all duration-300"
                  />
                  {isActive && (
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="20"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  {/* Micro node label */}
                  <text
                    x={node.x}
                    y={node.y - 25}
                    textAnchor="middle"
                    fill={isActive ? "#38bdf8" : "#94a3b8"}
                    className="text-[14px] font-mono font-bold tracking-tight select-none"
                  >
                    {service.title.split(' ')[0]}
                  </text>
                </g>
              );
            })}

            {/* The active transport vehicle following along the path to the selected index */}
            <motion.g
              animate={{
                x: (nodes[activeIdx] || { x: 50 }).x - 12,
                y: (nodes[activeIdx] || { y: 70 }).y - 12
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <circle r="12" fill="#38bdf8" className="shadow-2xl shadow-sky-400" />
              {activeService.title.includes('Flight') || activeService.title.includes('Plane') || activeService.title.includes('Ticket') ? (
                <Plane size={14} className="text-slate-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
              ) : activeService.title.includes('Cab') || activeService.title.includes('Car') ? (
                <Car size={14} className="text-slate-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              ) : activeService.title.includes('Bike') ? (
                <Bike size={14} className="text-slate-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              ) : (
                <Truck size={14} className="text-slate-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              )}
            </motion.g>
          </svg>
        </div>

        {/* Path Tracker instruction */}
        <p className="text-xs text-slate-500 mt-4 text-center">
          Tap the nodes on the map or select a service card below to animate the traveler along the path
        </p>
      </div>

      {/* Right side: Premium ticket styled detail card & simple swiper */}
      <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
        {/* Ticket Top & Bottom semi-circle cutouts (Classic flight boarding pass style) */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-50 dark:bg-[#0B1120] border-r border-slate-200 dark:border-slate-800/80 z-20 pointer-events-none" />
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-50 dark:bg-[#0B1120] border-l border-slate-200 dark:border-slate-800/80 z-20 pointer-events-none" />
        
        {/* Glowing aura */}
        <div className={`absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br ${activeService.color} opacity-20 blur-3xl rounded-full pointer-events-none`} />

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className={`px-3 py-1 rounded-full text-xs font-black uppercase text-white bg-gradient-to-r ${activeService.color} tracking-widest`}>
              {activeService.tag}
            </span>
            <div className="text-xs font-bold text-slate-400 font-mono">
              BOARDING PASS
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${activeService.color} text-white shadow-xl`}>
              {React.cloneElement(activeService.icon as React.ReactElement<any>, { size: 24 })}
            </div>
            <div className="text-left">
              <h4 className="text-2xl font-black text-slate-950 dark:text-white leading-tight">
                {activeService.title}
              </h4>
              <p className="text-xs text-slate-450 font-semibold mt-1">
                {activeService.subCategory}
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-left">
            {activeService.description}
          </p>

          {/* Dotted divisor representing tearing ticket line */}
          <div className="border-t border-dashed border-slate-200 dark:border-slate-850 my-6" />

          {/* Simulated Ticket Details */}
          <div className="grid grid-cols-2 gap-4 text-xs font-mono text-left">
            <div>
              <div className="text-slate-400 font-extrabold uppercase text-[10px]">ROUTE</div>
              <div className="text-slate-805 dark:text-slate-100 font-black mt-1 uppercase">FIINWAY P2P</div>
            </div>
            <div>
              <div className="text-slate-400 font-extrabold uppercase text-[10px]">GATEWAY</div>
              <div className="text-slate-805 dark:text-slate-100 font-black mt-1 uppercase">Instant Ticket</div>
            </div>
          </div>
        </div>

        {/* Ticket bar code */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="h-10 w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#475569_2px,#475569_4px,transparent_4px,transparent_8px,#475569_8px,#475569_14px)] opacity-40 dark:opacity-60 rounded" />
          <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
            {activeService.title.replace(/\s+/g, '-').toUpperCase()}
          </div>
        </div>

        {/* Micro slider buttons for mobile screens */}
        <div className="flex gap-2 justify-center mt-6 lg:hidden">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? 'w-6 bg-sky-500' : 'w-2 bg-slate-300 dark:bg-slate-700'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 6. Student & Education (The "Notebook" Polaroid Flipboard)
const StudentLayout = ({ grouped }: { grouped: Record<string, ServiceItem[]> }) => {
  const services = Object.values(grouped).flat();
  const [flippedCards, setFlippedCards] = React.useState<Record<number, boolean>>({});

  const toggleFlip = (idx: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="relative mt-8 p-6 md:p-10 rounded-[2.5rem] bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] bg-[size:20px_20px] bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-900 overflow-hidden text-left">
      {/* Polaroid stickers & hand drawn decorations */}
      <div className="absolute top-5 left-5 w-8 h-8 rounded-full bg-yellow-400/80 border-2 border-slate-950 flex items-center justify-center text-slate-900 font-extrabold text-sm rotate-6 pointer-events-none shadow-md z-20">★</div>
      <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-emerald-400/80 border-2 border-slate-950 flex items-center justify-center text-slate-900 font-extrabold text-xs -rotate-12 pointer-events-none shadow-md z-20">NEW</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {services.map((service, idx) => {
          const isFlipped = flippedCards[idx] || false;
          
          // Generate a fixed random slant rotation angle based on index
          const randomTilt = ((idx % 3) - 1) * 2; // -2deg, 0deg, 2deg

          return (
            <div
              key={service.title}
              className="relative w-full h-[380px] cursor-pointer"
              style={{ perspective: 1000 }}
              onClick={() => toggleFlip(idx)}
            >
              {/* Inner card with 3D Flip capability */}
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0, rotateZ: isFlipped ? 0 : randomTilt }}
                whileHover={!isFlipped ? { scale: 1.04, rotateZ: 0, zIndex: 10 } : {}}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full relative"
              >
                {/* ── CARD FRONT (Polaroid Photo styled note) ── */}
                <div
                  style={{ backfaceVisibility: "hidden" }}
                  className="absolute inset-0 bg-white dark:bg-slate-900 border-[8px] border-white dark:border-slate-900 rounded-3xl p-5 flex flex-col justify-between shadow-xl text-left"
                >
                  {/* Photo area */}
                  <div className="relative w-full h-[180px] bg-slate-900 rounded-2xl overflow-hidden shadow-inner group">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Floating sticker tag */}
                    <div className="absolute top-3 left-3 bg-slate-955/75 border border-white/20 backdrop-blur-md px-3 py-1 rounded-xl text-[9px] uppercase font-black text-white tracking-widest z-10">
                      {service.tag}
                    </div>

                    <div className="absolute bottom-4 left-4 p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white">
                      {React.cloneElement(service.icon as React.ReactElement<any>, { size: 24 })}
                    </div>
                  </div>

                  {/* Captions area */}
                  <div className="flex-1 flex flex-col justify-center py-4 space-y-1 text-left">
                    <h4 className="text-xl font-black text-slate-800 dark:text-white leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Interactive hint */}
                  <div className="text-[10px] text-indigo-500 dark:text-indigo-400 font-extrabold uppercase text-center border-t border-slate-100 dark:border-slate-800/80 pt-2 flex items-center justify-center gap-1">
                    Tap to Flip Card 🔄
                  </div>
                </div>

                {/* ── CARD BACK (Hand-written memo notepad style) ── */}
                <div
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  className={`absolute inset-0 rounded-3xl p-6 flex flex-col justify-between shadow-2xl border-4 border-slate-950 text-slate-950 bg-gradient-to-br ${service.color} text-left`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b-2 border-slate-950/20 pb-3">
                      <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow">
                        {React.cloneElement(service.icon as React.ReactElement<any>, { size: 20 })}
                      </div>
                      <span className="text-[9px] uppercase font-black tracking-widest text-white bg-slate-950 px-3 py-1 rounded-full shadow">
                        ELIGIBLE
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white leading-tight drop-shadow-md">
                      {service.title}
                    </h4>

                    {/* Checklists */}
                    <div className="space-y-2.5 pt-2 text-white font-semibold">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-slate-950 font-black">✔</span>
                        <span>Available for all active college IDs</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-slate-950 font-black">✔</span>
                        <span>Earn double rewards points</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-slate-950 font-black">✔</span>
                        <span>0% APR up to 45 days tenure</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-white font-extrabold uppercase text-center border-t border-white/20 pt-3 flex items-center justify-center gap-1">
                    Tap to view card 🔄
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 7. Merchant & Business (The "Command Center" Live Analytics Dashboard)
const MerchantLayout = ({ grouped }: { grouped: Record<string, ServiceItem[]> }) => {
  const services = Object.values(grouped).flat();
  const [activeIdx, setActiveIdx] = React.useState(0);
  const activeService = services[activeIdx] || services[0];

  // Simulator state: increment transaction values dynamically to simulate a live system
  const [transactionCount, setTransactionCount] = React.useState(1850);
  const [totalSettlements, setTotalSettlements] = React.useState(482900);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTransactionCount((prev) => prev + Math.floor(Math.random() * 3));
      setTotalSettlements((prev) => prev + Math.floor(Math.random() * 250));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8 text-left">
      {/* Left side: Sleek Merchant cards list */}
      <div className="lg:col-span-6 flex flex-col gap-4">
        {services.map((service, idx) => {
          const isActive = idx === activeIdx;
          return (
            <motion.div
              key={service.title}
              onClick={() => setActiveIdx(idx)}
              whileHover={{ x: 8 }}
              className={`p-6 rounded-2xl border cursor-pointer transition-all flex items-start gap-4 text-left ${isActive ? 'bg-slate-900 border-indigo-500 text-white shadow-2xl' : 'bg-slate-50 dark:bg-slate-900/30 border-slate-200/50 dark:border-slate-800/80 text-slate-800 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-900'}`}
            >
              <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-xl`}>
                {React.cloneElement(service.icon as React.ReactElement<any>, { size: 22 })}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold leading-tight">{service.title}</h4>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-indigo-500">
                    {service.tag}
                  </span>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed line-clamp-2 ${isActive ? 'text-slate-350' : 'text-slate-500 dark:text-slate-400'}`}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Right side: High-Tech Cyberpunk Live Analytics Dashboard */}
      <div className="lg:col-span-6 bg-slate-950 border border-slate-900 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden min-h-[420px]">
        {/* Glow grid in background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />
        
        {/* Ambient indicator lights */}
        <div className={`absolute -right-32 -top-32 w-64 h-64 bg-gradient-to-br ${activeService.color} opacity-20 blur-3xl rounded-full pointer-events-none`} />

        {/* Dashboard Header */}
        <div className="flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">Fiinway HQ Terminal</span>
          </div>
          <div className="text-[10px] font-mono text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded bg-indigo-500/5">
            MDR: 0% APR
          </div>
        </div>

        {/* Animated Analytics Metrics */}
        <div className="grid grid-cols-2 gap-4 mt-6 z-10">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-left">
            <div className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">Simulated Txs Today</div>
            <div className="text-2xl font-black mt-1 font-mono text-indigo-400">
              {transactionCount}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-left">
            <div className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">Settlements Processed</div>
            <div className="text-2xl font-black mt-1 font-mono text-emerald-400">
              ₹{totalSettlements.toLocaleString('en-IN')}
            </div>
          </div>
        </div>

        {/* Live Sparkline Graph Simulator */}
        <div className="flex-1 flex flex-col justify-center items-center my-6 z-10 relative">
          <div className="w-full flex justify-between items-end h-28 gap-2.5 px-4 relative">
            {/* Visual simulation of bar chart based on selected card */}
            {[50, 80, 45, 90, 60, 85, 100, 70].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: "0%" }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                className={`w-full rounded-t-md bg-gradient-to-t ${activeService.color} shadow-lg`}
              />
            ))}
          </div>
          <div className="w-full border-t border-slate-800 mt-2 flex justify-between px-2 text-[9px] text-slate-500 font-mono">
            <span>09:00</span>
            <span>12:00</span>
            <span>15:00</span>
            <span>18:00</span>
          </div>
        </div>

        {/* Dynamic transaction updates notifications ticker */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center gap-3 z-10">
          <div className={`p-2 rounded-xl bg-gradient-to-br ${activeService.color} text-white shadow`}>
            {React.cloneElement(activeService.icon as React.ReactElement<any>, { size: 16 })}
          </div>
          <div className="flex-1 flex justify-between items-center text-xs font-mono text-slate-350">
            <div className="text-left">
              <span className="text-emerald-400 font-bold">✔ OK </span>
              <span>{activeService.title} online</span>
            </div>
            <span className="text-slate-500 text-[10px]">Just now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 8. Lifestyle (The "Wheel of Convenience" Clock Layout)
const LifestyleLayout = ({ grouped }: { grouped: Record<string, ServiceItem[]> }) => {
  const services = Object.values(grouped).flat();
  const [activeSegment, setActiveSegment] = React.useState<'morning' | 'afternoon' | 'evening' | 'night'>('morning');

  // Filter services into time of day segments
  const segmentedServices = React.useMemo(() => {
    return {
      morning: services.filter((s) => s.title.includes('Food') || s.title.includes('Kitchen')),
      afternoon: services.filter((s) => s.title.includes('Recharge')),
      evening: services.filter((s) => s.title.includes('Bill') || s.title.includes('Payments')),
      night: services.filter((s) => s.title.includes('Cashback') || s.title.includes('Rewards'))
    };
  }, [services]);

  const activeServices = segmentedServices[activeSegment] || segmentedServices.morning;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8 text-left">
      {/* Left side: Beautiful clock layout wheel selection */}
      <div className="lg:col-span-5 flex flex-col justify-center items-center py-6">
        <div className="relative w-72 h-72 rounded-full border-4 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl flex items-center justify-center p-4">
          
          {/* Glowing central core */}
          <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg relative z-20 font-black text-xs">
            DAY
          </div>

          {/* Morning segment slice */}
          <button
            onClick={() => setActiveSegment('morning')}
            className={`absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10 transition-all ${activeSegment === 'morning' ? 'scale-110 text-orange-500 font-bold' : 'text-slate-400 hover:text-slate-650'}`}
          >
            <span className="text-xl font-bold">🌅</span>
            <span className="text-[10px] font-extrabold uppercase mt-1">Morning</span>
          </button>

          {/* Afternoon segment slice */}
          <button
            onClick={() => setActiveSegment('afternoon')}
            className={`absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 transition-all ${activeSegment === 'afternoon' ? 'scale-110 text-yellow-500 font-bold' : 'text-slate-400 hover:text-slate-650'}`}
          >
            <span className="text-xl font-bold">☀️</span>
            <span className="text-[10px] font-extrabold uppercase mt-1">Afternoon</span>
          </button>

          {/* Evening segment slice */}
          <button
            onClick={() => setActiveSegment('evening')}
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10 transition-all ${activeSegment === 'evening' ? 'scale-110 text-indigo-500 font-bold' : 'text-slate-400 hover:text-slate-650'}`}
          >
            <span className="text-xl font-bold">🌆</span>
            <span className="text-[10px] font-extrabold uppercase mt-1">Evening</span>
          </button>

          {/* Night segment slice */}
          <button
            onClick={() => setActiveSegment('night')}
            className={`absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 transition-all ${activeSegment === 'night' ? 'scale-110 text-rose-500 font-bold' : 'text-slate-400 hover:text-slate-650'}`}
          >
            <span className="text-xl font-bold">🌃</span>
            <span className="text-[10px] font-extrabold uppercase mt-1">Night</span>
          </button>
        </div>

        {/* Clock instructions */}
        <p className="text-xs text-slate-500 mt-6 text-center">
          Click different slices of the day wheel to filter lifestyle services
        </p>
      </div>

      {/* Right side: Active services listing with spring transitions */}
      <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSegment}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            {activeServices.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -8 }}
                className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 shadow-xl flex flex-col justify-between min-h-[220px] text-left"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                      {React.cloneElement(service.icon as React.ReactElement<any>, { size: 18 })}
                    </div>
                    <span className="text-[9px] uppercase font-black tracking-widest text-slate-400">
                      {service.tag}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-955 dark:text-white leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed text-left">
                    {service.description}
                  </p>
                </div>
                
                <button className="text-xs font-bold text-slate-950 dark:text-white mt-4 inline-flex items-center gap-1 hover:opacity-85 text-left">
                  Unlock now &rarr;
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────── */
export const ServiceCatalog: React.FC = () => {
  const orderedCategories: Category[] = [
    'financial',
    'payment',
    'healthcare',
    'ecommerce',
    'travel',
    'student',
    'merchant',
    'lifestyle',
  ];

  return (
    <div className="w-full bg-slate-55 dark:bg-[#0B1120] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-16 space-y-32">
        {orderedCategories.map((category) => {
          const meta = categoryMeta[category];
          const services = allServices.filter((s) => s.category === category);

          const grouped = services.reduce<Record<string, ServiceItem[]>>(
            (acc, s) => {
              if (!acc[s.subCategory]) acc[s.subCategory] = [];
              acc[s.subCategory].push(s);
              return acc;
            },
            {}
          );

          let LayoutComponent;
          switch (category) {
            case 'financial': LayoutComponent = <FinancialLayout grouped={grouped} />; break;
            case 'payment': LayoutComponent = <PaymentLayout grouped={grouped} />; break;
            case 'healthcare': LayoutComponent = <HealthcareLayout grouped={grouped} />; break;
            case 'ecommerce': LayoutComponent = <EcommerceLayout grouped={grouped} />; break;
            case 'travel': LayoutComponent = <TravelLayout grouped={grouped} />; break;
            case 'student': LayoutComponent = <StudentLayout grouped={grouped} />; break;
            case 'merchant': LayoutComponent = <MerchantLayout grouped={grouped} />; break;
            case 'lifestyle': LayoutComponent = <LifestyleLayout grouped={grouped} />; break;
            default: LayoutComponent = <FinancialLayout grouped={grouped} />;
          }

          return (
            <section key={category} className="scroll-mt-24" id={category}>
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-slate-205 dark:border-slate-800 pb-8 text-left">
                <div className="max-w-3xl">
                  <h2 className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${meta.gradient} bg-clip-text text-transparent mb-4 tracking-tight`}>
                    {meta.title}
                  </h2>
                  <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
                    {meta.subtitle}
                  </p>
                </div>
              </div>

              {/* Unique Layout */}
              <div className="mt-8">
                {LayoutComponent}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

