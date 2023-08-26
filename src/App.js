import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <TodoInput createTodo={setTodos} todosList={todos} />

      <h1>Todo list</h1>
      {
        todos.map((todo, index) => (
          <TodoItem key={index} content={todo} />
        ))
      }
    </div>
  );
}

export default App;
