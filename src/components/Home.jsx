import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from '../actions/userActions'


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
          <Link to="/signup"><button className='cta'>Register ⟶</button></Link>
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