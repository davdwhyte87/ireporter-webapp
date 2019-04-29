import axios from 'axios';

export const getRecords = () => {
  return async (dispatch) => {
    let recordsData = []
    let ok = true
    dispatch({
      type: 'LOADING',
      payload: { loading: true }
    })
    try {
      const { data: { data } } = await axios.get('https://ireporterx.herokuapp.com/api/v1/interventions/', {
        headers: {
          token: localStorage.getItem('token')
        }
      });
      const intervenData = data
      intervenData.forEach(element => {
        recordsData.push(element)
      });
    } catch(error) {
      ok = false
      let errors;
      errors = ["An error occurred"]
      if (error.response) {
        errors = error.response.data.error
      }
      dispatch({
        type: 'GET_RECORDS_ERROR',
        payload: { loading: false, success: false, errors: errors }
      })
    }
    // second api request for redflag
    try {
      const { data: { data } } = await axios.get('https://ireporterx.herokuapp.com/api/v1/red-flags/', {
        headers: {
          token: localStorage.getItem('token')
        }
      });
      const redflagData = data;
      redflagData.forEach(element => {
        recordsData.push(element)
      });
    } catch(error) {
      ok = false
      dispatch({
        type: 'GET_RECORDS_ERROR',
        payload: { loading: false, success: false, errors: error.response }
      })
    }
    if (ok) {
      dispatch({
        type: 'GET_RECORDS_SUCCESS',
        payload: { loading: false, succss: true, records: recordsData }
      })
    } 
  }
}