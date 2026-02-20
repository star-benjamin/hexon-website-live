import ContactForm from "../components/contactForm"
import { Helmet } from 'react-helmet-async';

function ContactUs(){
    return(
        <>

        <Helmet>
                <title>Contact Hexon Technical</title>
                <meta name="description" content="Get a Quote in Wakiso & Kampala." />
                <link rel="canonical" href="https://gregorialindustries.com/contactUs" />
                <meta name="keywords" content='Request Quote Solar, Electrical Repair Kampala, Security Audit Wakiso, Hexon Technical Phone Number, Nansana Office Location'/>
        </Helmet>

             <div className="p-3 m-2">
                <h1 className="text-center text-amber-600 text-2xl">Contact Us</h1>
                <div className="">
                    <div className="">
                        <ContactForm/>
                    </div>
                    <div className="">

                    </div>
                </div>
                <p className="text-2xl">Please get in touch with us</p>
            </div>
        </>
    )
}
export default ContactUs