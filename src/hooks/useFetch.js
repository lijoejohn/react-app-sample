import { useState, useEffect } from 'react';
import fetch from 'cross-fetch';

export const useFetch = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function FetchURL() {
                try {
                    const res = await fetch(url);
                    if (res.ok) {
                        const data = await res.json();
                        setData(data);
                        setLoading(false);
                        return data;
                    } else {
                        setLoading(false);
                        throw new Error('Bad response');
                    }
                } catch (err) {
                    throw new Error('Bad request');
                }
        }
        FetchURL().catch((e) => {throw new Error(e)});
    }, [url]);

    return [data, loading];
};

export default useFetch;
