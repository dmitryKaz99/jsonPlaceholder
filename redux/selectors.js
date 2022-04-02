// car posts
export const getCars = (state) => state.carsPage.cars;
export const getIsLoading = (state) => state.carsPage.isLoading;
export const getError = (state) => state.carsPage.err;
export const getSelectedCarPost = (state) => state.carsPage.selectedCarPost;

// form
export const getIsFormOpen = (state) => state.carsPage.isFormOpen;
export const getIsCharacteristics = (state) => state.carsPage.isCharacteristics;
export const getBaseImg = (state) => state.carsPage.baseImg;
export const getSelectedOption = (state) => state.carsPage.selectedOption;
export const getArrOption = (state) => state.carsPage.arrOption;
export const getIsEdit = (state) => state.carsPage.isEdit;
