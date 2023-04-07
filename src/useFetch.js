import {useState, useEffect} from "react";

const useFetch = (url)=>{

    const [data, setdata] = useState([]);
    const [error, setError] = useState([]);

    useEffect(()=>{
    const abortCont = new AbortController();
    const signal = abortCont.signal;

        fetch(url, {signal})
            .then(res =>{
                console.log('Checking')
                if(!res.ok){
                    throw Error("Error: Content can not be retrieved")
                }
                return res.json();
            })
            .then(data=>{
            setdata(data);
            setError(null);
            })
            .catch(err =>{
                if(err.name === 'AbortError'){
                    console.log('fetch abort')
                }else{
                    setError(err.message)
                    console.log(err.message)
                }
            });
            return() => abortCont.abort();
    }, [url]);
    
    return {data, error}
}

export default useFetch;