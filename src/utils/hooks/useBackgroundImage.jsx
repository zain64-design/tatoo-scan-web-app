import { useEffect } from 'react';

const useBackgroundImage = (selector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const img = element.getAttribute('data-bg-image');
      if (img) {
        // element.classList.add('bg-image');
        element.style.backgroundImage = `url(${img})`;
      }
    });
  }, [selector]);
};

export default useBackgroundImage;