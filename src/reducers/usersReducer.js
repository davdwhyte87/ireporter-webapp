const initialState = {
  users: [],
  user: {},
  errors: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_USERS':
      return { users: action.users }
    case 'SIGNUP_USER':
      return { user: action.user }
    case 'SIGNUP_ERROR':
      return { errors: action.errors}
    default:
      return state
  }
}