import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit/';
import { addBook, addBookThunk } from '../redux/books/books';

const Form = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const { title, author } = state;
    const id = nanoid();

    dispatch(
      addBookThunk({
        title,
        author,
        item_id: id,
        category: 'Web Development',
      }),
    );
    dispatch(addBook({ title, author, id }));
    setState({
      title: '',
      author: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Add new book</h2>
      <div id="inputs">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="book title"
          value={state.title}
          onChange={handleChange}
        />
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author"
          value={state.author}
          onChange={handleChange}
        />
      </div>
      <button type="submit">add book</button>
    </form>
  );
};

export default Form;
