import React from 'react'

function Button({bgColor, text, addTaskToggle}) {
  return <button 
    onClick={addTaskToggle}
    style={{backgroundColor: bgColor}}
    className='btn'>{text}</button>
}

export default Button