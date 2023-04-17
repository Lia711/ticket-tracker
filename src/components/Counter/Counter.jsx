import React from 'react'
import "./Counter.scss"

const Counter = () => {
  return (
    <div className='counter'>
        <h1 className='header'>Counter</h1>
        <h2 className='number'>0</h2>
        <div className='buttons'>
        <button>+</button>
        <button>-</button>
        </div>
        
    </div>
  )
}

export default Counter