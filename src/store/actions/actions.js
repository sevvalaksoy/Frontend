export const CHANGE_MODE = 'CHANGE_MODE';
export const CHANGE_LAN = 'CHANGE_LAN';
export const ADD_CONTACT = "ADD_CONTACT";
export const CHANGE_DATA = "CHANGE_DATA";

export const modeChange = () => {
    return { type: CHANGE_MODE}
  };

export const lanChange = () => {
    return { type: CHANGE_LAN }
}

export const addContact = (data) => {
    return { type: ADD_CONTACT, payload: data }
}

export const changeData = (data) => {
    return { type: CHANGE_DATA, payload: data }
}