import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dropDownHidden: true
    }
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleDropDown(e) {
    e.preventDefault();
    this.setState({dropDownHidden: !this.state.dropDownHidden})
  }

  render() {

    const { currentUserId, logout } = this.props;
    if (!currentUserId) return null;
    
    const dropDownHidden = this.state.dropDownHidden ? "hidden" : "" ;
    return (

        <nav className="navbar-box">

        <div className='nav-left'>
          <div className='nav-left-logo'>
            <NavLink to='/' className='nav-logo'>
              <img src={window.jinterestURL} className='nav-left-logo' />
            </NavLink>
          </div>
          {/* <div className="block">text</div> */}
            <div className="home">
              <Link to='/'>Home</Link>
            </div>
        </div>

          <div className='nav-mid'>Welcome to Jinterest</div>   

          <div className='nav-right'>
            <div className='linkedin'>
              <a href="https://www.linkedin.com/in/jingwen-wendy-kuang-169a1b52/" className="links" target="_blank">
                <i className="fa fa-linkedin-square" id="linked-icon" aria-hidden="true"></i>
              </a>
            </div>

            <div className='github'>
              <a href="https://github.com/Jingwenkuang/Jinterest" className="links" target="_blank">
                <i className="fa fa-github" id="github-icon" aria-hidden="true"></i>
              </a>
            </div>

            <div className="nav-demouser">
            <Link to={`/users/${this.props.currentUserId}`}>
                {/* <i className="fa fa-user-o" id="user-icon" aria-hidden="true"></i> */}
              <div className='nav-cat-photo'>
                <img src={window.catURL} className='nav-cat-photo' />
              </div>
            </Link>
            </div>

            <div className="logout-icon" id="options" onClick={this.handleDropDown}>
              <i className="fa fa-chevron-down" aria-hidden="true" ></i>
              <div className={`drop-down ${dropDownHidden}`}>
                <Link to="/" className="logout-tab" onClick={logout}>Log out</Link>
              </div>
            </div>

          </div>
       
        </nav>
      
    )
  }

 
}
export default NavBar;