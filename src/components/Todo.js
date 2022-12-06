import React, { useState } from 'react';
import TodoForm from './TodoForm';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Draggable from "react-draggable";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({ id: null, value: ''});

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({id: null, value: ''});
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <Draggable>
    <Box sx={{
        width: 300, marginLeft:"40rem",marginTop:"2rem",
        height: 100,
        backgroundColor:"rgb(229 229 229);"
      }}>
        <Card sx={{height:100}}>
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
        {todo.text}
      <div className='icons'>
        <DeleteIcon sx={{color:"red"}}
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <Button variant="contained"  size="small"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        >View</Button>
      </div>
    </div>
    </Card><br></br>
    </Box>
    </Draggable>
  ));
};

export default Todo;