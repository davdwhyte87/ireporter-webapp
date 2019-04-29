import { combineReducers } from 'redux'
import recordsReducer from './recordsReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  recordsReducer,
  usersReducer
})