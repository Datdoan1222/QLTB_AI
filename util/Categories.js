import axios from "axios";

const BACKEND_URL = "http://10.0.2.2:5001/api";

export async function storeCategory(categoryData) {
  const response = await axios.post(
    BACKEND_URL + "/GetCategories.json",
    categoryData
  );
  const id = response.data.name;
  return id;
}
export async function fetchCategories() {
  const response = await axios.get(BACKEND_URL + "/Category/GetCategories");
  const categories = [];
  for (const key in response.data) {
    const categoryObj = {
      id: response.data[key].id,
      parentId: response.data[key].parentId,
      name: response.data[key].name,
      image: response.data[key].image,
      color: response.data[key].color,
    };
    categories.push(categoryObj);
  }
  return categories;
}
export function updateCategory(id, categoryData) {
  return axios.put(BACKEND_URL + `/GetCategories/${id}.json`, categoryData);
}
export function deleteCategory(id) {
  return axios.delete(BACKEND_URL + `/GetCategories/${id}.json`);
}
