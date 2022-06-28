import React from 'react';
import Todo from '../todo/Todo';

import './index.css';

export default function Todos({ todos }) {
  return (
    <ul className='todos'>
      {todos.map((todo) => (
        <Todo key={`${todo.id}${todo.todo}`} todo={todo} />
      ))}
    </ul>
  );
}
