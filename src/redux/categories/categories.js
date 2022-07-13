// Actions
const CHECK = 'bookstore/categories/CHECK';

// Reducer;
export default function categoriesReducer(
  state = { categories: '' },
  action = {},
) {
  switch (action.type) {
    case CHECK:
      return { categories: 'Under Construction' };
    default:
      return state;
  }
}

// Action Creators
export function checkCategories() {
  return {
    type: CHECK,
  };
}
