import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'bookstore/categories/CHECK' });
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
// { type: 'bookstore/categories/CHECK' }
