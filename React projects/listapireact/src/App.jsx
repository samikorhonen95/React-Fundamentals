import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(responseData => setUsers(responseData.data))
    .catch(error => console.error(error));
  }, []);

  return (
    <>
      <table>
        <tbody>
          {users.map((user) => 
          <tr key={user.id}>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td><img alt='avatar' src={user.avatar}/></td>
          </tr>
          )}
        </tbody>
      </table>
        
    </>
  )
}

export default App
