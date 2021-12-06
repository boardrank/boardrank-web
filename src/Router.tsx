import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GameDetailPage from "routes/GameDetail";
import HomePage from "routes/Home";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/game-detail/:gameId">
          <GameDetailPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
