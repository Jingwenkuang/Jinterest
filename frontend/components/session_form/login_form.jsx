import React from "react";
import {Link} from 'react-router-dom';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: this.props.errors
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
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
    const user = Object.assign({}, this.state);
    this.props.login(user)
      .then(null, (error) => {this.setState(this.errorsFunction())})
   
  }

  handleDemoUser(e) {
    e.preventDefault();
    const user = {
      'email': 'land@gmail.com',
      'password': '123456'
    }
    this.props.login(user)
      .then(this.props.closeModal);
  }

  handleToggle(e) {
    e.preventDefault();
    this.props.toggleSessionModal()
  }

  errorsFunction() {
    let error = [];
    if (this.props.errors.includes("Invalid email or password")) {
      error.push("Invalid email or password");

    // } else if (this.props.errors.includes("Invalid email or password")) {
    //   error.push("The password you entered is incorrect.");
    }
    this.setState({ errors: error })
  }

  emailErrors() {
    if ((this.state.errors[0]) === ("Invalid email or password")) {
      return this.state.errors;
    } else {
      return "";
    }
  }

  // passwordErrors() {
  //   if ((this.state.errors[0]) === ("The password you entered is incorrect.")) {
  //     return this.state.errors;
  //   } else {
  //     return "";
  //   }
  // }

  render() {
   
    return (
    
    <div className='form-container'>

        <button className='form-side-button' onClick={this.handleToggle}>Sign up</button>

      <div className="to-signup-button">
        
        <div className='form-pops'>
        <div className='form-box'>
        <form className="form">
         <header>
                <div className='app-logo'>
                  <i className="fa fa-pinterest fa-4x" aria-hidden="true"></i>
                </div>

                <div className='form-header'><h1>Welcome to Jinterest</h1></div>  
          </header>

            <input
              className='input'
              required
              type="text"
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
                {/* <div className='errors'>{this.emailErrors()}</div> */}
            <input
              className='input'
              required
              type="password"
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
              <div className='errors'>{this.emailErrors()}</div>

            <button className='form-button' onClick={this.handleSubmit}>Log in</button>
            <button className='demo-login' onClick={this.handleDemoUser} >Demo Login</button>
        <div className="signup-link">
            <Link to='/signup'><div className='to-other-form'>Not on Jinterest yet? Sign up</div></Link>
        </div>
        </form>
        </div>

        </div>
      </div>
    </div>

  
    );
  }
}

export default LoginForm;
