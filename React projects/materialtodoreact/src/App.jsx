import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SaveIcon from '@mui/icons-material/Save';
import { DataGrid } from '@mui/x-data-grid';

function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    const newTodo = {...todo, id: new Date()}
    setTodos([...todos, newTodo]);
    setTodo({description: '', date: ''});
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  const columns = [
    {field: 'description', headerName: 'Description', width: 150},
    {field: 'date', headerName: 'Date', width: 150},
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Todolist
          </Typography>
        </Toolbar>
      </AppBar>
        <TextField 
          variant="standard"
          label="Description" 
          name="description" 
          value={todo.description}
          onChange={inputChanged} 
        />
        <TextField 
          variant="standard"
          label="Date"
          name="date"
          value={todo.date}
          onChange={inputChanged}
        />
        <Button
          startIcon ={<SaveIcon/>}
          variant="outlined"
          onClick={addTodo}>
          Add
        </Button>
        <DataGrid
          rows={todos}
          columns={columns}
          getRowId={row => row.id}
        />
    </>
  );
}

export default App;