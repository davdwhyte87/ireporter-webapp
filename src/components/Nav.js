import React from 'react'
import ReactDOM from 'react-dom'

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
  render() {
    if(this.authCheckUser()) {
      const user = JSON.parse(localStorage.getItem('user'));
      return(
        <div>
          <a href="#" onClick={toggleNav()} className="nav-mobile">☰ menu</a>
          <ul itemID="l-nav" >
              <li><a class="active" href="index.html">Home</a></li>
              <li><a href="records.html">Records</a></li>
              <li><a href="create-record.html">Create report</a></li>
              <li><a href="profile.html">Profile</a></li>
          </ul>
          <ul id="r-nav">
              <li><a href="#"  onclick="logout()">Logout <i class="fa fa-fw fa-sign-out"></i> </a></li>
              <li><a href="#" class="nav-name">{user.firstname} </a></li>
          </ul>
        </div>
      )
    }
    return (
      <div>
        <nav className="navbar" id="navbar">
          <a href="#" onClick={this.toggleNav} className='nav-mobile'>☰ menu</a>
          <ul id="l-nav">
              <li><a className="active" href="index.html">Home</a></li>
              <li><a href="sign-in.html">Signin</a></li>
              <li><a href="sign-up.html">Signup</a></li>
          </ul>
          <ul id="r-nav">
          </ul>  
        </nav>
      </div>
    )
  }
}

export default Nav