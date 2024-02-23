import React from 'react';
import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AddTodo from './AddTodo';

import './App.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const url = 'https://todolist-78467-default-rtdb.europe-west1.firebasedatabase.app/items/.json'

function App() { 
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => addKeys(data))
    .catch(error => console.error(error));
  }

  const addKeys = (data) => {
    if(data){
      const keys = Object.keys(data);
      const valueKeys = Object.values(data).map((item, index) => 
      Object.defineProperty(item, 'id', {value: keys[index]}));
      setTodos(valueKeys);
    }
  }

  const addTodo = (newTodo) => {
    fetch(url,
    {
      method: 'POST',
      body: JSON.stringify(newTodo)
    })
    .then(response => fetchItems())
    .catch(error => console.error(error))
  }

  const deleteTodo = (id) => {
    fetch(`https://todolist-78467-default-rtdb.europe-west1.firebasedatabase.app/items/${id}.json`,
    {
      method: 'DELETE',
    })
    .then(response => fetchItems())
    .catch(error => console.error(error))
  }

  const clearTodos = (/*Doesn't need id cuz deletes all?*/) => {
    fetch(url,
    {
      method: 'DELETE',
    })
    .then(setTodos([]))
    .catch(error => console.error(error))
  }

  const columnDefs = [
    {field: 'description', sortable: true, filter: true},
    {field: 'date', sortable: true, filter: true},
    {field: 'priority', sortable: true, filter: true},
    { 
      headerName: '',
      field: 'id',
      width: 90,
      cellRenderer: params => 
      <IconButton onClick={() => deleteTodo(params.value)} size="small" color="error">
        <DeleteIcon />
      </IconButton> 
    }
  ]

  return (
    <>
      <AppBar position="static" style={{width: '700px'}}>
        <Toolbar>
          <Typography variant="h5">
            TodoList
          </Typography>
        </Toolbar>
      </AppBar>
      <AddTodo addTodo={addTodo}/>
      <Button variant="outlined" onClick={clearTodos} style={{margin: "5px"}}>
        Clear todo
      </Button>
      <div className='ag-theme-material' style={{height: '400px', width: '700px'}}>
        <AgGridReact 
          rowData={todos}
          columnDefs={columnDefs}
        />
      </div>
    </>
  );
}

export default App;