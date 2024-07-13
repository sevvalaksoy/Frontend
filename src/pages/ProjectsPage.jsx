import { useSelector } from "react-redux";
import Mode from "../components/Mode";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function ProjectsPage () {

    const theme = useSelector(myStore=>myStore.mode);
    
    return (
        <>
            <div className={`flex flex-col gap-20 py-12 px-20 w-full ${!theme ? 'bg-d-body' : ''}`} > 
                <Mode/>
                <Header/>
                <Projects/>
            </div>
            <Footer/> 
        </>
    )
}