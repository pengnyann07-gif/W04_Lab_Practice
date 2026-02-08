import { useState } from 'react'
import './App.css'

function App() {

  // State
  const [tasks, setTasks] = useState(["Task 1"]);
  const [newTask, setNewTask] = useState("");

  // Add Task
  const handleAddTask = () => {
    if (!newTask.trim()) return;

    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <div className="App">
      <h1>My Task List</h1>

      <input type="text" placeholder="Enter a task..." value={newTask}onChange={(e) => setNewTask(e.target.value)}/>

      <button onClick={handleAddTask}>
        Add Task
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
