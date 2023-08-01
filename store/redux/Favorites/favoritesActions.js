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
