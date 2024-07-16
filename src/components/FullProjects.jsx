
import { useProjects } from "../services/tanStack";
import Project from "./Project";
import { useSelector } from "react-redux";

export default function FullProjects () { 

    const info = useSelector(myStore=>myStore.info);
    const lan = useSelector(myStore=>myStore.lan);
 
    const {isPending, error, data} = useProjects(lan);
    
    console.log(lan, data)


    if(isPending)return (
        <h3 className="font-Inter md:text-5xl min-h-screen font-medium text-center pt-60 sm:text-lg xs:text-base text-purple">
          Please Wait While the Projects are Loading...
        </h3>
      );
    if(error) return (
        <h3 className="font-Inter md:text-5xl min-h-screen font-medium text-center pt-60 sm:text-lg xs:text-base text-purple">
          There was an error please try again.
        </h3>
      );

    
    return (
        <div className="flex flex-col items-start w-full gap-10 py-12">
            <h2 className="başlık">{info.projects.head}</h2>
            <hr className="hrline"/>
            <div className="w-full flex flex-wrap sm:flex-row xs:flex-col justify-between sm:gap-4 xs:gap-10">
                <div className="flex flex-col items-start sm:w-[30%] gap-4 pb-20">
                    <img src={"/office.png"} className="md:w-full md:h-80 sm:h-40"/>
                    <h3 className="altbaşlık">{lan==="eng"?"Office":"Ofis"}</h3>
                    <p className="prdes">{lan==="eng"?"A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.":"Ofis ürünlerine özel geliştirilmiş, kullanıcının ihtiyaçlarını kolaylaıkla bulabilmesi için düzenlenmiş özel bir amazon sayfası. Toplu alımlar için datada bulunan malzemelerin SQl kullanılarak çekildiği ve gösterildiği ve kullanışlı hale getirildiği yer. "}</p>
                    <div className="flex lg:gap-4 md:gap-2 xs:gap-1">
                        <button className="prbutton">SQL</button>
                    </div>
                    <div className="flex justify-between w-full">
                        <a className="prsite" href="https://www.amazon.com.tr/b?node=60457475031">{lan==="eng"?"View Site":"Siteyi Görüntüle"}</a>
                    </div>
                </div>
                {data.data.map((proje, index)=> {
                    return <Project key={index} link1={proje.link1} name={proje.name} link2={proje.link2} img={proje.img} description={proje.description}/>
                })}
            </div>
        </div>
    )
}
