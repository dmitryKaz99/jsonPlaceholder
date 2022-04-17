import { IPost, IOption } from "../../types/types";
import { CarsAction, CarsActionTypes } from "../carsTypes";

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

export const setIsCharacteristics = (flag: boolean): CarsAction => ({
  type: CarsActionTypes.SET_IS_CHARACTERISTICS,
  flag,
});
export const setBaseImg = (img: string): CarsAction => ({
  type: CarsActionTypes.SET_BASE_IMG,
  img,
});
export const setSelectedOption = (option: IOption): CarsAction => ({
  type: CarsActionTypes.SET_SELECTED_OPTION,
  option,
});
export const setArrOption = () => ({ type: CarsActionTypes.SET_ARRAY_OPTION });
export const setArrOptionUsingEdit = (optionEdit: IOption) => ({
  type: CarsActionTypes.SET_ARRAY_OPTION_USING_EDIT,
  optionEdit,
});
export const setResetForm = (): CarsAction => ({
  type: CarsActionTypes.SET_RESET_FORM,
});

export const setLimit = (newLimit: string) => ({
  type: CarsActionTypes.SET_LIMIT,
  newLimit,
});
export const setCurrentPage = (newCurrentPage: number) => ({
  type: CarsActionTypes.SET_CURRENT_PAGE,
  newCurrentPage,
});
export const setUpdatePageManager = (flag: boolean) => ({
  type: CarsActionTypes.SET_UPDATE_PAGE_MANAGER,
  flag,
});

export const setIsModal = (flag: boolean) => ({
  type: CarsActionTypes.SET_IS_MODAL,
  flag,
});
export const setIdForDelete = (id: number) => ({
  type: CarsActionTypes.SET_ID_FOR_DELETE,
  id,
});

export const setIsPrevPathSearch = (flag: boolean) => ({
  type: CarsActionTypes.SET_IS_PREV_PATH_SEARCH,
  flag,
});
