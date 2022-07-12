import { configureStore } from '@reduxjs/toolkit';
// import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({ reducer: categoriesReducer });

export default store;
