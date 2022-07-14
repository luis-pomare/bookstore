import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

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
    dispatch(addBook({ title, author, id: uuidv4() }));
    setState({
      title: '',
      author: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Add new book</h2>
      <div id='inputs'>
        <input
          type='text'
          id='title'
          name='title'
          placeholder='book title'
          value={state.title}
          onChange={handleChange}
        />
        <input
          type='text'
          id='author'
          name='author'
          placeholder='Author'
          value={state.author}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>add book</button>
    </form>
  );
};

export default Form;
