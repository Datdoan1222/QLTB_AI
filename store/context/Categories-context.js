import { createContext, useReducer } from "react";

export const CategoryContext = createContext({
  categories: [],
  addCategory: ({ parentId, description, name, image, color }) => {},
  setCategory: (category) => {},
  deleteCategory: (id) => {},
  updateCategory: (id, { parentId, description, name, image, color }) => {},
});
function categoriesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload;
      return inverted;
    case "UPDATE":
      const updatableCategoryIndex = state.findIndex(
        (category) => category.id === action.payload.id
      );
      const updatableCategory = state[updatableCategoryIndex];
      const updatedItem = { ...updatableCategory, ...action.payload.data };
      const updatedCategories = [...state];
      updatedCategories[updatableCategoryIndex] = updatedItem;
      return updatedCategories;
    case "DELETE":
      return state.filter((category) => category.id !== action.payload);
    default:
      return state;
  }
}

function CategoriesContextProvider({ children }) {
  const [categoriesState, dispatch] = useReducer(categoriesReducer, []);

  function addCategory(categoryData) {
    dispatch({ type: "ADD", payload: categoryData });
  }
  function setCategory(categories) {
    dispatch({ type: "SET", payload: categories });
  }
  function updateCategory(id, categoryData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: categoryData } });
  }
  function deleteCategory(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  const value = {
    categories: categoriesState,
    setCategory: setCategory,
    addCategory: addCategory,
    deleteCategory: deleteCategory,
    updateCategory: updateCategory,
  };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
export default CategoriesContextProvider;
