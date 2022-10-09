import React from 'react'

function Button({text, action}) {
  return (
    <button className='btn' onClick={action}>{text}</button>

  )
}

export default Button