import ContactForm from "../components/contactForm";
import { Helmet } from 'react-helmet-async';

function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact Hexon Technical | Get a Professional Quote</title>
        <meta name="description" content="Get a technical quote for solar, security, and electrical services in Wakiso & Kampala." />
        <link rel="canonical" href="https://hexontechnicalservices.com/contactUs" />
        <meta name="keywords" content='Request Quote Solar, Electrical Repair Kampala, Security Audit Wakiso, Hexon Technical Phone Number, Nansana Office Location'/>
      </Helmet>

      {/* Main Container: min-h-screen ensures the background covers the whole page */}
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-28 pb-12 px-4 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-10">
            <h1 className="text-amber-500 text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 font-medium">
              Consult with our engineering team regarding your project.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            {/* The actual form component */}
            <div className="w-full max-w-4xl ">
              <ContactForm />
            </div>
            
            <p className="mt-12 text-gray-500 dark:text-gray-500 text-sm italic">
              * We typically respond to all technical inquiries within 24 hours.
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default ContactUs;