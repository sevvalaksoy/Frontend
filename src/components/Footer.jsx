import { useSelector } from "react-redux"

export default function Footer () {
    const theme = useSelector(myStore=>myStore.mode); 
    return (
        <div className={`flex flex-col md:gap-16 md:p-20 sm:gap-8 sm:p-10 ${theme?"bg-footer":"bg-foo"}`} >
            <h2 className={`font-Inter font-semibold lg:text-5xl lg:w-1/3 text-left sm:text-3xl sm:w-full ${!theme?"text-h1":"text-r-black"}`}>Let's work together on your next product.</h2>
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <p>👉</p>
                    <a className={`font-medium font-Inter lg:text-xl underline md:text-sm ${!theme?"text-lilac":"text-red"}`} >sevvala17@gmail.com</a>
                </div>
                <div className="flex md:gap-6 sm:gap-2">
                    <p className={`font-medium font-Inter lg:text-lg md:text-xs ${!theme?"text-btn-t":"text-r-black"}`}>Personal Blog</p>
                    <a className="font-medium font-Inter lg:text-lg text-green md:text-xs " href="https://github.com/sevvalaksoy">Github</a>
                    <a className="font-medium font-Inter lg:text-lg text-blue md:text-xs " href="https://www.linkedin.com/in/şevval-aksoy-8a54811b9/">Linkedin</a>
                </div>
            </div>
        </div>
    )
}