import axios from "axios";

const BASE_URL = "http://localhost:8000/cars";

export default class CarServices {
  static async getAll() {
    const { data } = await axios.get(BASE_URL);
    return data;
  }

  static async postOrPut(data, id) {
    const json = JSON.stringify(data),
      headerTypes = {
        headers: { "Content-Type": "application/json" },
      };

    if (id) {
      return await axios.put(BASE_URL + "/" + id, json, headerTypes);
    } else {
      return await axios.post(BASE_URL, json, headerTypes);
    }
  }
}
