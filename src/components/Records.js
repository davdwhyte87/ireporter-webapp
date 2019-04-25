import React from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { getRecords } from '../actions/recordActions'
import { Link, withRouter } from 'react-router-dom';

class Records extends React.Component {
  componentDidMount() {
    this.props.getRecords()
  }
  render() {
    return (
      <section className="records" id="records">
        <div className="container-center">Loading.....</div>
      </section>
    );
  }
}

Records.propTypes = {
  getRecords: propTypes.func.isRequired
}
const mapStateToProps = state => {
  return {
    users: state.users,
    user: state.user,
    errors: state.errors,
    loading: state.loading,
    success: state.success
  }
}

export default connect(() => mapStateToProps, { getRecords })(withRouter(Records))