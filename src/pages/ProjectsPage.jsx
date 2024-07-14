
import Mode from "../components/Mode";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FullProjects from "../components/FullProjects";

export default function ProjectsPage () {
    
    return (
        <div>
            <div className="flex flex-col lg:gap-20 py-12 lg:px-20 md:px-10 sm:gap-12 sm:px-8 xs:gap-8 xs:px-4 xs:py-8 dark:bg-d-body bg-white"> 
                <Mode/>
                <Header/> 
                <FullProjects/>
                <button onClick={()=>history.push("/")} className="border-solid border-[1px] w-1/5 border-borderC rounded-md md:text-lg font-Inter font-medium text-purple2 cursor-pointer md:py-3 md:px-8 xs:py-1 sm:px-5 xs:px-2 xs:text-base bg-white">Add Project</button>
            </div>
            <Footer/> 
        </div>
    )
}