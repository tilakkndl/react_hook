import React from 'react'

const Title = () => {
    console.log("This is title component")
  return (
    <div>This is title component</div>
  )
}

export default React.memo(Title)