import {React, useState} from 'react'
import "./Counter.scss"

const Counter = (props) => {

  const [counter, setCounter] = useState(0);

  const handleIncrement=()=> {
    setCounter(counter+1)
  }

  const handleDecrement=()=> {
    setCounter(counter-1)
  }

  return (
    <div className='counter'>
        <h1 className='header'>Counter</h1>
        <h2 className='number'>{counter}</h2>
        <div className='buttons'>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        </div>
        
    </div>
  )
}

export default Counter