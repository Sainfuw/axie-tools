import { combineReducers } from "redux";
import { energyReducer } from "../reducers/energyReducer";
import { enemiesReducer } from "./enemiesReducer";

export const reducers = combineReducers({
  energyStore: energyReducer,
  enemiesStore: enemiesReducer,
});
