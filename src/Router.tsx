import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* <HomePage /> */}
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
