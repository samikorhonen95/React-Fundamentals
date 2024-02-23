import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ToDolist from './ToDolist';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
          <Link to="/">Home</Link>{' '}
          <Link to="/TodoList">To-Do List</Link>{' '}
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/todoList" element={<ToDolist/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;