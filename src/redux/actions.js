import {
  FILTER_CHEAP_TICKET,
  FILTER_FAST_TICKET,
  CHECKBOX_ALL_TICKETS,
  CHECKBOX_NON_STOP_TICKETS,
  CHECKBOX_ONE_STOP_TICKETS,
  CHECKBOX_TWO_STOP_TICKETS,
  CHECKBOX_THREE_STOP_TICKETS,
  FETCH_USER_ID_FAILURE,
  FETCH_USER_ID_REQUEST,
  FETCH_USER_ID_SUCCESS,
  FETCH_TICKETS_FAILURE,
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  MORE_TICKETS,
} from "./types";

export function moreTickets() {
  return { type: MORE_TICKETS };
}

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

export const getUserIdRequest = () => ({
  type: FETCH_USER_ID_REQUEST,
});

export const getUserIdSuccess = (userId) => ({
  type: FETCH_USER_ID_SUCCESS,
  payload: userId,
});

export const getUserIdFailure = (error) => ({
  type: FETCH_USER_ID_FAILURE,
  payload: error,
});

export const getTicketRequest = () => ({
  type: FETCH_TICKETS_REQUEST,
});
export const getTicketSuccess = (data) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: data,
});
export const getTicketFailure = (error) => ({
  type: FETCH_TICKETS_FAILURE,
  payload: error,
});

export const getUserId = () => {
  return function (dispatch) {
    dispatch(getUserIdRequest());

    fetch("https://aviasales-test-api.kata.academy/search")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.searchId) {
          dispatch(getUserIdSuccess(data.searchId));
          dispatch(getTickets(data.searchId));
        } else {
          throw new Error("Invalid data received from the server");
        }
      })
      .catch((error) => dispatch(getUserIdFailure(error)));
  };
};

export const getTickets = (userId) => {
  return function (dispatch) {
    dispatch(getTicketRequest());

    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => dispatch(getTicketSuccess(data)))
      .catch((error) => dispatch(getTicketFailure(error.message)));
  };
};
