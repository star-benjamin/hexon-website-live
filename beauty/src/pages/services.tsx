import React, { useState } from 'react';
import { 
  Hospital, BatteryCharging, ShoppingCart, ArrowRight, 
  Fingerprint, ScanFace, Cctv, ShieldCheck, 
  Sun, Droplets, HardHat, ZapOff, Building2 // Added missing icons here
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Services = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const serviceList = [
    { title: "CCTV & Surveillance", category: "Security", icon: <Cctv />, desc: "High-definition IP and HD camera installations for 24/7 monitoring." },
    { title: "Biometric Access Control", category: "Security", icon: <Fingerprint />, desc: "Advanced security via fingerprint and facial recognition systems." },
    { title: "Electrical Auditing", category: "Electrical", icon: <ShieldCheck />, desc: "Professional auditing to ensure efficiency and safety compliance." },
    { title: "Solar Systems", category: "Solar", icon: <Sun />, desc: "Critical solar power solutions for healthcare and commercial use." },
    { title: "UPS & Backup Systems", category: "Electrical", icon: <BatteryCharging />, desc: "Installation of UPS systems for zero-downtime operations." },
    { title: "Industrial Supply", category: "Electrical", icon: <ShoppingCart />, desc: "Sourcing high-grade electrical equipment for large-scale projects." },
    { title: "Security IT Apps", category: "Security", icon: <ScanFace />, desc: "Integrated IT security software for modern facility management." },
    { title: "Drilling Water", category: "Civil", icon: <Droplets />, desc: "Specialized borehole drilling and water management systems." },
    { title: "Construction & Design", category: "Civil", icon: <HardHat />, desc: "End-to-end structural design and construction management." },
    { title: "Electrical Safety", category: "Electrical", icon: <ZapOff />, desc: "Comprehensive risk assessment to prevent electrical hazards." },
    { title: "Building Management", category: "Civil", icon: <Building2 />, desc: "Smart automation to optimize building efficiency." }
  ];

  const categories = ['All', 'Solar', 'Security', 'Electrical', 'Civil'];

  const filteredServices = activeFilter === 'All' 
    ? serviceList 
    : serviceList.filter(s => s.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Professional Engineering Services | Hexon Technical</title>
      </Helmet>

      <div className="bg-white dark:bg-gray-900 min-h-screen">
        
        {/* Compressed Header */}
        <div className="bg-amber-500 pt-24 pb-12 px-6 text-center text-black">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Our Expertise</h1>
          <p className="max-w-xl mx-auto font-bold text-sm opacity-85">
            Precision engineering bridging the gap between power and security.
          </p>
        </div>

        {/* Filter Tiles Section */}
        <div className="max-w-7xl mx-auto pt-10 px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border-2 ${
                  activeFilter === cat 
                  ? 'bg-amber-500 border-amber-500 text-black shadow-lg shadow-amber-500/20' 
                  : 'border-gray-100 dark:border-gray-800 text-gray-500 hover:border-amber-500/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto py-12 px-6 min-h-[600px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 hover:border-amber-500 transition-all duration-500 animate-in fade-in zoom-in-95"
              >
                {/* Icon & Content */}
                <div className="w-12 h-12 bg-amber-500/10 text-amber-600 dark:text-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  {React.cloneElement(service.icon as React.ReactElement<{ size?: number }>, { 
                      size: 22 
                    })}
                </div>
                <h3 className="text-lg font-black mb-2 text-gray-900 dark:text-white uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-6">{service.desc}</p>
                
                <button 
                  onClick={() => navigate('/projects', { state: { filter: service.title } })}
                  className="flex items-center text-amber-600 dark:text-amber-500 font-black text-[10px] uppercase tracking-widest group/link"
                >
                  View Case Study <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 font-bold uppercase tracking-widest">No services found in this category.</p>
            </div>
          )}
        </div>

        {/* Process section stays below... */}
      </div>
    </>
  );
};

export default Services;