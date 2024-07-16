
export default function Skill (props) {

    const {name, description, img} = props;


    return (
        <div className="sm:w-1/3 flex flex-col sm:gap-4 xs:gap-2">
            <div className="flex items-center justify-between">
                <h3 className="altbaşlık ">{name}</h3>
                <img src={img} className="md:w-20 md:h-20 xs:w-10 xs:h-10"/>
            </div>
            <p className="prdes lg:text-base">{description}</p>
        </div>
    )
}