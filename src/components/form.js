import React from 'react';

const Form = () => (
  <form>
    <h2>Add new book</h2>
    <div id="inputs">
      <input type="text" id="title" name="title" placeholder="book title" />
      <input type="text" id="author" name="author" placeholder="Author" />
    </div>
    <button type="button">add book</button>
  </form>
);

export default Form;
