import { useSelector } from "react-redux"

export default function Projects () {
    const theme = useSelector(myStore=>myStore.mode);
    return (
        <div className="flex flex-col items-start w-full gap-10 py-12">
            <hr className="border-solid border-[1px] border-lilac w-full text-lilac"/>
            <h2 className={`font-Inter font-semibold md:text-5xl sm:text-2xl xs:text-xl  ${!theme?"text-h1":"text-black"}`}>Projects</h2> 
            <div className="w-full flex sm:flex-row xs:flex-col justify-between xs:gap-20">
                <div className="flex flex-col items-start sm:w-[30%] gap-4">
                    <img src={"/proje2.png"} className="md:w-full md:h-80 sm:h-40"/>
                    <h3 className={`font-Inter md:text-3xl font-medium text-left sm:text-lg xs:text-base ${!theme? "text-pr":"text-purple"}`}>IMDB Movies</h3>
                    <p className={`font-Inter font-normal md:text-sm text-left xs:text-xs ${!theme?"text-white":"text-gray2"}`}>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className="flex lg:gap-4 md:gap-2 xs:gap-1">
                        <button className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0 ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>react</button>
                        <button className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0  ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>redux</button>
                        <button className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0  ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>axios</button>
                    </div>
                    <div className="flex justify-between w-full">
                        <a className={`font-Inter font-medium cursor-pointer underline md:text-base xs:text-xs  ${!theme? "text-btn-t":"text-purple2"}`} href="https://github.com/sevvalaksoy/fsweb-s10g2-redux-filmler-solution">Github</a>
                        <a className={`font-Inter font-medium cursor-pointer underline md:text-base xs:text-xs  ${!theme? "text-btn-t":"text-purple2"}`} href="https://fsweb-s10g2-redux-filmler-solution-kohl.vercel.app/movies">View Site</a>
                    </div>
                </div>
                <div className="flex flex-col items-start sm:w-[30%] gap-4 ">
                    <img src={"/pizza.png"} className="md:w-full md:h-80 sm:h-40" />
                    <h3 className={`font-Inter md:text-3xl font-medium text-left sm:text-lg xs:text-base ${!theme? "text-pr":"text-purple"}`}>Pizza</h3> 
                    <p className={`font-Inter font-normal md:text-sm text-left xs:text-xs ${!theme?"text-white":"text-gray2"}`}>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className="flex lg:gap-4 md:gap-2 xs:gap-1">
                        <button className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0 ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>react</button>
                        <button className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0  ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>redux</button>
                        <button className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0  ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>axios</button>
                    </div>
                    <div className="flex justify-between w-full">
                        <a className={`font-Inter font-medium cursor-pointer underline md:text-base xs:text-xs  ${!theme? "text-btn-t":"text-purple2"}`} href="https://github.com/sevvalaksoy/S7PizzaChallenge">Github</a>
                        <a className={`font-Inter font-medium cursor-pointer underline md:text-base xs:text-xs  ${!theme? "text-btn-t":"text-purple2"}`} href="https://s7-pizza-challenge.vercel.app/">View Site</a>
                    </div>
                </div>
                <div className="flex flex-col items-start sm:w-[30%] gap-4">
                    <img src={"/proje3.png"} className="md:w-full md:h-80 sm:h-40"/>
                    <h3 className={`font-Inter md:text-3xl font-medium text-left sm:text-lg xs:text-base ${!theme? "text-pr":"text-purple"}`}>Grid Game</h3>
                    <p className={`font-Inter font-normal md:text-sm text-left xs:text-xs ${!theme?"text-white":"text-gray2 "}`}>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className="flex lg:gap-4 md:gap-2 xs:gap-1">
                        <button className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0 ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>react</button>
                        <button className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0  ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>redux</button>
                        <button className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0  ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>axios</button>
                    </div>
                    <div className="flex justify-between w-full">
                        <a className={`font-Inter font-medium cursor-pointer underline md:text-base xs:text-xs ${!theme? "text-btn-t":"text-purple2"}`} href="https://github.com/sevvalaksoy/FSWeb-S9-Sprint-Challenge-solution">Github</a>
                        <a className={`font-Inter font-medium cursor-pointer underline md:text-base xs:text-xs ${!theme? "text-btn-t":"text-purple2"}`} href="https://fsweb-s9-sprint-challenge-solution-1-p9nc.onrender.com/">View Site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}