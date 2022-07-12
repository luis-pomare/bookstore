// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const initial = [
  {
    title: 'Tone',
    author: 'Aone',
  },
  {
    title: 'Ttwo',
    author: 'Atwo',
  },
  {
    title: 'Tthree',
    author: 'Athree',
  },
];

// Reducer
export default function booksReducer(
  state = { books: [...initial] },
  action = {},
) {
  switch (action.type) {
    case ADD:
      return { books: [action.payLoad] };
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
