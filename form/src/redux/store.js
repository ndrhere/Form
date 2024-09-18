import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './signupReducer';

export const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});
