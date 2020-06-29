import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import {fetchAllUsers, fetchUser} from './actions/user_actions';
import { signup, login, logout } from "./actions/session_actions";
import { fetchAllPins, fetchPin, createPin, updatePin, deletePin } from './util/pin_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // const store = configureStore();
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id },
      ui: {modal: null}
    };
  
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
 
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.fetchAllUsers = fetchAllUsers;
    window.fetchUser = fetchUser;
    // window.currentUser = currentUser;
    window.fetchAllPins = fetchAllPins;
    window.fetchPin = fetchPin;
    window.createPin = createPin;
    window.updatePin = updatePin;
    window.deletePin = deletePin;
    
  ReactDOM.render(<Root store={store}/>, root);
})