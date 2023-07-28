import { createSlice } from "@reduxjs/toolkit";
const favoriesSlice = createSlice({
  name: "favories",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoriesSlice.actions.addFavorite;
export const removeFavorite = favoriesSlice.actions.removeFavorite;

export default favoriesSlice.reducer;


