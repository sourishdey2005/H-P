import React from 'react';
import { motion } from 'motion/react';
import { 
  DraftingCompass, 
  Brain, 
  Radio, 
  Zap, 
  Network, 
  Leaf, 
  Droplets, 
  Sun, 
  Users 
} from 'lucide-react';

export default function Innovation() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Zdp0DqPbDlqRotcOcVRX8Kl-GvuWZse8XZCh9Odu8zQekLKqVvFEeeDwwDtpYhRUwYMPL7hrjNe7wY35eAUPdHhZXQc0hLMg5GHltA6qk4BJ-wp-9bYFY_PpdagkyEvQwGuRP5aamsnt8PoKHjk0cX7F9VWLOXny8NYZcX7asAEFhS-JqpqZD8dtfTdIY4zV7pPXwhasf7mzU1CnsThOr20QZTB8o9gxzBYOIPEMMjdW2QsfCa3dOvUuNDfq_GlLcx486c4-0Xtg"
            alt="Futuristic digital twin infrastructure"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-8 relative z-10 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-secondary w-20 h-1 mb-8"></div>
              <h1 className="font-display font-black text-6xl md:text-8xl text-white tracking-tighter leading-none mb-8 uppercase">
                Powering Progress<br/>
                <span className="text-secondary">through Innovation</span>
              </h1>
              <p className="font-label text-xl text-surface-container-high max-w-2xl leading-relaxed">
                H & P Projects is redefining industrial engineering through cutting-edge digital integration and high-precision automation.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Asymmetric Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-secondary/10 backdrop-blur-3xl hidden md:block"></div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-surface relative overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tech-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-12 md:col-span-5 order-2 md:order-1">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-surface-container-high p-8 lg:p-12 border-l-4 border-secondary shadow-lg"
              >
                <span className="font-label text-secondary font-bold tracking-widest text-sm mb-4 block uppercase">Our Vision</span>
                <h2 className="font-display font-bold text-4xl text-on-surface mb-6 leading-tight">
                  Architecting the Future of Engineering.
                </h2>
                <p className="text-on-surface-variant leading-loose mb-0">
                  At H & P Projects, technology is about creating smarter, safer, and more sustainable ways of working. We don't just adopt tech; we integrate it into the very DNA of our operational workflows.
                </p>
              </motion.div>
            </div>
            <div className="col-span-12 md:col-span-7 order-1 md:order-2">
              <div className="relative">
                <img 
                  className="w-full h-[500px] object-cover rounded-sm shadow-2xl" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsh25LWsoQE8mIMvGK89dc7XTarV3hryjzjV4fmvx2CCZnvCYtDaKkXdKSKujnQ0nD4_p7ESQ-vwvHB2q0ReTKxnTkEV7i11s9zka0RFNVnYtEEhIM7pDuzoCqQQHVlPWwQYij_AkQQU5PALOsvq6N8nxRX8PWX6BN1DK3QW5zJPxmWeRSFEmLE8wSED4xcyyZrzMuZ6zP7IKZiwQpAILKR3DdGQai9yOgPI4SpWQZ7Me-6-mUsWqFgCrgYLug8_dHNdMdj2N_PXd5"
                  alt="Industrial engineer with AR glasses"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary p-6 hidden lg:block shadow-xl">
                  <DraftingCompass className="text-white w-12 h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Bento Grid */}
      <section className="py-24 bg-surface-container-low relative">
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="mb-16">
            <h3 className="font-label text-secondary text-sm font-bold tracking-widest uppercase mb-2">Technological Ecosystem</h3>
            <h2 className="font-display font-black text-5xl text-on-surface tracking-tighter uppercase">Core Pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-surface-container-lowest p-8 rounded-sm shadow-md hover:shadow-xl transition-all group border-b-4 border-transparent hover:border-secondary"
            >
              <div className="flex justify-between items-start mb-12">
                <Brain className="text-primary w-10 h-10" />
                <span className="font-label text-xs text-outline tracking-widest uppercase">01 / Pillar</span>
              </div>
              <h4 className="font-display font-bold text-2xl text-on-surface mb-4">AI-driven Project Planning</h4>
              <p className="text-on-surface-variant">Predictive modeling and machine learning algorithms that optimize resource allocation and mitigate timeline risks before they occur.</p>
            </motion.div>
            {/* Pillar 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-surface-container-lowest p-8 rounded-sm shadow-md hover:shadow-xl transition-all group border-b-4 border-transparent hover:border-secondary"
            >
              <div className="flex justify-between items-start mb-12">
                <Radio className="text-primary w-10 h-10" />
                <span className="font-label text-xs text-outline tracking-widest uppercase">02 / Pillar</span>
              </div>
              <h4 className="font-display font-bold text-2xl text-on-surface mb-4">IoT-enabled Monitoring Systems</h4>
              <p className="text-on-surface-variant">Real-time asset tracking and structural health monitoring via high-fidelity sensor networks deployed across every project site.</p>
            </motion.div>
            {/* Pillar 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-primary p-8 rounded-sm shadow-md hover:shadow-xl transition-all group"
            >
              <div className="flex justify-between items-start mb-12">
                <Zap className="text-secondary w-10 h-10" />
                <span className="font-label text-xs text-surface-container-high tracking-widest uppercase">03 / Pillar</span>
              </div>
              <h4 className="font-display font-bold text-2xl text-white mb-4">Energy-efficient Electrical Networks</h4>
              <p className="text-surface-container-high">Designing intelligent grids that minimize transmission loss and integrate smart-metering for ultimate efficiency.</p>
            </motion.div>
            {/* Pillar 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-surface-container-lowest p-8 rounded-sm shadow-md hover:shadow-xl transition-all group border-b-4 border-transparent hover:border-secondary"
            >
              <div className="flex justify-between items-start mb-12">
                <Network className="text-primary w-10 h-10" />
                <span className="font-label text-xs text-outline tracking-widest uppercase">04 / Pillar</span>
              </div>
              <h4 className="font-display font-bold text-2xl text-on-surface mb-4">Digital Construction Management</h4>
              <p className="text-on-surface-variant">Seamless synchronization between architectural blueprints and on-site execution through cloud-native BIM platforms.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* R&D Highlight Section */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="bg-on-surface rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative h-96 lg:h-auto">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjAGzgC178BxKLHUqRpjhxkoUtAb-GMBWNTMW12FRn0RYDBfENAGHa9zyE2CnxuKkfoDcNYZIFAZnX-Ugi4_Ca3TIQXCm6288o_2Vp_cb_hbHS1AeiWsnGQTjLIzqB-4lVAiAF9zMKLpxgKAkK9Aq5V_v0cCnWA9q20j3FvYRtcmvpQAmTr6-T6wkzkxIv8sCKQK0g8IsNE3K1UjmGZ0cdyzgK5oSbP43l96xTLbTIcn7l9OTe8SxixxhOb6oigrGLZPETaSQzkM5H"
                alt="Modern laboratory"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply"></div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <h3 className="font-label text-secondary text-sm font-bold tracking-[0.2em] mb-6 uppercase">Innovation Hub</h3>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-8 tracking-tighter uppercase">Research & Development (R&D) Facility</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <Leaf className="text-secondary w-6 h-6 mt-1" />
                  <div>
                    <h5 className="font-display font-bold text-white text-lg mb-1">Green Buildings</h5>
                    <p className="text-surface-container-high text-sm">Pioneering carbon-neutral materials and passive cooling designs for urban infrastructure.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Droplets className="text-secondary w-6 h-6 mt-1" />
                  <div>
                    <h5 className="font-display font-bold text-white text-lg mb-1">Smart Water Management</h5>
                    <p className="text-surface-container-high text-sm">Automated treatment and filtration systems leveraging IoT for zero-waste water cycles.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Sun className="text-secondary w-6 h-6 mt-1" />
                  <div>
                    <h5 className="font-display font-bold text-white text-lg mb-1">Renewable Energy Integration</h5>
                    <p className="text-surface-container-high text-sm">Seamless grid connections for hybrid solar and wind installations in industrial complexes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-surface-container-high relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <Users className="w-[300px] h-[300px]" />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="font-display font-black text-5xl text-on-surface tracking-tighter mb-8 leading-tight uppercase">
              Innovation with Human Impact.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-on-surface-variant body-lg mb-6 leading-relaxed">
                  Our technological advancements are not designed in a vacuum. We measure success by the value chains we strengthen and the prosperity we catalyze.
                </p>
                <div className="bg-secondary p-8 rounded-sm shadow-xl shadow-secondary/20">
                  <p className="font-label text-white text-2xl font-bold leading-tight">
                    Our innovations generate high-skill employment and empower localized manufacturing ecosystems.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="font-display font-bold text-primary text-3xl">40%</h4>
                  <p className="font-label text-xs uppercase tracking-widest text-outline">Increase in Local Job Creation</p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="font-display font-bold text-primary text-3xl">25+</h4>
                  <p className="font-label text-xs uppercase tracking-widest text-outline">Active Patents in Green Tech</p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="font-display font-bold text-primary text-3xl">12k</h4>
                  <p className="font-label text-xs uppercase tracking-widest text-outline">Technical Certifications Awarded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
