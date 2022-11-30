import { useState } from "react"

function TaskForm({onAddTask}) {

  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);


  const submitTaskController = event => {

    if(text === '') {
        alert('Please fill up the text')
    } else if(day === '') {
        alert('Please fill up the day')
    } else {
        onAddTask({text, day, reminder})
        
        setText("");
        setDay("");
        setReminder(false)
    }

    event.preventDefault();
    return true;

  };

  return (
    <form className='add-form' onSubmit={submitTaskController}>
        <div className="form-control">
            <label htmlFor="taskInput">Task Title</label>
            <input 
                onChange={(event) =>  setText(event.target.value)}
                type="text" 
                name="" id="taskInput" 
                placeholder='Task Title'
                value={text} />
        </div>
        <div className="form-control">
            <label htmlFor="taskDay">Task Day</label>
            <input 
                onChange={(event) => setDay(event.target.value)}
                type="text" 
                name="" 
                id="taskDay" placeholder='Day'
                value={day} />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="reminder">Reminder</label>
            <input 
                onChange={(event) => setReminder(event.currentTarget.checked)}
                type="checkbox" name="" id="reminder" checked={reminder} />
        </div>

        <button 
            type="submit" 
            className='btn btn-block'>Save Task</button>
        
    </form>
  )
}

export default TaskForm