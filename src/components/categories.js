import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { checkCategories } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkCategories());
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
