
export default function Skill (props) {

    const {name, description, img} = props;


    return (
        <div className="sm:w-1/3 flex flex-col sm:gap-4 xs:gap-2">
            <div className="flex items-center justify-between">
                <h3 className="font-Inter md:text-3xl font-medium text-left sm:text-lg xs:text-base dark:text-t-lilac text-purple ">{name}</h3>
                <img src={img} className="md:w-20 md:h-20 xs:w-10 xs:h-10"/>
            </div>
            <p className="font-Inter font-normal lg:text-base md:text-sm text-left sm:text-xs dark:text-white text-gray2">{description}</p>
        </div>
    )
}