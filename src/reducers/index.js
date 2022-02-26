import { combineReducers } from "redux";
import { energyReducer } from "../reducers/energyReducer";

export const reducers = combineReducers({
  energyStore: energyReducer,
});
