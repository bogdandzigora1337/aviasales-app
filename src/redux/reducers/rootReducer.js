import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { checkboxReducer } from "./checkboxReducer";

export const rootReducer = combineReducers({
  filterReducer,
  checkboxReducer,
});
