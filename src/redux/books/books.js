// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

// Reducer
export default function booksReducer(state = { todos: [] }, action = {}) {
  switch (action.type) {
    case ADD:
      return { todos: [...state.todos, action.payLoad] };
    case REMOVE:
      return state;
    default:
      return state;
  }
}
