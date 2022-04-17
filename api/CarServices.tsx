import axios from "axios";
import { IPost } from "../types/types";

const BASE_URL: string = "http://localhost:8000/cars";

export default class CarServices {
  static async postOrPutPost(data: IPost, id?: number) {
    const json = JSON.stringify(data),
      headerTypes = {
        headers: { "Content-Type": "application/json" },
      };

    if (id) {
      return await axios.put<IPost>(BASE_URL + `/${id}`, json, headerTypes);
    } else {
      return await axios.post<IPost>(BASE_URL, json, headerTypes);
    }
  }
  static async deletePost(id: number) {
    return await axios.delete<IPost>(BASE_URL + `/${id}`);
  }

  static async getPosts() {
    const { data } = await axios.get<IPost[]>(BASE_URL);
    return data;
  }

  static async getCurrentPost(id: number) {
    const { data } = await axios.get<IPost>(BASE_URL + `/${id}`);
    return data;
  }

  static async getPostsWithQueryParams(queryParams: string) {
    const res = await axios.get<IPost[]>(BASE_URL + queryParams);
    return res;
  }
}
