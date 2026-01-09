import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    { id: 1, title: 'Learn Redux Toolkit', status: 'Completed' },
    { id: 2, title: 'Build a React App', status: 'In Progress' },
    { id: 3, title: 'Master Clean Code', status: 'Pending' }
  ],
};

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // Action to add an item
    addItem: (state, action) => {
      state.data.push(action.payload);
    },
    // Action to delete an item
    removeItem: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload);
    }
  }
});

export const { addItem, removeItem } = itemSlice.actions;
export default itemSlice.reducer;