import React from 'react';

const Book = (prop) => {
  const { title, author } = prop;
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button">remove</button>
    </div>
  );
};

export default Book;
