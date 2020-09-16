import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownHidden: true,
    };
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  handleDropDown(e) {
    e.preventDefault();
    this.setState({ dropDownHidden: !this.state.dropDownHidden });
  }

  render() {
    const { currentUserId, user, logout } = this.props;
    const displayName = user.username
      ? this.props.user.username
      : this.props.user.email.slice(0, user.email.indexOf("@"));

    const profilePhoto = user.profileUrl ? (
      <img src={this.props.user.profileUrl} className="nav-cat-photo" />
    ) : (
      <i className="fa fa-user-circle" id="demo-icon"></i>
    );

    if (!currentUserId) return null;

    const dropDownHidden = this.state.dropDownHidden ? "hidden" : "";
    return (
      <nav className="navbar-box">
        <div className="nav-left">
          <div className="nav-left-logo">
            <NavLink to="/" className="nav-logo">
              <img src={window.jinterestURL} className="nav-left-logo" />
            </NavLink>
          </div>

          <div className="home">
            <Link to="/">Home</Link>
          </div>
        </div>

        <div className="nav-mid">Welcome to Jinterest</div>

        <div className="nav-right">
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/jingwen-wendy-kuang-169a1b52/"
              className="links"
              target="_blank"
            >
              <i
                className="fa fa-linkedin-square"
                id="linked-icon"
                aria-hidden="true"
              ></i>
            </a>
          </div>

          <div className="github">
            <a
              href="https://github.com/Jingwenkuang/Jinterest"
              className="links"
              target="_blank"
            >
              <i
                className="fa fa-github"
                id="github-icon"
                aria-hidden="true"
              ></i>
            </a>
          </div>

          <div className="nav-demouser">
            {/* <Link to={`/${this.props.user.username}/boards`}> */}
            <Link to={`${displayName}/boards`}>
              <div className="nav-cat-photo">
                {profilePhoto}
                {/* <img src={this.props.user.profileUrl} className='nav-cat-photo' /> */}
              </div>
            </Link>
          </div>

          <div
            className="logout-icon"
            id="options"
            onClick={this.handleDropDown}
          >
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            <div className={`drop-down-tab ${dropDownHidden}`}>
              <Link to="/" className="logout-tab" onClick={logout}>
                Log out
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;