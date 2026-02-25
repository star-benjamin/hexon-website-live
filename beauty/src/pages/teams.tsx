import { Linkedin, Mail, BadgeCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Teams = () => {
  const teamMembers = [
    { name: "Atamba Onnex", role: "Managing Director", category: "Leadership" },
    { name: "Nahabwe Edson", role: "Director", category: "Leadership" },
    { name: "Ssekitoleko James", role: "Engineer", category: "Engineering" },
    { name: "Sukwe Benjamin", role: "Chief Technology Officer", category: "Technical" },
    { name: "Kyampeire Olivia", role: "Treasurer", category: "Administration" },
    { name: "Kizza Edwin", role: "Electrical Engineer", category: "Engineering" },
    { name: "Tumukwatse Benard", role: "Surveyor Engineer", category: "Engineering" },
    { name: "Wafula Ibrahim", role: "Electrical Engineer", category: "Engineering" },
    { name: "Acut Nabot", role: "Civil Engineer", category: "Engineering" },
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
        
        {/* Header - Distinctly separates from the main background */}
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
                {/* Image Area */}
                <div className="relative h-80 bg-gray-100 dark:bg-gray-700/50 overflow-hidden flex items-center justify-center">
                  {/* Subtle Blueprint Pattern Placeholder */}
                  <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                       <span className="text-gray-400 dark:text-gray-500">👤</span>
                    </div>
                    <span className="text-[10px] uppercase font-black text-gray-400 dark:text-gray-500 tracking-widest">Technician Profile</span>
                  </div>

                  {/* Hover Accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            {/* Visual Flair */}
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