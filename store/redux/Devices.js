import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    addDevice: (state, action) => {
      state.push(action.payload);
    },
    setDevices: (state, action) => {
      return action.payload;
    },
    updateDevice: (state, action) => {
      const { id, data } = action.payload;
      const index = state.findIndex((device) => device.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...data };
      }
    },
    deleteDevice: (state, action) => {
      return state.filter((device) => device.id !== action.payload);
    },
  },
});

export const { addDevice, setDevices, updateDevice, deleteDevice } =
  devicesSlice.actions;

export default devicesSlice.reducer;
