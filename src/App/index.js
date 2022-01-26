import React from 'react';
import { AppUI } from './AppUI';
import './App.css';
import { TodoProvider } from './TodoContext';
/* const defaultTodos = [
  { text: 'Tarea1', completed: false},
  { text: 'Task2', completed: false},
  { text: 'Task3', completed: true}
]; */

function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
