import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './book';
import Form from './form';
import { booksEndpoint } from '../redux/configureStore';
import { addBook, clearBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(booksEndpoint);
      const books = await response.json();
      const keys = Object.keys(books);

      dispatch(clearBooks());

      keys.forEach((key) => {
        dispatch(addBook({ ...books[key][0], id: key }));
      });
    };

    fetchBooks();
  }, []);

  return (
    <main>
      {books.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          key={book.id}
          id={book.id}
          category={book.category}
        />
      ))}
      <Form />
    </main>
  );
};

export default Books;
