import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "../hooks/useLocalStorage"
import { lanChange, modeChange } from "../store/actions/actions";

export default function Mode () {

    const key = 'mode';
    const dispatch = useDispatch();
    const [value, setStorage] = useLocalStorage(key, false); 
    const theme = useSelector(myStore=>myStore.mode);
    const lang = useSelector(myStore=>myStore.lan);
    
    const changeMode = () => {
        setStorage(!value);
        dispatch(modeChange());
    };
    const changeLang = () => {
        dispatch(lanChange());
    }

    console.log(lang);
    return (
        <div className="flex justify-end ">
            <div className="flex gap-5 items-center">
                <div className="flex items-center">
                    <label className="relative inline-flex items-center cursor-pointer gap-2">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            data-testid="darkMode-toggle"
                            checked={theme}
                            onChange={changeMode}
                        />
                        <div className="w-12 h-5 bg-gray-200 rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
                        dark:bg-black1 peer-checked:after:translate-x-7 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-pink after:content-[''] 
                        after:absolute after:top-1 after:start-[1px] after:bg-yellow after:border-black after:border after:rounded-full after:h-4 after:w-4 after:transition-all
                        dark:border-gray-600 peer-checked:bg-btn-purple"></div>
                        <span className={`font-Inter text-base font-bold text-gray ${!theme ? 'text-t-white' : ''}`}> 
                                { value ? "DARK MODE" : "LIGTH MODE"  }
                        </span>
                    </label>
                </div>
                <div className="font-Inter text-base font-bold text-gray">
                    |
                </div>
                <div> 
                    <div onClick={changeLang} className={`font-Inter text-base font-bold text-purple ${!theme ? 'text-t-lilac' : ''}`}>
                        {lang?(<span className="cursor-pointer">TÜRKÇE</span>):
                        (<span className="text-gray">SWITCH TO </span>)}
                        {lang?<span className="text-gray">'YE GEÇ</span>:<span className="cursor-pointer">ENGLISH</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}