import React, { useState } from 'react';
import * as actions from '../redux/books/books';
import store from '../redux/configureStore';

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

  const submitHandler = (e) => {
    e.preventDefault();
    const { title, author } = state;
    store.dispatch(actions.addBook({ title, author }));
    console.log(store.getState());
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
