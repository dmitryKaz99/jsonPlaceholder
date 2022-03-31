import * as t from "../types";

const initialState = {
  cars: [],
  isLoading: false,
  err: "",
  toggleUpdatePosts: true,
  selectedCarPost: null,

  isFormOpen: false,
  isCharacteristics: false,
  selectedOption: null,
  arrOption: [],
};

// divide reducer
const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_CAR_POSTS:
      return { ...state, cars: action.carPosts, isLoading: false };

    case t.SET_TOGGLE_UPDATE_POSTS:
      return { ...state, toggleUpdatePosts: !state.toggleUpdatePosts };

    case t.SET_SELECTED_CAR_POST:
      return { ...state, selectedCarPost: action.id, isFormOpen: true };

    case t.SET_IS_OPEN_FORM:
      return { ...state, isFormOpen: action.flag };

    case t.SET_IS_CHARACTERISTICS:
      return { ...state, isCharacteristics: action.flag };

    case t.SET_SELECTED_OPTION:
      return { ...state, selectedOption: action.option };

    case t.SET_ARRAY_OPTION:
      return {
        ...state,
        arrOption: [...state.arrOption, state.selectedOption],
      };

    default:
      return state;
  }
};

export default carsReducer;
