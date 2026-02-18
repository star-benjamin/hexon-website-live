import { useNavigate } from 'react-router-dom';
import { Zap, Sun, ShieldCheck, ArrowRight, Lock, Eye, Activity } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden transition-colors duration-300">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[95vh] flex items-center bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent z-10" />
          {/* --- IMAGE PLACEHOLDER: Professional blend of solar panels and high-tech security cameras --- */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1509391366360-fe5bb584850a?q=80&w=2000')] bg-cover bg-center opacity-40" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block border-l-4 border-amber-500 pl-4">
              Powering Infrastructure | Securing Assets
            </span>
            <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8">
              Technical Precision. <br/>
              <span className="text-amber-500">Unfailing Security.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Hexon Technical Services delivers world-class <span className='text-white font-bold'>Solar Energy</span> grids and 
              <span className='text-white font-bold'> Biometric Security</span> systems across Uganda. We don't just install; we engineer reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => navigate('/contactUs')}
                className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-black font-black rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 active:scale-95"
              >
                Request a Quote <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="px-10 py-5 border-2 border-white/20 hover:border-amber-500 hover:text-amber-500 text-white font-bold rounded-2xl transition-all backdrop-blur-sm"
              >
                Explore Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE PILLARS SECTION --- */}
      <section className="py-24 bg-white dark:bg-gray-800 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 dark:text-white uppercase tracking-tighter">
              Engineering <span className="text-amber-500">The Future</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto italic">Comprehensive technical solutions for Government, NGOs, and the Private Sector.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pillar 1: Solar */}
            <div className="group p-10 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] transition-all hover:-translate-y-2 border border-transparent hover:border-amber-500/30">
              <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Sun size={32} />
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-4">Renewable Energy</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Specialized hospital solar systems, industrial water heaters, and rural electrification grids designed for Uganda's climate.
              </p>
            </div>
            
            {/* Pillar 2: Security */}
            <div className="group p-10 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] transition-all hover:-translate-y-2 border border-transparent hover:border-amber-500/30">
              <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Lock size={32} />
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-4">IT & Biometric Security</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Facial recognition, fingerprint access control, and high-definition CCTV (IP/HD) surveillance for high-security assets.
              </p>
            </div>

            {/* Pillar 3: Electrical */}
            <div className="group p-10 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] transition-all hover:-translate-y-2 border border-transparent hover:border-amber-500/30">
              <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Activity size={32} />
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-4">Auditing & Maintenance</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Full-scale electrical auditing, UPS system management, and UEDCL backup commissioning to eliminate downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS / TRUST SECTION --- */}
      <section className="py-20 bg-amber-500 text-black px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-6xl font-black">2021</p>
            <p className="text-sm font-bold uppercase tracking-widest mt-2">Established</p>
          </div>
          <div>
            <p className="text-4xl md:text-6xl font-black">100%</p>
            <p className="text-sm font-bold uppercase tracking-widest mt-2">Ugandan Owned</p>
          </div>
          <div>
            <p className="text-4xl md:text-6xl font-black">24/7</p>
            <p className="text-sm font-bold uppercase tracking-widest mt-2">Technical Support</p>
          </div>
          <div>
            <p className="text-4xl md:text-6xl font-black">Secure</p>
            <p className="text-sm font-bold uppercase tracking-widest mt-2">IT Protocols</p>
          </div>
        </div>
      </section>

      {/* --- GEOGRAPHIC SEO SECTION --- */}
      <section className="py-24 bg-gray-900 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 bg-amber-500/10 rounded-full text-amber-500 mb-6">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Serving Wakiso, Kampala, and the Greater East African Region.</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Headquartered in <span className="text-white font-bold">Nansana-Nkowe</span>, Hexon Technical Services is the trusted partner for government-grade 
            power and security. We bridge the gap between complex engineering and sustainable community development.
          </p>
          <div className="mt-12 flex justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
             {/* PLACEHOLDERS: For Partner Logos like UEDCL, NGO Logos, etc. */}
             <div className="font-bold text-xl uppercase tracking-tighter">Government Partners</div>
             <div className="font-bold text-xl uppercase tracking-tighter">NGO Sectors</div>
             <div className="font-bold text-xl uppercase tracking-tighter">Private Industry</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;