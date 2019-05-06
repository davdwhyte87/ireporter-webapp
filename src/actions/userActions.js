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

export const signUpUser = (userData) => {
  return async (dispatch) => {
    dispatch({
      type: 'USER_LOADING',
      payload: { loading: true }
    })
    try {
      const { data: { data } } = await axios.post('https://ireporterx.herokuapp.com/api/v1/auth/signup/', userData);
      //save token data on browser
      console.log(data)
      localStorage.setItem('token', data[0].token)
      localStorage.setItem('user', JSON.stringify(data[0].user))
      // send data to reducer
      dispatch({
        type: 'SIGNUP_USER_SUCCESS',
        payload: { loading: false, token: data.token, success: true }
      })
    } catch (e) {
      let errors;
      errors = ["An error occurred"]
      if (e.response) {
        errors = e.response.data.error
      }
      dispatch({
        type: 'SIGNUP_ERROR',
        payload: { errors: errors, loading: false }
      })
    }
  } 
}


export const signInUser = (userData) => {
  return async (dispatch) => {
    dispatch({
      type: 'USER_LOADING',
      payload: { loading: true }
    })
    try {
      const { data: { data } } = await axios.post('https://ireporterx.herokuapp.com/api/v1/auth/login/', userData);
      //save token data on browser
      console.log(data)
      localStorage.setItem('token', data[0].token)
      localStorage.setItem('user', JSON.stringify(data[0].user))
      // send data to reducer
      dispatch({
        type: 'SIGNIN_USER_SUCCESS',
        payload: { loading: false, token: data.token, success: true }
      })
    } catch (e) {
      let errors;
      errors = ["An error occurred"]
      if (e.response) {
        errors = e.response.data.error
      }
      dispatch({
        type: 'SIGNIN_ERROR',
        payload: { errors: errors, loading: false }
      })
     }
  } 
}