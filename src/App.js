import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./component/Welcome";
import CreateGame from "./component/CreateGame"
import JoinGame from "./component/JoinGame"
import Wait from "./component/Wait";
import Roomcode from "./component/Roomcode"

import './App.css';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path ="/" component = {Welcome} /> 
      <Route exact path ="/CreateGame" component = {CreateGame} />
      <Route exact path ="/Roomcode" component = {Roomcode} />
      <Route exact path ="/JoinGame" component={JoinGame} />
      <Route exact path ="/Wait" component={Wait} />
    </Switch>
</Router>
  );
}

export default App;
