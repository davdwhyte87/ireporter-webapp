import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class Nav extends React.Component{
  authCheckUser() {
    const token = localStorage.getItem('token');
    if (!token) {
       return false;
    } else {
      return true;  
    }
  }
  toggleNav (e) {
    console.log(e.target.parentElement)
    let navbar = e.target.parentElement
    if (navbar.className === 'navbar') {
        navbar.className += ' responsive';
    } else {
        navbar.className = 'navbar';
    }
  }

  logout(e) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.props.history.push('/')
  }
  render() {
    if(this.authCheckUser()) {
      const user = JSON.parse(localStorage.getItem('user'));
      return(
        <div>
          <nav className="navbar" id="navbar">
            <a href="#" onClick={this.toggleNav} className="nav-mobile">☰ menu</a>
            <ul id="l-nav" >
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/records">Records</Link></li>
                <li><a href="create-record.html">Create report</a></li>
                <li><a href="profile.html">Profile</a></li>
            </ul>
            <ul id="r-nav">
                <li><a href="#"  onClick={this.logout}>Logout <i className="fa fa-fw fa-sign-out"></i> </a></li>
                <li><a href="#" className="nav-name">{user.firstname} </a></li>
            </ul>
          </nav>
        </div>
      )
    }
    return (
      <div>
        <nav className="navbar" id="navbar">
          <a href="#" onClick={this.toggleNav} className='nav-mobile'>☰ menu</a>
          <ul id="l-nav">
              <li><Link className="active" to="/">Home</Link></li>
              <li><Link to="/signin">Signin</Link></li>
              <li><Link to="/signup">Signup</Link></li>
          </ul>
          <ul id="r-nav">
          </ul>  
        </nav>
      </div>
    )
  }
}

export default Nav