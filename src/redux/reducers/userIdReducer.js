import {
  FETCH_USER_ID_FAILURE,
  FETCH_USER_ID_REQUEST,
  FETCH_USER_ID_SUCCESS,
} from "../types";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_ID_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case FETCH_USER_ID_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
