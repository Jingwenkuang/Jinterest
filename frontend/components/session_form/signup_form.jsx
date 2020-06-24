import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.signup(this.state)
  }

  render() {
 
    return (
      <div className="signup-form">
        <h2>Sign Up!</h2>
        {this.props.errors}
        <form>
          <label>
            Email:
            <input
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
            <button className="signup-form" onClick={this.handleSubmit}>Sign Up!</button>
          </label>
        </form>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default SignupForm;
