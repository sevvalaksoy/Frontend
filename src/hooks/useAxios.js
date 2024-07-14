import { useState } from "react";
import { API } from "../api/api";


export const REQ_TYPES = Object.freeze({
	GET: "get",
	POST: "post",
	PUT: "put",
	DELETE: "delete",
})

export const useAxios = (initialState) => {
	const [data, setData] = useState(initialState);  
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

    const doRequest = ({ reqType, endpoint, payload, config }) => {
        setLoading(true);

    return API[reqType](endpoint, payload, config)
        .then(res => {
        setData(res.data);
        return res.data;
        } )
        .catch((error) => {
        setError(error);
        throw error;
        })
        .finally(()=>setLoading(false))
    }
    
	return [doRequest, data, loading, error];
}
