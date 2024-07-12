import { useSelector } from "react-redux"

export default function Hero () {

    const theme = useSelector(myStore=>myStore.mode);

    return (
        <div className="flex justify-between h-2/5 gap-20 items-center mb-20">
            <div className="flex flex-col w-7/12 h-6/12 gap-10">
                <div className="flex items-center gap-4">
                    <hr className={`border-solid border-[1px] border-borderC w-24 text-purple ${!theme ? "text-t-lilac border-lilac": ""}`}/>
                    <p className={`font-Inter font-medium font text-xl text-purple  ${!theme ? "text-t-lilac": ""}`}>Şevval Aksoy</p>
                </div>
                <h1 className={`font-Inter font-bold text-7xl text-black text-left ${!theme ? "text-h1": ""}`}>Creative thinker Minimalism lover</h1>
                <p className={`font-normal font-Inter text-lg text-left text-gray2 ${!theme ? "text-white": ""}`}>Hi, I’m Şevval. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.</p>
                <div className="flex gap-6 items-start">
                    {theme?(<button className="border-solid border-[1px] bg-borderC rounded-md text-lg font-Inter font-medium text-white cursor-pointer py-3 px-8">Hire me</button>):
                    (<button className="border-solid border-[1px] bg-btn-lilac rounded-md text-lg font-Inter font-medium text-r-black cursor-pointer py-3 px-8">Hire me</button>)}

                    {theme?(<button className={`border-solid border-[1px] border-borderC flex items-center gap-2 rounded-md text-lg font-Inter font-medium text-purple2 cursor-pointer py-3 px-4 ${!theme ? " border-btn-lilac bg-btn-bcg ": ""}`}>
                    <img src="../../public/github.svg"/> Github</button>):
                    (<button className="border-solid border-[1px] border-btn-lilac bg-btn-bcg flex items-center gap-2 rounded-md text-lg font-Inter font-medium text-btn-lilac cursor-pointer py-3 px-4">
                    <img src="../../public/githubD.svg"/> Github</button>)}
                    
                    {theme?(<button className={`border-solid border-[1px] border-borderC flex items-center gap-2 rounded-md text-lg font-Inter font-medium text-purple2 cursor-pointer py-3 px-4 ${!theme ? " border-btn-lilac bg-btn-bcg ": ""}`}> 
                    <img src="../../public/linkedin.svg"/>Linkedin</button>):
                    (<button className={`border-solid border-[1px] border-btn-lilac bg-btn-bcg flex items-center gap-2 rounded-md text-lg font-Inter font-medium text-btn-lilac cursor-pointer py-3 px-4 ${!theme ? " border-btn-lilac bg-btn-bcg ": ""}`}> 
                    <img src="../../public/linkedinD.svg"/>Linkedin</button>)}
                </div>
            </div>
            <div className="w-5/12 h-6/12"> 
                <img className="object-cover rounded-2xl" src="../../public/pp.jpg"/>
            </div>
        </div>
    )
}