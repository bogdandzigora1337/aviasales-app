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

export function moreTickets(numOpenings) {
  return { type: MORE_TICKETS, payload: numOpenings };
}

export function cheapTicket() {
  return (dispatch) => {
    dispatch({ type: FILTER_CHEAP_TICKET });
    dispatch(moreTickets(0));
  };
}

export function fastTicket() {
  return (dispatch) => {
    dispatch({ type: FILTER_FAST_TICKET });
    dispatch(moreTickets(0));
  };
}

export function allTickets(data) {
  return { type: CHECKBOX_ALL_TICKETS, payload: data };
}

export function toggleCheckbox(checkboxType, data) {
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

  return { type: actionType, payload: data };
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
      .then((data) => {
        const ticketsSort = data.tickets.sort((a, b) => a.price - b.price);
        return dispatch(getTicketSuccess({ ...data, tickets: ticketsSort }));
      })
      .catch((error) => dispatch(getTicketFailure(error.message)));
  };
};
