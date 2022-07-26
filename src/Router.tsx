import Home from "components/Home";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GameDetailPage from "routes/GameDetail";
import RouteChangeTracker from "RouteChangeTracker";

const AppRouter = () => {
  RouteChangeTracker();
  return (
    <Switch>
      <Route path="/game-detail/:gameId">
        <GameDetailPage />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default AppRouter;
