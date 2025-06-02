import { configureStore } from '@reduxjs/toolkit';
import textareaReducer from './textareaSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    textarea: textareaReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
