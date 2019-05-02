import React from 'react'
import { Link } from 'react-router-dom'


const Nav = (props) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const authCheckUser = () => {
    const token = localStorage.getItem('token');
    if (!token) {
       return false;
    } else {
      return true;  
    }
  }
  const toggleNav = (e) => {
    console.log(e)
    console.log(e.target.parentElement)
    let navbar = e.target.parentElement
    if (navbar.className === 'navbar') {
        navbar.className += ' responsive';
    } else {
        navbar.className = 'navbar';
    }
  }

  const logout = (e) => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    props.history.push('/')
  }
    if(authCheckUser()) {
      return(
        <div>
          <nav className="navbar" id="navbar">
            <a href="#" onClick={() => toggleNav} className="nav-mobile">☰ iReporter</a>
            <ul id="l-nav" >
              <li><Link to="/">iReporter</Link></li>
              <li><Link to="/records">Records</Link></li>
              <li><Link to="/create">Create report</Link></li>
              <li><a href="profile.html">Profile</a></li>
            </ul>
            <ul id="r-nav">
                <li><a href="#"  onClick={() => logout()}>Logout <i className="fa fa-fw fa-sign-out"></i> </a></li>
                <li><a href="#" className="nav-name">{user.firstname} </a></li>
            </ul>
          </nav>
        </div>
      )
    } else {
      return (
        <div>
          <nav className="navbar" id="navbar">
            <a href="#" onClick={() => toggleNav()} className='nav-mobile'>☰ iReporter</a>
            <ul id="l-nav">
                <li><Link to="/">iReporter</Link></li>
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