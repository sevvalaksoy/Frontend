import { useSelector } from "react-redux"
import { projects } from "../projects";
import Project from "./Project";

export default function FullProjects () {
    const theme = useSelector(myStore=>myStore.mode);  
    return (
        <div className="flex flex-col items-start w-full gap-10 py-12">
            <hr className="border-solid border-[1px] border-lilac w-full text-lilac"/>
            <h2 className={`font-Inter font-semibold md:text-5xl sm:text-2xl xs:text-xl  ${!theme?"text-h1":"text-black"}`}>Projects</h2> 
            <div className="w-full flex flex-wrap sm:flex-row xs:flex-col justify-between sm:gap-4 xs:gap-10">
                {projects.map((proje, key)=> {
                    return <Project key={key} link1={proje.link1} name={proje.name} link2={proje.link2} img={proje.img} description={proje.description}/>
                })}
            </div>
        </div>
    )
}