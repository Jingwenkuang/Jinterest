import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUserId, logout } = this.props;
    return (
      <div className="navbar-container">

        <nav className="navbar-box">

          <NavLink to='/' className='nav-logo'>
            <i class="fa fa-pinterest fa-2x" aria-hidden="true"></i>
          </NavLink>

            <div className="home">
              <Link to='/'>Home</Link>
            </div>
        
          <div className='nav-mid'>Welcome to Jinterest</div>   
              <a href="https://www.linkedin.com/in/jingwen-wendy-kuang-169a1b52/" className="links" target="_blank">
                <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
              </a>
        
              <a href="https://github.com/Jingwenkuang/Jinterest" className="links" target="_blank">
                <i className="fa fa-github fa-2x" aria-hidden="true"></i>
              </a>
            
            <div className="nav-demouser">
              <Link to='/'>demoUser</Link>
            </div>
            <div className="logout-icon" id="options">
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
              <div className="drop-down">
                <Link to="/" className="logout-tab" onClick={logout}>Log out</Link>
              </div>
            </div>
        </nav>
        <div className='nav-end'></div>
      </div>
    )
  }

 
}
export default NavBar;