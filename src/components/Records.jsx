import React from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { toast } from 'react-toastify'
import { getRecords } from '../actions/recordActions'
import { Link, withRouter } from 'react-router-dom';
import Alert from './Alert'
import Record from './Record'



class Records extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getRecords()
  }
  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(this.props.errors)
    if (this.props.errors) {
      console.log('TOAST')
      toast.error('njknkjnnkjnjk')
    }
    if (this.props.loading) {
      return (
        <section className="records" id="records">
          <div className="container-center">Loading.....</div>
        </section>
        )
    } else {
      return (
        <section className="records" id="records">
          {this.props.errors? (
            <section>
             <Alert message={this.props.errors}  />
            </section>
          ) :
           ('')
          }
          {this.props.records ?
            (this.props.records.map((record, index) => <Record record={record} user={user} key={index}/>))
            : '' }
        </section>
      )
    }
  }
}

Records.propTypes = {
  getRecords: propTypes.func.isRequired
}

Records.defaultValues = {
  loading: false
}
const mapStateToProps = state => {
  return {
    errors: state.recordsReducer.errors,
    loading: state.recordsReducer.loading,
    success: state.recordsReducer.success,
    records: state.recordsReducer.records
  }
}

export default connect(() => mapStateToProps, { getRecords })(withRouter(Records))