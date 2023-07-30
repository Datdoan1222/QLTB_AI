// actions/productActions.js
import axios from "axios";
import { API, CATEGORIES } from "../../util/Url_API";

export const fetchProductsRequest = () => ({
  type: "FETCH_PRODUCTS_REQUEST",
});

export const fetchProductsSuccess = (data) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: data,
});

export const fetchProductsFailure = (error) => ({
  type: "FETCH_PRODUCTS_FAILURE",
  payload: error,
});

export const createProductRequest = () => ({
  type: "CREATE_PRODUCT_REQUEST",
});

export const createProductFailure = (error) => ({
  type: "CREATE_PRODUCT_FAILURE",
  payload: error,
});

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get(API + CATEGORIES.GET)
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};

export const createProduct = (newProductData) => {
  return (dispatch) => {
    dispatch(createProductRequest());
    axios
      .post(API_URL, newProductData)
      .then((response) => {
        // Thêm sản phẩm mới vào danh sách sản phẩm
        dispatch(fetchProducts()); // Lấy lại danh sách sau khi thêm thành công
      })
      .catch((error) => {
        dispatch(createProductFailure(error.message));
      });
  };
};
