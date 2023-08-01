const initialState = {
  data: [],
  loading: false,
  error: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES_REQUEST":
    case "CREATE_CTEGORY_REQUEST":
    case "UPDATE_CTEGORY_REQUEST":
    case "DELETE_CTEGORY_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_CATEGORIES_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case "FETCH_CATEGORIES_FAILURE":
    case "CREATE_CTEGORY_FAILURE":
    case "UPDATE_CTEGORY_FAILURE":
    case "DELETE_CTEGORY_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
