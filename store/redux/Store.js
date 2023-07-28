import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./Favorites";
import categoriesReducer from "./Categories";
import devicesReducer from "./Devices";
import authReducer from "./Auth";
export const store = configureStore({
  reducer: {
    favories: favoritesReducer,
    categories: categoriesReducer,
    devices: devicesReducer,
    auth: authReducer,
  },
});
