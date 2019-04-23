const initialState = {
  users: [],
  user: {},
  errors: [],
  token: null,
  loading: false,
  success: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_USERS':
      return { users: action.users }
    case 'LOADING':
      return { loading: action.payload.loading }
    case 'SIGNUP_USER':
      return { token: action.payload.token, loading: action.payload.loading, success: action.payload.success }
    case 'SIGNUP_ERROR':
      return { errors: action.payload.errors, loading: action.payload.loading }
    case 'SIGNIN_USER':
      return { token: action.payload.token, loading: action.payload.loading, success: action.payload.success }
    case 'SIGNIN_ERROR':
      return { errors: action.payload.errors, loading: action.payload.loading }
    default:
      return state
  }
}