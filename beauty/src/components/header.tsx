import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react'; // Added Lucide icons for the menu

const Header = ({ logo }) => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: "/" },
    { name: 'Services', path: '/services' },
    { name: 'Project Gallery', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Team', path: '/teams' },
    { name: 'Contact Us', path: '/contactUs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="Hexon technical services ltd Logo" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
          <div className="hidden lg:block">
             <span className="block text-xl font-black tracking-tighter dark:text-white">We are more than conquerers</span>
             
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                px-4 py-2 rounded-full text-sm font-bold transition-all
                ${isActive 
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20" 
                  : "text-gray-600 dark:text-gray-300 hover:text-amber-500 hover:bg-amber-500/5"}
              `}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle & Action */}
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/*CTA Button on Desktop */}
          <NavLink 
            to="/contactUs" 
            className="hidden lg:flex items-center gap-2 bg-gray-900 dark:bg-amber-500 text-white dark:text-black px-5 py-2.5 rounded-xl text-sm font-black transition-all hover:scale-105 active:scale-95"
          >
            Get Quote
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 top-[88px] z-50  dark:bg-gray-900 p-6 transition-all duration-300 md:hidden
        ${open ? "translate-x-0 opacity-100 " : "translate-x-full opacity-0"}
      `}>
        <nav className="flex flex-col gap-0 bg-white">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `
                text-2xl font-black py-4 border-b border-gray-100 dark:border-gray-800
                ${isActive ? "text-amber-500" : "text-gray-900 dark:text-white"}
              `}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="mt-1 p-3 bg-amber-500 rounded-3xl text-black">
          <p className="font-bold text-lg mb-2">Need Help?</p>
          <p className="text-sm opacity-80 mb-4">Chat with our engineers on WhatsApp now.</p>
          <a href="https://wa.me/256393662244" className="inline-block bg-black text-white px-6 py-3 rounded-xl font-bold">
            Chat Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;