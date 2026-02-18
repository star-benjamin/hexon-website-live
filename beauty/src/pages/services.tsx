import React from 'react';
import { 
  Hospital, BatteryCharging, ShoppingCart, Zap, Droplets, 
  ShieldAlert, Tv, ArrowRight, Fingerprint, ScanFace, Cctv, 
  ShieldCheck, Activity, HardDrive 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
      title: "Hospital & Solar Systems", 
      icon: <Hospital />, 
      desc: "Critical solar power and water heating solutions for healthcare and commercial use." 
    },
    { 
      title: "UPS & Backup Systems", 
      icon: <BatteryCharging />, 
      desc: "Installation of Uninterrupted Power Supply (UPS) systems for zero-downtime operations." 
    },
    { 
      title: "Industrial Electrical Supply", 
      icon: <ShoppingCart />, 
      desc: "Sourcing and supply of high-grade electrical equipment and evaluated materials." 
    },
    { 
      title: "Security IT Applications", 
      icon: <ScanFace />, 
      desc: "Integrated IT security software and hardware for modern facility management." 
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300">
      {/* Header Section */}
      <div className="bg-amber-500 py-16 px-6 text-center text-black">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Technical Expertise</h1>
        <p className="max-w-2xl mx-auto font-medium opacity-90">
          From biometric security and CCTV surveillance to large-scale solar grids, 
          Hexon provides precision engineering for Uganda's evolving infrastructure.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-transparent hover:border-amber-500 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                {React.cloneElement(service.icon, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <div 
                onClick={() => navigate('/projects', { state: { filter: service.title } })}
                className="flex items-center text-amber-600 font-bold text-sm cursor-pointer hover:text-amber-700"
              >
                View Case Study <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-amber-500">Meticulous Implementation</h2>
            <p className="text-gray-400 mb-6">
              Our professional workforce focuses on the precision installation of security, IT, and electrical systems—ensuring every wire and sensor is perfect.
            </p>
            <ul className="space-y-4">
              {['Audit: Identifying vulnerabilities', 'Design: Custom-tailored architecture', 'Deployment: Expert technical execution', 'Support: Continuous system maintenance'].map((item, i) => (
                <li key={i} className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000" 
               alt="Security System Installation" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;