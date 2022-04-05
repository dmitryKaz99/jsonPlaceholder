import * as CarsActionCreate from "./actions/carsActionCreators";
import * as CarsThunkCreators from "./thunks/carsThunkCreators";

export default { ...CarsActionCreate, ...CarsThunkCreators };
