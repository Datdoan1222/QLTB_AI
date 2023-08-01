import { configureStore } from "@reduxjs/toolkit";
import favoriteDevicesReducer from "./Favorites/favoritesReducer";
import categoriesReducer from "./Categories/categoriesReducer";
import devicesReducer from "./Devices/devicesReducer";
import authReducer from "./Auth/Auth";
export const store = configureStore({
  reducer: {
    favories: favoriteDevicesReducer,
    categories: categoriesReducer,
    devices: devicesReducer,
    // auth: authReducer,
  },
});
