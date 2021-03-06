import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

export const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/';

export const appID = 'TcS591AyH90Qp264PnmD/';

export const booksEndpoint = `${baseUrl}apps/${appID}books/`;

// Specific book endpoint will be booksEndpoint + item_id

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
