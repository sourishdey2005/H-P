import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Linkedin, 
  Twitter, 
  Facebook,
  Globe
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Contact H&P Projects" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-label text-secondary font-bold tracking-[0.2em] uppercase mb-4 block">Your Queries</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight font-display tracking-tighter mb-4 uppercase">
              Contact Us
            </h1>
            <p className="text-xl text-surface-container-high max-w-xl leading-relaxed">
              We'd love to hear from you! Please reach out at your convenience so we can discuss your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-24 bg-surface px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-4xl font-black text-primary font-display tracking-tighter mb-6 uppercase">H & P Projects</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  A complete solutions partner for civil, mechanical, electrical, IT, and manpower solutions. Reach out to our headquarters for project discussions.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-sm text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-2 uppercase">Address</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      B/28, Gholui, Balichak, Kharagpur,<br />
                      Paschim Medinipur, West Bengal - 721124
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-sm text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-2 uppercase">Ph</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      8984030821<br />
                      9332627903
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-sm text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-2 uppercase">Email</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      koushikpaul@hnpprojects.com<br />
                      abhradeephazra@hnpprojects.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-sm text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-2 uppercase">Business Hours</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Monday - Friday: 09:00 - 18:00<br />
                      Saturday: 09:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-outline-variant/30">
                <h4 className="font-label text-xs font-bold tracking-widest uppercase text-secondary mb-6">Follow Our Progress</h4>
                <div className="flex gap-4">
                  {[Linkedin, Twitter, Facebook, Globe].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-sm hover:bg-secondary transition-colors">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface-container-lowest p-8 md:p-12 rounded-sm shadow-2xl border border-outline-variant/10"
              >
                <h3 className="text-3xl font-black font-display tracking-tighter mb-8 uppercase text-primary">Send a Message</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="block font-label text-xs uppercase tracking-widest font-bold text-outline">First Name</label>
                    <input className="w-full bg-surface-container-high border-none focus:ring-2 focus:ring-secondary transition-all py-3 px-4 rounded-sm" placeholder="John" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label text-xs uppercase tracking-widest font-bold text-outline">Last Name</label>
                    <input className="w-full bg-surface-container-high border-none focus:ring-2 focus:ring-secondary transition-all py-3 px-4 rounded-sm" placeholder="Doe" type="text" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="block font-label text-xs uppercase tracking-widest font-bold text-outline">Email Address</label>
                    <input className="w-full bg-surface-container-high border-none focus:ring-2 focus:ring-secondary transition-all py-3 px-4 rounded-sm" placeholder="john@example.com" type="email" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="block font-label text-xs uppercase tracking-widest font-bold text-outline">Subject</label>
                    <select className="w-full bg-surface-container-high border-none focus:ring-2 focus:ring-secondary transition-all py-3 px-4 rounded-sm">
                      <option>Project Inquiry</option>
                      <option>Partnership Opportunity</option>
                      <option>General Question</option>
                      <option>Technical Support</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="block font-label text-xs uppercase tracking-widest font-bold text-outline">Message</label>
                    <textarea rows={6} className="w-full bg-surface-container-high border-none focus:ring-2 focus:ring-secondary transition-all py-3 px-4 rounded-sm resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button className="w-full bg-secondary text-white font-label font-bold uppercase tracking-[0.2em] py-4 rounded-sm hover:brightness-110 transition-all shadow-lg shadow-secondary/20 flex items-center justify-center gap-3 group">
                      SEND YOUR QUERY
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative group overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
          alt="Location Map Placeholder" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.a 
            href="https://maps.app.goo.gl/PgcMR8PgRUAvxhXW8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-10 py-5 font-label font-bold uppercase tracking-widest rounded-sm shadow-2xl flex items-center gap-4 hover:bg-secondary transition-all"
          >
            <MapPin className="w-6 h-6" />
            View on Google Maps
          </motion.a>
        </div>
        <div className="absolute top-8 left-8 bg-primary p-6 text-white shadow-2xl hidden md:block max-w-xs z-20">
          <h4 className="font-display font-bold text-lg mb-2 uppercase">Visit Us</h4>
          <p className="text-xs text-surface-container-high leading-relaxed">
            B/28, Gholui, Balichak, Kharagpur, Paschim Medinipur, West Bengal - 721124
          </p>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-surface-container-low px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-primary font-display tracking-tighter mb-4 uppercase">Regional Hubs</h2>
            <p className="text-on-surface-variant font-label uppercase tracking-widest text-sm">Strategic locations for global delivery</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { city: "London", region: "Europe", address: "Canary Wharf, E14" },
              { city: "Dubai", region: "Middle East", address: "Business Bay, UAE" },
              { city: "Singapore", region: "Asia Pacific", address: "Marina Bay Financial Centre" },
              { city: "New York", region: "Americas", address: "Financial District, NY" }
            ].map((hub, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-surface-container-lowest p-8 rounded-sm shadow-md border-t-4 border-secondary"
              >
                <span className="font-label text-[10px] text-outline tracking-widest uppercase block mb-2">{hub.region}</span>
                <h4 className="font-display font-bold text-xl text-primary mb-2 uppercase">{hub.city}</h4>
                <p className="text-on-surface-variant text-sm">{hub.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
