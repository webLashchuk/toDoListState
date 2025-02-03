import { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList'

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
