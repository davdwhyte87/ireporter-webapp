import initialState from '../store/initialState'

export default (state = initialState, action = {}) => {
  console.log(action)
  switch (action.type) {
    case 'LOADING':
      return { loading: action.payload.loading }
    case 'GET_RECORDS_SUCCESS':
      return { loading: action.payload.loading, success: action.payload.success, records: action.payload.records}
    case 'GET_RECORDS_ERROR':
      return { loading: action.payload.loading, success: action.payload.success, errors: action.payload.errors}
    default:
      return state
  }
}