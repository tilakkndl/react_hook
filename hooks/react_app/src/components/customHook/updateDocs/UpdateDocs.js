import React, {useState, useEffect} from 'react'
import useDocument from './useDocument'

const UpdateDocs = () => {
  const [count, setCount] = useState(0)
  useDocument(count)  
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Count - {count}</button>

    </div>
  )
}

export default UpdateDocs