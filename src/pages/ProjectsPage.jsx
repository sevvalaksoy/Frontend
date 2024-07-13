import { useSelector } from "react-redux";
import Mode from "../components/Mode";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FullProjects from "../components/FullProjects";

export default function ProjectsPage () {

    const theme = useSelector(myStore=>myStore.mode);
    
    return (
        <div>
            <div className={`flex flex-col lg:gap-20 py-12 lg:px-20 md:px-10 sm:gap-12 sm:px-8 xs:gap-8 xs:px-4 xs:py-8 ${!theme ? 'bg-d-body' : 'bg-white'}`} > 
                <Mode/>
                <Header/> 
                <FullProjects/>
            </div>
            <Footer/> 
        </div>
    )
}