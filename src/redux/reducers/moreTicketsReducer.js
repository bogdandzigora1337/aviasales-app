import { MORE_TICKETS } from "../types";

const initialState = {
  numberTickets: 5,
};

export const moreTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MORE_TICKETS:
      return {
        ...state,
        numberTickets: state.numberTickets + 5,
      };

    default:
      return state;
  }
};
