import React, {useState, useEffect} from 'react'

const HookCounterOne = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(()=>{
        document.title = `You clicked ${count} times`
        console.log("useEffect - Updating document title")
    },[count])
    document.title = `You clicked ${count} times`
  return (
 <>
<input type="text" value={name} onChange={e=>setName(e.target.value)}/>
 <button onClick={()=>setCount(count+1)}>Click {count} times</button>    
 </>
  )
}

export default HookCounterOne