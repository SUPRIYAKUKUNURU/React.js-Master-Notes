import React, { useEffect, useRef } from 'react'
import {useState}from 'react'
function UseRef() {
    const[count,setCount] = useState(0)
    const rendered = useRef(0)
    const h1Ele=useRef(null);
    console.log("rendered",rendered);
    useEffect(()=>{
        rendered.current = rendered.current+1;
    })
 const handleStyles=()=>{
   console.log(h1Ele)
   h1Ele.current.style.backgroundColor="green";
   h1Ele.current.style.color="white";
 }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
        <h1 ref={h1Ele}>My component rendered {rendered.current} times</h1>
        <button onClick={handleStyles}>Click me</button>
    </div>
  )
}

export default UseRef