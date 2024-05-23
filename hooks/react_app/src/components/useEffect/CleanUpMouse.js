import React, {useState, useEffect} from 'react'
import HookMouse from './HookMouse'

const CleanUpMouse = () => {
    const [display, setDisplay] = useState(true)

  return (
    <div>
<button onClick={()=>setDisplay(!display)}>Toggle Display</button>
{display && <HookMouse/>}
    </div>
  )
}

export default CleanUpMouse