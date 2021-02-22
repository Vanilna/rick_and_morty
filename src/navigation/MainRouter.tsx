import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/pages/Home";
import Characters from "src/components/pages/Characters";
import CharacterDetails from "src/components/organisms/CharacterDetails";
import Episodes from "src/components/pages/Episodes";
import EpisodeDetails from "src/components/organisms/EpisodeDetails";
import Locations from "src/components/pages/Locations";
import LocationDetails from "src/components/organisms/LocationDetails";

const MainRouter = () => (
  <Switch>
    <Route path="/character-details/:id">
      <CharacterDetails />
    </Route>
    <Route path="/characters">
      <Characters />
    </Route>
    <Route path="/episode-details/:id">
      <EpisodeDetails />
    </Route>
    <Route path="/episodes">
      <Episodes />
    </Route>
    <Route path="/location-details/:id">
      <LocationDetails />
    </Route>
    <Route path="/locations">
      <Locations />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default MainRouter;
