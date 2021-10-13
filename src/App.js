import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
         <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
