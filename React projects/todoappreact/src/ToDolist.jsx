import { useState } from 'react'
import TodoTable from './TodoTable';
import './App.css'

function ToDolist() {
  const [todo, setTodo] = useState({description: '', date: ''})
  const [todos, setTodos] = useState([]);

  const inputChanged = (Event) => {
    setTodo({...todo, [Event.target.name]: Event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: '', date: ''});
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
    console.log('Delete row; ' + row);
  }

  return (
    <>
      <input placeholder='Description' name="description" value={todo.description} onChange={inputChanged}/>
      <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo}/>
    </>
  );
}

export default ToDolist;