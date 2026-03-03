import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 
//import ThemeToggle from './themeToggle'; 

interface HeaderProps {
  logo: string;
  darkMode: boolean;
  toggleTheme: () => void;
}



// Receive toggle props from App.jsx
const Header = ({ logo, darkMode, toggleTheme }: HeaderProps) => {
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
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
       {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group flex-shrink-0">
          <img 
            src={logo} 
            alt="Hexon logo" 
            className="w-12 h-12 md:w-16 md:h-16 object-contain group-hover:scale-105 transition-transform"
          />
          {/* Removed 'hidden lg:block' and added responsive text sizing */}
          <div className="flex flex-col">
             <span className="block text-sm md:text-base font-black tracking-tighter dark:text-white uppercase leading-none">
               Hexon<span className="text-amber-500">Technical</span>Services
             </span>
             <span className="text-[8px] md:text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.1em] md:tracking-[0.2em]">
               More than conquerors
             </span>
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

        {/* Action Area */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* THEME TOGGLE - Pass down the props here */}
          {/* <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} /> */}

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white transition-all active:scale-90"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* CTA Button */}
          <NavLink 
            to="/contactUs" 
            className="hidden lg:flex items-center gap-2 bg-gray-900 dark:bg-amber-500 text-white dark:text-black px-6 py-2.5 rounded-xl text-sm font-black transition-all hover:scale-105 active:scale-95 shadow-lg dark:shadow-amber-500/20"
          >
            Get Quote
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 top-[72px] md:top-[88px] z-50 bg-white dark:bg-gray-900 p-6 transition-all duration-500 md:hidden
        ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}
      `}>
        <nav className="flex flex-col gap-2 bg-white dark:bg-gray-700 px-4 pt-0.5 rounded-b-2xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `
                text-3xl font-black py-4 border-b border-gray-100 dark:border-gray-800 transition-colors
                ${isActive ? "text-amber-500" : "text-gray-900 dark:text-white"}
              `}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="mt-3 p-8 bg-amber-500 rounded-[2.5rem] text-black relative overflow-hidden group">
          <div className="relative z-10">
            <p className="font-black text-2xl mb-2">Need Help?</p>
            <p className="font-medium opacity-90 mb-6">Connect with our support team on WhatsApp.</p>
            <a href="https://wa.me/256393662244" className="inline-flex items-center bg-black text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl">
              Start Chat
            </a>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-black/5 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;