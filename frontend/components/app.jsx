import React from 'react';
import signupFormContainer from './session_form/signup_form_container';
import loginFormContainer from './session_form/login_form_container';
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import NavBarContainer from './navbar/nav_bar_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal/>

    <header>
      <Route path="/" component={NavBarContainer} />
    </header>

    <Switch>
      {/* <AuthRoute exact path="/login" component={loginFormContainer}/>
      <AuthRoute exact path="/signup" component={signupFormContainer}/> */}
      {/* <Route path="/" component={loginFormContainer} /> */}
     <Redirect to='/'/>
    </Switch>
     
  </div>
);

export default App;