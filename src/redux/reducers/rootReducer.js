import { combineReducers } from 'redux'

import { checkboxReducer } from './checkboxReducer'
import { userIdReducer } from './userIdReducer'
import { ticketsReducer } from './ticketsReducer'
import { moreTicketsReducer } from './moreTicketsReducer'

export const rootReducer = combineReducers({
  checkboxReducer,
  userIdReducer,
  ticketsReducer,
  moreTicketsReducer,
})
