import {data} from "../../data";
import {CHANGE_LAN, CHANGE_MODE} from "../actions/actions"

function localStorageStateYaz(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key, defaultValue) {
    const localVal = JSON.parse(localStorage.getItem(key));
    if (localVal === null) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } else {
      return localVal;
    }
}

const initialState = {
    info: data,
    mode: localStorageStateOku("mode", true),
    lan: localStorageStateOku("lan", "eng"),
} 
 
export const reducer = (state = initialState, action) => {

    let nwl, newMode;

    switch (action.type) {

        case CHANGE_LAN:
            nwl = state.lan=== "eng"? "tr" :"eng"
            localStorageStateYaz("lan", nwl)
            return {
                ...state,
                lan: nwl
            }

        case CHANGE_MODE:
            newMode = !state.mode;
            localStorageStateYaz("mode", newMode)
            return {
                ...state,
                mode: newMode
            };

    default:
        return state;
    }
  };

