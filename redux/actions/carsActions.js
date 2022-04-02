import * as t from "../types";

// car posts
export const setCarPosts = (carPosts) => ({ type: t.SET_CAR_POSTS, carPosts });
export const setIsLoading = (flag) => ({ type: t.SET_IS_LOADING, flag });
export const setError = (err) => ({ type: t.SET_ERROR, err });
export const setSelectedCarPost = (post) => ({
  type: t.SET_SELECTED_CAR_POST,
  post,
});

// form
export const setIsOpenForm = (flag) => ({ type: t.SET_IS_OPEN_FORM, flag });
export const setIsCharacteristics = (flag) => ({
  type: t.SET_IS_CHARACTERISTICS,
  flag,
});
export const setBaseImg = (img) => ({ type: t.SET_BASE_IMG, img });
export const setSelectedOption = (option) => ({
  type: t.SET_SELECTED_OPTION,
  option,
});
export const setArrOption = () => ({ type: t.SET_ARRAY_OPTION });
export const setArrOptionUsingEdit = (optionEdit) => ({
  type: t.SET_ARRAY_OPTION_USING_EDIT,
  optionEdit,
});
