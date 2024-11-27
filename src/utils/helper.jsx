// import { useSelector } from 'react-redux';
import axios from 'axios';
import store from '../redux/store';
import { API_ENDPOINT } from '../utils/constant';
import fetchData from '../utils/hooks/fetchData';

// export const getData = (slug, key) => {
//     const data = useSelector((state) => state.cms);
//     let filteredData = data[slug].find(key);
//     return filteredData;
// };

export const getStateData = (slug, key = null) => {
    const state = store.getState();
    let data = state.cmsContent[slug];
    if (key)
        data[key].find((item) => item.key === key);
    return data || null;
};

export const getApiContents = async (slug, keysIn, keysNotIn) => {
    const aboutData = await fetchData(`${API_ENDPOINT}/getContents`, { slug, keysIn, keysNotIn });
    if (aboutData?.data?.contents)
        var result = aboutData.data.contents.reduce((acc, item) => {
            acc[item.key] = item.value;
            return acc;
        }, {});
    return result;
    return null;
};

export const makeRequest = async ({
    method = 'GET', url, data = {}, isAuth = false, bearerToken = '', isFile = false
}) => {

    let body = data;
    let headers = {};
    let fullUrl = `${API_ENDPOINT}/${url}`;

    if (!isFile) {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify(data);
    }

    if (isAuth) {
        headers['Authorization'] = `Bearer ${bearerToken}`;
    }

    let options = {
        method,
        headers,
        body
    };

    if (method === 'GET') {
        let params = new URLSearchParams(data);
        fullUrl = `${fullUrl}?${params}`;
        delete options.body;
    }

    try {
        const rawResponse = await fetch(fullUrl, options);
        const content = await rawResponse.json();
        console.log('content', content);
        return content;
    } catch (err) {
        console.log(err);
    }
};