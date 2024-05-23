import React, {useState} from 'react'
import useCounter from './useCounter'
const CustomCounter = () => {
    const {count, incrementCount, decrementCount, resetCount} = useCounter()
    
  return (
    <div>
        <h2>Custom Counter</h2>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
        <div>Count - {count}</div>

    </div>
  )
}

export default CustomCounter