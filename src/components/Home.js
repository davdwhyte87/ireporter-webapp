import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/userActions'
import style from './App.css'

class Home extends React.Component{
  render() {
    console.log(this.props)
    return (
      <div>
        <div>Hey this is the home page</div>
        <button className='button' onClick= {() => this.props.getUsers()}>
          Get users
        </button>
      </div>
     
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}
export default connect(() => mapStateToProps, { getUsers })(Home)