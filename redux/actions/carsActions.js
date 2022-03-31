import ApiServices from "../../api/ApiServices";
import * as t from "../types";

// car posts
const setCarPosts = (carPosts) => ({ type: t.SET_CAR_POSTS, carPosts });
const setIsLoading = (flag) => ({ type: t.SET_IS_LOADING, flag });
const getError = (err) => ({ type: t.GET_ERROR, err });
const setToggleUpdatePosts = () => ({ type: t.SET_TOGGLE_UPDATE_POSTS });

export const setSelectedCarPost = (id) => ({
  type: t.SET_SELECTED_CAR_POST,
  id,
});

export const getCarsWithApi = () => async (dispatch) => {
  try {
    // dispatch(setIsLoading(true));

    const res = await ApiServices.getAll();
    dispatch(setCarPosts(res));
  } catch (e) {
    // dispatch(getError(e.message));
  }
};

export const postCarForm = (data) => async (dispatch) => {
  try {
    ApiServices.postCar(data);
  } catch (e) {
  } finally {
    dispatch(setToggleUpdatePosts());
  }
};

// form
export const setIsOpenForm = (flag) => ({ type: t.SET_IS_OPEN_FORM, flag });
export const setIsCharacteristics = (flag) => ({
  type: t.SET_IS_CHARACTERISTICS,
  flag,
});

export const setSelectedOption = (option) => ({
  type: t.SET_SELECTED_OPTION,
  option,
});
export const setArrOption = () => ({ type: t.SET_ARRAY_OPTION });
