import React from 'react';
import { 
  Hospital, BatteryCharging, ShoppingCart, ArrowRight, 
  Fingerprint, ScanFace, Cctv, ShieldCheck, 
  Sun, Droplets, HardHat, ZapOff, Building2 // Added missing icons here
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const navigate = useNavigate();

  const serviceList = [
    { 
      title: "Biometric Access Control", 
      icon: <Fingerprint />, 
      desc: "Advanced security via fingerprint and facial recognition systems for restricted areas." 
    },
    { 
      title: "CCTV & Surveillance", 
      icon: <Cctv />, 
      desc: "High-definition IP and HD camera installations for 24/7 infrastructure monitoring." 
    },
    { 
      title: "Electrical Auditing & Maintenance", 
      icon: <ShieldCheck />, 
      desc: "Professional auditing and maintenance to ensure efficiency and safety compliance." 
    },
    { 
      title: "Solar Systems Installation & Maintenance", 
      icon: <Sun />, 
      desc: "Critical solar power and water heating solutions for healthcare, commercial, and residential use." 
    },
    { 
      title: "UPS & Backup Systems", 
      icon: <BatteryCharging />, 
      desc: "Installation of Uninterrupted Power Supply (UPS) systems for zero-downtime operations." 
    },
    { 
      title: "Industrial Electrical Supply", 
      icon: <ShoppingCart />, 
      desc: "Sourcing and supply of high-grade electrical equipment and evaluated materials for large-scale projects." 
    },
    { 
      title: "Security IT Applications", 
      icon: <ScanFace />, 
      desc: "Integrated IT security software and hardware for modern facility management and data protection." 
    },
    { 
      title: "Drilling Water Technology", 
      icon: <Droplets />, 
      desc: "Specialized borehole drilling and water management systems using modern engineering techniques." 
    },
    { 
      title: "Construction & Design", 
      icon: <HardHat />, 
      desc: "End-to-end structural design and construction management for modern civil infrastructure." 
    },
    { 
      title: "Electrical Safety Audit", 
      icon: <ZapOff />, 
      desc: "Comprehensive risk assessment and safety protocols to prevent electrical hazards and fires." 
    },
    { 
      title: "Building Management Services", 
      icon: <Building2 />, 
      desc: "Smart automation and maintenance services to optimize building efficiency and comfort." 
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Solar, Electrical & IT Security | Hexon Technical</title>
        <meta name="description" content="From solar grid installations to biometric access control, Hexon Technical provides world-class engineering solutions in Uganda." />
        <link rel="canonical" href="https://hexontechnicalservices.com/services" />
      </Helmet>

      <div className="bg-white dark:bg-gray-900 transition-colors duration-500 min-h-screen">
        
        {/* Header Section - Branded Amber */}
        <div className="bg-amber-500 pt-32 pb-20 px-6 text-center text-black">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            Our Expertise
          </h1>
          <p className="max-w-2xl mx-auto font-bold text-lg opacity-80 leading-relaxed">
            Hexon provides precision engineering for Uganda's evolving infrastructure, 
            bridging the gap between power and security.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto py-24 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceList.map((service, index) => (
              <div 
                key={index} 
                className="group p-10 bg-gray-50 dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 hover:border-amber-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-none"
              >
                <div className="w-16 h-16 bg-amber-500/10 text-amber-600 dark:text-amber-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  {React.cloneElement(service.icon, { size: 32 })}
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                <button 
                  onClick={() => navigate('/projects', { state: { filter: service.title } })}
                  className="flex items-center text-amber-600 dark:text-amber-500 font-black text-sm group/link"
                >
                  View Case Study 
                  <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-950 text-white py-24 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-500 font-black uppercase tracking-widest text-xs mb-4 block">Workflow</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Meticulous <span className="text-amber-500">Implementation</span>
              </h2>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                Our workforce focuses on the precision installation of security and electrical systems—ensuring every wire is compliant and every sensor is calibrated.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: 'Audit', detail: 'Vulnerability mapping' },
                  { label: 'Design', detail: 'Custom architecture' },
                  { label: 'Deployment', detail: 'Technical execution' },
                  { label: 'Support', detail: 'System maintenance' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 bg-amber-500 rounded-full" />
                    <div>
                      <p className="font-black text-white">{item.label}</p>
                      <p className="text-gray-500 text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-500/20 rounded-[3rem] blur-2xl group-hover:bg-amber-500/30 transition-all opacity-50" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-video lg:aspect-square">
                 <img 
                   src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                   alt="Precision Engineering" 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;