import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Videocall from "./pages/Videocall";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/details" component={Details} />
        <Route path="/videocall" component={Videocall} />
      </Switch>
    </BrowserRouter>
  );
}
