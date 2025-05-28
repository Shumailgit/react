import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter]=useState(15)
//let counter=15
const addValue=()=>{
  setCounter((previousCounter)=>previousCounter+1)
  setCounter((previousCounter)=>previousCounter+1)
  setCounter((previousCounter)=>previousCounter+1)
  setCounter((previousCounter)=>previousCounter+1)

}
const removeValue=()=>{
setCounter(counter-1)
}
  return (
    <>
      <h1>React project {counter}</h1>
      <h1>counter value: {counter} </h1>
      <button onClick={addValue}>Add value</button>{" "}

      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>

    </>
  )
}

export default App
