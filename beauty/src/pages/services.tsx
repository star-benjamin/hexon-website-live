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
    { title: "IP CCTV Surveillance Systems", category: "Security", icon: <Cctv />, desc: "Networked HD surveillance with remote monitoring capabilities and integrated storage solutions." },
    { title: "Facial & Biometric Security", category: "Security", icon: <Fingerprint />, desc: "Multi-modal access control including facial recognition and fingerprint systems for secure office environments." },
    { title: "Energy Audits & Compliance", category: "Electrical", icon: <ShieldCheck />, desc: "ERA-standard electrical auditing and safety inspections to ensure facility efficiency and legal compliance." },
    { title: "Industrial Solar Installation", category: "Solar", icon: <Sun />, desc: "Hospital-grade solar grids, institutional backup systems, and industrial solar water heating across Uganda." },
    { title: "UPS & Backup Systems", category: "Electrical", icon: <BatteryCharging />, desc: "Installation of UPS systems for zero-downtime operations." },
    { title: "Industrial Supply", category: "Electrical", icon: <ShoppingCart />, desc: "Sourcing high-grade electrical equipment for large-scale projects." },
    { title: "Security IT Apps", category: "Security", icon: <ScanFace />, desc: "Integrated IT security software for modern facility management." },
    { title: "Borehole Drilling & Irrigation", category: "Civil", icon: <Droplets />, desc: "Solar-powered borehole systems and advanced irrigation engineering for agriculture and commercial use." },
    { title: "Construction & Design", category: "Civil", icon: <HardHat />, desc: "End-to-end structural design and construction management." },
    { title: "Electrical Safety", category: "Electrical", icon: <ZapOff />, desc: "Comprehensive risk assessment to prevent electrical hazards." },
    { title: "Electrical Panel & DB Dressing", category: "Electrical", icon: <ZapOff />, desc: "Professional distribution board (DB) installation, control panel wiring, and phase balancing for commercial buildings." },
    { title: "Building Management", category: "Civil", icon: <Building2 />, desc: "Smart automation to optimize building efficiency." }
  ];

  const categories = ['All', 'Solar', 'Security', 'Electrical', 'Civil'];

  const filteredServices = activeFilter === 'All' 
    ? serviceList 
    : serviceList.filter(s => s.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Engineering & Security Services | Solar, Electrical & Biometrics Uganda</title>
        <meta name="description" content="Expert electrical auditing, industrial solar installation, biometric security, and civil works across Kampala and Uganda." />
        <meta property="og:title" content="Engineering & Security Services | Hexon Technical" />
        <meta property="og:description" content="Comprehensive solar, electrical, and security services tailored for the Ugandan market." />
        <link rel="canonical" href="https://hexontechnicalservices.com/services" />
      </Helmet>

      <div className="bg-white dark:bg-gray-900 min-h-screen">
        
        {/* Compressed Header */}
        <div className="bg-amber-500 pt-24 pb-12 px-6 text-center text-black">
          <h1>Engineering <span className="text-black/70">Solutions</span> & Services</h1>
          <p className="max-w-xl mx-auto font-bold text-sm opacity-85">
            Precision engineering bridging the gap between power and security in Uganda.
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
                
                {/* <button 
                  onClick={() => navigate('/projects', { state: { filter: service.title } })}
                  className="flex items-center text-amber-600 dark:text-amber-500 font-black text-[10px] uppercase tracking-widest group/link"
                >
                  View Case Study <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                </button> */}
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