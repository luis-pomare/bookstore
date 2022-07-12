import store from '../redux/configureStore';
import Book from './book';
import Form from './form';

const Books = () => {
  const { books } = store.getState();

  return (
    <main>
      {books.map((book) => (
        <Book title={book.title} author={book.author} key={book.title} />
      ))}
      <Form />
    </main>
  );
};

export default Books;
