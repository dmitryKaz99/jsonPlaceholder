import { CarsState, CarsAction, CarsActionTypes } from "../carsTypes";

const initialState: CarsState = {
  cars: [],
  isLoading: false,
  err: "",
  selectedCarPost: null,

  isCharacteristics: false,
  baseImg: "",
  selectedOption: null,
  arrOption: [],
  isEdit: false,
};

const carsReducer = (state = initialState, action: CarsAction): CarsState => {
  switch (action.type) {
    case CarsActionTypes.SET_CAR_POSTS:
      return { ...state, cars: action.carPosts, isLoading: false };
    case CarsActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.flag };
    case CarsActionTypes.SET_ERROR:
      return { ...state, err: action.err };
    case CarsActionTypes.SET_SELECTED_CAR_POST:
      return {
        ...state,
        selectedCarPost: action.post,
        isCharacteristics: false,
        selectedOption: null,
        arrOption: [],
        isEdit: false,
      };

    case CarsActionTypes.SET_IS_CHARACTERISTICS:
      return {
        ...state,
        isCharacteristics: action.flag,
        selectedOption: null,
      };
    case CarsActionTypes.SET_BASE_IMG:
      return { ...state, baseImg: action.img };
    case CarsActionTypes.SET_SELECTED_OPTION:
      return { ...state, selectedOption: action.option };
    case CarsActionTypes.SET_ARRAY_OPTION:
      return {
        ...state,
        arrOption: [...state.arrOption, state.selectedOption],
      };
    case CarsActionTypes.SET_ARRAY_OPTION_USING_EDIT:
      return {
        ...state,
        arrOption: [...state.arrOption, action.optionEdit],
        isEdit: true,
      };

    default:
      return state;
  }
};

export default carsReducer;
