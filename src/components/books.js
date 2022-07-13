import { useState } from 'react';
import store from '../redux/configureStore';
import Book from './book';
import Form from './form';

const Books = () => {
  const [books, setBooks] = useState(store.getState().books.books);
  store.subscribe(() => {
    setBooks(store.getState().books.books);
  });

  return (
    <main>
      {books.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          key={book.id}
          id={book.id}
        />
      ))}
      <Form />
    </main>
  );
};

export default Books;
