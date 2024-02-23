import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  return (
    <>
      {count <= 10
      ?<p>You have pressed the {count} times</p>
      :<p>You have pressed the button more than 10 times ({count})</p>
      }
      <button onClick={() => setCount(count + 1)}>Press me!</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count = 0)}>Clear</button>
    </>
  )
}

export default App
