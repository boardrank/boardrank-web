import Home from "components/Home";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GameDetailPage from "routes/GameDetail";
import HomePage from "routes/Home";
import styled from "styled-components";

const AppRouter = () => {
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
