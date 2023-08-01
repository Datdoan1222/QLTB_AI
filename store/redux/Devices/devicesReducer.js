const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false,
};

const DevicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DEVICES_REQUEST":
    case "CREATE_DEVICE_REQUEST":
    case "UPDATE_DEVICE_REQUEST":
    case "DELETE_DEVICE_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };
    case "FETCH_DEVICES_SUCCESS":
    case "CREATE_DEVICE_SUCCESS":
    case "UPDATE_DEVICE_SUCCESS":
    case "DELETE_DEVICE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        success: true,
      };
    case "FETCH_DEVICES_FAILURE":
    case "CREATE_DEVICE_FAILURE":
    case "UPDATE_DEVICE_FAILURE":
    case "DELETE_DEVICE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export default DevicesReducer;
