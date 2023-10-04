import { FETCH_TICKETS_FAILURE, FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS } from '../types'

const initialState = {
  data: [],
  loading: false,
  error: null,
  percentLoad: 0,
}

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case FETCH_TICKETS_SUCCESS:
      const newData = action.payload.tickets
      const newPercentLoader = !action.payload.stop ? state.percentLoad + 6 : 100

      return {
        ...state,
        data: [...state.data, newData],
        loading: !action.payload.stop,
        error: null,
        percentLoad: newPercentLoader,
      }

    case FETCH_TICKETS_FAILURE:
      const hasData = !!state.data.length
      const newError = hasData ? null : action.payload

      return {
        ...state,
        loading: false,
        error: newError,
      }

    default:
      return state
  }
}
