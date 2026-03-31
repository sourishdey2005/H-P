import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Linkedin,
  MapPin,
  ShieldCheck,
  Share2,
  Link as LinkIcon,
  Mail,
  Phone
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
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md shadow-xl"
      >
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
          <Link to="/" className="text-xl font-black tracking-tighter text-white uppercase font-display group">
            H & P <span className="text-secondary group-hover:text-white transition-colors">Projects</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            {[
              { name: 'Home', path: '/' },
              { name: 'Our Business', path: '/business' },
              { name: 'Innovation', path: '/innovation' },
              { name: 'Careers', path: '/careers' },
              { name: 'Contact Us', path: '/contact' }
            ].map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <Link 
                  className={`font-sans font-bold tracking-tight uppercase text-sm transition-all duration-300 relative group ${location.pathname === link.path ? 'text-secondary' : 'text-slate-300 hover:text-white'}`} 
                  to={link.path}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                </Link>
              </motion.div>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-container px-6 py-2 text-white font-label text-xs tracking-widest uppercase hover:bg-secondary transition-all duration-300 shadow-lg"
            >
              Get a Quote
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 w-full mt-auto border-t border-slate-800">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <span className="text-lg font-bold text-white font-display uppercase">H & P <span className="text-secondary">Projects</span></span>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Empowering industrial growth through innovative engineering and unwavering precision. Your partner in building India's future.
              </p>
              <div className="flex gap-4">
                {[Share2, LinkIcon].map((Icon, idx) => (
                  <motion.a 
                    key={idx}
                    whileHover={{ scale: 1.1, borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)' }}
                    className="w-10 h-10 flex items-center justify-center border border-slate-700 transition-all text-slate-400" 
                    href="#"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <span className="text-secondary font-label text-xs tracking-widest uppercase mb-2">Quick Links</span>
              {[
                { name: 'Home', path: '/' },
                { name: 'Business', path: '/business' },
                { name: 'Innovation', path: '/innovation' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <Link key={link.name} className="text-slate-500 hover:text-white transition-colors text-xs font-label uppercase" to={link.path}>{link.name}</Link>
              ))}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <span className="text-secondary font-label text-xs tracking-widest uppercase mb-2">Contact</span>
              <div className="flex items-start gap-3 text-slate-500 text-[10px] font-label uppercase tracking-wider leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                <span>B/28, Gholui, Balichak, Kharagpur, Paschim Medinipur, West Bengal - 721124</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 text-[10px] font-label uppercase tracking-wider">
                <Phone className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>8984030821, 9332627903</span>
              </div>
              <div className="flex items-start gap-3 text-slate-500 text-[10px] font-label uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span>koushikpaul@hnpprojects.com</span>
                  <span>abhradeephazra@hnpprojects.com</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <span className="text-secondary font-label text-xs tracking-widest uppercase mb-2">Connect</span>
              <a className="text-slate-500 hover:text-white transition-colors text-xs font-label uppercase flex items-center gap-2 group" href="#">
                <Linkedin className="w-4 h-4 group-hover:text-secondary transition-colors" /> LinkedIn
              </a>
              <a className="text-slate-500 hover:text-white transition-colors text-xs font-label uppercase flex items-center gap-2 group" href="#">
                <ShieldCheck className="w-4 h-4 group-hover:text-secondary transition-colors" /> Safety Standards
              </a>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-12 py-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 font-label text-[10px] tracking-widest uppercase">© 2024 H & P Projects. Precision in Engineering.</span>
              <div className="flex items-center gap-2">
                <motion.span 
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-500"
                ></motion.span>
                <span className="font-label text-[10px] tracking-widest uppercase text-slate-500">Systems Operational</span>
              </div>
            </div>
            <div className="flex gap-8">
              <a className="text-slate-500 hover:text-secondary transition-colors text-[10px] font-label uppercase tracking-widest" href="#">Privacy Policy</a>
              <a className="text-slate-500 hover:text-secondary transition-colors text-[10px] font-label uppercase tracking-widest" href="#">Terms of Service</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
