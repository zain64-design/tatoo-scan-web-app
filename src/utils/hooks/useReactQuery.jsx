import React from 'react'
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

const useReactQuery = async (url) => {
    return useQuery(url, () => fetchData(url), {
        retry: 1, // Number of retry attempts on failure
        refetchOnWindowFocus: false, // Disable refetch on window focus
      });
}

export default useReactQuery