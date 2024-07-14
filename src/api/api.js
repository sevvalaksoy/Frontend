import axios from "axios";

export const createApiInstance = () => { 
	const token = localStorage.getItem("token");

    return axios.create({
		baseURL: "https://66939610c6be000fa07c73fb.mockapi.io/api/f/",
		headers: { 
                authorization: token,
            }
    })
};

export let API = createApiInstance();
