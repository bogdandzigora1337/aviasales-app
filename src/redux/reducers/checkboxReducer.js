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

const sortDataByPrice = (data) => {
  return [...data].sort((a, b) => a.price - b.price);
};
const sortDataByDuration = (data) => {
  return [...data].sort(
    (a, b) => a.segments[0].duration - b.segments[0].duration
  );
};

export const checkboxReducer = (state = initialState, action) => {
  const { data, transferAllTicket, transferState } = state;
  const { type, payload } = action;

  const toggleTransferStateProperty = (property, key, numTransfers) => {
    const updateTransferState = { ...transferState, [key]: !property };
    const updateTransferAllTicket = Object.values(updateTransferState).every(
      (res) => res === true
    );

    function filterTicketsByTransfers() {
      if (payload) {
        return payload.filter((ticket) => {
          const transfersThere = ticket.segments[0].stops.length;
          const transfersBack = ticket.segments[1].stops.length;

          return numTransfers === 0
            ? transfersThere === numTransfers && transfersBack === numTransfers
            : transfersThere === numTransfers || transfersBack === numTransfers;
        });
      }
      return [];
    }

    const filteredTickets = filterTicketsByTransfers();

    const filteredData = !property
      ? [...new Set([...data, ...filteredTickets])]
      : data.filter((item) => !filteredTickets.includes(item));

    return {
      ...state,
      data: filteredData,
      transferAllTicket: updateTransferAllTicket,
      transferState: updateTransferState,
    };
  };

  switch (type) {
    case CHECKBOX_ALL_TICKETS:
      const transferStateCopy = { ...transferState };
      for (const key in transferStateCopy) {
        transferStateCopy[key] = !transferAllTicket;
      }
      return {
        ...state,
        data: payload && !transferAllTicket ? payload : [],
        transferAllTicket: !transferAllTicket,
        transferState: { ...transferStateCopy },
      };

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
      const sorterCheapTickets = !!data.length ? sortDataByPrice(data) : [];

      return {
        ...state,
        data: !!data.length && sorterCheapTickets,
        filter: "cheapest",
      };

    case FILTER_FAST_TICKET:
      const sorterFastTickets = !!data.length ? sortDataByDuration(data) : [];

      return {
        ...state,
        data: sorterFastTickets,
        filter: "fastest",
      };

    default:
      return state;
  }
};
