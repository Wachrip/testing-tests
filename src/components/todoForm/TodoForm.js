import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';
import { getTodos } from '../../selectors/selectors';
import Todos from '../todos/Todos';

export default function TodoForm() {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  return (
    <div>
      <Todos todos={todos.todos} />
      <div>
        <button
          data-testid='addButton'
          onClick={() => dispatch(addTodo(prompt('Input todo')))}
        >
          Add todo
        </button>
      </div>
    </div>
  );
}
