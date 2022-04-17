import carsReducer from "./reducers/carsReducer";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

const reducers = combineReducers({ carsPage: carsReducer });
export type RootState = ReturnType<typeof reducers>;

const composeEnhancers =
  (typeof window != "undefined" &&
    (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose)) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
