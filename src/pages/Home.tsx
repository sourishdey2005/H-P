import { 
  MapPin, 
  Award, 
  CheckCircle, 
  Package, 
  HardHat,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const allCities = [
  "Kolkata", "New Delhi", "Mumbai", "Chennai", "Bengaluru", "Lucknow", 
  "Hyderabad", "Ahmedabad", "Pune", "Surat", "Jaipur", "Kanpur", 
  "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna", 
  "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", 
  "Meerut", "Rajkot", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad"
];

const partners = [
  {
    name: "KOUSHIK PAUL",
    role: "Partner – Operations & Decision-Making Head of Projects",
    details: "Koushik Paul oversees project execution, operational compliance, and project-level strategic decisions. Drawing from his experience at Jindal Steel Ltd., he ensures timely, high-quality project delivery while managing teams and also operational processes across all sites.",
    image: "https://res.cloudinary.com/dodhvvewu/image/upload/v1774996145/65d4b0c0-f558-4fe7-97e2-f0ae538642b2_gigwhi.jpg"
  },
  {
    name: "ABHRADEEP HAZRA",
    role: "Partner – Administrative Head & Group Decision-Making",
    details: "Abhradeep Hazra leads the administrative functions, finance, legal compliance, and corporate governance. With extensive experience at DSS Group, he is pivotal in group-level strategic decision-making, ensuring H & P Projects operates efficiently, ethically, and in line with best practices.",
    image: "https://res.cloudinary.com/dodhvvewu/image/upload/v1774996167/dffdf7c5-327e-4315-bee5-56f4494c135b_nrcm87.jpg"
  }
];

const trustSignals = [
  {
    title: "ISO 9001:2015",
    description: "Certified Quality Management Systems for project delivery excellence.",
    icon: Award,
  },
  {
    title: "Safety Standard Gold",
    description: "Accredited for maintaining world-class safety protocols across all sites.",
    icon: CheckCircle,
  },
  {
    title: "Supply Capability",
    description: "Full-service procurement and logistics for industrial heavy equipment.",
    icon: Package,
  },
  {
    title: "Manpower Solutions",
    description: "Verified technical workforce for civil and electrical installations.",
    icon: HardHat,
  },
  {
    title: "Operational Excellence",
    description: "Streamlined processes ensuring maximum efficiency and minimal downtime.",
    icon: CheckCircle,
  },
  {
    title: "Global Standards",
    description: "Adhering to international benchmarks in engineering and construction.",
    icon: Award,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqsmkH5hS2Ko1yc2ez5oZAMfs5QImoFRp7lBkf2nFbxIx3vaqEqZrTq7Ia_vEIFyHx0kTnYGylp5l9DJviwvvmTXRU8i52XvXuWSFHIN2p2AaUGRIAh8K-do1SJzrRgsrt5cGZOduBBOKVawh73SrPe0shGcHcMkAkTUn_8dXXHU8UMpmfSY9err_jS_h0sMtKBrBAV31U0tme7SboNC3_GBQH9w-ZjctSlg7dHCoILAWwhGJYGayNDCwsh4uCof_j9wCJZda6tRwN"
            alt="Industrial construction site at twilight"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
        </motion.div>
        <div className="relative z-10 container mx-auto px-8 lg:px-12">
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-label text-secondary font-bold tracking-[0.3em] uppercase mb-4"
            >
              Precision in Engineering
            </motion.p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tighter">
              {["Innovate.", "Inspire.", "Impact."].map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.15 }}
                  className="block"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="text-secondary"
              >
                Repeat.
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="font-sans text-xl text-surface-container-high max-w-2xl mb-12 leading-relaxed"
            >
              A complete solutions partner for civil, mechanical, electrical, IT, and manpower solutions. Building the future of industrial excellence.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/business"
                  className="bg-primary text-white border border-primary px-10 py-5 font-label font-bold uppercase tracking-widest rounded-lg hover:bg-secondary hover:border-secondary transition-all duration-300 block"
                >
                  Our Business
                </Link>
              </motion.div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 font-label font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                Get a Quote
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <div className="grid grid-cols-2 gap-8 text-white border-l border-white/20 pl-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-3xl font-black font-display">500+</div>
              <div className="font-label text-xs uppercase tracking-widest text-secondary">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="text-3xl font-black font-display">24/7</div>
              <div className="font-label text-xs uppercase tracking-widest text-secondary">Operational Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Presence - Updated to Horizontal Banner */}
      <section className="py-24 bg-primary overflow-hidden relative">
        {/* Background Accent */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-8 lg:px-12 relative z-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">Serving major cities across India</h2>
            <p className="text-surface-container-high font-sans leading-relaxed text-lg">
              A nationwide network of excellence. We operate from the heartbeat of India's major industrial hubs, ensuring rapid deployment and local expertise.
            </p>
          </motion.div>
        </div>

        {/* Marquee Banner */}
        <div className="relative flex overflow-hidden py-12 bg-primary-container/30 border-y border-white/5">
          <motion.div 
            className="flex whitespace-nowrap gap-12 items-center"
            animate={{ x: [0, -2000] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...allCities, ...allCities].map((city, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <span className="text-white font-display text-3xl md:text-5xl font-black uppercase tracking-tighter opacity-80 hover:opacity-100 hover:text-secondary transition-all cursor-default">
                  {city}
                </span>
                <div className="w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_rgba(242,125,38,0.5)]"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Statistics Overlay */}
        <div className="container mx-auto px-8 lg:px-12 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "States Covered", value: "22+" },
              { label: "Active Sites", value: "85+" },
              { label: "Local Partners", value: "120+" },
              { label: "Rapid Response", value: "24/7" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center md:text-left border-l border-white/10 pl-6"
              >
                <span className="block text-secondary font-display text-3xl font-black mb-1">{stat.value}</span>
                <span className="block text-surface-container-high font-label text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us / Founders - Updated Details */}
      <section className="py-24 bg-on-surface text-white overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-display text-4xl md:text-5xl font-black mb-4 leading-tight uppercase"
            >
              The Leadership Behind <br/><span className="text-secondary tracking-tighter">Architectural Precision</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-24 h-1 bg-secondary mx-auto mt-6"
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {partners.map((partner, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col md:flex-row gap-8 items-start bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-secondary/50 transition-colors"
              >
                <div className="w-full md:w-48 shrink-0">
                  <img 
                    className="w-full aspect-square object-cover rounded-xl border-b-4 border-secondary shadow-2xl" 
                    src={partner.image}
                    alt={partner.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display text-2xl font-black text-white mb-1 uppercase tracking-tight">{partner.name}</h3>
                  <p className="font-label text-secondary font-bold text-xs uppercase tracking-widest mb-4">{partner.role}</p>
                  <p className="text-slate-400 font-sans leading-relaxed text-sm">
                    {partner.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { id: '01', title: 'Precision', text: 'In every measurement, every calculation, and every delivery. We leave nothing to chance.' },
              { id: '02', title: 'Efficiency', text: 'Optimizing resources and time to deliver maximum value without compromising on quality standards.' },
              { id: '03', title: 'Consistency', text: 'A track record of excellence that remains unwavering across projects of any scale or complexity.' }
            ].map((item, idx) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex gap-6 p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-default border border-transparent hover:border-white/10"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-secondary text-secondary font-label font-bold group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  {item.id}
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold mb-2 uppercase tracking-tight group-hover:text-secondary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 font-sans text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Symbols - Horizontal Scroll Implementation */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12 mb-16 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-display text-4xl font-black text-primary mb-4 tracking-tight uppercase">Trust Symbols</h2>
            <p className="font-label text-secondary font-bold tracking-widest uppercase text-sm">Validating Our Commitment to Excellence</p>
          </motion.div>
          <div className="hidden md:flex gap-4">
            <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary/40 hover:text-secondary hover:border-secondary transition-all cursor-pointer">
              <ArrowRight className="w-6 h-6 rotate-180" />
            </div>
            <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary/40 hover:text-secondary hover:border-secondary transition-all cursor-pointer">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="relative group">
          <motion.div 
            className="flex gap-8 px-8 lg:px-12 pb-12 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing scroll-smooth"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {trustSignals.map((signal, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="min-w-[320px] md:min-w-[450px] bg-white p-12 border-b-8 border-primary shadow-2xl hover:shadow-secondary/10 transition-all duration-500 rounded-xl group/card"
              >
                <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center mb-10 group-hover/card:bg-secondary/10 transition-colors">
                  <signal.icon className="w-10 h-10 text-primary group-hover/card:text-secondary transition-colors" />
                </div>
                <h5 className="font-display font-black text-2xl mb-6 uppercase tracking-tight text-primary">{signal.title}</h5>
                <p className="font-sans text-on-surface-variant leading-relaxed text-lg">{signal.description}</p>
                <div className="mt-10 flex items-center gap-3 text-secondary font-label font-bold text-xs uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-opacity">
                  <span>Verified Standard</span>
                  <div className="h-[1px] bg-secondary flex-grow"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Fade Edges */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-surface-container-low to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-surface-container-low to-transparent pointer-events-none z-10"></div>
        </div>
      </section>
    </div>
  );
}
