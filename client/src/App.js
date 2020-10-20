import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Welcome from './component/Welcome'
import CreateGame from './component/CreateGame'
import JoinGame from './component/JoinGame'
import Wait from './component/Wait'
import Roomcode from './component/Roomcode'

import './App.css'

const ENDPOINT = 'http://127.0.0.1:3001'

function App () {
  const [response, setResponse] = useState("")
  
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    socket.on('FromAPI', data => {
      setResponse(data)
    })

    return () => socket.disconnect()
  }, [])


  return (
   <div>
       <p>
      It's <time dateTime={response}>{response}</time>
    </p>
    <Router>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/CreateGame' component={CreateGame} />
        <Route exact path='/Roomcode' component={Roomcode} />
        <Route exact path='/JoinGame' component={JoinGame} />
        <Route exact path='/Wait' component={Wait} />
      </Switch>
    </Router>
    </div>
  )
}

export default App
