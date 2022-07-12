import React, { useState } from 'react';
import store from '../redux/configureStore';

const Categories = () => {
  const [categories, setCategories] = useState(
    store.getState().categories.categories,
  );

  store.subscribe(() => {
    setCategories(store.getState().categories.categories);
  });

  const handleClick = () => {
    store.dispatch({ type: 'bookstore/categories/CHECK' });
  };

  return (
    <>
      <p>{categories}</p>
      <button type="button" onClick={handleClick}>
        Check status
      </button>
    </>
  );
};

export default Categories;
