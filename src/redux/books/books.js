import { createAsyncThunk } from '@reduxjs/toolkit';

const booksEndpoint = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TcS591AyH90Qp264PnmD/books/';

// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const CLEAR = 'bookstore/books/CLEAR';
const BOOKTHUNK = 'bookstore/books/BOOKTHUNK';

export const addBookThunk = createAsyncThunk(BOOKTHUNK, async (book) => {
  await fetch(booksEndpoint, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
});

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
