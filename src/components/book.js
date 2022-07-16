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
    <section className="book">
      <h4>{category}</h4>
      <h3>{title}</h3>
      <p className="blueText">{author}</p>
      <ul className="bookButtonList">
        <li className="blueText bookButton">Comments</li>
        <li>
          <button
            onClick={clickHandler}
            type="button"
            className="blueText removeButton bookButton"
          >
            Remove
          </button>
        </li>
        <li className="blueText bookButton">Edit</li>
      </ul>
    </section>
  );
};

export default Book;
