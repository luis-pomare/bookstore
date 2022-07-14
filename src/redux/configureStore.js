import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk),
);

export default store;

// Api app ID: TcS591AyH90Qp264PnmD
