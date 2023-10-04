import { FETCH_TICKETS_FAILURE, FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS } from '../types'

const initialState = {
  data: [],
  loading: false,
  error: null,
  percentLoad: 0,
}

export const ticketsReducer = (state = initialState, action) => {
  let newData
  let newPercentLoader
  let hasData
  let newError

  switch (action.type) {
    case FETCH_TICKETS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case FETCH_TICKETS_SUCCESS:
      newData = action.payload.tickets
      newPercentLoader = !action.payload.stop ? state.percentLoad + 6 : 100

      return {
        ...state,
        data: [...state.data, newData],
        loading: !action.payload.stop,
        error: null,
        percentLoad: newPercentLoader,
      }

    case FETCH_TICKETS_FAILURE:
      hasData = !!state.data.length
      newError = hasData ? null : action.payload

      return {
        ...state,
        loading: false,
        error: newError,
      }

    default:
      return state
  }
}
