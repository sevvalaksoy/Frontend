import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Header () {
    const theme = useSelector(myStore=>myStore.mode);
    const history = useHistory();

    return (
        <div className="flex justify-between items-center">
            <div className="flex">
                <span className={`md:w-16 md:h-16 rounded-full sm:w-8 sm:h-8 ${!theme ? 'bg-btn-purple' : 'bg-light-purple'}`}><h1 className={`font-Inter font-semibold md:text-2xl sm:text-base rotate-[30deg] md:py-4 sm:py-1 ${!theme ? 'text-ş' : 'text-purple3 '}`}>Ş</h1></span>
            </div>
            <div className="flex justify-between md:gap-5 sm:gap-2">
                <button onClick={()=>history.push("/skills")} className="md:text-lg font-Inter font-medium text-gray2 cursor-pointer md:py-3 md:px-8 sm:py-1 sm:px-5">Skills</button>
                <button onClick={()=>history.push("/projects")} className="md:text-lg font-Inter font-medium text-gray2 cursor-pointer md:py-3 md:px-8 sm:py-1 sm:px-5">Projects</button>
                <button onClick={()=>history.push("/")} className={`border-solid border-[1px] border-borderC rounded-md md:text-lg font-Inter font-medium text-purple2 cursor-pointer md:py-3 md:px-8 sm:py-1 sm:px-5 ${!theme ? 'bg-white' : ''}`}>Hire me</button>
            </div>
        </div>
    )
}