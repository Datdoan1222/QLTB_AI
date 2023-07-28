import axios from "axios";

const BACKEND_URL = "http://10.0.2.2:5001/api/";

export async function storeDevice(deviceData) {
  const response = await axios.post(
    BACKEND_URL + "/Product/CreateProduct",
    deviceData
  );
  const id = response.data.id;
  console.log("====================================");
  console.log(id);
  console.log("====================================");
  return id;
}

export async function fetchDevices(id) {
  const response = await axios.get(
    BACKEND_URL + `Product/GetProduct/Category/${id}`
  );
  const devices = [];
  for (const key in response.data) {
    const deviceObj = {
      id: response.data[key].id,
      name: response.data[key].name,
      categoryId: response.data[key].categoryId,
      number: response.data[key].number,
      description: response.data[key].description,
      status: response.data[key].status,
      image: response.data[key].image,
      recivedDate: response.data[key].recivedDate,
      returnDate: response.data[key].returnDate,
    };
    devices.push(deviceObj);
  }
  return devices;
}
export function updateDevice(id, deviceData) {
  return axios.put(BACKEND_URL + `/Product/GetProducts/${id}.json`, deviceData);
}
export function deleteDevice(id) {
  return axios.delete(BACKEND_URL + `/Product/GetProducts/${id}.json`);
}
