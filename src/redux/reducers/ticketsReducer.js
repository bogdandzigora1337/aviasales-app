import {
  FETCH_TICKETS_FAILURE,
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
} from "../types";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case FETCH_TICKETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
