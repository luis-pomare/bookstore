import { useSelector } from 'react-redux';
import Book from './book';
import Form from './form';

const Books = () => {
  const books = useSelector((state) => state.books.books);

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
