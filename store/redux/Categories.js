import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    setCategories: (state, action) => {
      return action.payload;
    },
    updateCategory: (state, action) => {
      const { id, data } = action.payload;
      const index = state.findIndex((category) => category.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...data };
      }
    },
    deleteCategory: (state, action) => {
      return state.filter((category) => category.id !== action.payload);
    },
  },
});

export const { addCategory, setCategories, updateCategory, deleteCategory } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
