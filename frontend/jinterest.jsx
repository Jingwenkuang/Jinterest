import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import {fetchAllUsers, fetchUser} from './actions/user_actions'

import { signup, login, logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
   
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.fetchAllUsers = fetchAllUsers;
    window.fetchUser = fetchUser;

  ReactDOM.render(<Root store={store}/>, root);
})