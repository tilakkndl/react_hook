import React, {useContext} from 'react'
import {UserContext,ChannelContext} from './ComponentA'

const ComponentC = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
        {user} - {channel}

    </div>
  )
}

export default ComponentC