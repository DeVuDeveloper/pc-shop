import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
<<<<<<< HEAD
      document.title = 'PC Shop';
=======
      document.title = 'shop-77a2e - eCommerce React App';
>>>>>>> bdd1da729666a1159659c557edc8984cff485dbe
    }
  }, [title]);
};

export default useDocumentTitle;
