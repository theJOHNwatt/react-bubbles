import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/protected' component={BubblePage}/>
        <Route component={Login} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
