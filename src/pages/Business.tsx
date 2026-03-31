import { 
  ArrowRight, 
  Building2, 
  Settings, 
  Factory, 
  Key, 
  Zap, 
  Terminal, 
  HardHat, 
  Briefcase, 
  Leaf, 
  Microscope, 
  Globe, 
  Users
} from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: "Civil Construction & Infrastructure",
    description: "Large-scale urban development, highway engineering, and structural foundation works built for longevity.",
    icon: Building2,
  },
  {
    title: "Mechanical Engineering Solutions",
    description: "Precision machinery design, HVAC systems, and automated production lines for modern industry.",
    icon: Settings,
  },
  {
    title: "Industrial Works & EPC Projects",
    description: "Engineering, Procurement, and Construction management for massive scale manufacturing plants.",
    icon: Factory,
  },
  {
    title: "Turnkey Project Solutions",
    description: "End-to-end management from concept to commissioning, ensuring seamless delivery and operation.",
    icon: Key,
  },
  {
    title: "Electrical & Energy Systems",
    description: "Grid integration, high-voltage installations, and advanced power distribution network management.",
    icon: Zap,
  },
  {
    title: "Smart IT & Digital Solutions",
    description: "IoT-driven asset tracking, BIM modeling, and custom enterprise software for project management.",
    icon: Terminal,
  },
  {
    title: "Manpower Solutions & Training",
    description: "Providing skilled technical labor and rigorous safety training programs for high-risk environments.",
    icon: HardHat,
  },
  {
    title: "Business Support & Branding",
    description: "Corporate strategy, industrial marketing, and project-specific brand identity development.",
    icon: Briefcase,
  },
  {
    title: "Sustainability & Green Projects",
    description: "Renewable energy integration, carbon footprint reduction strategies, and LEED certified builds.",
    icon: Leaf,
  },
  {
    title: "Innovation & R&D",
    description: "Pioneering new materials and construction methodologies in our dedicated research laboratories.",
    icon: Microscope,
  },
  {
    title: "Global & Domestic Partnerships",
    description: "Strategic alliances across borders to facilitate technology transfer and international project funding.",
    icon: Globe,
  },
  {
    title: "Rural & Community Development",
    description: "Social infrastructure, clean water access, and technical education initiatives for rural growth.",
    icon: Users,
  },
];

export default function Business() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfLpJNpocBA4u_0IndLNLOgVbmSEeYT0SApVn9G7JPkJdhMjVgDV4ugnhPkWcZsIYMDVFmFEdptlQvf9_49VpMnVZxVSQyfHeX8eGB4pjxFXsQ7QpWGFSTq8uT2nfCAdw9G2zSYIlRK_haczD-_gYvLl_OkrOj-S_AgAxKGd5o4VUVYKvd6xmtW5hhd5iaHQDV7GZ_tlGP70Q6rvocwJXKM3l2GoN5qcf-i9VSII1PmhLlOzsfSyQPlpgeZv51jOLbk_y9gTGVfhJv"
            alt="Industrial construction site"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="relative z-10 px-12 max-w-5xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-secondary w-12 h-1 mb-6"></div>
            <h1 className="text-white font-display text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-6">
              Our Multi-Sector<br/>Business Expertise
            </h1>
            <p className="text-surface-container-high font-sans text-xl max-w-2xl leading-relaxed">
              Engineering precision at global scale. We deliver structural integrity and innovative solutions across twelve specialized industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Grid Section */}
      <section className="py-24 px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="font-label text-secondary text-sm font-bold tracking-[0.2em] uppercase block mb-4">Industrial Capabilities</span>
              <h2 className="text-primary font-display text-4xl font-bold tracking-tight">Core Service Domains</h2>
            </div>
            <div className="h-[1px] bg-outline-variant/30 flex-grow mx-12 hidden md:block"></div>
            <div className="text-right">
              <span className="font-label text-on-surface-variant text-xs uppercase">Est. 2024</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="group bg-surface-container-low p-8 flex flex-col justify-between hover:bg-primary transition-all duration-500 min-h-[320px] rounded-sm"
              >
                <div>
                  <service.icon className="text-secondary w-10 h-10 mb-6 group-hover:text-white transition-colors" />
                  <h3 className="text-primary font-display text-xl font-bold group-hover:text-white mb-3">{service.title}</h3>
                  <p className="text-on-surface-variant group-hover:text-surface-container-high text-sm leading-relaxed">{service.description}</p>
                </div>
                <a className="mt-8 font-label text-xs font-bold text-secondary uppercase tracking-widest group-hover:text-white flex items-center gap-2" href="#">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
