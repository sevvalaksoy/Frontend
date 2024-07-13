import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mode from "../components/Mode";
import FullSkills from "../components/FullSkills";

export default function SkillsPage () {

    const theme = useSelector(myStore=>myStore.mode); 
    
    return (
        <div>
            <div className={`flex flex-col lg:gap-20 py-12 lg:px-20 md:px-10 sm:gap-12 sm:px-8 xs:gap-8 xs:px-4 xs:py-8 ${!theme ? 'bg-d-body' : 'bg-white'}`} >  
                <Mode/>
                <Header/>
                <FullSkills/>
            </div>
            <Footer/> 
        </div>
    )
}