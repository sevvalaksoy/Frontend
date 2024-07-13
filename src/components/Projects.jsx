import { useSelector } from "react-redux"

export default function Projects () {
    const theme = useSelector(myStore=>myStore.mode);
    return (
        <div className="flex flex-col items-start w-full gap-10 py-12">
            <hr className="border-solid border-[1px] border-lilac w-full text-lilac"/>
            <h2 className={`font-Inter font-semibold md:text-5xl ${!theme?"text-h1":"text-black"}`}>Projects</h2> 
            <div className="w-full flex justify-between">
                <div className="flex flex-col items-start w-[30%] gap-4 ">
                    <img src="../../public/proje1.png" className="w-full h-80" />
                    <h3 className={`font-Inter text-3xl font-medium text-left ${!theme? "text-pr":"text-purple"}`}>Movie List</h3> 
                    <p className={`font-Inter font-normal md:text-sm text-left ${!theme?"text-white":"text-gray2"}`}>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className="flex lg:gap-4 md:gap-2">
                        <div className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium py-1 px-4 ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>react</div>
                        <div className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium py-1 px-4 ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>redux</div>
                        <div className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium py-1 px-4 ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>axios</div>
                    </div>
                    <div className="flex justify-between w-full">
                        <a className={`font-Inter font-medium cursor-pointer underline text-base ${!theme? "text-btn-t":"text-purple2"}`} href="https://github.com/sevvalaksoy/fsweb-s10g3-redux-watchlist-solution">Github</a>
                        <a className={`font-Inter font-medium cursor-pointer underline text-base ${!theme? "text-btn-t":"text-purple2"}`} href="https://fsweb-s10g3-redux-watchlist-solution-sand.vercel.app/">View Site</a>
                    </div>
                </div>
                <div className="flex flex-col items-start w-[30%] gap-4">
                    <img src="../../public/proje2.png" className="w-full h-80"/>
                    <h3 className={`font-Inter text-3xl font-medium text-left ${!theme? "text-pr":"text-purple"}`}>IMDB Movies</h3>
                    <p className={`font-Inter font-normal md:text-sm text-left ${!theme?"text-white":"text-gray2"}`}>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className="flex lg:gap-4 md:gap-2">
                        <div className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium py-1 px-4 ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>react</div>
                        <div className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium py-1 px-4 ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>redux</div>
                        <div className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium py-1 px-4 ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>axios</div>
                    </div>
                    <div className="flex justify-between w-full">
                        <a className={`font-Inter font-medium cursor-pointer underline text-base ${!theme? "text-btn-t":"text-purple2"}`} href="https://github.com/sevvalaksoy/fsweb-s10g2-redux-filmler-solution">Github</a>
                        <a className={`font-Inter font-medium cursor-pointer underline text-base ${!theme? "text-btn-t":"text-purple2"}`} href="https://fsweb-s10g2-redux-filmler-solution-kohl.vercel.app/movies">View Site</a>
                    </div>
                </div>
                <div className="flex flex-col items-start w-[30%] gap-4">
                    <img src="../../public/proje3.png" className="w-full h-80"/>
                    <h3 className={`font-Inter text-3xl font-medium text-left ${!theme? "text-pr":"text-purple"}`}>Grid Game</h3>
                    <p className={`font-Inter font-normal md:text-sm text-left ${!theme?"text-white":"text-gray2 "}`}>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className="flex lg:gap-4 md:gap-2">
                        <div className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium py-1 px-4 ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>react</div>
                        <div className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium py-1 px-4 ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>redux</div>
                        <div className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium py-1 px-4 ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>axios</div>
                    </div>
                    <div className="flex justify-between w-full">
                        <a className={`font-Inter font-medium cursor-pointer underline text-base ${!theme? "text-btn-t":"text-purple2"}`} href="https://github.com/sevvalaksoy/FSWeb-S9-Sprint-Challenge-solution">Github</a>
                        <a className={`font-Inter font-medium cursor-pointer underline text-base ${!theme? "text-btn-t":"text-purple2"}`} href="https://fsweb-s9-sprint-challenge-solution-1-p9nc.onrender.com/">View Site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}