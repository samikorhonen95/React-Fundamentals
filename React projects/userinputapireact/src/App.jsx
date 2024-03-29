import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({});
  const [userid, setUserid] = useState('');

  const fetchData = () => {
    fetch('https://reqres.in/api/users/' + userid)
    .then(response => {
      if(response.status !== 200){
      throw new Error('Response status not ok');
    }
    return response.json();
  })
    .then(responseData => setUser(responseData.data))
    .catch(error => console.error(error))
  };

  const inputChanged = (Event) => {
    setUserid(Event.target.value);
  }

  return (
    <>
      <input placeholder='User ID' value={userid} onChange={inputChanged}/>
      <button onClick={fetchData}>Fetch</button>
      <p>{user.first_name} {user.last_name} {user.email}</p>
    </>
  )
}

export default App
