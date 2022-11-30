import PropTypes from 'prop-types'
import React from 'react'

import Button from './Button'

function Header({title, addTaskToggle, showAdd}) {

  
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button
         addTaskToggle={addTaskToggle}
         bgColor={`${showAdd ? 'green': 'black'}`} text={showAdd ? 'Close' : 'View'} />
    </header>
  )
}


Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string
}





export default Header