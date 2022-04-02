import * as t from "../types";

const initialState = {
  cars: [],
  isLoading: false,
  err: "",
  selectedCarPost: null,

  isFormOpen: false,
  isCharacteristics: false,
  baseImg: "",
  selectedOption: null,
  arrOption: [],
  isEdit: false,
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_CAR_POSTS:
      return { ...state, cars: action.carPosts, isLoading: false };
    case t.SET_IS_LOADING:
      return { ...state, isLoading: action.flag };
    case t.SET_ERROR:
      return { ...state, err: action.err };
    case t.SET_SELECTED_CAR_POST:
      return {
        ...state,
        selectedCarPost: action.post,
        isFormOpen: true,
        arrOption: [],
        isEdit: false,
        // selectedOption: null,
      };

    case t.SET_IS_OPEN_FORM:
      return {
        ...state,
        isFormOpen: action.flag,
        isCharacteristics: false,
        arrOption: [],
        isEdit: false,
      };
    case t.SET_IS_CHARACTERISTICS:
      return {
        ...state,
        isCharacteristics: action.flag,
      };
    case t.SET_BASE_IMG:
      return { ...state, baseImg: action.img };
    case t.SET_SELECTED_OPTION:
      return { ...state, selectedOption: action.option };
    case t.SET_ARRAY_OPTION:
      return {
        ...state,
        arrOption: [...state.arrOption, state.selectedOption],
      };
    case t.SET_ARRAY_OPTION_USING_EDIT:
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
