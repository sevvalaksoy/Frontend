import { useSelector } from "react-redux";


export default function Project (props) {
    const {link1, link2, name, description, img} = props;
    
    const theme = useSelector(myStore=>myStore.mode);

    return (
        <div className="flex flex-col items-start sm:w-[30%] gap-4 pb-20">
            <img src={img} className="md:w-full md:h-80 sm:h-40"/>
            <h3 className={`font-Inter md:text-3xl font-medium text-left sm:text-lg xs:text-base ${!theme? "text-pr":"text-purple"}`}>{name}</h3>
            <p className={`font-Inter font-normal md:text-sm text-left xs:text-xs ${!theme?"text-white":"text-gray2"}`}>{description}</p>
            <div className="flex lg:gap-4 md:gap-2 xs:gap-1">
                <button className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0 ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>react</button>
                <button className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0  ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>redux</button>
                <button className={`border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0  ${!theme? "text-ş border-btn-ş bg-btn-bcg":"text-purple2 border-borderC "}`}>axios</button>
            </div>
            <div className="flex justify-between w-full">
                <a className={`font-Inter font-medium cursor-pointer underline md:text-base xs:text-xs  ${!theme? "text-btn-t":"text-purple2"}`} href={link1}>Github</a>
                <a className={`font-Inter font-medium cursor-pointer underline md:text-base xs:text-xs  ${!theme? "text-btn-t":"text-purple2"}`} href={link2}>View Site</a>
            </div>
        </div>
    )
}