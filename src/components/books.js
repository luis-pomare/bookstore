import store from '../redux/configureStore';
import Book from './book';
import Form from './form';

const Books = () => {
  const { title, author } = store.getState().books[2];
  return (
    <main>
      <Book title={title} author={author} />
      <Form />
    </main>
  );
};

export default Books;
