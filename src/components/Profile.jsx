import { useSelector } from "react-redux"

export default function Profile () {
    const theme = useSelector(myStore=>myStore.mode);
    return (
        <div className="flex flex-col items-start w-full gap-10">
            <hr className="border-solid border-[1px] border-lilac w-full text-lilac"/>
            <h2 className={`font-Inter font-semibold text-5xl text-black ${!theme?"text-h1":""}`}>Profile</h2> 
            <div className="w-full flex ">
                <div className="w-1/2 flex flex-col gap-6">
                    <h3 className={`font-Inter text-3xl font-medium text-purple text-left ${!theme? "text-t-lilac":""}`}>Profile</h3>
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-6">
                            <h4 className={`font-Inter font-semibold text-lg text-black text-left ${!theme?"text-white":""}`}>Doğum Tarihi</h4>
                            <h4 className={`font-Inter font-semibold text-lg text-black text-left ${!theme?"text-white":""}`}>İkamet Şehri</h4>
                            <h4 className={`font-Inter font-semibold text-lg text-black text-left ${!theme?"text-white":""}`}>Eğitim Durumu</h4>
                            <h4 className={`font-Inter font-semibold text-lg text-black text-left ${!theme?"text-white":""}`}>Tercih Ettiği Rol</h4> 
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className={`font-Inter font-normal text-lg text-black text-left ${!theme?"text-white":""}`}>05.02.1998</p>
                            <p className={`font-Inter font-normal text-lg text-black text-left ${!theme?"text-white":""}`}>İstanbul</p>
                            <p className={`font-Inter font-normal text-lg text-black text-left ${!theme?"text-white":""}`}>Boğaziçi Üniversitesi, Ekonomi Lisans, 2024</p>
                            <p className={`font-Inter font-normal text-lg text-black text-left ${!theme?"text-white":""}`}>Full Stack</p> 
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-6">
                    <h3 className={`font-Inter text-3xl font-medium text-purple text-left ${!theme? "text-t-lilac":""}`}>About Me</h3>
                    <p className={`font-Inter font-normal text-lg text-gray2 text-left ${!theme?"text-white":""}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                    <p className={`font-Inter font-normal text-lg text-gray2 text-left ${!theme?"text-white":""}`}>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
                </div>
            </div>
        </div>
    )
}