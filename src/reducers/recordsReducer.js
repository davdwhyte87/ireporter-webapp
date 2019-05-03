import initialState from '../store/initialState'
 
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOADING':
      return { loading: action.payload.loading }
    case 'RECORDS_SUCCESS':
      return { loading: action.payload.loading, success: action.payload.success, records: action.payload.records}
    case 'RECORDS_ERROR':
      return { loading: action.payload.loading, success: action.payload.success, errors: action.payload.errors}
    case 'RECORD_SUCCESS':
      return { loading: action.payload.loading, success: action.payload.success, record: action.payload.record }
    default:
      return state
  }
}