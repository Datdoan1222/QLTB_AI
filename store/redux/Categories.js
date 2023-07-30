// reducers/productReducer.js
const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
    case "CREATE_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case "FETCH_PRODUCTS_FAILURE":
    case "CREATE_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
