import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const SERVICE_ID = 'hexon_gmail';
    const TEMPLATE_ID = 'template_cpl2dnv';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // submission logic

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
          setStatus('Message Sent!');
          formRef.current?.reset(); // Clear the form
          setTimeout(() => setStatus(''), 3000);
        }, (error) => {
          console.error('EmailJS Error:', error);
          setStatus('Failed to send. Try again.');
          setTimeout(() => setStatus(''), 3000);
        });
    }
    setTimeout(() => {
      setStatus('Message Sent!');
      setTimeout(() => setStatus(''), 3000); // Reset status after 3 seconds
    }, 2000);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-8 px-6"> {/* Reduced py-16 to py-8 */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl">
        
        {/* Left Side: Contact Info - Now more compact */}
        <div className="bg-amber-500 p-8 text-black flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-black mb-4 leading-tight">Let’s Power & Secure Your Project</h2>
            <p className="mb-6 text-sm font-medium opacity-90 leading-snug">
              Hexon provides the technical precision your infrastructure deserves.
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:flex md:flex-col md:space-y-4"> {/* Grid on mobile/sm, stack on md */}
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Our Office</p>
                <p className="text-xs font-bold">Nansana, Nkowe Mende, Uganda</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Email Us</p>
                <p className="text-xs font-bold wrap-break-word">hexontechnicalservices@gmail.com</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Call Us</p>
                <p className="text-xs font-bold">+256 393662244<br/>+256 200904538<br/> +256 706933096</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">WhatsApp</p>
                <a href='https://wa.me/...' className="text-xs font-bold underline">Chat Now</a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-black/10">
            <p className="text-[11px] font-black uppercase tracking-tighter">Available 24/7 for Technical Support</p>
          </div>
        </div>

        {/* Right Side*/}
        <div className="p-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/*Two Columns for Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-black uppercase mb-1 text-gray-500">Full Name</label>
                <input 
                  name="from_name" type="text" required 
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white text-sm outline-none"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-[11px] font-black uppercase mb-1 text-gray-500">Email Address</label>
                <input 
                  name="reply_to" type="email" required 
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white text-sm outline-none"
                  placeholder="name@gmail.com"
                />
              </div>
            </div>

            {/*Service Selection */}
            <div>
              <label className="block text-[11px] font-black uppercase mb-1 text-gray-500">Service Required</label>
              <select name="service" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white text-sm outline-none">
                <option>CCTV & Surveillance</option>
                <option>Biometric Access</option>
                <option>Solar System Installation</option>
                <option>General Inquiry</option>
              </select>
            </div>

            {/* Message*/}
            <div>
              <label className="block text-[11px] font-black uppercase mb-1 text-gray-500">Your message</label>
              <textarea 
                name="message" 
                rows={3} 
                required 
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white text-sm outline-none resize-none"
                placeholder="Technical requirements..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'Sending...'}
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-black py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 text-sm"
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