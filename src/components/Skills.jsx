import { useSelector } from "react-redux"

export default function Skills () {

    const theme = useSelector(myStore=> myStore.mode);

    return (
        <div className="flex flex-col items-start w-full gap-10">
            <h2 className={`font-Inter font-semibold text-5xl text-black ${!theme?"text-h1":""}`}>Skills</h2>
            <div className="flex justify-between gap-20">
                <div className="w-1/3 flex flex-col gap-8">
                    <h3 className={`font-Inter text-3xl font-medium text-purple text-left ${!theme? "text-t-lilac":""}`}>Java Script</h3>
                    <p className={`font-Inter font-normal text-sm text-gray2 text-left ${!theme?"text-white":""}`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="w-1/3 flex flex-col gap-8">
                    <h3 className={`font-Inter text-3xl font-medium text-purple text-left ${!theme? "text-t-lilac":""}`}>React.Js</h3>
                    <p className={`font-Inter font-normal text-sm text-gray2 text-left ${!theme?"text-white":""}`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="w-1/3 flex flex-col gap-8">
                    <h3 className={`font-Inter text-3xl font-medium text-purple text-left ${!theme? "text-t-lilac":""}`}>Node.Js</h3>
                    <p className={`font-Inter font-normal text-sm text-gray2 text-left ${!theme?"text-white":""}`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}