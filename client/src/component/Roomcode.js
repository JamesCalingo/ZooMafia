import React from 'react'
import { Card, Button, Row } from 'react-bootstrap'

function Roomcode () {
  return (
    <div className='text-center'>
      <p>Your room code is</p>
      <h1 className='display-4 font-weight-bold'>ROOM</h1>

      <p>Give this code to your players, and once everyone's in the game and ready to start, click the button below.</p>
      <Row className='justify-content-center'>
        <Card className='mb-4'>
          <Card.Header className='font-weight-bold'>List of players in your game</Card.Header>
          <Card.Body className='pb-0'>
            <ul className='list-unstyled'>
              <li>Bob</li>
              <li>Roald</li>
              <li>Rosie</li>
              <li>Coco</li>
              <li>Octavian</li>
              <li>Marina</li>
              <li>Zucker</li>
              <li>Skye</li>
              <li>Stitches</li>
              <li>Cleo</li>
            </ul>
          </Card.Body>
        </Card>
      </Row>
      <Button className='btn-lg'>Start Game</Button>
    </div>
  )
}

export default Roomcode
