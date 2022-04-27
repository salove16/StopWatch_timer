// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { addCount } from './redux/action'
import { store } from "./redux/store"


function App() {
  
// const state =store.getState()  
// console.log("store:", store.getState())
  return (
    <div className="App">
     <h3>Counter:0</h3>
     <button   onClick={ ()=>{
       store.dispatch(addCount(1))
     }} > add</button>
    </div>
  )
}

export default App
