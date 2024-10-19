import { useEffect } from 'react';

const useBackgroundImage = (selector,data) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const img = element.getAttribute('data-bg-image');
      if (img) {
        // element.classList.add('bg-image');
        element.style.backgroundImage = `url(${img})`;
      }
    });
  }, [selector,data]);
};

export default useBackgroundImage;