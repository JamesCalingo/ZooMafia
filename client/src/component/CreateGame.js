import React from 'react'
import { Card, Button } from 'react-bootstrap'

class CreateGame extends React.Component {

  render () {
    return (
      <div className='container'>

        <h1 className='text-center'>Create Game</h1>

        <p>So you're today's game master, huh? Well, you're going to have a lot of responsibility to make sure the game runs smoothly, but I'm here to help you.</p>

        <p>First of all, you're going to need to set up the game by telling me how many mafia members you want, plus any of the special roles listed below. Don't worry about the number of players - I can take care of that.</p>
        <Card>
          <Card.Body>
            <form>
              <div className='form-group'>
                <label for='mafiaNum'>Number of Mafia</label>
                <select className='form-control' id='mafiaNum'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className='form-check'>
                <label for='form-check'>Additional Roles</label><br />
                <input className='form-check-input' type='checkbox' value='' id='detectiveCheck' />
                <label className='form-check-label' for='detectiveCheck'>
              Detective
                </label>
              </div>

              <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' id='medicCheck' />
                <label className='form-check-label' for='medicCheck'>
              Medic
                </label>
              </div>

              <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' id='cupidCheck' />
                <label className='form-check-label' for='cupidCheck'>
              Cupid
                </label>
              </div>

              <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' id='tannerCheck' />
                <label className='form-check-label' for='tannerCheck'>
              Tanner
                </label>
              </div>

              <br />
              <Button onClick={() => { this.props.history.push('/Roomcode') }} className='btn btn-success'>Go!</Button>

            </form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default CreateGame
