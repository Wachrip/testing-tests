import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import TodoForm from '../components/todoForm/todoForm';
import { store } from '../redux/store';

test('App renders test', () => {
  render(
    <div>
      <h1 data-testid='todosHeader'>Todos</h1>
      <Provider store={store}>
        <TodoForm />
      </Provider>
    </div>
  );
  const header = screen.getByTestId('todosHeader');
  expect(header).toBeInTheDocument();
});
