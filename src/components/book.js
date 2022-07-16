import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook, removeBookThunk } from '../redux/books/books';

const Book = (prop) => {
  const {
    title, author, id, category,
  } = prop;
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(removeBook(id));
    dispatch(removeBookThunk(id));
  };

  return (
    <div className="book">
      <h4>{category}</h4>
      <h3>{title}</h3>
      <p>{author}</p>
      <ul>
        <li>Comments</li>
        <li>
          <button onClick={clickHandler} type="button">
            Remove
          </button>
        </li>
        <li>Edit</li>
      </ul>
    </div>
  );
};

export default Book;
