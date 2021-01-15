import React from "react";
import "./assets/css/index.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            JSON.parse(localStorage.getItem("auth")) ? (
              <Main />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/login"
          render={() =>
            JSON.parse(localStorage.getItem("auth")) ? (
              <Redirect to="/" />
            ) : (
              <Login />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
