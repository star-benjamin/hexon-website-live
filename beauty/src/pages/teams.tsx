import { Linkedin, Mail, BadgeCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Teams = () => {
  const teamMembers = [
    { 
      name: "Atamba Onnex", 
      role: "Managing Director", 
      category: "Leadership",
      image: "/images/employess/logo.jpg" 
    },
    { 
      name: "Nahabwe Edson", 
      role: "Director", 
      category: "Leadership",
      image: "/images/employess/Edson.jpeg" 
    },
    { 
      name: "Twinomujuni Phiona", 
      role: "Procurement Officer", 
      category: "Administration",
      image: "/images/employess/Procurement officer Twinomujuni phiona.jpeg" 
    },
    { 
      name: "Ssekitoleko James", 
      role: "Engineer", 
      category: "Engineering",
      image: "/images/employess/logo.jpg" 
    },
    { 
      name: "Sukwe Benjamin", 
      role: "Chief Technology Officer", 
      category: "Technical",
      image: "/images/employess/logo.jpg" 
    },
    { 
      name: "Kyampeire Olivia", 
      role: "Treasurer", 
      category: "Administration",
      image: "/images/employess/Kyampeire Olivia  Administrator.jpeg" 
    },
    { 
      name: "Batwala Julius Lukwitira", 
      role: "Accountant Officer", 
      category: "Administration",
      image: "/images/employess/BATWALA JULIUS LUKWITIRA.jpeg" 
    },
    { 
      name: "Kizza Edwin", 
      role: "Electrical Engineer", 
      category: "Engineering",
      image: "/images/employess/Electrical engineer kiiza Edwin.jpeg" 
    },
    { 
      name: "Wafula Abraham", 
      role: "Electrical Engineer", 
      category: "Engineering",
      image: "/images/employess/logo.jpg" 
    },
    { 
      name: "Acut Nabot", 
      role: "Civil Engineer", 
      category: "Engineering",
      image: "/images/employess/Acut Nabot civil Engineer.jpeg" 
    },
    { 
      name: "Tumukwatse Benard", 
      role: "Surveyor", 
      category: "Engineering",
      image: "/images/employess/survey.jpeg" 
    },
     { 
      name: "Ndide Roger Nalumoso", 
      role: "IT Technician", 
      category: "Technical",
      image: "/images/employess/IT Technician.jpeg" 
    },
    
  ];

  return (
    <>
      <Helmet>
        <title>Meet the Experts | Hexon Technical Team</title>
        <meta name="description" content="Meet the highly skilled professionals behind Uganda's most reliable electrical and solar installations." />
        <link rel="canonical" href="https://hexontechnicalservices.com/teams" />
        <meta name="keywords" content='Certified Engineers Uganda, Solar Technicians Kampala, IT Security Experts, Hexon Technical Staff'/>
      </Helmet>

      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-24 transition-colors duration-500">
        
        {/* Header */}
        <div className="pt-32 pb-20 px-6 text-center bg-white dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700 transition-colors">
          <span className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our People</span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">
            The <span className="text-amber-500">Expert</span> Team
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium text-lg">
            A multi-disciplinary workforce dedicated to precision engineering and sustainable infrastructure.
          </p>
        </div>

        {/* Team Grid */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-xl dark:shadow-none border border-transparent hover:border-amber-500/50 transition-all duration-500"
              >
                {/* Image Area - Mapping image here */}
                <div className="relative h-80 bg-gray-100 dark:bg-gray-700/50 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  {/* Subtle Blueprint Overlay (Still kept for technical aesthetic) */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]"></div>

                  {/* Hover Accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-200/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Details Area */}
                <div className="p-8 relative">
                  <div className="absolute -top-7 right-8 w-14 h-14 bg-amber-500 text-black rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <BadgeCheck size={28} />
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-amber-500/10 dark:bg-amber-500/5 text-amber-600 dark:text-amber-500 text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
                    {member.category}
                  </span>
                  
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 font-bold text-sm mt-1 uppercase tracking-tight">
                    {member.role}
                  </p>

                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700/50 flex gap-4">
                    <button className="p-2 text-gray-400 hover:text-amber-500 dark:hover:text-white transition-all hover:bg-amber-500/10 rounded-lg">
                      <Linkedin size={20} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-amber-500 dark:hover:text-white transition-all hover:bg-amber-500/10 rounded-lg">
                      <Mail size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Culture Callout */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="bg-amber-500 dark:bg-amber-500 rounded-[3.5rem] p-12 md:p-20 text-center text-black relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
                A Unified Technical Force
              </h2>
              <p className="font-bold text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
                By integrating Electrical, Civil, and IT expertise, we deliver turnkey solutions 
                that are technically sound and future-proof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;