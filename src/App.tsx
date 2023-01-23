import React,{ useState } from 'react';
import { Tasks } from './interfaces/interfaces';
import { Urgency } from './enums/enum';

import './App.css';

function App() {
  
  const [tasks,setTasks] = useState<Tasks[]>([
    {
      title: 'Learn TypeScript',
      description: 'Learn new language TypeScript in 4 weeks',
      urgency: Urgency.NORMAL
    }
  ])

  return (
    <div className="App" >
      <h1>Tasks</h1>
      <div>
        {/* {
          tasks.map(task => {
            return(

            )
          })
        } */}
      </div>
    </div>
  );
}

export default App;
