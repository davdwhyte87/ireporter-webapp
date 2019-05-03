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
        type: 'RECORDS_ERROR',
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
        type: 'RECORDS_ERROR',
        payload: { loading: false, success: false, errors: error.response }
      })
    }
    if (ok) {
      dispatch({
        type: 'RECORDS_SUCCESS',
        payload: { loading: false, succss: true, records: recordsData }
      })
    } 
  }
}

export const createRecord = (userData) => {
  return async (dispatch) => {
    dispatch({
      type: 'LOADING',
      payload: { loading: true }
    })
    try {
      localStorage.removeItem('record-image')
      let url = 'https://ireporterx.herokuapp.com/api/v1/interventions/'
      if (userData.type == "intervention") {
        url = 'https://ireporterx.herokuapp.com/api/v1/interventions/'
      } else {
        url = 'https://ireporterx.herokuapp.com/api/v1/red-flags'
      }
      const { data: { data } } = await axios.post(url, userData, {
        headers: {
          token: localStorage.getItem('token')
        }
      });
      dispatch({
        type: 'RECORDS_SUCCESS',
        payload: { loading: false, success: true, records: null }
      })
    } catch (e) {
      let errors;
      errors = ["An error occurred"]
      if (e.response) {
        errors = e.response.data.error
      }
      dispatch({
        type: 'RECORDS_ERROR',
        payload: { errors: errors, loading: false }
      })
    }
  }
}

export const getRecord = (id) => {
  return async (dispatch) => {
    dispatch({
      type: 'LOADING',
      payload: { loading: true }
    })
    try {
      const { data: { data } } = await axios.get('https://ireporterx.herokuapp.com/api/v1/interventions/'+id, {
        headers: {
          token: localStorage.getItem('token')
        }
      });
      console.log(data[0] )
      dispatch({
        type: 'RECORD_SUCCESS',
        payload: { loading: false, success: true, record: data[0] }
      })
    } catch(error) {
      let errors;
      errors = ["An error occurred"]
      if (error.response) {
        errors = error.response.data.error
      }
      dispatch({
        type: 'RECORDS_ERROR',
        payload: { errors: errors, loading: false }
      })
    }
  }
}