import React, { useState } from 'react';

import Book from './book';
import Form from './form';

const Books = () => {
  const [bookInfo] = useState({
    author: 'JK Rollins',
    title: 'Harry Potter',
  });
  const { title, author } = bookInfo;
  return (
    <main>
      <Book title={title} author={author} />
      <Form />
    </main>
  );
};

export default Books;
