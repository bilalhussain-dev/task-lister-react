import React from 'react'
import {FaTrash} from "react-icons/fa"

function Task({task, deleteTask, toggleReminder}) {
  return (
    <div className={`task ${task.reminder === true ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)} >
        <h3>
            <span>{task.text}</span>
            <FaTrash 
               onClick={() => deleteTask(task.id)}
               className='delete-btn'/>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task