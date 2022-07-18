import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'shop-77a2e - eCommerce React App';
    }
  }, [title]);
};

export default useDocumentTitle;
