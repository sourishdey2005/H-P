import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Brain, 
  HardHat, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  UploadCloud 
} from 'lucide-react';

export default function Careers() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Professional Industrial Team" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_hkjUmDgGiD51OLoaA-IiVtX-jI41IW6YXct9TbjOL6b88nU2jd0LKkHFdHFe5-9AHojWGU--4EVpSl2tcJSk1Cg4i-J756mMYzkqSFDbQQu2_d5Myx3gVXJ4oTYltWATCbAdzVchxaUDlab0FPmrpoPNifYJ3SrC552dU2kfoGDxKM144E5l_F486K4zGjCROFZJR0I7tVy_lLvzlC3snasIbZo2RwVvhofW6pnkUaFfJ6FyxIDJPh7DrNiZdZwt3hf86JWsd4Ow"
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
            <span className="font-label text-secondary font-bold tracking-[0.2em] uppercase mb-4 block">Join Our Workforce</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight font-display tracking-tighter mb-8 uppercase">
              Build Your Future with <br/>H & P Projects
            </h1>
            <p className="text-xl text-surface-container-high max-w-xl mb-10 leading-relaxed">
              We don't just build structures; we build careers. Join a legacy of precision engineering and industrial excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="bg-secondary text-white px-8 py-4 rounded-sm font-label font-bold uppercase tracking-widest hover:brightness-110 transition-all" href="#openings">Explore Roles</a>
              <a className="border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-sm font-label font-bold uppercase tracking-widest hover:bg-white/10 transition-all" href="#why-join">Our Culture</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 bg-surface px-8" id="why-join">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-primary font-display tracking-tighter mb-8 uppercase">
                  A Culture Defined by <span className="text-secondary">Excellence</span>
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
                  At H & P Projects, we foster an environment where opportunity-driven innovation isn't just a buzzword—it's how we operate every day. From large-scale infrastructure to specialized IT industrial solutions, your work makes a global impact.
                </p>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-sm text-primary">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg mb-2">Professional Growth</h4>
                      <p className="text-on-surface-variant text-sm">Clear career paths and mentorship programs for every level of expertise.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-sm text-primary">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg mb-2">Innovation Hub</h4>
                      <p className="text-on-surface-variant text-sm">Work with cutting-edge technologies in industrial automation and precision tools.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  className="w-full aspect-square object-cover rounded-sm" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqDfy6uP3fFE2CKmTQBRetZtfDGfshYVOrz5ED0z6qVfFBxsk1_0n1-sBqljGWkBdDQ09T7fNr54x_JN0zJ0VtXb9ik9Q_4g_6LWpxiR-8VBLJqAk_wykB7WEjuwxMz4m1RvHF9S_g9dd_kMm2CeoLBNWaiONbcAm2s4RqMtgihLRrBXLSn_Yqdt-6IfVdzJ6eF0kGeZV7wPnpq0u3FH7NVGnqV6B9L3z-abmJ2d2bylcc9SGqgJpUKCC9Q8GmQvISV8ugG10hO4v3"
                  alt="Engineer reviewing blueprints"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-primary p-8 rounded-sm text-white">
                  <span className="text-4xl font-black block mb-2">150+</span>
                  <span className="font-label text-xs tracking-widest uppercase opacity-70">Major Projects Completed</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-secondary p-8 rounded-sm text-white">
                  <span className="text-4xl font-black block mb-2">12</span>
                  <span className="font-label text-xs tracking-widest uppercase opacity-70">Global Locations</span>
                </div>
                <img 
                  className="w-full aspect-[4/5] object-cover rounded-sm" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeRiQ0p8yhGH2DVNjJDR2tlxRYmZujU_w2NkRd6wRTbGEHpcX6rgP7a6dJAahutRIUlpUOOJ9dl4ylg2rs40vWQsC_VzhHagM-6mEgtO8E_gB_ElcMgkC4ZctFeQZI-J-AJhjeTsFkb6jU_wctgXZhKLQ6TwVA5KEPzefDtcfnFWK28qYqgGx8PotSeuuE4Ff-wDnFVfY_zzUfUJx6O_Vb9IrkgtiSqPkxZ90FNIgCFv-7fAxE8TIkx0as3gm_RQqzUVneLz6trztI"
                  alt="Modern laboratory"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manpower Solutions */}
      <section className="py-24 bg-surface-container-low px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-primary font-display tracking-tighter mb-6 uppercase">Manpower Development & Specialized Training</h2>
              <p className="text-on-surface-variant text-lg">We invest in our people through the H & P Academy, ensuring our workforce is the most skilled and safety-conscious in the industry.</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-sm shadow-sm border border-outline-variant/15 font-label">
              <span className="text-secondary font-bold uppercase tracking-widest text-xs">Training Hours/Year:</span>
              <span className="text-primary font-black ml-2 text-xl">45,000+</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-surface-container-lowest p-10 rounded-sm transition-all hover:shadow-2xl group"
            >
              <HardHat className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-display uppercase">Technical Certification</h3>
              <p className="text-on-surface-variant text-sm mb-6">In-house certification programs for specialized trades, ensuring high-quality output and career longevity.</p>
              <div className="w-12 h-1 bg-outline-variant group-hover:w-full group-hover:bg-secondary transition-all duration-500"></div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-surface-container-lowest p-10 rounded-sm transition-all hover:shadow-2xl group border-b-2 border-secondary"
            >
              <ShieldCheck className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-display uppercase">Safety First Protocol</h3>
              <p className="text-on-surface-variant text-sm mb-6">Our industry-leading safety training program defines our zero-incident workplace culture.</p>
              <div className="w-12 h-1 bg-outline-variant group-hover:w-full group-hover:bg-secondary transition-all duration-500"></div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-surface-container-lowest p-10 rounded-sm transition-all hover:shadow-2xl group"
            >
              <Users className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-display uppercase">Leadership Training</h3>
              <p className="text-on-surface-variant text-sm mb-6">Developing the next generation of project managers and site supervisors from within.</p>
              <div className="w-12 h-1 bg-outline-variant group-hover:w-full group-hover:bg-secondary transition-all duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24 bg-surface px-8" id="openings">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-primary font-display tracking-tighter mb-4 uppercase">Current Opportunities</h2>
            <p className="text-on-surface-variant font-label uppercase tracking-widest text-sm">Join the team making industrial history</p>
          </div>
          <div className="max-w-5xl mx-auto space-y-4">
            {[
              { title: "Senior Structural Engineer", dept: "Engineering", loc: "Headquarters, NY", type: "Full-time" },
              { title: "Industrial Site Lead", dept: "Management", loc: "Remote / On-site", type: "Project Based" },
              { title: "SCADA Systems Analyst", dept: "IT Solutions", loc: "Austin, TX", type: "Full-time" },
              { title: "Precision Welder", dept: "Skilled Trades", loc: "Multiple Sites", type: "Hourly / Contract" }
            ].map((role, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                className="bg-surface-container flex flex-wrap md:flex-nowrap items-center p-6 rounded-sm group hover:bg-surface-container-high transition-colors"
              >
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <span className="font-label text-xs text-secondary font-bold uppercase tracking-widest block mb-1">{role.dept}</span>
                  <h4 className="font-display font-extrabold text-xl text-primary uppercase">{role.title}</h4>
                </div>
                <div className="w-full md:w-1/4 flex items-center gap-2 mb-4 md:mb-0">
                  <MapPin className="text-outline w-5 h-5" />
                  <span className="text-sm font-medium">{role.loc}</span>
                </div>
                <div className="w-full md:w-1/4 flex items-center gap-2 mb-4 md:mb-0">
                  <Clock className="text-outline w-5 h-5" />
                  <span className="text-sm font-medium">{role.type}</span>
                </div>
                <div className="w-full md:w-1/4 flex justify-end">
                  <button className="bg-primary text-white font-label text-xs uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-secondary transition-all">View Role</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-24 px-8 bg-primary">
        <div className="container mx-auto max-w-4xl bg-surface-container-lowest rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 bg-surface-container text-primary">
            <h3 className="text-3xl font-black font-display tracking-tighter mb-6 uppercase">Ready to Lead?</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">Submit your credentials to our talent acquisition team. Even if you don't see a matching role, we're always looking for exceptional talent.</p>
            <div className="space-y-4 font-label text-xs uppercase tracking-widest font-bold">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-5 h-5" />
                <span>Direct HR Review</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-5 h-5" />
                <span>Confidential Processing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-5 h-5" />
                <span>Response within 48h</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-label text-xs uppercase tracking-widest mb-2 font-bold text-outline">Full Name</label>
                <input className="w-full bg-surface-container-high border-none focus:ring-2 focus:ring-secondary transition-all py-3 px-4 rounded-sm" placeholder="John Doe" type="text"/>
              </div>
              <div>
                <label className="block font-label text-xs uppercase tracking-widest mb-2 font-bold text-outline">Email Address</label>
                <input className="w-full bg-surface-container-high border-none focus:ring-2 focus:ring-secondary transition-all py-3 px-4 rounded-sm" placeholder="john@example.com" type="email"/>
              </div>
              <div>
                <label className="block font-label text-xs uppercase tracking-widest mb-2 font-bold text-outline">Department of Interest</label>
                <select className="w-full bg-surface-container-high border-none focus:ring-2 focus:ring-secondary transition-all py-3 px-4 rounded-sm">
                  <option>Engineering</option>
                  <option>Project Management</option>
                  <option>IT Solutions</option>
                  <option>Skilled Trades</option>
                </select>
              </div>
              <div className="border-2 border-dashed border-outline-variant rounded-sm p-6 text-center cursor-pointer hover:bg-surface-container transition-colors group">
                <UploadCloud className="text-outline group-hover:text-secondary w-8 h-8 mx-auto mb-2" />
                <span className="font-label text-[10px] uppercase tracking-widest font-bold text-outline">Upload Resume (PDF only)</span>
              </div>
              <button className="w-full bg-secondary text-white font-label font-bold uppercase tracking-[0.2em] py-4 rounded-sm hover:brightness-110 transition-all shadow-lg shadow-secondary/20" type="submit">Apply Now</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
