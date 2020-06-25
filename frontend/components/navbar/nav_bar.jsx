import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const {currentUserId, logout} = this.props; 
    return (
      <div className="navbar-container">
        <nav className="navbar-box">
          <div className="navbar-logo">
            {/* <Link to="/"><img src={window.logo} alt="Jinterest Logo" className="logo"/> */}
            {/* </Link> */}
          </div>

          <div className="home">
            <Link to='/'>Home</Link>
          </div>

          <div className='Jinterest'>Welcome to Jinterest</div>
          <div className="navbar-links">
            <a href="https://www.linkedin.com/in/jingwen-wendy-kuang-169a1b52/" className="links" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/Jingwenkuang/Jinterest" className="links" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>

            <div className="logout-icon" id="options">
              <Link to="/" className="logout-tab" onClick={logout}>
                <div>

                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
              </Link>
            </div>
         
            
          </div>
        </nav>

      </div>
    )
  }
}
export default NavBar;