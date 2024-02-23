import './App.css'
import {useState} from 'react';

function MyComponent(){
  const [firstName, setFirstName] = useState('John');
  const [message, setMessage] = useState('Hello');

  return(
    <div>
      Hello {firstName}
    </div>
  )
}

function App(props) {
  return (
    <>
      Hello World! {props.firstname} {props.lastname}
    </>
  )
}

export default App
