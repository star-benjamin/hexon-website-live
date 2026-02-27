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
        
        {/* Hero Section: Identity */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 bg-amber-500 transition-all">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2 text-black text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
                Who We Are
              </h1>
              <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed opacity-90 max-w-2xl mx-auto lg:mx-0">
                Established in 2021, Hexon Technical Services Limited is a premier Ugandan engineering firm. 
                Based along Wakiso-Nansana, we specialize in high-stakes electrical, 
                solar, and <span className="font-bold underline decoration-2">advanced security IT systems</span>.
              </p>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 font-bold bg-black/10 w-fit px-5 py-3 rounded-full text-sm mx-auto lg:mx-0">
                <MapPin size={18} className="flex-shrink-0" /> 
                <span>Head Office: Nansana-Nkowe, Uganda</span>
              </div>
            </div>

            {/* Image container: responsive height and rotation logic */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-full aspect-[4/3] sm:aspect-video lg:aspect-square bg-black/20 rounded-[2rem] overflow-hidden shadow-2xl rotate-0 sm:rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1581092335397-9583ec92d234?auto=format&fit=crop&q=80&w=1000" 
                  alt="Hexon Technical Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards - Adjusted negative margin for mobile safety */}
        <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto lg:-mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-700 transform transition-hover hover:-translate-y-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-gray-900 dark:text-white uppercase">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic text-base md:text-lg">
                To be Uganda's leading provider of affordable, quality renewable energy and <span className='font-bold text-gray-900 dark:text-white'>integrated security solutions</span>.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-700 transform transition-hover hover:-translate-y-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-gray-900 dark:text-white uppercase">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                To provide affordable, reliable services in clean energy and <span className='font-bold text-gray-900 dark:text-white'>digital security infrastructure</span> across Uganda.
              </p>
            </div>
          </div>
        </section>

        {/* The "Hexon Edge" */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
              The Hexon Edge
            </h2>
            <div className="h-2 w-16 bg-amber-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: <Award size={40} />, title: "Technical Expertise", desc: "National grid and biometric security mastery." },
              { icon: <ShieldCheck size={40} />, title: "Security-First", desc: "Advanced IT protocols in every power installation." },
              { icon: <Users size={40} />, title: "Social Impact", desc: "Ensuring long-term community project viability." },
              { icon: <Lightbulb size={40} />, title: "Future Ready", desc: "Aimed at a greener, safer Uganda." }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="flex justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-3 text-gray-900 dark:text-white uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed px-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sector Summary Section */}
        <section className="bg-gray-50 dark:bg-gray-800/50 py-16 md:py-24 px-6 rounded-t-[2.5rem] md:rounded-t-[4rem] transition-colors">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
              Trusted by Institutions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-xl leading-relaxed">
              Hexon Technical is registered to provide high-grade services to <span className='text-amber-600 dark:text-amber-500 font-bold'>Government</span>, 
              NGOs, and the Private Sector. We specialize in development aid and large-scale IT security management.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;