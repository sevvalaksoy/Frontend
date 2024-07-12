import { useSelector } from "react-redux"

export default function Footer () {
    const theme = useSelector(myStore=>myStore.mode); 
    return (
        <div className={`flex flex-col gap-16 p-20 ${theme?"bg-footer":"bg-foo"}`} >
            <h2 className={`font-Inter font-semibold text-5xl w-1/3 text-left ${!theme?"text-h1":"text-r-black"}`}>Let's work together on your next product.</h2>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <p>👉</p>
                    <a className={`font-medium font-Inter text-xl underline ${!theme?"text-lilac":"text-red"}`} >sevvala17@gmail.com</a>
                </div>
                <div className="flex gap-6">
                    <p className={`font-medium font-Inter text-lg ${!theme?"text-btn-t":"text-r-black"}`}>Personal Blog</p>
                    <a className="font-medium font-Inter text-lg text-green" href="https://github.com/sevvalaksoy">Github</a>
                    <a className="font-medium font-Inter text-lg text-blue" href="https://www.linkedin.com/in/şevval-aksoy-8a54811b9/">Linkedin</a>
                </div>
            </div>
        </div>
    )
}