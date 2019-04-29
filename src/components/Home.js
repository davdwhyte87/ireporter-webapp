import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/userActions'
import '../assets/css/App.css'
import '../assets/css/Style.css'
import Nav from '../components/Nav'

class Home extends React.Component{
  render() {
    console.log(this.props.users)
    return (
      <div>
        <section className='hero'>
          <div className='spx'></div>
          <div className='spx'></div>
          <div className='spx'></div>
          <div className='spx'></div>
          <h2>See something? say something.</h2>
          <a href="sign-up.html"><button className='cta'>Register ⟶</button></a>
        </section>
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