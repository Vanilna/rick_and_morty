import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/pages/Home";
import Characters from "src/components/pages/Characters";
import CharacterDetails from "src/components/molecules/CharacterDetails";

const MainRouter = () => (
  <Switch>
    <Route path="/character-details/:id">
      <CharacterDetails />
    </Route>
    <Route path="/characters">
      <Characters />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default MainRouter;
