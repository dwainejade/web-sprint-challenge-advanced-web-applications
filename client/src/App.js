import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <div className="link">
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/bubblepage">Bubble Page</Link>
          </div>
        </div>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/bubblepage" component={BubblePage} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
