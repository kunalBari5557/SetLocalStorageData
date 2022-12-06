import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <Button variant="contained" sx={{marginTop:"-0.4rem",marginLeft:"0.5rem"}} onClick={handleSubmit} className='todo-button edit'>
            Update
          </Button>
        </>
      ) : (
        <>
          <input
            placeholder='Add todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <Button variant="contained" color="success" sx={{marginTop:"-0.4rem",marginLeft:"0.5rem"}} onClick={handleSubmit} >
            Add todo
          </Button>
        </>
      )}
    </form>
  );
}

export default TodoForm;