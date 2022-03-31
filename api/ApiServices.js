import axios from "axios";

const BASE_URL = "http://localhost:8000/cars";

export default class ApiServices {
  static async getAll() {
    const { data } = await axios.get(BASE_URL);
    return data;
  }

  static async postCar(data) {
    const json = JSON.stringify(data);

    axios.post(BASE_URL, json, {
      headers: { "Content-Type": "application/json" },
    });
  }
}
