import React, {useState} from 'react'

const SimpleCounterTwo = () => {
    const [count, setCount] = useState(0)
    const IncrementBy5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
  return (
    <>
    <button onClick={(count)=>setCount(count+1)}>  Increment {count}  </button>
    <button onClick={(count)=>setCount(count+1)}>  Increment {count}  </button>
    <button onClick={(count)=>setCount(0)}>  Reset {count}  </button>
    <button onClick={IncrementBy5}>  IncrementByFive {count}  </button>

    </>
  )
}

export default SimpleCounterTwo