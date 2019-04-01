import axios from 'axios'

export const getUsers = () => {
  return async (dispatch) => {
    try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
      type: 'GET_USERS',
      users: data
    })
  } catch(e) {
    console.log(e)
  }
  }
 
}