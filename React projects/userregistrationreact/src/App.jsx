import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({
  firstname: '', 
  lastname: '', 
  email: '', 
  phone: ''
  });

  const submit = () => {
    if(!user.firstname || !user.lastname || !user.email || !user.phone){
      alert('All fields are required!');
    }
    else{
      alert(`Welcome ${user.firstname} ${user.lastname}`);
    }
  }

  const inputChanged = (Event) => {
    setUser({...user, [Event.target.name]: [Event.target.value]});
  }

  return (
    <>
        <input placeholder='First name' name='firstname' value={user.firstname} onChange={inputChanged}/>
        <input placeholder='Last name' name='lastname' value={user.lastname} onChange={inputChanged}/>
        <input placeholder='Email' name='email' value={user.email} onChange={inputChanged}/>
        <input placeholder='Phone' name='phone' value={user.phone} onChange={inputChanged}/>
        <button type='button' onClick={submit}>Submit</button>
    </>
  );
}

export default App
