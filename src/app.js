import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Home from "./containers/Home";
import Layout from "./hoc/Layout";

export const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

export default withRouter(App);
