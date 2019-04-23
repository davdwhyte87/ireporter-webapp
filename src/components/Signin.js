import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/userActions'
import { Link, withRouter } from 'react-router-dom';
import propTypes from 'prop-types'
import '../assets/css/App.css'
import '../assets/css/Style.css'
import Nav from '../components/Nav'
import { signInUser } from '../actions/userActions'
import Alert from './Alert'

class Signin extends React.Component{
  state = {
    data: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      othernames: '',
      username: '',
      phone: '',
    },
  }
  handleSignin = (e) => {
    e.preventDefault()
    const userData = {
      email: this.state.data.email,
      password: this.state.data.password,
      firstname: this.state.data.firstname,
      othernames: this.state.data.othernames,
      lastname: this.state.data.lastname,
      username: this.state.data.username,
      phone: this.state.data.phone,
    }
    console.log(userData)
    this.props.signInUser(userData)
  }
  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
   
  };
  render() {
  console.log(this.props)
  if (this.props.success) {
    this.props.history.push('/')
  }
    const { email, password } = this.state.data;
    return (
      <div>
        <Nav />
        <section className="item2">
          <div className="container-center">
              <div className="card">
                <h2 className="text-center">Signup</h2>
                  <div className="">
                  <Alert message={this.props.errors} success={this.props.isError}  />
                    <form id="form">
                      <div id="flash"></div>
                      <div className="input-group">
                        <input type="email" name="email" onChange={this.handleChange}   className="input" required="" placeholder="Email" />
                      </div>
                      <div className="input-group">
                        <input type="password" name="password" onChange={this.handleChange}  className="input" required="" placeholder="Password" />
                      </div>
                      <div className="container-center">
                        <button type="submit"  className="btn-primary" onClick={this.handleSignin}>{ this.props.loading? 'loading...': 'Signin'}<i className="fa fa-fw fa-edit"></i></button>
                      </div>
                        <p>Already have an account? <Link to="/signup">Signup</Link></p>
                    </form>
                  </div>
              </div>
          </div>
        </section>
      </div>
    )
  }
}

Signin.propTypes = {
  signInUser: propTypes.func.isRequired
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
export default connect(() => mapStateToProps, { getUsers, signInUser })(withRouter(Signin))