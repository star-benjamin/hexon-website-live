
import { Target, Eye, MapPin, Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300">
      {/* Hero Section: Identity */}
      <section className="pt-24 pb-16 px-6 bg-amber-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-black">
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase">Who We Are</h1>
            <p className="text-lg font-medium leading-relaxed opacity-90">
              Established in 2021, Hexon Technical Services Limited is a premier Ugandan engineering firm. 
              Based along Wakiso-Nansana, Nkowe Mende Road, we specialize in high-stakes electrical 
              and solar system installations for government, private, and NGO sectors.
            </p>
            <div className="mt-8 flex items-center gap-2 font-bold bg-black/10 w-fit px-4 py-2 rounded-full">
              <MapPin size={20} /> Head Office: Wakiso-Nansana, Uganda
            </div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="w-full h-80 bg-black/20 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1558444479-c84826027a3a?auto=format&fit=crop&q=80&w=1000" 
                  alt="Solar Engineers" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl border-t-8 border-amber-500">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-xl flex items-center justify-center mb-6">
              <Eye size={32} />
            </div>
            <h2 className="text-2xl font-black mb-4 dark:text-white">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
              "To be Uganda's leading provider of affordable, quality renewable energy systems 
              to millions of people in Uganda and beyond."
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl border-t-8 border-black dark:border-white">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h2 className="text-2xl font-black mb-4 dark:text-white">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To provide affordable, simple, and reliable services in the area of clean energy 
              development, planning, and management across Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* The "Hexon Edge" - Based on your Documents */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-gray-100 dark:border-gray-700">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold dark:text-white">The Hexon Technical Edge</h2>
          <p className="text-amber-600 font-bold mt-2">Why we are different</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-4 text-amber-500"><Award size={40} /></div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Technical Understanding</h3>
            <p className="text-sm text-gray-500">Deep knowledge of technical requirements for successful project implementation.</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4 text-amber-500"><Users size={40} /></div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Sociological Insight</h3>
            <p className="text-sm text-gray-500">We analyze the sociological aspects of every project to ensure long-term community success.</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4 text-amber-500"><Lightbulb size={40} /></div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Sustainable Development</h3>
            <p className="text-sm text-gray-500">Producing high-quality professional work aimed at achieving a greener future.</p>
          </div>
        </div>
      </section>

      {/* Sector Summary Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-12 px-6 rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Hexon Technical Services Limited provides services to <strong>Central Government</strong>, 
            <strong> NGOs</strong>, <strong>Districts</strong>, and <strong>Private Sectors</strong>. 
            We are experts in development aid and large-scale system management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;