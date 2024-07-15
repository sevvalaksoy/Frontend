import Project from "./Project";
import { useSelector } from "react-redux";

export default function FullProjects () { 
    const lan = useSelector(myStore=>myStore.lan);
    const info = useSelector(myStore=>myStore.info)

    return (
        <div className="flex flex-col items-start w-full gap-10 py-12">
            <h2 className="font-Inter font-semibold md:text-5xl sm:text-2xl xs:text-xl dark:text-h1 text-black">{info.projects.head}</h2>
            <hr className="border-solid border-[1px] border-lilac w-full text-lilac"/>
            <div className="w-full flex flex-wrap sm:flex-row xs:flex-col justify-between sm:gap-4 xs:gap-10">
                <div className="flex flex-col items-start sm:w-[30%] gap-4 pb-20">
                    <img src={"/office.png"} className="md:w-full md:h-80 sm:h-40"/>
                    <h3 className="font-Inter md:text-3xl font-medium text-left sm:text-lg xs:text-base dark:text-pr text-purple">{lan==="eng"?"Office":"Ofis"}</h3>
                    <p className="font-Inter font-normal md:text-sm text-left xs:text-xs dark:text-white text-gray2">{lan==="eng"?"A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.":"Ofis ürünlerine özel geliştirilmiş, kullanıcının ihtiyaçlarını kolaylaıkla bulabilmesi için düzenlenmiş özel bir amazon sayfası. Toplu alımlar için datada bulunan malzemelerin SQl kullanılarak çekildiği ve gösterildiği ve kullanışlı hale getirildiği yer. "}</p>
                    <div className="flex lg:gap-4 md:gap-2 xs:gap-1">
                        <button className="border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0 dark:text-ş dark:border-btn-ş dark:bg-btn-bcg text-purple2 border-borderC ">SQL</button>
                    </div>
                    <div className="flex justify-between w-full">
                        <a className="font-Inter font-medium cursor-pointer underline md:text-base xs:text-xs dark:text-btn-t text-purple2" href="https://www.amazon.com.tr/b?node=60457475031">{lan==="eng"?"View Site":"Siteyi Görüntüle"}</a>
                    </div>
                </div>
                {info.Pprojects.map((proje, key)=> {
                    return <Project key={key} link1={proje.link1} name={proje.name} link2={proje.link2} img={proje.img} description={proje.description}/>
                })}
            </div>
        </div>
    )
}
