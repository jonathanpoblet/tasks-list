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
            <li className={tasks.completed === true ? 'completed' : 'pending'} key={ tasks.id }>
              <h3>{ tasks.title }</h3>
              <p>{ tasks.description }</p>
              <button className={tasks.urgency === 'Normal'? 'normal' : 'urgent' }>{ tasks.urgency }</button>
              <div>
                <Trash className='icons trash'/>
                {
                  tasks.completed ? <ToggleOn  className='icons toggle'/> : <ToggleOff  className='icons'/>
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