import React from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { toast } from 'react-toastify'
import { getRecord } from '../actions/recordActions'
import { Link, withRouter } from 'react-router-dom';
import Alert from './Alert'
import RecordView from './RecordView'

class SingleRecord extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getRecord(id)
  }
  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(this.props)
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
          {this.props.record ?
            (
              <RecordView user={user} record={this.props.record} />
            )
            : '' }
        </section>
      )
    }
  }
}

SingleRecord.propTypes = {
  getRecord: propTypes.func.isRequired
}

SingleRecord.defaultValues = {
  loading: false
}
const mapStateToProps = state => {
  return {
    errors: state.recordsReducer.errors,
    loading: state.recordsReducer.loading,
    success: state.recordsReducer.success,
    record: state.recordsReducer.record
  }
}

export default connect(() => mapStateToProps, { getRecord })(withRouter(SingleRecord))