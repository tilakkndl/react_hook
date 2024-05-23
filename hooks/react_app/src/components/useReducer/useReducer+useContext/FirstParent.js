import React, {useReducer, createContext} from 'react'
import FirstChild from './FirstChild'

export const CountContext = createContext()
const initialState = 0
const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}


const FirstParent = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
            <FirstChild />
            </CountContext.Provider>

    </div>
  )
}

export default FirstParent