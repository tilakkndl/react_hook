import React from 'react'

const Button = ({handleClick, text, children}) => {
    console.log(`Rendering button - `, text)
  return (
    <>
    <button onClick={handleClick}>{children}</button>
    </>
  )
}

export default React.memo(Button)