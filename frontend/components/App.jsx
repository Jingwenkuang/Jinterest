import React from 'react';
import signupFormContainer from './session_form/signup_form_container';
import loginFormContainer from './session_form/login_form_container';
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
      {/* <h1>Welcome to Jinterest</h1> */}
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={loginFormContainer}/>
      <AuthRoute exact path="/signup" component={signupFormContainer}/>
      <Route path='/' component={loginFormContainer} />
    </Switch>
  </div>
);

export default App;