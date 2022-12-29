import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books-slice';

const store = configureStore({
  reducer: {books: booksSlice.reducer},
});

export default store;