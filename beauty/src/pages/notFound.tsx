import { Link } from "react-router-dom";
import { AlertTriangle, Home, Settings } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 transition-colors duration-500 bg-white dark:bg-gray-900">
      <div className="text-center max-w-xl">
        {/* Animated Icon Section */}
        <div className="relative flex justify-center mb-8">
          <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full" />
          <div className="relative bg-amber-500 p-6 rounded-[2.5rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <Settings size={64} className="text-black animate-[spin_10s_linear_infinite]" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-black dark:bg-white p-2 rounded-xl">
            <AlertTriangle size={24} className="text-amber-500" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-8xl md:text-9xl font-black text-gray-900 dark:text-white tracking-tighter mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 uppercase tracking-tight">
          System Link <span className="text-amber-500">Broken</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-medium">
          The technical path you're looking for doesn't exist or has been moved. 
          Our engineers are likely already on it, but for now, let's get you back to the grid.
        </p>

        {/* Action Button */}
        <Link 
          to='/' 
          className="inline-flex items-center gap-3 bg-amber-500 text-black px-10 py-4 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-lg active:scale-95"
        >
          <Home size={18} />
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFound;