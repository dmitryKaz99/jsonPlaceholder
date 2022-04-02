import CarServices from "../../api/CarServices";
import { convertBase64 } from "../../utils/convertBase64";
import {
  setCarPosts,
  setIsLoading,
  setError,
  setBaseImg,
  setSelectedCarPost,
  setIsOpenForm,
} from "../actions/carsActions";

// car posts
export const getCarsWithApi = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));

    const res = await CarServices.getAll();
    dispatch(setCarPosts(res));
  } catch (e) {
    dispatch(setError(e.message));
  } finally {
    dispatch(setIsLoading(false));
  }
};

// form
export const postOrPutOnApi = (data, id) => (dispatch) => {
  CarServices.postOrPut(data, id)
    .then(() => dispatch(getCarsWithApi()))
    .catch((e) => console.log(e))
    .finally(() => {
      dispatch(setSelectedCarPost(null));
      dispatch(setIsOpenForm(false));
    });
};
export const uploadImg = (e) => async (dispatch) => {
  try {
    const img = e.target.files[0],
      base64 = await convertBase64(img);

    dispatch(setBaseImg(base64));
  } catch (e) {
    console.log(e);
  }
};
