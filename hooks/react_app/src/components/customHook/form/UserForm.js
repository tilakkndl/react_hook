import React, {useState} from 'react'
import useInput from './useInput'

const UserForm = () => {
const {value: firstName, bind: firstNameBind, reset: firsNameReset} = useInput("")
const {value: lastName, bind: lastNameBind, reset: lastNameReset} = useInput("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        firsNameReset()
        lastNameReset()
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input type="text" {...firstNameBind}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" {...lastNameBind}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UserForm