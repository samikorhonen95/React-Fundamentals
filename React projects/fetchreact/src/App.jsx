import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('Hello'); //Invoked after each render
  }, [count]);

  return (
    <>
      <p>hello world</p>
    </>
  )
}

export default App
