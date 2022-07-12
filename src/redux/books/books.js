// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const initial = [
  {
    title: 'one',
    author: 'one',
  },
  {
    title: 'two',
    author: 'two',
  },
  {
    title: 'three',
    author: 'three',
  },
];

// Reducer;
export default function booksReducer(
  state = { books: [...initial] },
  action = {},
) {
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
