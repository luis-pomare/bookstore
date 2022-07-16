import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook, removeBookThunk } from '../redux/books/books';

const Book = (prop) => {
  const { title, author, id } = prop;
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(removeBook(id));
    dispatch(removeBookThunk(id));
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
