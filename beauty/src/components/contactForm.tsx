import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    // submission logic here
    setTimeout(() => {
      setStatus('Message Sent!');
      setTimeout(() => setStatus(''), 3000); // Reset status after 3 seconds
    }, 2000);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl">
        
        {/* Left Side: Contact Info */}
        <div className="bg-amber-500 p-10 text-black flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Let’s Power & Secure Your Project</h2>
            <p className="mb-8 font-medium opacity-90">
              From advanced biometric security and CCTV systems to industrial solar grids, 
              Hexon provides the technical precision your infrastructure deserves.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold opacity-70">Our Office</p>
                <p className="font-bold">Wakiso Nansana, Nkowe Mende <br/> Kampala Uganda.<br/>P.O.Box 203778.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold opacity-70">Email Us</p>
                <p className="font-bold">hexontechnical@gmail.com</p>
              </div>
               <div>
                <p className="text-xs uppercase tracking-widest font-bold opacity-70">WhatsApp Us</p>
                <a 
                  href='https://wa.me/256393662244?text=Hello%20I%20want%20to%20know%20more' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className="font-bold underline hover:text-white transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold opacity-70">Call Us</p>
                <ul className='font-bold'>
                    <li>+256 393662244</li>
                    <li>+256 200904538</li>
                    <li>+256 706933096</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-black/10">
            <p className="text-sm font-bold">Available 24/7 for Emergency Technical Support</p>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Full Name</label>
              <input 
                type="text" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Email Address</label>
              <input 
                type="email" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Service Required</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all">
                <optgroup label="Security & IT">
                  <option>Biometric Access Control</option>
                  <option>CCTV & Surveillance Systems</option>
                  <option>IT Security Applications</option>
                </optgroup>
                <optgroup label="Solar & Power">
                  <option>Solar System Installation</option>
                  <option>Solar Water Heaters</option>
                  <option>UPS & Backup Systems</option>
                </optgroup>
                <optgroup label="Electrical Services">
                  <option>Electrical Auditing & Maintenance</option>
                  <option>Industrial Electrical Installation</option>
                  <option>Lightning Arrestors</option>
                </optgroup>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Your message</label>
              <textarea 
                rows={4}
                required 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                placeholder="Tell us about your technical requirements..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-extrabold py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95"
            >
              {status || 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;