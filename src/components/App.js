/* eslint-disable import/no-named-as-default */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./HomePage";
import Immutability from "./Immutability";
import Mutation from "./Mutation";
import NotFoundPage from "./NotFoundPage";
import ObjectMutation from "./ObjectMutation";

// This is a class-based component because the current version of hot reloading
// won't hot reload a stateless component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/mutation">Mutation</NavLink></li>
              <li><NavLink to="/immutability">Immutability</NavLink></li>
              <li><NavLink to="/mutation-object">ObjectMutation</NavLink></li>
            </ul>
            
            
            
          </div>
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route exact path={"/mutation"} component={Mutation} />
            <Route exact path={"/mutation-object"} component={ObjectMutation} />
            <Route
              exact
              path={"/immutability"}
              component={Immutability}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
