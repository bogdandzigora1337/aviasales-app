import {
  FILTER_CHEAP_TICKET,
  FILTER_FAST_TICKET,
  CHECKBOX_ALL_TICKETS,
  CHECKBOX_NON_STOP_TICKETS,
  CHECKBOX_ONE_STOP_TICKETS,
  CHECKBOX_TWO_STOP_TICKETS,
  CHECKBOX_THREE_STOP_TICKETS,
} from "./types";

export function cheapTicket() {
  return { type: FILTER_CHEAP_TICKET };
}

export function fastTicket() {
  return { type: FILTER_FAST_TICKET };
}

export function allTickets() {
  return { type: CHECKBOX_ALL_TICKETS };
}

export function toggleCheckbox(checkboxType) {
  let actionType;

  switch (checkboxType) {
    case "nonStop":
      actionType = CHECKBOX_NON_STOP_TICKETS;
      break;
    case "oneStop":
      actionType = CHECKBOX_ONE_STOP_TICKETS;
      break;
    case "twoStop":
      actionType = CHECKBOX_TWO_STOP_TICKETS;
      break;
    case "threeStop":
      actionType = CHECKBOX_THREE_STOP_TICKETS;
      break;
    default:
      throw new Error("Неизвестный тип чекбокса");
  }

  return { type: actionType };
}
