import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron"

function Welcome () {
  return(
    <div className = "text-center">
      <Jumbotron className="display-3">Welcome to Zoom Mafia!</Jumbotron>

      <p className ="mb-3">Please select one of the following options. If you are the person creating the game, go to "Create game". If you are joining someone else's game, use "Join game".</p>

      <Button className="btn btn-lg btn-success mr-3">Create game</Button>
      <Button className="btn btn-lg btn-info ml-3">Join game</Button>
    </div>
  )
}

export default Welcome