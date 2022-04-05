import { IOption, IPost } from "../../types/types";
import { CarsAction, CarsActionTypes } from "../types";

export const setCarPosts = (carPosts: IPost[]): CarsAction => ({
  type: CarsActionTypes.SET_CAR_POSTS,
  carPosts,
});
export const setIsLoading = (flag: boolean): CarsAction => ({
  type: CarsActionTypes.SET_IS_LOADING,
  flag,
});
export const setError = (err: string): CarsAction => ({
  type: CarsActionTypes.SET_ERROR,
  err,
});
export const setSelectedCarPost = (post: IPost): CarsAction => ({
  type: CarsActionTypes.SET_SELECTED_CAR_POST,
  post,
});

export const setIsCharacteristics = (flag: boolean): CarsAction => ({
  type: CarsActionTypes.SET_IS_CHARACTERISTICS,
  flag,
});
export const setBaseImg = (img: any): CarsAction => ({
  type: CarsActionTypes.SET_BASE_IMG,
  img,
});
export const setSelectedOption = (option: IOption): CarsAction => ({
  type: CarsActionTypes.SET_SELECTED_OPTION,
  option,
});
export const setArrOption = () => ({ type: CarsActionTypes.SET_ARRAY_OPTION });
export const setArrOptionUsingEdit = (optionEdit: IOption) => ({
  type: CarsActionTypes.SET_ARRAY_OPTION,
  optionEdit,
});
