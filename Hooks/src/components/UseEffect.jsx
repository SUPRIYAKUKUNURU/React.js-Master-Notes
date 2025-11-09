import React from 'react'
import { useState,useEffect }  from 'react';

function UseEffect() {
    const[count,setCount] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(prev =>{
                if(prev < 100) return prev+1;
                clearInterval(interval);
                return prev;
            });

        },100)
        return ()=> clearInterval(interval)
    },[count])
  return (
    <div>
  <h1>{count}</h1>
    </div>
  )
}

export default UseEffect