import { useSelector } from "react-redux";


export default function Project (props) {
    const lan = useSelector(myStore=>myStore.lan);
    
    const {link1, link2, name, description, img} = props;

    return (
        <div className="flex flex-col items-start sm:w-[30%] gap-4 pb-20">
            <img src={img} loading="lazy" className="md:w-full md:h-80 sm:h-40"/>
            <h3 className="font-Inter md:text-3xl font-medium text-left sm:text-lg xs:text-base dark:text-pr text-purple">{name}</h3>
            <p className="font-Inter font-normal md:text-sm text-left xs:text-xs dark:text-white text-gray2">{description}</p>
            <div className="flex lg:gap-4 md:gap-2 xs:gap-1">
                <button className="prbutton">react</button>
                <button className="prbutton">redux</button>
                <button className="prbutton">axios</button>
            </div>
            <div className="flex justify-between w-full">
                <a className="prsite" href={link1}>Github</a>
                <a className="prsite" href={link2}>{lan==="eng"?"View Site":"Siteyi Görüntüle"}</a>
            </div>
        </div>
    )
}