import { useRef } from 'react';
import { Play, MapPin, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, Zap, Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Updated to include your new service categories
  const videos = [
    { id: 1, title: "Biometric Access Control Setup", videoId: "VIDEO_ID_HERE", location: "Corporate Plaza, Kampala", category: "Security" },
    { id: 2, title: "Hospital Solar Grid Installation", videoId: "VIDEO_ID_HERE", location: "Entebbe Referral", category: "Solar" },
    { id: 3, title: "High-Definition CCTV Network", videoId: "VIDEO_ID_HERE", location: "Industrial Area", category: "IT Security" },
    { id: 4, title: "UPS & Backup Commissioning", videoId: "VIDEO_ID_HERE", location: "Government Offices", category: "Electrical" },
  ];

  const caseStudies = [
    {
      sector: "Security & IT",
      title: "Advanced Biometric Integration",
      desc: "Implementation of facial recognition and fingerprint access control systems for high-security zones.",
      icon: <Lock size={20} />,
      imagePlaceholder: "Biometric Reader / Secure Entrance Image"
    },
    {
      sector: "Government & Infrastructure",
      title: "UEDCL Electrical Auditing",
      desc: "Professional auditing and maintenance of critical grid components to ensure zero-downtime performance.",
      icon: <ShieldCheck size={20} />,
      imagePlaceholder: "Electrical Panel / Technician Auditing Image"
    }
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 1.5 
        : scrollLeft + clientWidth / 1.5;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <>
    <Helmet>
            <title>Our Engineering Portfolio</title>
            <meta name="description" content="Hexon Technical Projects." />
            <link rel="canonical" href="https://gregorialindustries.com/projects" />
            <meta name="keywords" content='Solar Grid Portfolio, Hexon Technical Projects, Electrical Contracting Gallery, Solar Water Heater Installations, CCTV Projects Uganda'/>
    </Helmet>

    <div className="bg-white dark:bg-gray-800 min-h-screen pb-20 overflow-x-hidden transition-colors">
      {/* Header */}
      <div className="pt-24 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white mb-4">
          Technical <span className="text-amber-500">Milestones</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          From advanced biometric security to nationwide solar installations, we document our commitment to precision.
        </p>
      </div>

      {/* Main Case Studies Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 gap-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="flex flex-col lg:flex-row bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              {/* Image Side */}
              <div className="lg:w-1/2 h-64 lg:h-auto bg-gray-200 dark:bg-gray-800 flex items-center justify-center relative overflow-hidden">
                {/* --- IMAGE PLACEHOLDER --- */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest text-center px-4">
                   [ {study.imagePlaceholder} ]
                </div>
               
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-amber-600 mb-4">
                  {study.icon}
                  <span className="text-xs font-black uppercase tracking-widest">{study.sector}</span>
                </div>
                <h3 className="text-3xl font-bold dark:text-white mb-4">{study.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {study.desc}
                </p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-amber-500 text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-600 transition-colors">
                    View Specs <ExternalLink size={16}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO SECTION */}
      <section className="bg-gray-900 py-20 relative">
        <div className="max-w-7xl mx-auto px-6 mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Play className="text-amber-500 fill-amber-500" /> Field Documentation
            </h2>
            <p className="text-gray-400 mt-2">Watch our technical teams in action across Uganda.</p>
          </div>

          <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="p-3 rounded-full border border-gray-700 text-white hover:bg-amber-500 hover:text-black transition-all">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full border border-gray-700 text-white hover:bg-amber-500 hover:text-black transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto px-6 md:px-[calc((100vw-1280px)/2+24px)] no-scrollbar scroll-smooth">
          {videos.map((video) => (
            <div key={video.id} className="min-w-[320px] md:min-w-[480px] group">
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-black border border-gray-800">
                {/* --- VIDEO PLACEHOLDER --- */}
                <iframe
                  className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-5 px-2">
                <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">{video.category}</span>
                <h3 className="text-white font-bold text-xl mt-1">{video.title}</h3>
                <p className="text-gray-500 text-sm flex items-center gap-1 mt-2">
                  <MapPin size={14} className="text-amber-500" /> {video.location}
                </p>
              </div>
            </div>
          ))}
          <div className="min-w-[40px]" /> 
        </div>
      </section>
    </div>
    </>
  );
};

export default Projects;