import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  font: string;
  theme: string;
}

const initialState: ThemeState = {
  font: 'Roboto',
  theme: 'classic',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setFont(state, action: PayloadAction<string>) {
      state.font = action.payload;
    },
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
  },
});

export const { setFont, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
