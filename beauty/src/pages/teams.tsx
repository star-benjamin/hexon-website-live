
import { Linkedin, Mail, BadgeCheck } from 'lucide-react';

const Teams = () => {
  const teamMembers = [
    { name: "Atamba Onnex", role: "Managing Director", category: "Leadership" },
    { name: "Nahabwe Edson", role: "Director", category: "Leadership" },
    { name: "Ssekitoleko James", role: "Engineer", category: "Engineering" },
    { name: "Ndide Roger Nalumoso", role: "IT Technician", category: "Technical" },
    { name: "Kyampeira Oliver", role: "Treasurer", category: "Administration" },
    { name: "Kizza Edrine", role: "Electrical Engineer", category: "Engineering" },
    { name: "Tumukwatse Benard", role: "Surveyor Engineer", category: "Engineering" },
    { name: "Wafula Ibrahim", role: "Secretary", category: "Administration" },
    { name: "Acuti Naboot", role: "Civil Engineer", category: "Engineering" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-20 transition-colors duration-300">
      {/* Header */}
      <div className="pt-24 pb-16 px-6 text-center bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <h1 className="text-4xl md:text-5xl font-black dark:text-white mb-4 uppercase tracking-tight">
          Our <span className="text-amber-500">Expert</span> Team
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium">
          Meet the highly skilled professionals behind Uganda's most reliable electrical and solar installations.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-amber-500/30"
            >
              {/* Picture Placeholder */}
              <div className="relative h-72 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                  {/* Replace this div with an <img> tag once you have the photos */}
                  <span className="text-xs uppercase font-bold tracking-widest">Photo coming soon</span>
                </div>
                {/* Accent Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Member Details */}
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                  <BadgeCheck className="text-black" size={24} />
                </div>
                
                <span className="text-amber-500 text-xs font-black uppercase tracking-widest">
                  {member.category}
                </span>
                <h3 className="text-xl font-bold mt-1 dark:text-white group-hover:text-amber-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium text-sm mt-1">
                  {member.role}
                </p>

                {/* Social Links / Action */}
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 flex gap-4">
                  <button className="text-gray-400 hover:text-amber-500 transition-colors">
                    <Linkedin size={18} />
                  </button>
                  <button className="text-gray-400 hover:text-amber-500 transition-colors">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Culture Section */}
      <div className="max-w-5xl mx-auto px-6 mt-10">
        <div className="bg-amber-500 rounded-[3rem] p-10 md:p-16 text-center text-black">
          <h2 className="text-3xl font-black mb-4">A Multi-Disciplinary Approach</h2>
          <p className="font-medium text-lg opacity-90 max-w-3xl mx-auto">
            Our team brings together Electrical, Civil, and Surveying engineers to ensure 
            every project is technically sound from the ground up.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teams;