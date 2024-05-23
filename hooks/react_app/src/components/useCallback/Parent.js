import React, {useState, useCallback} from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

const Parent = () => {
    const [count, setCount] = useState(0)

    
    const [salary, setSalary] = useState(50000)
    const incrementCount = useCallback(()=>{
        setCount(count+1)
    },[count]
)
    const incrementSalary = useCallback(()=>{
        setSalary(salary+1000)
    },[salary])

  return (
    <div>
        <Title/>
        <Button handleClick={incrementCount} text = "Count">Increment Count</Button>
        <Count text="Count" count={count}/>
        <Button handleClick={incrementSalary} text = "Salary">Increment Salary</Button>
        <Count text="Salary" count={salary}/>
    </div>
  )
}

export default Parent