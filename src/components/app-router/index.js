import { CITIES, CITY, HOME } from "../../data/constants";

import Cities from "../../pages/cities";
import City from "../../pages/city";
import Error404 from "../../pages/error";
import Home from "../../pages/home";
import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

export const PageSwitch = ({ cities }) => (
  <Switch>
    <Route exact path={HOME}>
      <Home />
    </Route>
    <Route exact path={CITIES}>
      <Cities cities={cities} />
    </Route>
    <Route exact path={CITY}>
      <City cities={cities} />
    </Route>
    <Route component={Error404} />
  </Switch>
);
