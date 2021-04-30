import {useEffect, useState} from 'react';

const useFetch = (query) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            setStatus('fetching');
            const response = await fetch(
                `https://swapi.dev/api/${query}`
            );
            const data = await response.json();
            setData(data);
            setStatus('fetched');
        };

        fetchData();
    }, [query]);
    return [ status, data ];
};

export default useFetch;