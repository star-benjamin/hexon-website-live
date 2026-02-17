
import { useNavigate } from 'react-router-dom';
import { Zap, Sun, ShieldCheck, ArrowRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10" />
          {/* PLACEHOLDER: Image of a professional solar installation in Uganda */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1509391366360-fe5bb584850a?q=80&w=2000')] bg-cover bg-center opacity-50" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            {/* SEO Keyword: Solar and Electrical Company in Uganda */}
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              Certified Solar & Electrical Experts in Uganda
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Reliable Power for Your <span className="text-amber-500">Home & Business.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              We fix power issues and install solar systems that actually last. 
              From <span className='font-bold'>emergency electrical repairs</span> in Kampala to <span className='font-bold'>large-scale solar grids</span>, 
              we make sure you never stay in the dark.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/contactUs')}
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-black rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Talk to an expert <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="px-8 py-4 border-2 border-white/30 hover:border-white text-white font-bold rounded-xl transition-all"
              >
                What We Do
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEO KEYWORD SECTION (Services) --- */}
      <section className="py-20 bg-white dark:bg-gray-800 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center dark:text-white">
            Looking for a <span className="text-amber-500">Professional Electrician</span> or <span className="text-amber-500">Solar Installer</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-2xl border-gray-100 dark:border-gray-700">
              <Sun className="text-amber-500 mb-4" size={40} />
              <h3 className="text-xl font-bold dark:text-white mb-2">Solar Power Systems</h3>
              <p className="text-gray-500 text-sm">Best solar panels and battery installation for homes, hospitals, and schools in Uganda.</p>
            </div>
            
            <div className="p-6 border rounded-2xl border-gray-100 dark:border-gray-700">
              <Zap className="text-amber-500 mb-4" size={40} />
              <h3 className="text-xl font-bold dark:text-white mb-2">Electrical Wiring</h3>
              <p className="text-gray-500 text-sm">Safe and modern electrical wiring for new buildings and industrial factories.</p>
            </div>

            <div className="p-6 border rounded-2xl border-gray-100 dark:border-gray-700">
              <ShieldCheck className="text-amber-500 mb-4" size={40} />
              <h3 className="text-xl font-bold dark:text-white mb-2">Backup Power</h3>
              <p className="text-gray-500 text-sm">Inverters and backup systems that keep your lights on during a power cut (Umeme outages).</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION WITH SEO GEOGRAPHY --- */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold dark:text-white mb-6">Expert Technical Services in Wakiso & Kampala</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Hexon Technical Services is based in <span className='font-bold'>Nansana,Wakiso</span>, serving clients across Uganda. 
            Since 2021, we have worked with the <span className='font-bold'>Government</span>, <span className='font-bold'>NGOs</span>, and <span className='font-bold'>private families</span> to provide clean, reliable energy solutions. Whether you need a  
            <span className='font-bold'>lightning arrestor</span> or a <span className='font-bold'>solar water heater</span>, we are here to help.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;