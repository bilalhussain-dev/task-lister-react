import Task from "./Task"

function Tasks({tasks, deleteTask, toggleReminder}) {
  return (
    <>
       {tasks.map((task, index) => {
        return <Task
                    deleteTask={deleteTask} 
                    toggleReminder={toggleReminder}
                    key={index} 
                    task={task} />
       })} 
    </>
  )
}

export default Tasks