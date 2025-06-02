import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TextareaState {
  value: string;
}

const initialState: TextareaState = {
  value: '',
};

const textareaSlice = createSlice({
  name: 'textarea',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    appendValue(state, action: PayloadAction<string>) {
      state.value = state.value ? state.value + '\n\n' + action.payload : action.payload;
    },
  },
});

export const { setValue, appendValue } = textareaSlice.actions;
export default textareaSlice.reducer;
