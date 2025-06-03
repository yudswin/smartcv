import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  font: string;
  theme: string;
  layout: 'one-column' | 'right-handed' | 'left-handed';
}

const initialState: ThemeState = {
  font: 'Roboto',
  theme: 'classic',
  layout: 'one-column',
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
    setLayout(state, action: PayloadAction<'one-column' | 'right-handed' | 'left-handed'>) {
      state.layout = action.payload;
    },
  },
});

export const { setFont, setTheme, setLayout } = themeSlice.actions;
export default themeSlice.reducer;
