import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = "";
    },
  },
});

export const { authenticate, logout } = authSlice.actions;

export default authSlice.reducer;
