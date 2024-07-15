
import { useSelector } from "react-redux";
import Skill from "./Skill";

export default function FullSkills () {

    const info = useSelector(myStore=>myStore.info)
 
    return (
        <div className="flex flex-col items-start w-full lg:gap-20 xs:gap-4 ">
            <h2 className="font-Inter font-semibold md:text-5xl sm:text-2xl xs:text-xl dark:text-h1 text-black">{info.skills.head}</h2>
            <hr className="border-solid border-[1px] border-lilac w-full text-lilac"/>
            <div className="flex sm:flex-row xs:flex-col flex-wrap justify-around sm:gap-10 xs:gap-8">
                {info.Pskills.map((skill, key)=>{
                    return <Skill key={key} img={skill.img} description={skill.description} name={skill.name}/>
                })}
            </div>
        </div>
    )
}