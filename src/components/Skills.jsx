import { useSelector } from "react-redux"

export default function Skills () {

    const theme = useSelector(myStore=> myStore.mode);

    return (
        <div className="flex flex-col items-start w-full gap-10">
            <h2 className={`font-Inter font-semibold md:text-5xl  ${!theme?"text-h1":"text-black"}`}>Skills</h2>
            <div className="flex justify-between gap-20">
                <div className="w-1/3 flex flex-col gap-8">
                    <h3 className={`font-Inter md:text-3xl font-medium text-left ${!theme? "text-t-lilac":"text-purple "}`}>Java Script</h3>
                    <p className={`font-Inter font-normal lg:text-base md:text-sm  text-left ${!theme?"text-white":"text-gray2"}`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="w-1/3 flex flex-col gap-8">
                    <h3 className={`font-Inter md:text-3xl font-medium text-left ${!theme? "text-t-lilac":"text-purple"}`}>React.Js</h3>
                    <p className={`font-Inter font-normal lg:text-base md:text-sm text-left ${!theme?"text-white":"text-gray2"}`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="w-1/3 flex flex-col gap-8">
                    <h3 className={`font-Inter md:text-3xl font-medium text-left ${!theme? "text-t-lilac":"text-purple"}`}>Node.Js</h3>
                    <p className={`font-Inter font-normal lg:text-base md:text-sm text-left ${!theme?"text-white":"text-gray2"}`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}