// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const CLEAR = 'bookstore/books/CLEAR';

// Reducer;
export default function booksReducer(state = { books: [] }, action = {}) {
  switch (action.type) {
    case ADD:
      return { books: [...state.books, action.payLoad] };

    case REMOVE:
      return {
        books: [...state.books.filter((book) => book.id !== action.payLoad)],
      };

    case CLEAR:
      return {
        books: [],
      };
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

export function removeBook(id) {
  return {
    type: REMOVE,
    payLoad: id,
  };
}

export function clearBooks() {
  return {
    type: CLEAR,
  };
}
