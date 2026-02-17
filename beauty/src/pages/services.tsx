import React from 'react';
import { Hospital, BatteryCharging, ShoppingCart, Zap, Droplets, ShieldAlert, Tv, ArrowRight 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();
  const serviceList = [
    { title: "Hospital Solar Systems", icon: <Hospital />, desc: "Critical power solutions for healthcare facilities where reliability is life-saving." },
    { title: "UEDCL Backup Systems", icon: <BatteryCharging />, desc: "Robust battery and inverter backups to ensure zero downtime during grid failures." },
    { title: "Electronic Supplies", icon: <ShoppingCart />, desc: "Global sourcing of high-grade electrical components and evaluated materials." },
    { title: "Electrical Installation", icon: <Zap />, desc: "Professional wiring and system integration for industrial and private sectors." },
    { title: "Solar Water Heaters", icon: <Droplets />, desc: "Energy-efficient heating solutions for residential and commercial use." },
    { title: "Lightning Arrestors", icon: <ShieldAlert />, desc: "Advanced protection systems to secure your infrastructure against surge damage." },
    { title: "Zuku Satellite TV", icon: <Tv />, desc: "Seamless installation and integration of satellite entertainment systems." },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300">
      {/* Header Section */}
      <div className="bg-amber-500 py-16 px-6 text-center text-black">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Technical Expertise</h1>
        <p className="max-w-2xl mx-auto font-medium opacity-90">
          From government-grade solar grids to precision electrical installations, 
          Hexon provides customized services tailored to Uganda's unique requirements.
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

      {/* The "Why Our Process Matters" Section */}
      <div className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-amber-500">Meticulous Implementation</h2>
            <p className="text-gray-400 mb-6">
              Our professional workforce focuses on the electrical & solar system installation of each individual project—right down to the smallest of details.
            </p>
            <ul className="space-y-4">
              {['Design: No room for error', 'Supply: World-class materials', 'Execution: Experienced professionals', 'Maintenance: Long-term reliability'].map((item, i) => (
                <li key={i} className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=1000" 
               alt="Technical Execution" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;