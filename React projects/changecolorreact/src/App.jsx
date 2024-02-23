import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  let changeColor = () => {
    setColor('red');
  }

  return (
    <>
     <p style={{color: color}}>Hello World!</p>
     <button onClick ={changeColor}>Change color</button>
    </>
  )
}

export default App
