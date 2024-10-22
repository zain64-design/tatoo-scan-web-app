import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);

    const [error, setError] = useState(null);

    useEffect(()=> {
        setTimeout(()=> {
        const fetchData = async ()=> {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
        },5000);

    },[url]);

    if (error) throw new Error(error); 

    if (data === null) {
        throw new Promise((resolve) => setTimeout(resolve, 1000));
    }

  return {data};
}

export default useFetch;