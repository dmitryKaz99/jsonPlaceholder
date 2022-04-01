import CarServices from "../../api/CarServices";
import * as t from "../types";

// car posts
const setCarPosts = (carPosts) => ({ type: t.SET_CAR_POSTS, carPosts });
const setIsLoading = (flag) => ({ type: t.SET_IS_LOADING, flag });
const getError = (err) => ({ type: t.SET_ERROR, err });

export const setSelectedCarPost = (id) => ({
  type: t.SET_SELECTED_CAR_POST,
  id,
});

export const getCarsWithApi = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));

    const res = await CarServices.getAll();
    dispatch(setCarPosts(res));
  } catch (e) {
    dispatch(getError(e.message));
  } finally {
    dispatch(setIsLoading(false));
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
export const setArrOptionUsingEdit = (optionEdit) => ({
  type: t.SET_ARRAY_OPTION_USING_EDIT,
  optionEdit,
});

// debug reload page
export const postOrPutOnApi = (data, id) => async (dispatch) => {
  try {
    CarServices.postOrPut(data, id);
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(getCarsWithApi());

    dispatch(setSelectedCarPost(null));
    dispatch(setIsCharacteristics(false));
  }
};
