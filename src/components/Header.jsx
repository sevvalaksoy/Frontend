import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Header () {
    const theme = useSelector(myStore=>myStore.mode);
    const history = useHistory();

    return (
        <div className="flex justify-between">
            <div className="flex">
                <span className={`w-16 h-16 bg-light-purple rounded-full ${!theme ? 'bg-btn-purple' : ''}`}><h1 className={`text-purple3 font-Inter font-semibold md:text-2xl rotate-[30deg] py-4 ${!theme ? 'text-ş' : ''}`}>Ş</h1></span>
            </div>
            <div className="flex justify-between gap-5">
                <button onClick={()=>history.push("/skills")} className="md:text-lg font-Inter font-medium text-gray2 cursor-pointer py-3 px-8">Skills</button>
                <button onClick={()=>history.push("/projects")} className="md:text-lg font-Inter font-medium text-gray2 cursor-pointer py-3 px-8">Projects</button>
                <button onClick={()=>history.push("/")} className={`border-solid border-[1px] border-borderC rounded-md md:text-lg font-Inter font-medium text-purple2 cursor-pointer py-3 px-8 ${!theme ? 'bg-white' : ''}`}>Hire me</button>
            </div>
        </div>
    )
}