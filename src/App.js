import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./component/Welcome";
import CreateGame from "./component/Create"
import JoinGame from "./component/Join"
import Wait from "./component/Wait";

import './App.css';

function App() {
  return (
    <div>
   <Welcome />
   <CreateGame />
   <JoinGame />
<Wait />
</div>
  );
}

export default App;
