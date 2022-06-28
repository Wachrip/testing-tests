import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTodo, removeTodo, toggleIsDone } from '../../redux/todoSlice';

import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';

import './index.css';

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <li
      id={`todoLi${todo.id}`}
      className='todo'
      style={{ backgroundColor: todo.isDone ? 'green' : 'red' }}
    >
      <span> {todo.todo}</span>
      <div>
        <button
          data-testid={`changeButton${todo.id}`}
          onClick={() => dispatch(changeTodo(todo.id))}
        >
          <AiTwotoneEdit />
        </button>
        <button
          id={`removeButton${todo.id}`}
          data-testid={`removeButton${todo.id}`}
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          <AiFillDelete />
        </button>
        <button
          id={`isDoneButton${todo.id}`}
          data-testid={`isDoneButton${todo.id}`}
          onClick={() => dispatch(toggleIsDone(todo.id))}
        >
          {todo.isDone ? 'In process' : 'Done'}
        </button>
      </div>
    </li>
  );
}
