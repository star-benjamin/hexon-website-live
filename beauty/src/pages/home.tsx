import { useNavigate } from 'react-router-dom';
import { Zap, Sun, ShieldCheck, ArrowRight, Lock, Eye, Activity, HardHat, Building2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Hexon Technical Services | Engineering, Power & Security</title>
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hexontechnicalservices.com/" />
        <meta property="og:title" content="Hexon Technical Services | Uganda's Engineering Experts" />
        <meta property="og:description" content="Turnkey Engineering Solutions: Solar Energy, Civil Works, and Advanced Biometric Security across Uganda." />
        <meta property="og:url" content="https://hexontechnicalservices.com/" />
        <meta property="og:image" content="https://hexontechnicalservices.com/logo.jpg" />
        <meta name="keywords" content="Hexon Technical, Solar Uganda, Biometrics Kampala, Civil Engineering Wakiso, Electrical Auditing" />
      </Helmet>

      <div className="overflow-x-hidden transition-colors duration-500 bg-white dark:bg-gray-900">
        
    {/* HERO SECTION */}
        <section className="relative min-h-[95vh] lg:min-h-screen flex items-center bg-gray-900 text-white overflow-hidden">
          {/* Background Layer */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1466611653911-95281773ad90?q=80&w=2000" 
              className="w-full h-full object-cover opacity-30 scale-105 animate-pulse-slow"
              alt="Industrial Engineering Background"
            />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-20">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Left Side: Content */}
              <div className="w-full lg:w-3/5">
                <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block border-l-4 border-amber-500 pl-4">
                  Engineering | Infrastructure | Security
                </span>
                <h1 className="text-5xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-8 tracking-tighter">
                  Precision <span className="text-amber-500">Engineering.</span> <br/>
                  Total Reliability.
                </h1>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                  From <span className='text-white font-bold'>Industrial Solar Grids</span> to <span className='text-white font-bold'>Civil Works</span> and <span className='text-white font-bold'>Biometric IT Security</span>. Hexon Technical Services provides the backbone for Uganda's modern infrastructure.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5">
                  <button 
                    onClick={() => navigate('/contactUs')}
                    className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-black font-black rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95"
                  >
                    Start Your Project <ArrowRight size={20} />
                  </button>
                  <button 
                    onClick={() => navigate('/services')}
                    className="px-10 py-5 border-2 border-white/20 hover:border-amber-500 hover:text-amber-500 text-white font-bold rounded-2xl transition-all backdrop-blur-sm"
                  >
                    View Services
                  </button>
                </div>
              </div>

            {/* Right Side: Amazing Feature Image */}
            <div className="hidden lg:flex lg:w-1/2 justify-center relative"> {/* Changed w-2/5 to w-1/3 to shrink the area */}
              
              {/* Decorative Background Glow - Adjusted to be smaller too */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-amber-500/10 blur-[80px] rounded-full z-0" />
              
              {/* The Image Container */}
              <div className="relative z-10 w-full max-w-[430px] aspect-square rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 group">
                <img 
                  src="/images/infrastructure/onnex.jpeg" 
                  alt="Hexon Engineering Excellence" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Floating Badge - Made smaller to match new image size */}
                <div className="absolute bottom-6 left-6 bg-amber-500 py-2 px-4 rounded-full shadow-xl flex items-center gap-2 group-hover:scale-105 transition-transform">
                <ShieldCheck size={16} className="text-black" /> 
                <div className="flex flex-col">
                  <p className="text-black font-black text-xs uppercase tracking-wider leading-none">
                    Certified
                  </p>
                  <p className="text-black text-[7px] font-bold uppercase opacity-80 tracking-tighter">
                    Registered Standards
                  </p>
                </div>
              </div>
              </div>
            </div>

            </div>
          </div>
        </section>

        {/* --- CORE SERVICE PILLARS --- */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800/50 px-6 transition-colors">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white uppercase tracking-tighter">
                From<span className="text-amber-500"> Concept</span> to<span className="text-amber-500"> Commissioning</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto italic">
                We bridge the gap between complex engineering and sustainable daily operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Sun size={32} />, 
                  title: "Solar & Power", 
                  desc: "Home and hospital-grade solar grids, industrial water heaters, and comprehensive backup commissioning." 
                },
                { 
                  icon: <Lock size={32} />, 
                  title: "IT & Biometrics", 
                  desc: "Multi-modal facial and fingerprint recognition, high-definition CCTV surveillance, and secure network infrastructure." 
                },
                { 
                  icon: <HardHat size={32} />, 
                  title: "Civil & Engineering", 
                  desc: "Structural surveying, electrical auditing, and large-scale industrial facility maintenance." 
                }
              ].map((pillar, idx) => (
                <div key={idx} className="group p-10 bg-white dark:bg-gray-900 rounded-[2.5rem] transition-all hover:-translate-y-2 border border-gray-100 dark:border-gray-800 shadow-sm">
                  <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">{pillar.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- STATS SECTION --- synchronized with About page */}
        <section className="py-20 bg-amber-500 text-black px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "50+", lab: "Projects Done" },
              { val: "12", lab: "Expert Engineers" },
              { val: "98%", lab: "Client Retention" },
              { val: "24/7", lab: "Technical Support" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-6xl font-black">{stat.val}</p>
                <p className="text-xs font-bold uppercase tracking-widest mt-2 opacity-80">{stat.lab}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- TRUST SECTION --- */}
        <section className="py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 transition-colors">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-amber-500/10 rounded-full text-amber-500 mb-6">
              <Building2 size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">Standardized Excellence.</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Based in <span className="text-amber-500 font-bold">Nansana-Nkowe</span>, we are registered providers for 
              Government agencies, NGOs, and the Private Sector across East Africa.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;