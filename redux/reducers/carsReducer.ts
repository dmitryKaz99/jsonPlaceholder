import { CarsState, CarsAction, CarsActionTypes } from "../carsTypes";

const initialState: CarsState = {
  cars: [],
  isLoading: false,
  err: "",

  isCharacteristics: false,
  baseImg: "",
  selectedOption: null,
  arrOption: [],
  isEdit: false,

  limit: "5",
  currentPage: 1,
  isUpdate: false,

  isModal: false,
  idForDelete: null,

  isPrevPathSearch: false,
};

const carsReducer = (state = initialState, action: CarsAction): CarsState => {
  switch (action.type) {
    case CarsActionTypes.SET_CAR_POSTS:
      return { ...state, cars: action.carPosts, isLoading: false };
    case CarsActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.flag };
    case CarsActionTypes.SET_ERROR:
      return { ...state, err: action.err };

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

    case CarsActionTypes.SET_LIMIT:
      return { ...state, limit: action.newLimit };
    case CarsActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.newCurrentPage };
    case CarsActionTypes.SET_UPDATE_PAGE_MANAGER:
      return { ...state, isUpdate: action.flag };

    case CarsActionTypes.SET_IS_MODAL:
      return { ...state, isModal: action.flag };
    case CarsActionTypes.SET_ID_FOR_DELETE:
      return { ...state, idForDelete: action.id, isModal: true };

    case CarsActionTypes.SET_IS_PREV_PATH_SEARCH:
      return { ...state, isPrevPathSearch: action.flag };

    default:
      return state;
  }
};

export default carsReducer;
