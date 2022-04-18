import { CarsState, CarsAction, CarsActionTypes } from "../carsTypes";

const initialState: CarsState = {
  // default
  cars: [],
  isLoading: false,
  err: "",

  // form
  isCharacteristics: false,
  baseImg: "",
  selectedOption: null,
  arrOption: [],
  isEdit: false,

  // page manager
  limit: "5",
  currentPage: 1,
  isUpdate: false,

  // additions
  isModal: false,
  idForDelete: null,
  idCreatedPost: null,
};

const carsReducer = (state = initialState, action: CarsAction): CarsState => {
  switch (action.type) {
    // default
    case CarsActionTypes.SET_CAR_POSTS:
      return { ...state, cars: action.carPosts, isLoading: false };
    case CarsActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.flag };
    case CarsActionTypes.SET_ERROR:
      return { ...state, err: action.err };

    // form
    case CarsActionTypes.SET_IS_CHARACTERISTICS:
      return { ...state, isCharacteristics: action.flag };
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
    case CarsActionTypes.SET_RESET_FORM:
      return {
        ...state,
        isCharacteristics: false,
        selectedOption: null,
        arrOption: [],
        isEdit: false,
      };

    // page manager
    case CarsActionTypes.SET_LIMIT:
      return { ...state, limit: action.newLimit };
    case CarsActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.newCurrentPage };
    case CarsActionTypes.SET_UPDATE_PAGE_MANAGER:
      return { ...state, isUpdate: action.flag };

    // additions
    case CarsActionTypes.SET_IS_MODAL:
      return { ...state, isModal: action.flag };
    case CarsActionTypes.SET_ID_FOR_DELETE:
      return { ...state, idForDelete: action.id, isModal: true };
    case CarsActionTypes.SET_ID_CREATED_POST:
      return { ...state, idCreatedPost: action.id };

    default:
      return state;
  }
};

export default carsReducer;
