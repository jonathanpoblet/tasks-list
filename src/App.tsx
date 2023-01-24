import React,{ useState } from 'react';
import { Tasks } from './interfaces/interfaces';
import { Urgency } from './enums/enum';

import './App.css';
import TaskList from './components/TaskList';

function App() {
  
  const [tasks,setTasks] = useState<Tasks[]>([
    {
      id: 1,
      title: 'Learn TypeScript',
      description: 'Learn new language TypeScript in 4 weeks ',
      urgency: Urgency.NORMAL,
      completed:false
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      description: 'Learn new language TypeScript in 4 weeks',
      urgency: Urgency.URGENT,
      completed:true
    },
    {
      id: 3,
      title: 'Learn TypeScript',
      description: 'Learn new language TypeScript in 4 weeks',
      urgency: Urgency.NORMAL,
      completed:false
    }
  ])

  return (
    <div className="App" >
      <h1>Tasks</h1>
      <TaskList
        tasks={ tasks }
      />
    </div>
  );
}

export default App;
