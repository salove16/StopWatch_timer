import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {Button} from "./components/Button"

import {Flex} from "./components/Flex"

function App() {
  const [theam, setTheam] = useState("light")

  return (
    <div className="App">
      <h3>Theam is:{theam}</h3>
      <Button theam={theam}>click me</Button>
      <Button theam={theam} onClick={()=>{
        setTheam(theam==="light" ? "dark":"light")
      }}>change theam</Button>
      




    </div>
  )
}

export default App
