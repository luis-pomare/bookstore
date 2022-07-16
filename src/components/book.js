import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook, removeBookThunk } from '../redux/books/books';
import completionIcon from '../images/completionIcon.png';

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
      <div>
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
      </div>
      <div className="bookStatus bookAlign">
        <span className="bookPercentage bookAlign">
          <img
            src={completionIcon}
            alt="Completion icon"
            className="completionIcon"
          />
          <div className="bookNumCompleted">
            <h5>37 %</h5>
            <p className="bookCompleted">Completed</p>
          </div>
        </span>
        <span className="chapters">
          <p className="currentChapter">CURRENT CHAPTER</p>
          <h6> Chapter 3</h6>
          <button className="chapterButton" type="button">
            <p className="updateText">UPDATE PROGRESS</p>
          </button>
        </span>
      </div>
    </section>
  );
};

export default Book;
