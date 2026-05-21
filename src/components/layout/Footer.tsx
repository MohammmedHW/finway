import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Button } from '../ui/Button';
import logo from '../../../public/favicon.svg';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10 text-slate-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
               <img
              src={logo}
              alt="Finway Logo"
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
              <span className="text-xl font-bold text-white">
                Finway<span className="font-light">Ecosystem</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm">
              The premium multi-service platform built for the future. We combine world-class design with enterprise-grade infrastructure.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 text-white transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 text-white transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 text-white transition-colors">
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services/payments" className="text-slate-400 hover:text-white transition-colors">Payments</Link></li>
              <li><Link to="/services/cloud" className="text-slate-400 hover:text-white transition-colors">Cloud & AI</Link></li>
              <li><Link to="/services/travel" className="text-slate-400 hover:text-white transition-colors">Travel Booking</Link></li>
              <li><Link to="/services/logistics" className="text-slate-400 hover:text-white transition-colors">Logistics</Link></li>
              <li><Link to="/services" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 mt-2">All Services <ArrowRight size={14} /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Subscribe</h4>
            <p className="text-slate-400 mb-4 text-sm">Stay updated with our latest ecosystem news.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
              <Button variant="primary" className="w-full">Subscribe</Button>
            </form>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Finway Ecosystem. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/faq" className="text-slate-500 hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
