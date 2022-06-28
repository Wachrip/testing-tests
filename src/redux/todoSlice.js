import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [
      { id: 1, todo: 'first todo', isDone: false },
      { id: 2, todo: 'second todo', isDone: false },
      { id: 3, todo: 'third todo', isDone: false },
    ],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: state.todos.length + 1,
        todo: action.payload,
        isDone: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    changeTodo(state, action) {
      state.todos[action.payload - 1].todo = prompt('Input changed todo');
    },
    toggleIsDone(state, action) {
      state.todos[action.payload - 1].isDone =
        !state.todos[action.payload - 1].isDone;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, changeTodo, toggleIsDone } =
  todoSlice.actions;
