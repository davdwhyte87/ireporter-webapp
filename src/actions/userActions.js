import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
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

export const signUpUser = (userData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('https://ireporterx.herokuapp.com/api/v1/auth/signup/', userData);
      console.log(data)
      dispatch({
        type: 'SIGNUP_USER',
        user: {}
      })
    } catch (e) {
      const errors = e.response.data.error
      dispatch({
        type: 'SIGNUP_ERROR',
        errors: errors 
      })
    }
  } 
}