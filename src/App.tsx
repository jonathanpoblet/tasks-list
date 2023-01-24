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

  return (
    <div className="App" >
      <h1>Tasks</h1>
      <FormTask
        addTask={ addTask }
      />
      <TaskList
        tasks={ tasks }
      />
    </div>
  );
}

export default App;
