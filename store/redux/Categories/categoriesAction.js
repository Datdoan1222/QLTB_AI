import axios from "axios";
import { API, CATEGORIES } from "../../../util/Url_API";

export const fetchCategoriestRequest = () => ({
  type: "FETCH_CATEGORIES_REQUEST",
});

export const fetchCategoriesSuccess = (data) => ({
  type: "FETCH_CATEGORIES_SUCCESS",
  payload: data,
});

export const fetchCategoriesFailure = (error) => ({
  type: "FETCH_CATEGORIES_FAILURE",
  payload: error,
});

export const createCategoryRequest = () => ({
  type: "CREATE_CTEGORY_REQUEST",
});

export const createCategoryFailure = (error) => ({
  type: "CREATE_CTEGORY_FAILURE",
  payload: error,
});
export const updateCategoryRequest = () => ({
  type: "UPDATE_CTEGORY_REQUEST",
});

export const updateCategoryFailure = (error) => ({
  type: "UPDATE_CTEGORY_FAILURE",
  payload: error,
});

export const deleteCategoryRequest = () => ({
  type: "DELETE_CTEGORY_REQUEST",
});

export const deleteCategoryFailure = (error) => ({
  type: "DELETE_CTEGORY_FAILURE",
  payload: error,
});

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriestRequest());
    axios
      .get(API + CATEGORIES.GET)
      .then((response) => {
        dispatch(fetchCategoriesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCategoriesFailure(error.message));
      });
  };
};

export const createCategories = (newData) => {
  return (dispatch) => {
    dispatch(createCategoryRequest());
    axios
      .post(API + CATEGORIES.CREATE, newData)
      .then((response) => {
        // Thêm sản phẩm mới vào danh sách sản phẩm
        dispatch(fetchCategoriesSuccess(response.data)); // Lấy lại danh sách sau khi thêm thành công
      })
      .catch((error) => {
        dispatch(createCategoryFailure(error.message));
      });
  };
};
export const updateCategory = (updatedData) => {
  return (dispatch) => {
    dispatch(updateCategoryRequest());
    axios
      .put(API + CATEGORIES.UPDATE + `/${updatedData.id}`, updatedData)
      .then((response) => {
        dispatch(fetchCategoriesSuccess(response.data)); // Lấy lại danh sách sau khi cập nhật thành công
      })
      .catch((error) => {
        dispatch(updateCategoryFailure(error.message));
      });
  };
};

export const deleteCategory = (dataId) => {
  return (dispatch) => {
    dispatch(deleteCategoryRequest());
    axios
      .delete(API + CATEGORIES.DELETE + `/${dataId}`)
      .then((response) => {
        dispatch(fetchCSuccess(response.data)); // Lấy lại danh sách sau khi xóa thành công
      })
      .catch((error) => {
        dispatch(deleteCategoryFailure(error.message));
      });
  };
};
