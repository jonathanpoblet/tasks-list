import React from 'react';
import { Tasks } from '../interfaces/interfaces';
import { Trash, ToggleOff, ToggleOn } from 'react-bootstrap-icons';

import '../styles/tasklist.css'

interface Props {
  tasks : Array<Tasks>
}

function TaskList({tasks}: Props) {
  
  return (
    <ul>
      {
        tasks.map(tasks => {
          return (
            <li>
              <h3>{ tasks.title }</h3>
              <p>{ tasks.description }</p>
              <button>{ tasks.urgency }</button>
              <div>
                <Trash/>
                {
                  tasks.completed ? <ToggleOn/> : <ToggleOff/>
                }
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default TaskList;