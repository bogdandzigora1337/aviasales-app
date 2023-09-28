import { FILTER_CHEAP_TICKET, FILTER_FAST_TICKET } from "../types";

const initialState = {
  filter: "cheapest",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CHEAP_TICKET:
      return {
        ...state,
        filter: "cheapest",
      };

    case FILTER_FAST_TICKET:
      return {
        ...state,
        filter: "fastest",
      };

    default:
      return state;
  }
};
