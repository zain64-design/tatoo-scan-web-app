// src/hooks/useAOS.js

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = (config = {}) => {
  useEffect(() => {
    const defaultConfig = {
      delay: 100,
      duration: 800,
      easing: 'ease-in-out',
      ...config,
    };

    AOS.init(defaultConfig);

    return () => {
      AOS.refresh();
    };
  }, [config]);
};

export default useAOS;
