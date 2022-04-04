import { CarsActionTypes } from "../types";

//car posts
interface setCarPosts {
  type: CarsActionTypes.SET_CAR_POSTS;
  carPosts: any[];
}
interface setIsLoading {
  type: CarsActionTypes.SET_IS_LOADING;
  flag: boolean;
}
interface setError {
  type: CarsActionTypes.SET_ERROR;
  err: string;
}
interface setSelectedCarPost {
  type: CarsActionTypes.SET_SELECTED_CAR_POST;
  post: any;
}

// form
interface setIsCharacteristics {
  type: CarsActionTypes.SET_IS_CHARACTERISTICS;
  flag: boolean;
}
interface setBaseImg {
  type: CarsActionTypes.SET_BASE_IMG;
  img: any;
}
interface setSelectedOption {
  type: CarsActionTypes.SET_SELECTED_OPTION;
  option: any;
}
interface setArrOption {
  type: CarsActionTypes.SET_ARRAY_OPTION;
}
interface setArrOptionUsingEdit {
  type: CarsActionTypes.SET_ARRAY_OPTION_USING_EDIT;
  optionEdit: any;
}

export type CarsAction =
  | setCarPosts
  | setIsLoading
  | setError
  | setSelectedCarPost
  | setIsCharacteristics
  | setBaseImg
  | setSelectedOption
  | setArrOption
  | setArrOptionUsingEdit;
