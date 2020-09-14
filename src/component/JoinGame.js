import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

class JoinGame extends React.Component {
  render () {
    return (
      <div className='text-center container'>
        <Row className='justify-content-center'>
          <Col className='col-12 col-md-6'>
            <Card>
              <Card.Header>
                <h1>Join game</h1>
              </Card.Header>
              <Card.Body>
                <label for="roomcode" className="font-weight-bold">Room Code</label> <br />
                <input id="roomcode" className="mb-3" type='text' placeholder='Four letter room code' /> <br />
                <label for="name" className="font-weight-bold">Name</label> <br />
                <input id="name" type ="text" placeholder="In-game name" /> <br />
                <Button className='btn btn-primary btn-lg mt-3' onClick={() => { this.props.history.push('/Wait') }}> Find game</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </div>
    )
  }
}

export default JoinGame
