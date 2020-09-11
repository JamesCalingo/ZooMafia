import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap"

class JoinGame extends React.Component {
render(){
  return(
    <div className="text-center container">
      <Row className="justify-content-center">
        <Col className="col-12 col-md-6">
     <Card>
       <Card.Header>
       <h1>Input the four letter code your gamemaster gave you here</h1></Card.Header>
       <Card.Body>
     <input type="text" placeholder="four letter room code"/><br />
     <Button className="btn btn-primary btn-lg mt-3" onClick={() =>{this.props.history.push("/Wait")}}> Find game</Button>
     </Card.Body>
     </Card>
     </Col>
    </Row>
      
    </div>
  )
}
}

export default JoinGame