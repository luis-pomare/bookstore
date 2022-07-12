// Actions
const CHECK = 'bookstore/categories/CHECK';

// Reducer;
export default function categoriesReducer(state = { books: [] }, action = {}) {
  switch (action.type) {
    case CHECK:
      return 'Under Construction';
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
