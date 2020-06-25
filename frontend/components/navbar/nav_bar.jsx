import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUserId, logout } = this.props;
    return (

        <nav className="navbar-box">

        <div className='nav-left'>
          <NavLink to='/' className='nav-logo'>
            <i className="fa fa-pinterest fa-2x" aria-hidden="true"></i>
          </NavLink>

            <div className="home">
              <Link to='/'>Home</Link>
            </div>
        </div>

          <div className='nav-mid'>Welcome to Jinterest</div>   

          <div className='nav-right'>
            <div className='linkedin'>
              <a href="https://www.linkedin.com/in/jingwen-wendy-kuang-169a1b52/" className="links" target="_blank">
                <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
              </a>
            </div>

            <div className='github'>
              <a href="https://github.com/Jingwenkuang/Jinterest" className="links" target="_blank">
                <i className="fa fa-github fa-2x" aria-hidden="true"></i>
              </a>
            </div>

            <div className="nav-demouser">
              <Link to='/'>
                <i className="fa fa-user-o fa-2x" aria-hidden="true"></i>
              </Link>
            </div>

            <div className="logout-icon" id="options">
              <i className="fa fa-chevron-down" aria-hidden="true" 
                  onClick={e=>{console.log(e)}}></i>
              <div className="drop-down">
                <Link to="/" className="logout-tab" onClick={logout}>Log out</Link>
              </div>
            </div>
          </div>
       
        </nav>
      
    )
  }

 
}
export default NavBar;