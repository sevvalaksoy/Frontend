import {CHANGE_LAN, CHANGE_MODE, ADD_CONTACT, CHANGE_DATA} from "../actions/actions"

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
    info: {},
    contact: {},
    mode: localStorageStateOku("mode", true),
    lan: localStorageStateOku("lan", "eng"),
} 
 
export const preferences = (state = initialState, action) => {

    let nwl, newMode, newContact;

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

        case ADD_CONTACT:
            newContact = {...state.contact, ...action.payload}
            return {
                ...state,
                contact: newContact
            };

        case CHANGE_DATA:
            return {
                ...state,
                info: action.payload
            };


    default:
        return state;
    }
  };