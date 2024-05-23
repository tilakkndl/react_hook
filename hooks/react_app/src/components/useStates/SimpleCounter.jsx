import React, {useState} from 'react'

const SimpleCounter = () => {
    const [count, setCount] = useState(0)
  console.log(count)
  return (
<>
<button onClick={()=>setCount(count+1)}>Count {count}</button>
</>
)
}

export default SimpleCounter