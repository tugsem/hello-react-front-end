import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingReducer';

const store = configureStore({
  reducer: greetingReducer
});

export default store;