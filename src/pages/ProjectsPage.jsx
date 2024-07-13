import { useSelector } from "react-redux";
import Mode from "../components/Mode";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function ProjectsPage () {

    const theme = useSelector(myStore=>myStore.mode);
    
    return (
        <div>
            <div className={`flex flex-col lg:gap-20 py-12 lg:px-20 md:px-10 sm:gap-12 sm:px-8 xs:gap-8 xs:px-4 xs:py-8 ${!theme ? 'bg-d-body' : 'bg-white'}`} > 
                <Mode/>
                <Header/>
                <Projects/>
            </div>
            <Footer/> 
        </div>
    )
}