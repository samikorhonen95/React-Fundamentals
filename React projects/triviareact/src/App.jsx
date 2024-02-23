import { useState } from 'react'
import './App.css'

function App() {
  const [question, setQuestion] = useState('');

  const fetchOnClick = () => {
    fetch('https://opentdb.com/api.php?amount=1')
    .then(response => response.json())
    .then(resData => setQuestion(resData.results[0].question))
    .catch(err => console.error(err))
  }
  


  return (
    <>
      <p>{question}</p>
      <button type='button' onClick={fetchOnClick}>New question</button>
    </>
  )
}

export default App