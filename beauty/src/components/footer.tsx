import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Music, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & Motto Section */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-white text-2xl font-black mb-4 tracking-tighter">
            HEXON<span className="text-amber-500">TECHNICAL</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6 italic text-amber-500/80">
            "We are more than conquerors"
          </p>
          {/* <div className="flex gap-4">
            <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin size={20} /></a>
            <a href="https://tiktok.com/@yourhandle" className="hover:text-amber-500 transition-colors flex items-center gap-1">
                <Music size={20} /> <span className="text-[10px] font-bold uppercase">TikTok</span>
            </a>
          </div> */}
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-amber-500 transition-colors">Technical Services</Link></li>
            <li><Link to="/projects" className="hover:text-amber-500 transition-colors">Project Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-amber-500 transition-colors">About the Firm</Link></li>
          </ul>
        </div>

        {/* Services SEO Links - Updated with new services */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Solutions</h4>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-amber-500 cursor-pointer transition-colors">Biometric & Face Access</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">IP & HD CCTV Systems</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">Solar Power & Heating</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">UPS & Backup Systems</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">Electrical Auditing</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Get In Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-amber-500 shrink-0" />
              <span>Nansana, Wakiso-Nkowe Mende Rd, Uganda</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-amber-500 shrink-0" />
              <span>+256 393 662244</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-amber-500 shrink-0" />
              <span>+256 706 933096</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-amber-500 shrink-0" />
              <span className="break-all">hexontechnical@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
        <p className="text-gray-500">© {currentYear} Hexon Technical Services Ltd.</p>
        <div className="flex gap-6 text-gray-500">
          <span className="hover:text-amber-500 cursor-pointer transition-colors">Security Policy</span>
          <span className="hover:text-amber-500 cursor-pointer transition-colors">Quality Assurance</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;