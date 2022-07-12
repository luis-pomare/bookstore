// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

// Reducer;
export default function booksReducer(state = { books: [] }, action = {}) {
  switch (action.type) {
    case ADD:
      return { books: [...state.books, action.payLoad] };
    case REMOVE:
      return state;
    default:
      return state;
  }
}

// Action Creators
export function addBook(book) {
  return {
    type: ADD,
    payLoad: book,
  };
}
