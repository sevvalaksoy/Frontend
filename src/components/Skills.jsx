

export default function Skills () {


    return (
        <div className="flex flex-col items-start w-full xs:gap-10 ">
            <h2 className="font-Inter font-semibold md:text-5xl sm:text-2xl xs:text-xl dark:text-h1 text-black">Skills</h2>
            <div className="flex sm:flex-row xs:flex-col justify-between sm:gap-20 xs:gap-8">
                <div className="sm:w-1/3 flex flex-col sm:gap-8 xs:gap-4">
                    <h3 className="font-Inter md:text-3xl font-medium text-left sm:text-lg xs:text-base dark:text-t-lilac text-purple ">Java Script</h3>
                    <p className="font-Inter font-normal lg:text-base md:text-sm text-left sm:text-xs dark:text-white text-gray2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="sm:w-1/3 flex flex-col sm:gap-8 xs:gap-4">
                    <h3 className="font-Inter md:text-3xl font-medium text-left sm:text-lg xs:text-base dark:text-t-lilac text-purple ">React.Js</h3>
                    <p className="font-Inter font-normal lg:text-base md:text-sm text-left sm:text-xs dark:text-white text-gray2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="sm:w-1/3 flex flex-col sm:gap-8 xs:gap-4">
                    <h3 className="font-Inter md:text-3xl font-medium text-left sm:text-lg xs:text-base dark:text-t-lilac text-purple ">Node.Js</h3>
                    <p className="font-Inter font-normal lg:text-base md:text-sm text-left sm:text-xs dark:text-white text-gray2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}