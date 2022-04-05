import * as CarsActionCreators from "./actions/carsActionCreators";
import * as CarsThunkCreators from "./thunks/carsThunkCreators";

export default { ...CarsActionCreators, ...CarsThunkCreators };
