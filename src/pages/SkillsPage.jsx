import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mode from "../components/Mode";
import Skills from "../components/Skills";

export default function SkillsPage () {

    const theme = useSelector(myStore=>myStore.mode);
    
    return (
        <>
            <div className={`flex flex-col gap-20 py-12 px-20 w-full ${!theme ? 'bg-d-body' : ''}`} > 
                <Mode/>
                <Header/>
                <Skills/>
            </div>
            <Footer/> 
        </>
    )
}