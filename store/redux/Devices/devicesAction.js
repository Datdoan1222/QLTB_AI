import axios from "axios";
import { API, CATEGORIES, DEVICES } from "../../../util/Url_API";

export const fetchDevicestRequest = () => ({
  type: "FETCH_DEVICES_REQUEST",
});

export const fetchDevicesSuccess = (data) => ({
  type: "FETCH_DEVICES_SUCCESS",
  payload: data,
});

export const fetchDevicesFailure = (error) => ({
  type: "FETCH_DEVICES_FAILURE",
  payload: error,
});

export const createDeviceRequest = () => ({
  type: "CREATE_DEVICE_REQUEST",
});
export const createDevicesSuccess = (data) => ({
  type: "CREATE_DEVICES_SUCCESS",
  payload: data,
});
export const createDeviceFailure = (error) => ({
  type: "CREATE_DEVICE_FAILURE",
  payload: error,
});
export const updateDeviceRequest = () => ({
  type: "UPDATE_DEVICE_REQUEST",
});
export const updateDevicesSuccess = (data) => ({
  type: "UPDATE_DEVICES_SUCCESS",
  payload: data,
});
export const updateDeviceFailure = (error) => ({
  type: "UPDATE_DEVICE_FAILURE",
  payload: error,
});

export const deleteDeviceRequest = () => ({
  type: "DELETE_DEVICE_REQUEST",
});
export const deleteDevicesSuccess = (data) => ({
  type: "DELETE_DEVICES_SUCCESS",
  payload: data,
});
export const deleteDeviceFailure = (error) => ({
  type: "DELETE_DEVICE_FAILURE",
  payload: error,
});

export const fetchDevices = () => {
  return (dispatch) => {
    dispatch(fetchDevicestRequest());
    axios
      .get(API + DEVICES.GET)
      .then((response) => {
        dispatch(fetchDevicesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchDevicesFailure(error.message));
      });
  };
};

export const createDevice = (newData) => {
  return (dispatch) => {
    dispatch(createDeviceRequest());
    axios
      .post(API + DEVICES.CREATE, newData)
      .then((response) => {
        // Thêm sản phẩm mới vào danh sách sản phẩm
        dispatch(fetchDevicesSuccess(response.data)); // Lấy lại danh sách sau khi thêm thành công
      })
      .catch((error) => {
        dispatch(createDeviceFailure(error.message));
      });
  };
};
export const updateDevice = (updatedData) => {
  return (dispatch) => {
    dispatch(updateDeviceRequest());
    axios
      .put(API + DEVICES.UPDATE + `/${updatedData.id}`, updatedData)
      .then((response) => {
        dispatch(fetchDevicesSuccess(response.data)); // Lấy lại danh sách sau khi cập nhật thành công
      })
      .catch((error) => {
        dispatch(updateDeviceFailure(error.message));
      });
  };
};

export const deleteDevice = (dataId) => {
  return (dispatch) => {
    dispatch(deleteDeviceRequest());
    axios
      .delete(API + DEVICES.DELETE + `/${dataId}`)
      .then((response) => {
        dispatch(fetchDevicesSuccess(response.data)); // Lấy lại danh sách sau khi xóa thành công
      })
      .catch((error) => {
        dispatch(deleteDeviceFailure(error.message));
      });
  };
};
