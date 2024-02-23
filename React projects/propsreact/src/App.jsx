import { useState } from 'react'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)

  if(props.message.length > 10){
    return(
      <p>Too long</p>
    )
  }
  else if(props.message.length < 10){
    return(
      <p>{props.message}</p>
    )
  }
}

export default App
