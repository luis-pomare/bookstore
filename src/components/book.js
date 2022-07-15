import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (prop) => {
  const { title, author, id } = prop;
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{id}</p>
      <button type="button" onClick={clickHandler}>
        remove
      </button>
    </div>
  );
};

export default Book;
