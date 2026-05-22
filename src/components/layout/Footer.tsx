import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, UserCheck, Shield, CheckCircle } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa';
import logo from '../../../public/favicon.svg';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">
      {/* 3. Trust & Security Badges Strip */}
      <div className="border-b border-slate-800/60 bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-medium text-slate-400">
            <div className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> Secure Payments</div>
            <div className="flex items-center gap-2"><Lock size={16} className="text-emerald-500" /> Encrypted Transactions</div>
            <div className="flex items-center gap-2"><UserCheck size={16} className="text-emerald-500" /> Verified Users Only</div>
            <div className="flex items-center gap-2"><Shield size={16} className="text-emerald-500" /> Subscription-Based Access</div>
            <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-500" /> Data Privacy Protection</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* 4 & 6. Company Information & Socials */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img
                src={logo}
                alt="Fiinway Logo"
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(135deg,#E94E24 0%,#F3C326 50%,#69C281 100%)'}}>
                Fiinway
              </span>
            </Link>
            
            <div className="text-slate-400 mb-8 space-y-2 text-sm leading-relaxed">
              <p className="font-semibold text-slate-300 text-base mb-3">FIINWAY TECHNOLOGIES PRIVATE LIMITED</p>
              <p>Lucknow, Uttar Pradesh, India</p>
              <p>CIN: U72900UP2026PTC123456</p>
              <p>GST: 09XXXXXXXXXX1Z1</p>
              <p>Support Email: <a href="mailto:support@fiinway.com" className="hover:brightness-110 transition-all" style={{color:'#F3C326'}}>support@fiinway.com</a></p>
              <p>Customer Care: <a href="tel:18001234567" className="hover:brightness-110 transition-all" style={{color:'#F3C326'}}>1800-123-4567</a></p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center hover:-translate-y-1 text-slate-300 hover:text-white transition-all" style={{}} onMouseEnter={e=>(e.currentTarget.style.background='#E94E24')} onMouseLeave={e=>(e.currentTarget.style.background='')}><FaInstagram size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center hover:-translate-y-1 text-slate-300 hover:text-white transition-all" onMouseEnter={e=>(e.currentTarget.style.background='#E94E24')} onMouseLeave={e=>(e.currentTarget.style.background='')}><FaFacebook size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center hover:-translate-y-1 text-slate-300 hover:text-white transition-all" onMouseEnter={e=>(e.currentTarget.style.background='#E94E24')} onMouseLeave={e=>(e.currentTarget.style.background='')}><FaLinkedin size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center hover:-translate-y-1 text-slate-300 hover:text-white transition-all" onMouseEnter={e=>(e.currentTarget.style.background='#E94E24')} onMouseLeave={e=>(e.currentTarget.style.background='')}><FaYoutube size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center hover:-translate-y-1 text-slate-300 hover:text-white transition-all" onMouseEnter={e=>(e.currentTarget.style.background='#E94E24')} onMouseLeave={e=>(e.currentTarget.style.background='')}><FaTwitter size={16} /></a>
            </div>
          </div>

          {/* 1. Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm" style={{color:'#F3C326'}}>Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/" className="text-slate-400 transition-colors" onMouseEnter={e=>(e.currentTarget.style.color='#F3C326')} onMouseLeave={e=>(e.currentTarget.style.color='')}>Home</Link></li>
              <li><Link to="/about" className="text-slate-400 transition-colors" onMouseEnter={e=>(e.currentTarget.style.color='#F3C326')} onMouseLeave={e=>(e.currentTarget.style.color='')}>About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 transition-colors" onMouseEnter={e=>(e.currentTarget.style.color='#F3C326')} onMouseLeave={e=>(e.currentTarget.style.color='')}>Services</Link></li>
              <li><Link to="/pricing" className="text-slate-400 transition-colors" onMouseEnter={e=>(e.currentTarget.style.color='#F3C326')} onMouseLeave={e=>(e.currentTarget.style.color='')}>Subscription Plans</Link></li>
              <li><Link to="/merchant" className="text-slate-400 transition-colors" onMouseEnter={e=>(e.currentTarget.style.color='#F3C326')} onMouseLeave={e=>(e.currentTarget.style.color='')}>Merchant Program</Link></li>
              <li><Link to="/student" className="text-slate-400 transition-colors" onMouseEnter={e=>(e.currentTarget.style.color='#F3C326')} onMouseLeave={e=>(e.currentTarget.style.color='')}>Student Services</Link></li>
              <li><Link to="/healthcare" className="text-slate-400 hover:text-indigo-400 transition-colors">Healthcare Services</Link></li>
              <li><Link to="/travel" className="text-slate-400 hover:text-indigo-400 transition-colors">Travel Services</Link></li>
              <li><Link to="/marketplace" className="text-slate-400 hover:text-indigo-400 transition-colors">Marketplace</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* 7 & 2. Customer Support & Legal */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm" style={{color:'#F3C326'}}>Customer Support</h4>
            <ul className="flex flex-col gap-3 text-sm mb-10">
              <li><Link to="/support/24-7" className="text-slate-400 hover:text-indigo-400 transition-colors">24×7 Support</Link></li>
             
              <li><Link to="/support/raise-complaint" className="text-slate-400 hover:text-indigo-400 transition-colors">Raise Complaint</Link></li>
              <li><Link to="/support/track-ticket" className="text-slate-400 hover:text-indigo-400 transition-colors">Track Ticket</Link></li>
            </ul>

            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm" style={{color:'#F3C326'}}>Legal & Compliance</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/legal/privacy-policy" className="text-slate-400 hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/terms" className="text-slate-400 hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/legal/refund-policy" className="text-slate-400 hover:text-indigo-400 transition-colors">Refund Policy</Link></li>
              <li><Link to="/legal/cancellation-policy" className="text-slate-400 hover:text-indigo-400 transition-colors">Cancellation Policy</Link></li>
    
              <li><Link to="/legal/kyc-policy" className="text-slate-400 hover:text-indigo-400 transition-colors">KYC Policy</Link></li>
              <li><Link to="/legal/cookie-policy" className="text-slate-400 hover:text-indigo-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* 5. Download App Section */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm" style={{color:'#F3C326'}}>Download Fiinway App</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Experience the full power of our ecosystem directly on your mobile device.
            </p>
            
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl px-4 py-3 transition-all group" onMouseEnter={e=>(e.currentTarget.style.borderColor='#E94E24')} onMouseLeave={e=>(e.currentTarget.style.borderColor='')}>
                <FaGooglePlay size={24} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400">Get it on</span>
                  <span className="text-sm font-semibold text-white">Google Play</span>
                </div>
              </a>
              
              <div className="relative group mt-2">
                <div className="flex items-center gap-3 bg-slate-800/40 border border-slate-800/50 rounded-xl px-4 py-3 opacity-70 cursor-not-allowed">
                  <FaApple size={24} className="text-slate-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500">Download on the</span>
                    <span className="text-sm font-semibold text-slate-400">App Store</span>
                  </div>
                </div>
                <span className="absolute -top-3 -right-2 text-white text-[10px] uppercase font-extrabold px-2.5 py-1 rounded-full shadow-lg" style={{background:'linear-gradient(135deg,#E94E24,#F3C326)' , boxShadow:'0 4px 14px #E94E2440'}}>
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col items-center justify-center text-center gap-2">
          <p className="font-bold tracking-widest text-sm uppercase bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(135deg,#E94E24 0%,#F3C326 50%,#69C281 100%)'}}>
            One App. Complete Financial Ecosystem.
          </p>
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} FIINWAY TECHNOLOGIES PRIVATE LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
