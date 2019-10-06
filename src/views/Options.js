import React, { Component } from "react";
import { Route } from "react-router-dom";
import routes from "../routes";

class Options extends Component {
  render() {
    return (
      <div>
        {routes.map((route, index) => (
          <div key={index}>
            <div>{route.path}</div>
            <Route
              path={route.path}
              exact={route.exact}
              component={route.options}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Options;
