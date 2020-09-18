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
    this.handleErrors = this.handleErrors.bind(this);
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

  handleErrors() {
    if (this.props.errors.includes('Invalid email or password')) {
    return (
      <div className='render-errors'>
        <div className="errors">You missed a spot! Try again.</div>
      </div>
    )}

    return (
      <div className="render-errors">
      </div>
    )
  }

  render() {
   
    return (
    
    <div className='form-container'>

        <button className='form-side-button' onClick={() => this.props.openModal('signup')}>Sign up</button>

      <div className="to-signup-button">
        
        <div className='form-pops'>
        <div className='form-box'>
        <form className="form">
         <header>
                <div className='app-logo'>
                  <img src={window.jinterestURL} className='jinterest-logo' />
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
           
            <input
              className='input'
              required
              type="password"
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
                {this.handleErrors()}
           
            <button className='form-button' onClick={this.handleSubmit}>Log in</button>
            <button className='demo-login' onClick={this.handleDemoUser} >Demo Login</button>

        <div className="form-link" onClick={() => this.props.openModal('signup')}>

           <div className='to-other-form'>Not on Jinterest yet? Sign up</div>
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
