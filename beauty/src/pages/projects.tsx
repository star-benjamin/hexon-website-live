import { useRef } from 'react';
import { Play, MapPin, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const videos = [
    { id: 1, title: "Hospital Solar Installation", videoId: "dQw4w9WgXcQ", location: "Entebbe" },
    { id: 2, title: "Industrial Grid Integration", videoId: "dQw4w9WgXcQ", location: "Kampala" },
    { id: 3, title: "UEDCL Backup Commissioning", videoId: "dQw4w9WgXcQ", location: "Gulu" },
    { id: 4, title: "Rural Electrification Project", videoId: "dQw4w9WgXcQ", location: "Jinja" },
  ];

  const scroll = (direction:"left"|"right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 1.5 
        : scrollLeft + clientWidth / 1.5;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen pb-20 overflow-x-hidden">
      {/* Header */}
      <div className="pt-24 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white mb-4">
          Our <span className="text-amber-500">Projects</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Delivering high-quality professional work to achieve sustainable development across Uganda.
        </p>
      </div>

      {/* Main Case Studies Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 gap-8">
          {/* Example Case Study Card */}
          <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="md:w-1/3 bg-amber-500 p-8 flex flex-col justify-center text-black">
              <span className="text-xs font-black uppercase tracking-tighter opacity-60">Sector: Government</span>
              <h3 className="text-2xl font-bold mt-2">UEDCL Systems</h3>
              <p className="mt-4 text-sm font-medium">Implementation of critical electrical infrastructure and backup systems.</p>
            </div>
            <div className="p-8 md:w-2/3">
               <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                "Hexon technical services limited provides services to central government and NGOs, focusing on the technical requirements for successful project implementation."
               </p>
               <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                    View Specs <ExternalLink size={16}/>
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- VIDEO SECTION AT THE END --- */}
      <section className="bg-gray-900 py-20 relative">
        <div className="max-w-7xl mx-auto px-6 mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Play className="text-amber-500 fill-amber-500" /> Field Documentation
            </h2>
            <p className="text-gray-400 mt-2">Meticulous execution caught on camera.</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-gray-700 text-white hover:bg-amber-500 hover:text-black transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-gray-700 text-white hover:bg-amber-500 hover:text-black transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 md:px-[calc((100vw-1280px)/2+24px)] no-scrollbar scroll-smooth"
        >
          {videos.map((video) => (
            <div key={video.id} className="min-w-[300px] md:min-w-[450px] group">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-gray-800">
                <iframe
                  className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 px-2">
                <h3 className="text-white font-bold text-lg">{video.title}</h3>
                <p className="text-amber-500 text-sm flex items-center gap-1 mt-1">
                  <MapPin size={14} /> {video.location}
                </p>
              </div>
            </div>
          ))}
          {/* Spacer for padding at the end of scroll */}
          <div className="min-w-[1px] pr-6" />
        </div>
      </section>
    </div>
  );
};

export default Projects;