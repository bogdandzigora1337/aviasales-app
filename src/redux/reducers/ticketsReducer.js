import { act } from "react-dom/test-utils";
import {
  FETCH_TICKETS_FAILURE,
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
} from "../types";

const initialState = {
  data: [],
  loading: false,
  error: null,
  percentLoad: 0,
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
        data: [...state.data, action.payload.tickets],
        loading: !action.payload.stop,
        error: null,
        percentLoad: !action.payload.stop ? state.percentLoad + 6 : 100,
      };

    case FETCH_TICKETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: !!state.data.length ? null : action.payload,
      };

    default:
      return state;
  }
};
