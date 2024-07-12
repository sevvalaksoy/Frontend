import {data} from "../../data";
import {CHANGE_LAN, CHANGE_MODE, CHANGE_DATA} from "../actions/actions"

const initialState = {
    info: data.eng,
    mode: true,
    lan: true,
} 

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LAN:
            const nwl = !state.lan;
            return {
                ...state,
                lan: nwl
            }

        case CHANGE_MODE:
            const newMode = !state.mode;
            return {
                ...state,
                mode: newMode
            };
        case CHANGE_DATA:
            return {
                ...state,
                info: state.lan ? state.data.eng : state.data.tr
            };

    default:
        return state;
    }
  };

