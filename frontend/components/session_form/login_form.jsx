import React from "react";
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  handleDemoUser(e) {
    e.preventDefault();
    const user = {
      'email': 'land@gmail.com',
      'password': '123456'
    }
    this.props.login(user);
  }

  render() {
   
    return (
      <div className="to-signup-button">
        <Link to='/signup'><button className='signup-side-button'>Sign up</button></Link>
        <form className="login-form">
          <header>
            <img src={window.logo} alt='Jinterest Logo' className='login-form-logo'/>
              <h1>Welcome to Jinterest</h1>
          </header>
          
            <input
              required
              type="text"
              placeholer='Email'
              value={this.state.email}
              onChange={this.handleInput("email")}
            />

            <input
              required
              type="password"
              placeholer='Password'
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
            <button className='login-button' onClick={this.handleSubmit}>Log in</button>
            <button className='demo-login' onClick={this.handleDemoUser} >Demo Login</button>
        <div className="signup-link">
            <Link to='/signup'><div className='to-other-form'>Not on Jinterest yet? Sign up</div></Link>
        </div>
        </form>
      </div>

    );
  }
}

export default LoginForm;
