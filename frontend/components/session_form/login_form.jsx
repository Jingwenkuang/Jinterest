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
    // this.handleDemoUser = this.handleDemoUser.bind(this);
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
      email: 'demo@gmail.com',
      password: '123456'
    }
    this.props.processForm(user);
  }

  render() {
   
    return (
      <div className="login">
        <h2>Log In!</h2>
        <form className="login-form">
          <label>
            Email:
            <input
              type="text"
              placeholer='Email'
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              placeholer='Password'
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
            <button className='login-button' onClick={this.handleSubmit}>Log In!</button>
          </label>
        </form>
        <div className="signup-link">
          <Link to='/signup'>Sign up</Link>
        </div>
      </div>

    );
  }
}

export default LoginForm;
