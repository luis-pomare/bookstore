import { useSelector } from 'react-redux';
import store from '../redux/configureStore';

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);

  const handleClick = () => {
    store.dispatch({ type: 'bookstore/categories/CHECK' });
  };

  return (
    <>
      <p>{categories}</p>
      <button type="button" onClick={handleClick}>
        Check status
      </button>
    </>
  );
};

export default Categories;
