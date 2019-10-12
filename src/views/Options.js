import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import routes from "../routes";

const Options = () => {
  return (
    <div>
      {routes.map((route, index) => (
        <div key={index}>
          <Link to={route.path}>{route.name}</Link>
          <Route
            path={route.path}
            exact={route.exact}
            component={route.options}
          />
        </div>
      ))}
    </div>
  );
};

export default Options;
