import React, {useContext} from 'react'
import ComponentB from './ComponentB'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

const ComponentA = () => {


  return (
    <div>
        <UserContext.Provider value={'Vishwas'}>
            <ChannelContext.Provider value={'Codevolution'}>
                <ComponentB/>
            </ChannelContext.Provider>
            </UserContext.Provider>
        
    </div>
  )
}

export default ComponentA