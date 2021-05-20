import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import jetReducer from "../features/jetSlice/jetSlice";

export const store = configureStore({
  reducer: {
    jet: jetReducer,
  },
});
