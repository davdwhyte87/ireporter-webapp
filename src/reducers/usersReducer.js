const initialState = {
  users: []
}

export default (state = initialState, action = {}) => {
  console.log(action)
  switch (action.type) {
    case 'GET_USERS':
      return { users: action.users }
    default:
      return state

  }
}