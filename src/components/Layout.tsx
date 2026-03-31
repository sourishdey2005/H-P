import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Linkedin,
  MapPin,
  ShieldCheck,
  Share2,
  Link as LinkIcon
} from 'lucide-react';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md shadow-xl">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
          <Link to="/" className="text-xl font-black tracking-tighter text-white uppercase font-display">
            H & P Projects
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link 
              className={`font-sans font-bold tracking-tight uppercase text-sm transition-colors ${location.pathname === '/' ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-slate-300 hover:text-white'}`} 
              to="/"
            >
              Home
            </Link>
            <Link 
              className={`font-sans font-bold tracking-tight uppercase text-sm transition-colors ${location.pathname === '/business' ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-slate-300 hover:text-white'}`} 
              to="/business"
            >
              Our Business
            </Link>
            <Link 
              className={`font-sans font-bold tracking-tight uppercase text-sm transition-colors ${location.pathname === '/innovation' ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-slate-300 hover:text-white'}`} 
              to="/innovation"
            >
              Innovation
            </Link>
            <Link 
              className={`font-sans font-bold tracking-tight uppercase text-sm transition-colors ${location.pathname === '/careers' ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-slate-300 hover:text-white'}`} 
              to="/careers"
            >
              Careers
            </Link>
            <Link 
              className={`font-sans font-bold tracking-tight uppercase text-sm transition-colors ${location.pathname === '/contact' ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-slate-300 hover:text-white'}`} 
              to="/contact"
            >
              Contact Us
            </Link>
            <button className="bg-primary-container px-6 py-2 text-white font-label text-xs tracking-widest uppercase hover:bg-secondary transition-all duration-300">
              Get a Quote
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 w-full mt-auto border-t border-slate-800">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16">
            <div className="md:col-span-2 flex flex-col gap-6">
              <span className="text-lg font-bold text-white font-display uppercase">H & P Projects</span>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Empowering industrial growth through innovative engineering and unwavering precision. Your partner in building India's future.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 flex items-center justify-center border border-slate-700 hover:border-secondary transition-colors text-slate-400 hover:text-secondary" href="#">
                  <Share2 className="w-4 h-4" />
                </a>
                <a className="w-10 h-10 flex items-center justify-center border border-slate-700 hover:border-secondary transition-colors text-slate-400 hover:text-secondary" href="#">
                  <LinkIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-secondary font-label text-xs tracking-widest uppercase mb-2">Quick Links</span>
              <Link className="text-slate-500 hover:text-white transition-colors text-xs font-label uppercase" to="/">Home</Link>
              <Link className="text-slate-500 hover:text-white transition-colors text-xs font-label uppercase" to="/business">Business</Link>
              <Link className="text-slate-500 hover:text-white transition-colors text-xs font-label uppercase" to="/innovation">Innovation</Link>
              <Link className="text-slate-500 hover:text-white transition-colors text-xs font-label uppercase" to="/careers">Careers</Link>
              <Link className="text-slate-500 hover:text-white transition-colors text-xs font-label uppercase" to="/contact">Contact</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-secondary font-label text-xs tracking-widest uppercase mb-2">Connect</span>
              <a className="text-slate-500 hover:text-white transition-colors text-xs font-label uppercase flex items-center gap-2" href="#">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a className="text-slate-500 hover:text-white transition-colors text-xs font-label uppercase flex items-center gap-2" href="#">
                <ShieldCheck className="w-4 h-4" /> Safety Standards
              </a>
            </div>
          </div>
          <div className="px-12 py-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 font-label text-[10px] tracking-widest uppercase">© 2024 H & P Projects. Precision in Engineering.</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="font-label text-[10px] tracking-widest uppercase text-slate-500">Systems Operational</span>
              </div>
            </div>
            <div className="flex gap-8">
              <a className="text-slate-500 hover:text-secondary transition-colors text-[10px] font-label uppercase tracking-widest" href="#">Privacy Policy</a>
              <a className="text-slate-500 hover:text-secondary transition-colors text-[10px] font-label uppercase tracking-widest" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
