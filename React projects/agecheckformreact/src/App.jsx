import { useState } from 'react'
import './App.css'

function App() {
  const [person, setPerson] = useState({age: '', name: ''})

  const inputChanged = (Event) => {
    setPerson({...person, [Event.target.name]: [Event.target.value]});
  }

  const checkAge = () => {
    if(person.age >= 18){
      alert(`Hello ${person.name}`)
    }
    else if(person.age < 18){
      alert(`You are too young`)
    }
  }

  return (
    <>
      <input placeholder="Your name" name="name" value={person.name} onChange={inputChanged}/>
      <input placeholder="Your age" name="age" value={person.age} onChange={inputChanged}/>
      <button type="button" onClick={checkAge}>Check age</button>
    </>
  )
}

export default App;