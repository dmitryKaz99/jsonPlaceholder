import { IOption, IPost } from "../types/types";

export interface CarsState {
  // default
  cars: IPost[];
  isLoading: boolean;
  err: string;

  // form
  isCharacteristics: boolean;
  baseImg: string;
  selectedOption: IOption | null;
  arrOption: IOption[];
  isEdit: boolean;

  // page manager
  limit: string;
  currentPage: number;
  isUpdate: boolean;

  // additions
  isModal: boolean;
  idForDelete: number | null;
  idCreatedPost: number | null;
}

export enum CarsActionTypes {
  // default
  SET_CAR_POSTS = "cars/SET_CAR_POSTS",
  SET_IS_LOADING = "cars/SET_IS_LOADING",
  SET_ERROR = "cars/SET_ERROR",

  // form
  SET_IS_CHARACTERISTICS = "cars/SET_IS_CHARACTERISTICS",
  SET_BASE_IMG = "cars/SET_BASE_IMG",
  SET_SELECTED_OPTION = "cars/SET_SELECTED_OPTION",
  SET_ARRAY_OPTION = "cars/SET_ARRAY_OPTION",
  SET_ARRAY_OPTION_USING_EDIT = "cars/SET_ARRAY_OPTION_USING_EDIT",
  SET_RESET_FORM = "cars/SET_RESET_FORM",

  // page manager
  SET_LIMIT = "cars/SET_LIMIT",
  SET_CURRENT_PAGE = "cars/SET_CURRENT_PAGE",
  SET_UPDATE_PAGE_MANAGER = "cars/SET_UPDATE_PAGE_MANAGER",

  // additions
  SET_IS_MODAL = "cars/SET_IS_MODAL",
  SET_ID_FOR_DELETE = "cars/SET_ID_FOR_DELETE",
  SET_ID_CREATED_POST = "cars/SET_ID_CREATED_POST",
}

// default
interface carPostsAction {
  type: CarsActionTypes.SET_CAR_POSTS;
  carPosts: IPost[];
}
interface isLoadingAction {
  type: CarsActionTypes.SET_IS_LOADING;
  flag: boolean;
}
interface errorAction {
  type: CarsActionTypes.SET_ERROR;
  err: string;
}

// form
interface isCharacteristicsAction {
  type: CarsActionTypes.SET_IS_CHARACTERISTICS;
  flag: boolean;
}
interface baseImgAction {
  type: CarsActionTypes.SET_BASE_IMG;
  img: string;
}
interface selectedOptionAction {
  type: CarsActionTypes.SET_SELECTED_OPTION;
  option: IOption;
}
interface arrOptionAction {
  type: CarsActionTypes.SET_ARRAY_OPTION;
}
interface arrOptionUsingEditAction {
  type: CarsActionTypes.SET_ARRAY_OPTION_USING_EDIT;
  optionEdit: IOption;
}
interface resetFormAction {
  type: CarsActionTypes.SET_RESET_FORM;
}

// page manager
interface setLimitAction {
  type: CarsActionTypes.SET_LIMIT;
  newLimit: string;
}
interface setCurrentPageAction {
  type: CarsActionTypes.SET_CURRENT_PAGE;
  newCurrentPage: number;
}
interface setUpdatePageManagerAction {
  type: CarsActionTypes.SET_UPDATE_PAGE_MANAGER;
  flag: boolean;
}

// additions
interface setIsModalAction {
  type: CarsActionTypes.SET_IS_MODAL;
  flag: boolean;
}
interface setIdForDeleteAction {
  type: CarsActionTypes.SET_ID_FOR_DELETE;
  id: number;
}
interface setIdCreatedPostAction {
  type: CarsActionTypes.SET_ID_CREATED_POST;
  id: number;
}

export type CarsAction =
  | carPostsAction
  | isLoadingAction
  | errorAction
  | isCharacteristicsAction
  | baseImgAction
  | selectedOptionAction
  | arrOptionAction
  | arrOptionUsingEditAction
  | resetFormAction
  | setLimitAction
  | setUpdatePageManagerAction
  | setCurrentPageAction
  | setIsModalAction
  | setIdForDeleteAction
  | setIdCreatedPostAction;
