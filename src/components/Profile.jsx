import { useSelector } from "react-redux"

export default function Profile () {
    const theme = useSelector(myStore=>myStore.mode);
    return (
        <div className="flex flex-col items-start w-full gap-10">
            <hr className="border-solid border-[1px] border-lilac w-full text-lilac"/>
            <h2 className={`font-Inter font-semibold md:text-5xl  ${!theme?"text-h1":"text-black"}`}>Profile</h2> 
            <div className="w-full flex ">
                <div className="w-1/2 flex flex-col gap-6">
                    <h3 className={`font-Inter md:text-3xl font-medium text-left ${!theme? "text-t-lilac":"text-purple"}`}>Profile</h3>
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-6 md:w-1/2">
                            <h4 className={`font-Inter font-semibold lg:text-lg md:text-sm  text-left ${!theme?"text-white":"text-black"}`}>Doğum Tarihi</h4>
                            <h4 className={`font-Inter font-semibold lg:text-lg md:text-sm  text-left ${!theme?"text-white":"text-black"}`}>İkamet Şehri</h4>
                            <h4 className={`font-Inter font-semibold lg:text-lg md:text-sm  text-left ${!theme?"text-white":"text-black"}`}>Eğitim Durumu</h4>
                            <h4 className={`font-Inter font-semibold lg:text-lg md:text-sm  text-left md:pt-5 ${!theme?"text-white":"text-black"}`}>Tercih Ettiği Rol</h4> 
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className={`font-Inter font-normal lg:text-lg md:text-sm  text-left ${!theme?"text-white":"text-black"}`}>05.02.1998</p>
                            <p className={`font-Inter font-normal lg:text-lg md:text-sm  text-left ${!theme?"text-white":"text-black"}`}>İstanbul</p>
                            <p className={`font-Inter font-normal lg:text-lg md:text-sm  text-left ${!theme?"text-white":"text-black"}`}>Boğaziçi Üniversitesi, Ekonomi Lisans, 2024</p>
                            <p className={`font-Inter font-normal lg:text-lg md:text-sm  text-left ${!theme?"text-white":"text-black"}`}>Full Stack</p> 
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-6">
                    <h3 className={`font-Inter md:text-3xl font-medium  text-left ${!theme? "text-t-lilac":"text-purple"}`}>About Me</h3>
                    <p className={`font-Inter font-normal lg:text-lg md:text-base text-left ${!theme?"text-white":"text-gray2"}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                    <p className={`font-Inter font-normal lg:text-lg md:text-base text-left ${!theme?"text-white":"text-gray2"}`}>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
                </div>
            </div>
        </div>
    )
}