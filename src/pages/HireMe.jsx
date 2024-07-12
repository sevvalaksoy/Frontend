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
            <div className={`flex flex-col gap-20 py-12 px-20 ${!theme ? 'bg-d-body' : ''}`} > 
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