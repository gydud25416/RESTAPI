import { useEffect, useState } from "react";
import axios from 'axios'

export default function useFetch(url){
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        axios.get(url)
        .then(res=>{setData(res.data);})
        .catch(error=>{
            console.error(error);
        })
    },[url])

    return data;
}