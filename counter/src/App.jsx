import { useState } from 'react'

import './App.css'

function App() {
  // const [variable,method] =useState
  const [counter,setCounter] =useState(1)
// let counter = 1
const addValue = ()=>{
    // eslint-disable-next-line no-const-assign
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)

}

const removeValue =()=>{
  setCounter(counter-1)
}


  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removeValue}>Remove value</button>
      <p>Footer: {counter} </p>
    </>
  )
}

export default App
