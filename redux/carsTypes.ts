import { IOption, IPost } from "../types/types";

export interface CarsState {
  cars: IPost[];
  isLoading: boolean;
  err: string;
  selectedCarPost: IPost | null;

  isCharacteristics: boolean;
  baseImg: string;
  selectedOption: IOption | null;
  arrOption: IOption[];
  isEdit: boolean;
}

export enum CarsActionTypes {
  SET_CAR_POSTS = "cars/SET_CAR_POSTS",
  SET_IS_LOADING = "cars/SET_IS_LOADING",
  SET_ERROR = "cars/SET_ERROR",
  SET_SELECTED_CAR_POST = "cars/SET_SELECTED_CAR_POST",

  SET_IS_CHARACTERISTICS = "cars/SET_IS_CHARACTERISTICS",
  SET_BASE_IMG = "cars/SET_BASE_IMG",
  SET_SELECTED_OPTION = "cars/SET_SELECTED_OPTION",
  SET_ARRAY_OPTION = "cars/SET_ARRAY_OPTION",
  SET_ARRAY_OPTION_USING_EDIT = "cars/SET_ARRAY_OPTION_USING_EDIT",
}

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
interface selectedCarPostAction {
  type: CarsActionTypes.SET_SELECTED_CAR_POST;
  post: IPost;
}

interface isCharacteristicsAction {
  type: CarsActionTypes.SET_IS_CHARACTERISTICS;
  flag: boolean;
}
interface baseImgAction {
  type: CarsActionTypes.SET_BASE_IMG;
  img: any;
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

export type CarsAction =
  | carPostsAction
  | isLoadingAction
  | errorAction
  | selectedCarPostAction
  | isCharacteristicsAction
  | baseImgAction
  | selectedOptionAction
  | arrOptionAction
  | arrOptionUsingEditAction;
