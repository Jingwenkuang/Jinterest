import React from 'react';
import signupFormContainer from './session_form/signup_form_container';
import loginFormContainer from './session_form/login_form_container';
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <header>
      {/* <h1>Welcome to Jinterest</h1> */}
    </header>

    <Route path="/login" component={loginFormContainer}/>
    <Route path="/signup" component={signupFormContainer}/>
  </div>
);

export default App; 