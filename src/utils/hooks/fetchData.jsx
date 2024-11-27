import axios from 'axios';

const fetchData = async (url, params) => {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await axios.get(url, {
    params
  });
  if (response.data.error) {
    throw new Error(response.data.error);
  }
  return response.data;
};

export default fetchData;