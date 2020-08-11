import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCard/TinderCards";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <TinderCards />
          </Route>
          <Route exact path="/chat">
            <h1>chat</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
