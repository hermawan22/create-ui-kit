import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Options from "./views/Options";
import Results from "./views/Results";
import { Route } from "react-router-dom";
import routes from "./routes";
import "./app.scss";

const App = () => {
  const renderRouteName = () => {
    return routes.map(route => {
      return (
        <Route
          path={route.path}
          exact={route.exact}
          component={() => route.name}
        />
      );
    });
  };
  
  return (
    <Router>
      <div class="container">
        <div class="flex-grid">
          <aside class="col sidebar">
            <h2>Components</h2>
            <p>
              <Options />
            </p>
          </aside>
          <section class="col main">
            <h2>{renderRouteName()}</h2>
            <Results />
          </section>
        </div>
      </div>
    </Router>
  );
};

export default App;
