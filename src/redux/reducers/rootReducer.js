import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { checkboxReducer } from "./checkboxReducer";
import { userIdReducer } from "./userIdReducer";
import { ticketsReducer } from "./ticketsReducer";
import { moreTicketsReducer } from "./moreTicketsReducer";

export const rootReducer = combineReducers({
  filterReducer,
  checkboxReducer,
  userIdReducer,
  ticketsReducer,
  moreTicketsReducer,
});
