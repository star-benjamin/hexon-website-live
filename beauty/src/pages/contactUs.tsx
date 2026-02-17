import ContactForm from "../components/contactForm"

function ContactUs(){
    return(
        <>
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