import React from 'react'
import {useState} from 'react';

function UseState() {
     const [name ,setName] = useState("Priya");
     const[count,setCount] = useState(0)
     const [isDark ,setIsDark] = useState(false);
 
  const handleClick=()=>{
    setName("Supriya Kukunuru");
  }
  const handleClick1=()=>{
   setCount(count+1);
  }
  const handleToggle=()=>{
    setIsDark(!isDark);
  }
  
  return(
    <>
    <h1>My Name is {name}</h1>
    <button onClick={handleClick}>Update Name</button>

    <h1>Counter: {count}</h1>
    <button onClick={handleClick1}>Click Me</button>
    
    <div style={{
        backgroundColor: isDark ? "black" : "white",
        color : isDark ? "white" : "black"
    }}>

  <h2 >{isDark ? "DarkMode" : "Light Mode"}</h2>
  <button onClick={handleToggle}>{isDark ? "Switch to Light": "Switch to Dark"}</button>
        </div>

    </>
  )
}

export default UseState