import { createContext, useReducer } from "react";

export const DeviceContext = createContext({
  devices: [],
  addDevice: (deviceData) => {},
  setDevice: (device) => {},
  deleteDevice: (id) => {},
  updateDevice: (id, deviceData) => {},
});
function devicesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload;
      return inverted;
    case "UPDATE":
      const updatabledeviceIndex = state.findIndex(
        (device) => device.id === action.payload.id
      );
      const updatabledevice = state[updatabledeviceIndex];
      const updatedItem = { ...updatabledevice, ...action.payload.data };
      const updateDevices = [...state];
      updateDevices[updatabledeviceIndex] = updatedItem;
      return updateDevices;
    case "DELETE":
      return state.filter((device) => device.id !== action.payload);
    default:
      return state;
  }
}

function DevicesContextProvider({ children }) {
  const [devicesState, dispatch] = useReducer(devicesReducer, []);

  function addDevice(deviceData) {
    dispatch({ type: "ADD", payload: deviceData });
  }
  function setDevice(devices) {
    dispatch({ type: "SET", payload: devices });
  }
  function updateDevice(id, deviceData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: deviceData } });
  }
  function deleteDevice(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  const value = {
    devices: devicesState,
    setDevice: setDevice,
    addDevice: addDevice,
    deleteDevice: deleteDevice,
    updateDevice: updateDevice,
  };
  return (
    <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
  );
}
export default DevicesContextProvider;
