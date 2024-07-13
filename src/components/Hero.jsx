import { useSelector } from "react-redux"

export default function Hero () {

    const theme = useSelector(myStore=>myStore.mode);

    return (
        <div className="flex justify-between sm:flex-row h-2/5 md:gap-20 items-center md:mb-20 xs:gap-8 xs:flex-col">
            <div className="flex flex-col lg:w-7/12 h-6/12 md:gap-10 md:w-9/12 xs:gap-2">
                <div className="flex items-center md:gap-4 xs:gap-2">
                    <hr className={`border-solid border-[1px]  w-24  ${!theme ? "text-t-lilac border-lilac": "text-purple border-borderC"}`}/>
                    <p className={`font-Inter font-medium font md:text-xl xs:text-base  ${!theme ? "text-t-lilac": "text-purple"}`}>Şevval Aksoy</p>
                </div>
                <h1 className={`font-Inter font-bold lg:text-7xl text-left md:text-3xl sm:text-2xl xs:text-lg ${!theme ? "text-h1": "text-black"}`}>Creative thinker Minimalism lover</h1>
                <p className={`font-normal font-Inter lg:text-lg text-left md:text-sm xs:text-xs ${!theme ? "text-white": "text-gray2"}`}>Hi, I’m Şevval. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.</p>
                <div className="flex lg:gap-6 items-start xs:gap-4">
                    {theme?(<button className="border-solid border-[1px] bg-borderC rounded-md lg:text-lg font-Inter lg:font-medium text-white cursor-pointer lg:py-3 lg:px-8 md:text-base md:py-[9px] md:px-2 xs:text-sm xs:px-2 xs:py-2">Hire me</button>):
                    (<button className="border-solid border-[1px] bg-btn-lilac rounded-md lg:text-lg font-Inter lg:font-medium text-r-black cursor-pointer lg:py-3 lg:px-8 md:text-base md:py-[9px] md:px-2 xs:text-sm xs:px-2 xs:py-2">Hire me</button>)}

                    {theme?(<button className={`border-solid border-[1px] border-borderC flex items-center lg:gap-2 rounded-md lg:text-lg font-Inter font-medium text-purple2 cursor-pointer lg:py-3 lg:px-4 md:py-2 md:px-2 md:gap-1 xs:text-sm xs:px-2 xs:py-[3.5px] xs:gap-1 ${!theme ? " border-btn-lilac bg-btn-bcg ": ""}`}>
                    <img src={"/github.svg"}/> Github</button>):
                    (<button className="border-solid border-[1px] border-btn-lilac bg-btn-bcg flex items-center lg:gap-2 rounded-md lg:text-lg font-Inter font-medium text-btn-lilac cursor-pointer lg:py-3 lg:px-4 md:py-2 md:px-2 md:gap-1 xs:text-sm xs:px-2 xs:py-[3.5px] xs:gap-1 ">
                    <img src={"/githubD.svg"}/> Github</button>)}
                    
                    {theme?(<button className={`border-solid border-[1px] border-borderC flex items-center lg:gap-2 rounded-md lg:text-lg font-Inter font-medium text-purple2 cursor-pointer lg:py-3 lg:px-4 md:py-2 md:px-2 md:gap-1 xs:text-sm xs:px-2 xs:py-[4px] xs:gap-1  ${!theme ? " border-btn-lilac bg-btn-bcg ": ""}`}> 
                    <img src={"/linkedin.svg"}/>Linkedin</button>):
                    (<button className={`border-solid border-[1px] border-btn-lilac bg-btn-bcg flex items-center lg:gap-2 rounded-md lg:text-lg font-Inter font-medium text-btn-lilac cursor-pointer lg:py-3 lg:px-4 md:py-2 md:px-2 md:gap-1 xs:text-sm xs:px-2 xs:py-[4px] xs:gap-1  ${!theme ? " border-btn-lilac bg-btn-bcg ": ""}`}> 
                    <img src={"/linkedinD.svg"}/>Linkedin</button>)}
                </div>
            </div>
            <div className="lg:w-5/12 lg:h-6/12 md:w-6/12 md:h-4/6 sm:w-full sm:h-full"> 
                <img className="object-cover rounded-2xl" src={"/pp.jpg"}/>
            </div>
        </div>
    )
}