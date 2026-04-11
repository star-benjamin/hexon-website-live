import { useRef, useState, useEffect } from 'react';
import { Play, MapPin, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, Lock,  X, Maximize2  } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { caseStudies } from '../components/data/caseStudiesData';
import { videos } from '../components/data/videos';



interface ProjectImage {
  url: string;
  caption: string;
}

const CaseStudyGallery = ({ images, title }: { images: ProjectImage[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isLightboxOpen]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
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
    <>
      <Helmet>
        <title>Engineering Portfolio | Solar & Security Milestones in Uganda</title>
        <meta name="description" content="Explore our technical milestones: Hospital-grade solar in Namugongo, industrial power in Hoima, and biometric security in Kampala. Real engineering solutions across Uganda." />
        <meta property="og:title" content="Hexon Technical Projects | Proven Engineering Experience" />
        <meta property="og:description" content="View our portfolio of solar, electrical, and security installations across Uganda." />
        <link rel="canonical" href="https://hexontechnicalservices.com/projects" />
      </Helmet>
      <div className="relative w-full h-full overflow-hidden group bg-black cursor-zoom-in">
        {/* Main Image View */}
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onClick={() => setIsLightboxOpen(true)}
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

        {/* Zoom Indicator */}
        <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
           <div className="bg-black/50 backdrop-blur-md p-2 rounded-lg text-white">
              <Maximize2 size={16} />
           </div>
        </div>

        {/* CAPTION OVERLAY */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 bg-gradient-to-t from-black/100 via-black/60 to-transparent z-20 pointer-events-none">
          <p className="text-white text-sm font-medium tracking-wide">
            <span className="text-amber-500 font-black mr-2 uppercase text-[10px]">0{currentIndex + 1} //</span> 
            {images[currentIndex].caption}
          </p>
        </div>

        {/* Inline Navigation Arrows */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 z-30 pointer-events-none">
            <button onClick={prevImage} className="p-2.5 bg-black/30 backdrop-blur-md text-white rounded-xl hover:bg-amber-500 hover:text-black transition-all pointer-events-auto">
              <ChevronLeft size={18} />
            </button>
            <button onClick={nextImage} className="p-2.5 bg-black/30 backdrop-blur-md text-white rounded-xl hover:bg-amber-500 hover:text-black transition-all pointer-events-auto">
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
          
          {/* Close Button */}
          <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-amber-500 hover:text-black text-white rounded-full transition-all z-[110]"
          >
            <X size={24} />
          </button>

          {/* Lightbox Navigation */}
          <div className="absolute inset-x-4 md:inset-x-10 flex items-center justify-between z-[105] pointer-events-none">
            <button onClick={prevImage} className="p-4 bg-white/5 hover:bg-amber-500 hover:text-black text-white rounded-2xl backdrop-blur-md transition-all pointer-events-auto">
              <ChevronLeft size={32} />
            </button>
            <button onClick={nextImage} className="p-4 bg-white/5 hover:bg-amber-500 hover:text-black text-white rounded-2xl backdrop-blur-md transition-all pointer-events-auto">
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Large Image Container */}
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <img 
              src={images[currentIndex].url} 
              alt={images[currentIndex].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl select-none"
            />
            
            <div className="mt-8 text-center max-w-2xl">
                <span className="text-amber-500 font-black text-xs uppercase tracking-[0.3em] block mb-2">
                    Project Image {currentIndex + 1} of {images.length}
                </span>
                <h4 className="text-white text-xl md:text-2xl font-bold tracking-tight">
                    {images[currentIndex].caption}
                </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  //Filter State
  const [activeFilter, setActiveFilter] = useState('All');

  //Define Categories 
  const categories = ['All', 'Solar', 'Security', 'Electrical', 'Civil'];

  // Filter the projects
  const filteredProjects = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.sector === activeFilter);

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
        <title>Engineering Projects in Uganda | Hexon Technical Portfolio</title>
        <meta name="description" content="View our completed solar installations, biometric security setups, and electrical auditing projects across Kampala, Wakiso, and Entebbe." />
     </Helmet>

      <div className="bg-white dark:bg-gray-900 min-h-screen pb-10 transition-colors duration-500">
        
        {/* Header */}
        <div className="pt-24 pb-12 px-6 text-center">
          <span className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs mb-3 block">Proven Experience</span>
          <h1 className="text-4xl md:text-6xl font-black dark:text-white mb-4 tracking-tighter uppercase">
            Technical <span className="text-amber-500">Milestones</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base font-medium">
            A portfolio of precision engineering and infrastructure reliability.
          </p>
        </div>

        {/* 4. Filter Tiles - Reusing the Services Page logic */}
        <div className="max-w-7xl mx-auto pb-12 px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border-2 ${
                  activeFilter === cat 
                  ? 'bg-amber-500 border-amber-500 text-black shadow-lg shadow-amber-500/20' 
                  : 'border-gray-100 dark:border-gray-800 text-gray-500 hover:border-amber-500/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-6 mb-20 min-h-[400px]">
          <div className="grid grid-cols-1 gap-10">
            {filteredProjects.map((study, index) => (
              <div 
                key={index} 
                className="flex flex-col lg:flex-row bg-gray-50 dark:bg-gray-800 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-700 shadow-xl dark:shadow-none animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <div className="lg:w-1/2 h-[350px] lg:h-[450px]"> 
                  <CaseStudyGallery images={study.images} title={study.title} />
                </div>

                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-amber-600 dark:text-amber-500 mb-4">
                    <div className="p-2 bg-amber-500/10 rounded-xl">{study.icon}</div>
                    <span className="text-xs font-black uppercase tracking-widest">{study.sector}</span>
                  </div>
                  <h3 className="text-3xl font-black dark:text-white mb-4 leading-none uppercase tracking-tight">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-base leading-relaxed">
                    {study.desc}
                  </p>
                  <div>
                    <button className="inline-flex items-center gap-2 bg-gray-900 dark:bg-amber-500 text-white dark:text-black px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">
                      View Technical Specs <ExternalLink size={14}/>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Empty State for Filters */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-[2.5rem] border border-dashed border-gray-300 dark:border-gray-600">
                <p className="text-gray-400 font-bold uppercase tracking-widest">No milestones recorded for this sector yet.</p>
              </div>
            )}
          </div>
        </div>

        {/* Video Documentation Section stays the same... */}
        <section className="bg-gray-950 py-20 relative">
            {/* ... Video mapping logic */}
        </section>
      </div>
    </>
  );
};
export default Projects;