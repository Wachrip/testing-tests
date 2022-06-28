import './App.css';
import TodoForm from './components/todoForm/TodoForm';

function App() {
  return (
    <div className='App'>
      <h1 data-testid='todosHeader'>Todos</h1>
      <TodoForm />
    </div>
  );
}

export default App;
