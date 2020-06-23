import React from "react";
import ReactDOM from "react-dom";

import { signup, login, logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");


    window.signup = signup;
    window.login = login;
    window.logout = logout;
    
  ReactDOM.render(<h1>Welcome!</h1>, root);
})