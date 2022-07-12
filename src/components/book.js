import React from 'react';
import store from '../redux/configureStore';
import { removeBook } from '../redux/books/books';

const Book = (prop) => {
  const { title, author, id } = prop;

  const clickHandler = () => {
    store.dispatch(removeBook(id));
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={clickHandler}>
        remove
      </button>
    </div>
  );
};

export default Book;
