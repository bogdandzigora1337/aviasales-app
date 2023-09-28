import {
  CHECKBOX_ALL_TICKETS,
  CHECKBOX_NON_STOP_TICKETS,
  CHECKBOX_ONE_STOP_TICKETS,
  CHECKBOX_TWO_STOP_TICKETS,
  CHECKBOX_THREE_STOP_TICKETS,
} from "../types";

const initialState = {
  transferAllTicket: false,
  transferState: {
    nonStopTickets: false,
    oneStopTickets: false,
    twoStopTickets: false,
    threeStopTickets: false,
  },
};

export const checkboxReducer = (state = initialState, action) => {
  const { transferAllTicket, transferState } = state;

  const toggleTransferStateProperty = (property, key) => {
    const updateTransferState = { ...transferState, [key]: !property };
    const updateTransferAllTicket = Object.values(updateTransferState).every(
      (res) => res === true
    );

    return {
      ...state,
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
          transferAllTicket: !property,
          transferState: { ...transferStateCopy },
        };
      })(transferAllTicket);

    case CHECKBOX_NON_STOP_TICKETS:
      return toggleTransferStateProperty(
        transferState.nonStopTickets,
        "nonStopTickets"
      );

    case CHECKBOX_ONE_STOP_TICKETS:
      return toggleTransferStateProperty(
        transferState.oneStopTickets,
        "oneStopTickets"
      );

    case CHECKBOX_TWO_STOP_TICKETS:
      return toggleTransferStateProperty(
        transferState.twoStopTickets,
        "twoStopTickets"
      );

    case CHECKBOX_THREE_STOP_TICKETS:
      return toggleTransferStateProperty(
        transferState.threeStopTickets,
        "threeStopTickets"
      );

    default:
      return state;
  }
};
