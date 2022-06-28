import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from '../components/todoForm/todoForm';
import { store } from '../redux/store';

test('renders todo form', () => {
  render(
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );
  const buttonAddTodo = screen.getByText(/add todo/i);
  expect(buttonAddTodo).toBeInTheDocument();
});

test('click events', () => {
  render(
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );

  window.prompt = jest.fn();

  const changeButton1 = screen.getByTestId('changeButton1');
  const removeButton1 = screen.getByTestId('removeButton1');
  expect(changeButton1).toBeInTheDocument();
  expect(removeButton1).toBeInTheDocument();
  fireEvent.click(removeButton1);
  expect(removeButton1).not.toBeInTheDocument();
  const addTodoButton = screen.getByTestId('addButton');
  fireEvent.click(addTodoButton);
  fireEvent.click(changeButton1);
  const isDoneButton = screen.getByTestId('isDoneButton2');
  expect(isDoneButton).toContainHTML('Done');
  fireEvent.click(isDoneButton);
  // expect(screen.getByTestId('isDoneButton2')).toContainHTML('In process');
});
