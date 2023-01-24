import React,{ useEffect, useState } from 'react';
import { Tasks } from './interfaces/interfaces';

import './App.css';
import TaskList from './components/TaskList';
import FormTask from './components/Form';

function App() {
  
  const [tasks,setTasks] = useState<Tasks[]>([]);

  function addTask (task:Tasks): void{
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  function deleteTask(task:Tasks):void {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index,1);
    setTasks(tempTasks);
  }

  function completedTask(task:Tasks): void {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
} 

  return (
    <div className="App" >
      <h1>Tasks</h1>
      <FormTask
        addTask={ addTask }
      />
      <TaskList
        tasks={ tasks }
        deleteTask={ deleteTask }
        completedTask={ completedTask }
      />
    </div>
  );
}

export default App;
