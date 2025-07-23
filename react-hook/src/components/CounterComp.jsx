import React,{useState} from 'react'

const CounterComp = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment me</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(prev=>prev-1)}>Decrement me</button>
      
    </div>
  )
}

export default CounterComp;