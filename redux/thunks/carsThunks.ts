import CarServices from "../../api/CarServices";
import { convertBase64 } from "../../utils/convertBase64";
import { Dispatch } from "redux";
import { CarsAction } from "../actions/carsActions";
import { CarsActionTypes } from "../types";

//car posts
export const getCarsWithApi = () => async (dispatch: Dispatch<CarsAction>) => {
  try {
    dispatch({ type: CarsActionTypes.SET_IS_LOADING, flag: true });

    const res = await CarServices.getAll();
    dispatch({ type: CarsActionTypes.SET_CAR_POSTS, carPosts: res });
  } catch (e) {
    dispatch({ type: CarsActionTypes.SET_ERROR, err: e.message });
  } finally {
    dispatch({ type: CarsActionTypes.SET_IS_LOADING, flag: false });
  }
};

// form
export const postOrPutOnApi =
  (data: any, id: number) => (dispatch: Dispatch<CarsAction>) => {
    CarServices.postOrPut(data, id)
      .then(() => dispatch(getCarsWithApi())) //!
      .catch((e) =>
        dispatch(dispatch({ type: CarsActionTypes.SET_ERROR, err: e.message }))
      )
      .finally(() => {
        dispatch({ type: CarsActionTypes.SET_SELECTED_CAR_POST, post: null });
      });
  };
export const uploadImg = (e: any) => async (dispatch: Dispatch<CarsAction>) => {
  try {
    const img = e.target.files[0],
      base64 = await convertBase64(img);

    dispatch({ type: CarsActionTypes.SET_BASE_IMG, img: base64 });
  } catch (e) {
    alert(e);
  }
};
