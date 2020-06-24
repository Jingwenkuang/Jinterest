import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      age: "",
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
    <div className='form-container'>
      <div className="to-login-button">
        <Link to='/login'><button className='form-side-button'>Log in</button></Link>

        <form className='form'>
          <header>
            <img src={window.logo} alt='Jinterest Logo' className='signup-form-logo'/>
            <h1>Welcome to Jinterest</h1>
            <h3>Find new ideas to try</h3>
          </header>


            <input
              className='input'
              required 
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
      
            <input
             className='input'
              required 
              minLength='6'
              type="password"
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleInput("password")}
            />

            <input
              className='input'
              required
              type="text"
              placeholder='Age'
              value={this.state.age}
              onChange={this.handleInput("age")}
            />

          
            <button className="form-button" onClick={this.handleSubmit}>Sign up</button>
        <Link to="/login"><div className="to-other-form">Already a member? Log in</div></Link>

        </form>
      </div>
    </div>
    );
  }
}

export default SignupForm;
