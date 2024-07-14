import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mode from "../components/Mode";

export default function Contact () {
    
    return (
        <div>
            <div className="flex flex-col lg:gap-20 py-12 lg:px-20 md:px-10 sm:gap-12 sm:px-8 xs:gap-8 xs:px-4 xs:py-8 dark:bg-d-body bg-white" >  
                <Mode/>
                <Header/>
                <ContactForm/>
            </div>
            <Footer/> 
        </div>
    )
}