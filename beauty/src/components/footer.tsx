
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone,Music } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & Motto Section */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-white text-2xl font-black mb-4">
            HEXON<span className="text-amber-500">TECHNICAL</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6 italic text-blue-400">
            "We are more than conquerors"
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            <a href="https://tiktok.com/@yourhandle" className="hover:text-pink-500 transition-colors flex items-center gap-1">
                <Music size={20} /> <span className="text-xs font-bold uppercase">TikTok</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-amber-500 transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-amber-500 transition-colors">Our Projects</Link></li>
            <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
          </ul>
        </div>

        {/* Services SEO Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Solutions</h4>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Solar Installations</li>
            <li className="hover:text-blue-400 cursor-pointer">Electrical Wiring</li>
            <li className="hover:text-blue-400 cursor-pointer">Backup Systems</li>
            <li className="hover:text-blue-400 cursor-pointer">Maintenance</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 shrink-0" />
              <span>Nansana, Wakiso-Nkowe Mende Rd, Uganda</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <span>+256 393662244</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <span>+256 200904538</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <span>+256 706933096</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <span>hexontechnical@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
        <p>© {currentYear} Hexon Technical Services Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;