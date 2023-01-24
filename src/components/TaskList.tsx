import React from 'react';
import { Tasks } from '../interfaces/interfaces';
import { Trash, ToggleOff, ToggleOn } from 'react-bootstrap-icons';

import '../styles/tasklist.css'

interface Props {
  tasks : Array<Tasks>
  deleteTask: (task:Tasks) => void
  completedTask: (task:Tasks) => void
}

function TaskList({ tasks, deleteTask,completedTask }: Props) {
  
  return (
    <ul>
      {
        tasks.length !== 0 ? 
        tasks.map(task => {
          return (
            <li className={ task.completed === true ? 'completed' : 'pending'} key={ task.id }>
              <h3>{ task.title }</h3>
              <p>{ task.description }</p>
              <button className={task.urgency === 'Normal'? 'normal' : 'urgent' }>{ task.urgency }</button>
              <div>
                <Trash onClick={() => deleteTask(task)} className='icons trash'/>
                {
                  task.completed ? 
                    <ToggleOn onClick={() => completedTask(task)}  className='icons toggle'/> 
                    : 
                    <ToggleOff onClick={() => completedTask(task)}  className='icons'/>
                }
              </div>
            </li>
          )
        })
        :
        <p>NO TASKS, PLEASE ADD</p>
      }
    </ul>
  )
}

export default TaskList;