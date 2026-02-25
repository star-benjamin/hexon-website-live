import { Target, Eye, MapPin, Award, Users, Lightbulb, ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Hexon Technical | Uganda's Engineering Experts</title>
        <meta name="description" content="Established in 2021, Hexon Technical Services is a premier Ugandan engineering firm specializing in Solar and Security." />
        <link rel="canonical" href="https://hexontechnicalservices.com/about" />
        <meta name="keywords" content='Hexon Technical History, Engineering Consultants Uganda, Nansana Technical Services, Professional Electricians Wakiso'/>
      </Helmet>

      <div className="bg-white dark:bg-gray-900 transition-colors duration-500 min-h-screen">
        
        {/* Hero Section: Identity - Stays Amber to anchor the brand */}
        <section className="pt-32 pb-20 px-6 bg-amber-500 transition-all">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-black">
              <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                Who We Are
              </h1>
              <p className="text-lg font-medium leading-relaxed opacity-90">
                Established in 2021, Hexon Technical Services Limited is a premier Ugandan engineering firm. 
                Based along Wakiso-Nansana, we specialize in high-stakes electrical, 
                solar, and <span className="font-bold underline decoration-2">advanced security IT systems</span>.
              </p>
              <div className="mt-8 flex items-center gap-2 font-bold bg-black/10 w-fit px-4 py-2 rounded-full text-sm">
                <MapPin size={18} /> Head Office: Nansana-Nkowe, Uganda
              </div>
            </div>
            <div className="md:w-1/2 relative">
               <div className="w-full h-80 bg-black/20 rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1581092335397-9583ec92d234?auto=format&fit=crop&q=80&w=1000" 
                    alt="Hexon Technical Team" 
                    className="w-full h-full object-cover"
                  />
               </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards*/}
        <section className="py-20 px-6 max-w-7xl mx-auto -mt-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl dark:shadow-none border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={36} />
              </div>
              <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                To be Uganda's leading provider of affordable, quality renewable energy and <span className='font-bold text-gray-900 dark:text-white'>integrated security solutions</span>.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl dark:shadow-none border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-2xl flex items-center justify-center mb-6">
                <Target size={36} />
              </div>
              <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To provide affordable, reliable services in clean energy and <span className='font-bold text-gray-900 dark:text-white'>digital security infrastructure</span> across Uganda.
              </p>
            </div>
          </div>
        </section>

        {/* The "Hexon Edge" - Icons adapt to dark mode background */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">The Hexon Edge</h2>
            <div className="h-1.5 w-20 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Award size={40} />, title: "Technical Expertise", desc: "National grid and biometric security mastery." },
              { icon: <ShieldCheck size={40} />, title: "Security-First", desc: "Advanced IT protocols in every power installation." },
              { icon: <Users size={40} />, title: "Social Impact", desc: "Ensuring long-term community project viability." },
              { icon: <Lightbulb size={40} />, title: "Future Ready", desc: "Aimed at a greener, safer Uganda." }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sector Summary Section - Uses a slightly different gray for "Sectioning" */}
        <div className="bg-gray-50 dark:bg-gray-800/50 py-20 px-6 rounded-t-[3rem] transition-colors">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Trusted by Public & Private Institutions</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Hexon Technical is registered to provide high-grade services to <span className='text-amber-600 dark:text-amber-500 font-bold'>Government</span>, 
              NGOs, and the Private Sector. We specialize in development aid and large-scale IT security management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;