import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [person, setPerson] = useState({firstname: '', lastname: '', email: ''})

  const inputChanged = (Event) => {
    setPerson({...person, [Event.target.name]: Event.target.value});
  }

  /*
  const showAlert = () => {
    alert(`Hello ${person.firstname} ${person.lastname}`);
  }
  */

  const formSubmitted = (Event) => {
    Event.preventDefault();
  }

  return (
    <>
      <p>Name: {person.firstname} {person.lastname} Email: {person.email}</p>
      <form>
        <input placeholder="First name" name="firstname" value={person.firstname} onChange={inputChanged}/>
        <input placeholder="Last name" name="lastname" value={person.lastname} onChange={inputChanged}/>
        <input placeholder="Email" name="email" value={person.email} onChange={inputChanged}/>
        <input type="submit" value="Submit"/>
      </form>
      
    </>
  )
}

export default App
