import { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <div className="App">
      <p>Tähän tulee nakittaja</p>
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
