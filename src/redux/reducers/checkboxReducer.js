import {
  CHECKBOX_ALL_TICKETS,
  CHECKBOX_NON_STOP_TICKETS,
  CHECKBOX_ONE_STOP_TICKETS,
  CHECKBOX_TWO_STOP_TICKETS,
  CHECKBOX_THREE_STOP_TICKETS,
  FILTER_CHEAP_TICKET,
  FILTER_FAST_TICKET,
} from "../types";

const initialState = {
  data: [],
  filter: "cheapest",

  transferAllTicket: false,
  transferState: {
    nonStopTickets: false,
    oneStopTickets: false,
    twoStopTickets: false,
    threeStopTickets: false,
  },
};

export const checkboxReducer = (state = initialState, action) => {
  const { data, transferAllTicket, transferState } = state;
  const { type, payload } = action;

  const toggleTransferStateProperty = (property, key, numTransfers) => {
    const updateTransferState = { ...transferState, [key]: !property };
    const updateTransferAllTicket = Object.values(updateTransferState).every(
      (res) => res === true
    );

    function fn() {
      if (payload) {
        let filterTicket = payload.filter(
          (ticket) =>
            ticket.segments[0].stops.length === numTransfers ||
            ticket.segments[0].stops.length === numTransfers
        );
        return filterTicket;
      }
    }

    return {
      ...state,
      data: fn(),
      transferAllTicket: updateTransferAllTicket,
      transferState: updateTransferState,
    };
  };

  switch (action.type) {
    case CHECKBOX_ALL_TICKETS:
      return ((property) => {
        const transferStateCopy = { ...transferState };

        for (const key in transferStateCopy) {
          transferStateCopy[key] = !property;
        }

        return {
          ...state,
          data: action.payload,
          transferAllTicket: !property,
          transferState: { ...transferStateCopy },
        };
      })(transferAllTicket);

    case CHECKBOX_NON_STOP_TICKETS:
      return toggleTransferStateProperty(
        transferState.nonStopTickets,
        "nonStopTickets",
        0
      );

    case CHECKBOX_ONE_STOP_TICKETS:
      return toggleTransferStateProperty(
        transferState.oneStopTickets,
        "oneStopTickets",
        1
      );

    case CHECKBOX_TWO_STOP_TICKETS:
      return toggleTransferStateProperty(
        transferState.twoStopTickets,
        "twoStopTickets",
        2
      );

    case CHECKBOX_THREE_STOP_TICKETS:
      return toggleTransferStateProperty(
        transferState.threeStopTickets,
        "threeStopTickets",
        3
      );

    case FILTER_CHEAP_TICKET:
      const sorterCheapTickets =
        data && [...data].sort((a, b) => a.price - b.price);

      return {
        ...state,
        data: sorterCheapTickets,
        filter: "cheapest",
      };

    case FILTER_FAST_TICKET:
      const sorterFastTickets =
        data &&
        [...data].sort(
          (a, b) => a.segments[0].duration - b.segments[0].duration
        );

      return {
        ...state,
        data: sorterFastTickets,
        filter: "fastest",
      };

    default:
      return state;
  }
};
