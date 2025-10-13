import React from 'react';
import {useState} from 'react';

export default function App(){
  const [name ,setName] = useState("Priya");
 
  const handleClick=()=>{
    setName("Supriya Kukunuru");
  }
  return(
    <>
    <h1>My Name is {name}</h1>
    <button onClick={handleClick}>Update Name</button>
    </>
  )

}