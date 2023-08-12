import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import Week from './components/Week'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <div className='App'>
      <Week />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App
