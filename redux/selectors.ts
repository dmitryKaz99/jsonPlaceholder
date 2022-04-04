import { RootState } from "./store";

export const getCars = (state: RootState) => state.carsPage.cars;
export const getIsLoading = (state: RootState) => state.carsPage.isLoading;
export const getError = (state: RootState) => state.carsPage.err;
export const getSelectedCarPost = (state: RootState) =>
  state.carsPage.selectedCarPost;

export const getIsCharacteristics = (state: RootState) =>
  state.carsPage.isCharacteristics;
export const getBaseImg = (state: RootState) => state.carsPage.baseImg;
export const getSelectedOption = (state: RootState) =>
  state.carsPage.selectedOption;
export const getArrOption = (state: RootState) => state.carsPage.arrOption;
export const getIsEdit = (state: RootState) => state.carsPage.isEdit;
