const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavoriteDevice = (device) => {
  return {
    type: "ADD_FAVORITE_DEVICE",
    device,
  };
};

export const removeFavoriteDevice = (deviceId) => {
  return {
    type: "REMOVE_FAVORITE_DEVICE",
    deviceId,
  };
};

const initialState = {
  favoriteDevices: [],
};
const favoriteDevicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE_DEVICE":
      return {
        ...state,
        favoriteDevices: [...state.favoriteDevices, action.device],
      };
    case "REMOVE_FAVORITE_DEVICE":
      return {
        ...state,
        favoriteDevices: state.favoriteDevices.filter(
          (device) => device.id !== action.deviceId
        ),
      };
    default:
      return state;
  }
};

export default favoriteDevicesReducer;
