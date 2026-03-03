import { useRef, useState } from 'react';
import { Play, MapPin, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { caseStudies } from '../components/data/caseStudiesData';
import {videos} from '../components/data/videos';

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

      {/* 2. CAPTION OVERLAY - Reduced pb-20 to pb-6 for better mobile fit */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 bg-gradient-to-t from-black/100 via-black/60 to-transparent z-20 pointer-events-none">
        <p className="text-white text-sm font-medium tracking-wide animate-in fade-in slide-in-from-bottom-2 duration-500">
          <span className="text-amber-500 font-black mr-2 uppercase text-[10px]">0{currentIndex + 1} //</span> 
          {images[currentIndex].caption}
        </p>
      </div>

      {/* Navigation Arrows - Fixed Visibility */}
      {images.length > 1 && (
        <>
          {/* Removed opacity-0 and group-hover classes so they show on touch devices */}
          <div className="absolute inset-0 flex items-center justify-between px-2 z-30 pointer-events-none">
            <button 
              onClick={prevImage}
              className="p-2.5 bg-black/30 backdrop-blur-md text-white rounded-xl hover:bg-amber-500 hover:text-black transition-all pointer-events-auto"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextImage}
              className="p-2.5 bg-black/30 backdrop-blur-md text-white rounded-xl hover:bg-amber-500 hover:text-black transition-all pointer-events-auto"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="absolute top-4 right-4 z-10 flex gap-1.5">
             {images.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1 transition-all duration-300 rounded-full ${
                  currentIndex === idx ? 'w-4 bg-amber-500' : 'w-1.5 bg-white/40'
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

      <div className="bg-white dark:bg-gray-900 min-h-screen pb-10 transition-colors duration-500">
        {/* Header - Reduced padding from pt-32/pb-20 to pt-24/pb-12 */}
        <div className="pt-24 pb-12 px-6 text-center">
          <span className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs mb-3 block">Proven Experience</span>
          <h1 className="text-4xl md:text-6xl font-black dark:text-white mb-4 tracking-tighter uppercase">
            Technical <span className="text-amber-500">Milestones</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base font-medium">
            A portfolio of precision engineering and infrastructure reliability.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-20"> {/* Reduced margin-bottom */}
          <div className="grid grid-cols-1 gap-10"> {/* Reduced gap from 12/20 to 10 */}
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="flex flex-col lg:flex-row bg-gray-50 dark:bg-gray-800 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-700 shadow-xl dark:shadow-none"
              >
                {/* Reduced Gallery Height from 500px to 400px */}
                <div className="lg:w-1/2 h-[350px] lg:h-[450px]"> 
                  <CaseStudyGallery images={study.images} title={study.title} />
                </div>

                {/* Reduced Padding in Content Area */}
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
          </div>
        </div>

        {/* Video section - Reduced py-32 to py-20 */}
        <section className="bg-gray-950 py-20 relative">
          <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                Field <span className="text-amber-500">Documentation</span>
              </h2>
              <p className="text-gray-500 mt-2 text-lg">Real-time technical deployment on the grid.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => scroll('left')} className="p-4 rounded-xl border border-gray-800 text-white hover:bg-amber-500 hover:text-black transition-all active:scale-90">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => scroll('right')} className="p-4 rounded-xl border border-gray-800 text-white hover:bg-amber-500 hover:text-black transition-all active:scale-90">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Reduced gap between videos */}
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto px-6 md:px-[calc((100vw-1280px)/2+24px)] no-scrollbar scroll-smooth">
            {videos.map((video) => (
              <div key={video.id} className="min-w-[280px] md:min-w-[500px] group"> {/* Reduced min-widths */}
                <div className="relative aspect-video rounded-[1.5rem] overflow-hidden bg-black border border-gray-800 group-hover:border-amber-500 transition-colors duration-500">
                  <iframe
                    className="w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-700"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-4 px-2">
                  <h3 className="text-white font-black text-xl uppercase tracking-tight">{video.title}</h3>
                  <p className="text-gray-500 text-[10px] flex items-center gap-2 mt-2 font-bold">
                    <MapPin size={14} className="text-amber-500" /> {video.location}
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