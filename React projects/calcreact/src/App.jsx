import { useState } from 'react'
import './App.css'

function App() {
  const [numbers, setNumbers] = useState([0, 0]); //initialize two state variables, numbers is an array, setNumbers is a function to update the state
  const [resultNumber, setResultNumber] = useState(0);

const inputChanged = (Event) => { //called whenever input is typed and takes an event object representing the input change event
  const {name, value} = Event.target; //extracts name and value from input fields
  const newNumbers = [...numbers]; //create a copy of the array -> reason: react can predict changes to the state for re-rendering
  newNumbers[Number(name)] = parseFloat(value); //updates the value at specified index
  setNumbers(newNumbers); //update the numbers state with new array
}

const calculate = (operation) => {
  const [num1, num2] = numbers;

  if(operation === '+'){
    setResultNumber(num1 + num2);
  }
  else if(operation === '-'){
    setResultNumber(num1 - num2);
  }
}

  return (
    <>
      <p>Result = {resultNumber}</p>
      <input placeholder='First number' name='0'
      value={numbers[0]} onChange={inputChanged}/>
      <input placeholder='Second number' name='1'
      value={numbers[1]} onChange={inputChanged}/>
      <button type='button' onClick={() => calculate('+')}>+</button>
      <button type='button' onClick={() => calculate('-')}>-</button>
    </>
  )
}

export default App;