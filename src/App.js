/* eslint-disable no-restricted-globals */
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

function App() {

  const [toggleForm, setToggleForm] = useState(false)

  const [tasks, setTasks] = useState([
    {id: 1, text: 'Doctors Appointment', day: '20 March 2022 at 2:00 PM', reminder: true},
    {id: 2, text: 'Project Managment Class', day: '22 March 2022 at 5:00 PM', reminder: false},
    {id: 3, text: 'Youtube Video Upload', day: '24 March 2022 at 9:00 PM', reminder: true},
  ]);



  // Add Task

  const addTask = (task) => {
    console.log(task)

    const newID = Math.floor(Math.random() * 10000) + 1;
    const newTask = {...task, newID};
    console.log(newTask)
    setTasks([...tasks, newTask]);

  }

  // Delete Task
  const deleteTaskHandler = (id) =>  setTasks(tasks.filter(task => id !== task.id));

  // Reminder Task
  const handleReminderTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  };

  


  return (
    <div className='container'>
       <Header 
          addTaskToggle = {() => setToggleForm(!toggleForm)}
          showAdd={toggleForm}
          title="Task Tracker" ></Header>
       {toggleForm && <TaskForm onAddTask={addTask}></TaskForm>}
       {tasks.length === 0 ? <div className='no-tasks'>No Task Listed.</div> : <Tasks 
          tasks={tasks}
          deleteTask={deleteTaskHandler}
          toggleReminder={handleReminderTask}
        />}

    </div>
  );
}

export default App;
