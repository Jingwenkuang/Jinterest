import React from 'react';
import signupFormContainer from './session_form/signup_form_container';
import loginFormContainer from './session_form/login_form_container';
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import NavBarContainer from './navbar/nav_bar_container';
import Modal from './modal/modal';
import HomeComponent from './home/home';
import PinIndexContainer from './pins/pin_index_container';
import PinCreateFormContainer from './pins/pin_create_form_container';
import PinShowContainer from './pins/pin_show_container';



const App = () => (
  <div>
    <Modal/>


    <header>
      <NavBarContainer/>
    </header>

    <Switch>
     {/* <AuthRoute exact path="/login" component={loginFormContainer}/> 
      <AuthRoute exact path="/signup" component={signupFormContainer}/>  */}
    {/* <Route path="/" component={loginFormContainer} />  */}

     {/* <Route exact path='/' component={PinIndexContainer} /> */}
     {/* <Route exact path='/' component={HomeComponent} /> */}
      <ProtectedRoute exect path='/pins/:id' component={PinShowContainer}/>
      <ProtectedRoute exact path='/pin-builder' component={PinCreateFormContainer}/>
      <ProtectedRoute exact path='/' component={PinIndexContainer}/>
     <Redirect to='/'/>
    </Switch>
     
  </div>
);

export default App;