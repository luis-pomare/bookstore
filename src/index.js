import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

store.dispatch({
  type: 'bookstore/books/ADD',
  payLoad: {
    title: 'alicia',
    author: 'jkrollins',
  },
});
console.log(store.getState());
