import React from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      age: "",
      errors: this.props.errors
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
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
    this.props.signup(this.state).then(null, error => {
      this.setState(this.errorsFunction())
    })
  }

  handleToggle(e) {
    e.preventDefault();
    this.props.toggleSessionModal()
  }

  errorsFunction() {
    let error = [];
      if (this.props.errors.includes("Email is invalid")) {
        error.push("Hmm...that doesn't look like an email address");
        
      } else if (this.props.errors.includes("Email has already been taken")) {
      error.push("Please use a different email.");
     
      } else if (this.props.errors.includes("Password is too short (minimum is 6 characters)")) {
      error.push("You password is too short! You need 6+ character.");
      
    } else if (this.props.errors.includes("Age can't be blank")) {
      error.push("Help us protect you by providing your age");
    
    }
    this.setState({errors: error})
  }

  emailErrors() {
    if ((this.state.errors[0]) === ("Hmm...that doesn't look like an email address")) {
      return this.state.errors;
    } else if ((this.state.errors[0]) === ("Please use a different email.")) {
      return this.state.errors;
    } else {
      return "";
    }
  }

  passwordErrors() {
    if ((this.state.errors[0]) === ("You password is too short! You need 6+ character.")) {
      return this.state.errors;
    } else {
      return "";
    }
  }

  ageErrors() {
    if ((this.state.errors[0]) === ("Help us protect you by providing your age")) {
      return this.state.errors;
    } else {
      return "";
    }
  }

  render() {
   
    return (
    <div className='form-container'>
      <div className="to-login-button">
       <button className='form-side-button' onClick={this.handleToggle}>Log in</button>
        
       <div className='form-pops'>
        <form className='form'>
          <header>
              <div className='app-logo'>
                <i className="fa fa-pinterest fa-4x" aria-hidden="true"></i>
              </div>

              <div className='form-header'>
                <h1>Welcome to Jinterest</h1>
                <h3>Find new ideas to try</h3>
              </div>
          </header>


            <input
              className='input'
              required 
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
            <div className='errors'>{this.emailErrors()}</div>
      
            <input
             className='input'
              required 
              minLength='6'
              type="password"
              placeholder='Create a password'
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
            <div className='errors'>{this.passwordErrors()}</div>

            <input
              className='input'
              required
              type="text"
              placeholder='Age'
              value={this.state.age}
              onChange={this.handleInput("age")}
            />
            <div className='errors'>{this.ageErrors()}</div>

          
            <button className="form-button" onClick={this.handleSubmit}>Sign up</button>

            <div className="form-link" onClick={() => this.props.openModal("login")}>
              <div className="to-other-form">Already a member? Log in</div>
            </div>
        </form>
        </div> 
      </div>
    </div>
    );
  }
}

export default SignupForm;
