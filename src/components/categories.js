import { useSelector, useDispatch } from 'react-redux';
import { checkCategories } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkCategories());
  };

  return (
    <main>
      <p>{categories}</p>
      <button type="button" onClick={handleClick}>
        Check status
      </button>
    </main>
  );
};

export default Categories;
