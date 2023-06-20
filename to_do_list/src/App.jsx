import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import FilterTasks from './components/FilterTasks';
import ToDoItem from './components/ToDoItem';

function App() {
  // const [tasks, setTasks] = useState([{"status":false, "task":"Complete Homework"}]);

  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {localStorage.setItem("tasks", JSON.stringify(tasks));}, [tasks]);


  return (
    <div className="App">
      <h1 className='underline'>To Do List</h1>
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <ToDoItem tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
