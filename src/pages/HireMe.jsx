import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Mode from "../components/Mode";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function HireMe () {

    const theme = useSelector(myStore=>myStore.mode);

    return (
        <div>
            <div className={`flex flex-col lg:gap-20 py-12 lg:px-20 md:px-10 sm:gap-12 sm:px-8 xs:gap-8 xs:px-4 xs:py-8 ${!theme ? 'bg-d-body' : 'bg-white'}`} > 
                <Mode/>
                <Header/>
                <Hero/>
                <Skills/>
                <Profile/>
                <Projects/>
            </div>
            <Footer/> 
        </div>
        
    )
}