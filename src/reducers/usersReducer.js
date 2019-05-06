import initialState from '../store/initialState'
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_USERS':
      return { users: action.users }
    case 'USER_LOADING':
      return { loading: action.payload.loading }
    case 'SIGNUP_USER_SUCCESS':
      return { token: action.payload.token, loading: action.payload.loading, success: action.payload.success }
    case 'SIGNUP_ERROR':
      return { errors: action.payload.errors, loading: action.payload.loading }
    case 'SIGNIN_USER_SUCCESS':
      return { token: action.payload.token, loading: action.payload.loading, success: action.payload.success }
    case 'SIGNIN_ERROR':
      return { errors: action.payload.errors, loading: action.payload.loading }
    default:
      return state
  }
}