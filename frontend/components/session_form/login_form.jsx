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
    <div className='form-container'>
      <div className="to-signup-button">
        <Link to='/signup'><button className='form-side-button'>Sign up</button></Link>
        
        <div className='form-box'>
        <form className="form">
          <header>
            {/* <img src={window.logo} alt='Jinterest Logo' className='login-form-logo'/> */}
              <h1>Welcome to Jinterest</h1>
          </header>

            <input
              className='input'
              required
              type="text"
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleInput("email")}
            />

            <input
              className='input'
              required
              type="password"
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
            <button className='form-button' onClick={this.handleSubmit}>Log in</button>
            <button className='demo-login' onClick={this.handleDemoUser} >Demo Login</button>
        <div className="signup-link">
            <Link to='/signup'><div className='to-other-form'>Not on Jinterest yet? Sign up</div></Link>
        </div>
        </form>
        </div>
      </div>
    </div>
    );
  }
}

export default LoginForm;
