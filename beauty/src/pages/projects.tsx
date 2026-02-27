import { useRef, useState } from 'react';
import { Play, MapPin, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';


interface ProjectImage {
  url: string;
  caption: string;
}

const CaseStudyGallery = ({ images, title }: { images: ProjectImage[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 uppercase font-black text-xs tracking-widest">
        No Images Available
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden group bg-black">
      {/* Horizontal Slider Wrapper */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0 relative">
            <img 
              src={img.url} 
              alt={`${title} - ${img.caption}`} 
              className="w-full h-full object-cover"
            />
           
          </div>
        ))}
      </div>

      {/* 2.CAPTION OVERLAY  */}
      <div className="absolute bottom-0 left-0 right-0  px-5 pb-20 bg-gradient-to-t from-black/100 via-black/60 to-transparent z-20 pointer-events-none">
        <p className="text-white text-sm md:text-base font-medium tracking-wide animate-in fade-in slide-in-from-bottom-2 duration-500">
          <span className="text-amber-500 font-black mr-3 uppercase text-xs">0{currentIndex + 1} //</span> 
          {images[currentIndex].caption}
        </p>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity z-30 pb-16">
            <button 
              onClick={prevImage}
              className="p-3 bg-white/10 backdrop-blur-md text-white rounded-2xl hover:bg-amber-500 hover:text-black transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="p-3 bg-white/10 backdrop-blur-md text-white rounded-2xl hover:bg-amber-500 hover:text-black transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="absolute top-6 right-6 z-10 flex gap-2">
             {images.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1 transition-all duration-300 rounded-full ${
                  currentIndex === idx ? 'w-6 bg-amber-500' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const videos = [
    { id: 1, title: "Biometric Access Control Setup", videoId: "VIDEO_ID_1", location: "Corporate Plaza, Kampala", category: "Security" },
    { id: 2, title: "Hospital Solar Grid Installation", videoId: "VIDEO_ID_2", location: "Entebbe Referral", category: "Solar" },
    { id: 3, title: "High-Definition CCTV Network", videoId: "VIDEO_ID_3", location: "Industrial Area", category: "IT Security" },
  ];

  // 3. UPDATED CASE STUDIES DATA
  const caseStudies = [
    {
      sector: "Security & IT",
      title: "Advanced surveilance Biometric Integration ",
      desc: "Deployment of surveilance cameras and multi-modal facial recognition and biometric entry systems for homes, businesses areas and corporate headquarters.",
      icon: <Lock size={20} />,
      images: [
        { url: "/images/security/cameraOnFence.jpeg", caption: "Camera on the fence" },
        { url: "/images/security/smartLock.jpeg", caption: "smart authentication device" },
        { url: "/images/security/intalledCameraFeed.jpeg", caption: "Live camera feed from an installed security camera." },
        { url: "/images/security/solarPoweredInfraRedSecuriityCamera.jpeg", caption: "Integrated dashboard for real-time traffic logs." }
      ]
    },
    {
      sector: "Solar Power",
      title: "Solar System Installation and Maintenance",
      desc: "Designing and installation of efficient solar systems using high quality materials guaranteed to meet your needs. We also offer solar system maintenance and repair services",
      icon: <ShieldCheck size={20} />,
      images: [
        { url: "/images/solar/roofSolarInstallation1.jpeg", caption: "Rooftop photovoltaic array installation for maximum yield." },
        { url: "/images/solar/roofSolarInstallation2.jpeg", caption: "Rooftop solar solar panel installation." },
        { url: "/images/solar/roofSolarInstallation3.jpeg", caption: "Rooftop solar solar panel installation." },
        { url: "/images/solar/solarStreetLights.jpeg", caption: "solar powered street light installation." }
      ]
    }
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Engineering Portfolio | Hexon Technical Projects</title>
        <meta name="description" content="Explore our technical milestones in Solar Energy and Security." />
      </Helmet>

      <div className="bg-white dark:bg-gray-900 min-h-screen pb-20 transition-colors duration-500">
        <div className="pt-32 pb-20 px-6 text-center">
          <span className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Proven Experience</span>
          <h1 className="text-5xl md:text-7xl font-black dark:text-white mb-6 tracking-tighter uppercase">
            Technical <span className="text-amber-500">Milestones</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-medium">
            A portfolio of precision engineering and infrastructure reliability.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 gap-12 lg:gap-20 ">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="flex flex-col lg:flex-row bg-gray-50 dark:bg-gray-800 rounded-[3rem] overflow-hidden border border-gray-100 dark:border-gray-700 shadow-xl dark:shadow-none"
              >
                <div className="lg:w-1/2 h-[500px] lg:h-auto min-h-[500px]">
                  <CaseStudyGallery images={study.images} title={study.title} />
                </div>

                <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-3 text-amber-600 dark:text-amber-500 mb-8">
                    <div className="p-3 bg-amber-500/10 rounded-2xl">{study.icon}</div>
                    <span className="text-sm font-black uppercase tracking-widest">{study.sector}</span>
                  </div>
                  <h3 className="text-4xl font-black dark:text-white mb-6 leading-none uppercase tracking-tight">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-10 text-xl leading-relaxed">
                    {study.desc}
                  </p>
                  <div>
                    <button className="inline-flex items-center gap-3 bg-gray-900 dark:bg-amber-500 text-white dark:text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
                      View Technical Specs <ExternalLink size={18}/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*Video section */}
        <section className="bg-gray-950 py-32 relative">
          <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                Field <span className="text-amber-500">Documentation</span>
              </h2>
              <p className="text-gray-500 mt-4 text-xl">Real-time technical deployment on the grid.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => scroll('left')} className="p-5 rounded-2xl border border-gray-800 text-white hover:bg-amber-500 hover:text-black transition-all active:scale-90">
                <ChevronLeft size={28} />
              </button>
              <button onClick={() => scroll('right')} className="p-5 rounded-2xl border border-gray-800 text-white hover:bg-amber-500 hover:text-black transition-all active:scale-90">
                <ChevronRight size={28} />
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex gap-10 overflow-x-auto px-6 md:px-[calc((100vw-1280px)/2+24px)] no-scrollbar scroll-smooth">
            {videos.map((video) => (
              <div key={video.id} className="min-w-[320px] md:min-w-[600px] group">
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-black border border-gray-800 group-hover:border-amber-500 transition-colors duration-500">
                  <iframe
                    className="w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-700"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-8 px-4">
                  <h3 className="text-white font-black text-2xl uppercase tracking-tight">{video.title}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-2 mt-4 font-bold">
                    <MapPin size={18} className="text-amber-500" /> {video.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;