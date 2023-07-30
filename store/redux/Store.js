import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./Favorites";
import productReducer from "./Categories";
import devicesReducer from "./Devices";
import authReducer from "./Auth";
export const store = configureStore({
  reducer: {
    // favories: favoritesReducer,
    categories: productReducer,
    // devices: devicesReducer,
    // auth: authReducer,
  },
});
