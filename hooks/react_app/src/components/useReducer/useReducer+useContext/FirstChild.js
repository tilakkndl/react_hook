import React, {useContext} from 'react'
import {CountContext} from './FirstParent'
import SecondChild from './SecondChild'

const FirstChild = () => {
const countContext = useContext(CountContext)
  return (
    <div>
        <SecondChild/>
        <div>From ChildFirst</div>
        <div>Count-{countContext.countState}</div>
        <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
        <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={() => countContext.countDispatch('reset')}>Reset</button>

    </div>
  )
}

export default FirstChild