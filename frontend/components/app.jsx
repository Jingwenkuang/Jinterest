import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import NavBarContainer from './navbar/nav_bar_container';
import Modal from './modal/modal';
import HomeComponent from './home/home';
import PinIndexContainer from './pins/pin_index_container';
import PinCreateFormContainer from './pins/pin_create_form_container';
import PinShowContainer from './pins/pin_show_container';
import ProfileContainer from './profile/profile_container';
import ProfileShowContainer from './profile/profile_show_container';
import ProfileEditContainer from './profile/profile_edit_form_container';
import BoardShowContainer from './boards/board_show_container';



const App = () => (
  <div>
    <Modal />

    <header>
      <ProtectedRoute path="/" component={NavBarContainer} />
    </header>

    <Switch>
      <ProtectedRoute
        exact
        path="/:username/pins"
        component={ProfileShowContainer}
      />
      <ProtectedRoute
        exact
        path="/users/:userId"
        component={ProfileContainer}
      />
      <ProtectedRoute exact path="/pins/:pinId" component={PinShowContainer} />
      <ProtectedRoute
        exact
        path="/pin-builder"
        component={PinCreateFormContainer}
      />
      <ProtectedRoute exact path="/pins" component={PinIndexContainer} />
      <ProtectedRoute exact path="/settings" component={ProfileEditContainer} />
      <ProtectedRoute
        exact
        path="/:username/boards"
        component={ProfileShowContainer}
      />
      <ProtectedRoute
        exact
        path="/boards/:boardId"
        component={BoardShowContainer}
      />
      <AuthRoute exact path="/" component={HomeComponent} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;