
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Header () { 
    const history = useHistory();

    return (
        <div className="flex justify-between items-center">
            <div className="flex">
                <span className="md:w-16 md:h-16 rounded-full xs:w-8 xs:h-8 dark:bg-btn-purple bg-light-purple"><h1 className="font-Inter font-semibold md:text-2xl xs:text-base rotate-[30deg] md:py-4 xs:py-1 text-ş dark:text-purple3 ">Ş</h1></span>
            </div>
            <div className="flex justify-between md:gap-5 xs:gap-2 ">
                <button onClick={()=>history.push("/skills")} className="md:text-lg font-Inter font-medium text-gray2 cursor-pointer md:py-3 md:px-8 sm:py-1 sm:px-5 xs:text-base">Skills</button>
                <button onClick={()=>history.push("/projects")} className="md:text-lg font-Inter font-medium text-gray2 cursor-pointer md:py-3 md:px-8 sm:py-1 sm:px-5 xs:text-base">Projects</button>
                <button onClick={()=>history.push("/")} className="border-solid border-[1px] border-borderC rounded-md md:text-lg font-Inter font-medium text-purple2 cursor-pointer md:py-3 md:px-8 xs:py-1 sm:px-5 xs:px-2 xs:text-base bg-white">Hire me</button>
            </div>
        </div>
    )
}