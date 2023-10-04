import {
  CHECKBOX_ALL_TICKETS,
  CHECKBOX_NON_STOP_TICKETS,
  CHECKBOX_ONE_STOP_TICKETS,
  CHECKBOX_TWO_STOP_TICKETS,
  CHECKBOX_THREE_STOP_TICKETS,
  FILTER_CHEAP_TICKET,
  FILTER_FAST_TICKET,
} from '../types'

const initialState = {
  data: [],
  filter: 'cheapest',

  transferAllTicket: false,
  transferState: {
    nonStopTickets: false,
    oneStopTickets: false,
    twoStopTickets: false,
    threeStopTickets: false,
  },
}

export const checkboxReducer = (state = initialState, action) => {
  const { data, transferAllTicket, transferState } = state
  const { type, payload } = action

  switch (type) {
    case CHECKBOX_ALL_TICKETS:
      const isAllTicketsChecked = !transferAllTicket
      const transferStateCopy = {}

      for (const key in transferState) {
        transferStateCopy[key] = isAllTicketsChecked
      }

      return {
        ...state,
        data: isAllTicketsChecked ? payload || [] : [],
        transferAllTicket: isAllTicketsChecked,
        transferState: { ...transferStateCopy },
      }

    case CHECKBOX_NON_STOP_TICKETS:
      return toggleTransferStateProperty(state, 'nonStopTickets', 0, payload)

    case CHECKBOX_ONE_STOP_TICKETS:
      return toggleTransferStateProperty(state, 'oneStopTickets', 1, payload)

    case CHECKBOX_TWO_STOP_TICKETS:
      return toggleTransferStateProperty(state, 'twoStopTickets', 2, payload)

    case CHECKBOX_THREE_STOP_TICKETS:
      return toggleTransferStateProperty(state, 'threeStopTickets', 3, payload)

    case FILTER_CHEAP_TICKET:
      const sorterCheapTickets = data.length ? sortDataByPrice(data) : []

      return {
        ...state,
        data: sorterCheapTickets,
        filter: 'cheapest',
      }

    case FILTER_FAST_TICKET:
      const sorterFastTickets = data.length ? sortDataByDuration(data) : []

      return {
        ...state,
        data: sorterFastTickets,
        filter: 'fastest',
      }

    default:
      return state
  }
}

const sortDataByPrice = (data) => {
  return [...data].sort((a, b) => a.price - b.price)
}

const sortDataByDuration = (data) => {
  return [...data].sort((a, b) => a.segments[0].duration - b.segments[0].duration)
}

const filterTicketsByTransfers = (payload, numTransfers) => {
  if (!payload) {
    return []
  }
  return payload.filter((ticket) => {
    const transfersThere = ticket.segments[0].stops.length
    const transfersBack = ticket.segments[1].stops.length
    return numTransfers === 0
      ? transfersThere === numTransfers && transfersBack === numTransfers
      : transfersThere === numTransfers || transfersBack === numTransfers
  })
}

const toggleTransferStateProperty = (state, key, numTransfers, payload) => {
  const { data, transferState } = state

  const updateTransferState = { ...transferState, [key]: !transferState[key] }
  const updateTransferAllTicket = Object.values(updateTransferState).every((res) => res === true)

  const filteredTickets = filterTicketsByTransfers(payload, numTransfers)
  const filteredData = !transferState[key]
    ? [...new Set([...data, ...filteredTickets])]
    : data.filter((item) => !filteredTickets.includes(item))

  return {
    ...state,
    data: filteredData,
    transferAllTicket: updateTransferAllTicket,
    transferState: updateTransferState,
  }
}
