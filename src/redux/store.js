import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';

// const rootReducer = () => combineReducers({

// })

export const store = configureStore({
  reducer: {
    todoSlice,
  },
});
