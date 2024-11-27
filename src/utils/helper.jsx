// import { useSelector } from 'react-redux';
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
    if(key)
        data[key].find((item) => item.key === key);
    return data || null;
};

export const getApiContents = async (slug, keysIn, keysNotIn) => {
    const data = await fetchData(`https://phaseprintdesignmaker.com/api/check-server`);
    console.log('ip data', data);
    const aboutData = await fetchData(`${API_ENDPOINT}/getContents`, { slug, keysIn, keysNotIn });
    if(aboutData?.data?.contents)
        var result = aboutData.data.contents.reduce((acc, item) => {
            acc[item.key] = item.value;
            return acc;
        }, {});
        return result;
    return null;
};