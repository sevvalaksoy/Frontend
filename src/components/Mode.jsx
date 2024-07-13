import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "../hooks/useLocalStorage"
import { lanChange, modeChange } from "../store/actions/actions";

export default function Mode () {

    const dispatch = useDispatch();
    const [value, setStorage] = useLocalStorage("mode", false); 
    const [language, setLang] = useLocalStorage("lan", false); 
    const theme = useSelector(myStore=>myStore.mode);
    const lang = useSelector(myStore=>myStore.lan);
    
    const changeMode = () => {
        setStorage(!value);
        dispatch(modeChange());
    };
    const changeLang = () => {
        setLang(!language);
        dispatch(lanChange());
    }

    return (
        <div className="flex justify-end ">
            <div className="flex sm:gap-5 xs:gap-2 items-center">
                <div className="flex items-center">
                    <label className="relative inline-flex items-center cursor-pointer sm:gap-2 xs:gap-1">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            data-testid="darkMode-toggle"
                            checked={theme}
                            onChange={changeMode}
                        />
                        <div className="sm:w-12 sm:h-5 xs:w-6 xs:h-3 bg-gray-200 rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
                        dark:bg-black1 sm:peer-checked:after:translate-x-7 xs:peer-checked:after:translate-x-3  rtl:peer-checked:after:-translate-x-full peer-checked:after:border-pink after:content-[''] 
                        after:absolute sm:after:top-1 xs:after:top-[2px] sm:after:start-[1px] xs:after:start-0 after:bg-yellow after:border-black after:border after:rounded-full sm:after:h-4 sm:after:w-4 xs:after:h-3 xs:after:w-3 after:transition-all
                        dark:border-gray-600 peer-checked:bg-btn-purple"></div>
                        <span className={`font-Inter sm:text-base xs:text-xs font-bold ${!theme ? 'text-t-white' : 'text-gray'}`}> 
                                { value ? "DARK MODE" : "LIGTH MODE"  }
                        </span>
                    </label>
                </div>
                <div className="font-Inter sm:text-base xs:text-xs font-bold text-gray">
                    |
                </div>
                <div> 
                    <div onClick={changeLang} className={`font-Inter sm:text-base xs:text-xs font-bold ${!theme ? 'text-t-lilac' : 'text-purple'}`}>
                        {lang?(<span className="cursor-pointer">TÜRKÇE</span>):
                        (<span className="text-gray">SWITCH TO </span>)}
                        {lang?<span className="text-gray">'YE GEÇ</span>:<span className="cursor-pointer">ENGLISH</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}