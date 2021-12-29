import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from './pages/dashboard'

const AppRouter = () => {
    
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/plus/quiz" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
  
}


export default AppRouter;