// import React from 'react';
// import {useState} from 'react';


// // for Strings
// export default function App(){
//   const [name ,setName] = useState("Priya");
 
//   const handleClick=()=>{
//     setName("Supriya Kukunuru");
//   }
//   return(
//     <>
//     <h1>My Name is {name}</h1>
//     <button onClick={handleClick}>Update Name</button>
//     </>
//   )

// // }
// 

// For Objects:
import React from 'react'
import {useState} from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Products from './components/Products';


function App() {
  const[course,setCourse]= useState({name:"React.js",Designation:"Frontend Developer"});
  const handleClick=()=>{
    setCourse({...course,name:"Mern Stack Developer"})
  }
  
  return (
    <div>
      {/* <h2>{course.Designation}</h2>
      <h1>{course.name}</h1>
      <button onClick={handleClick}>Update Course</button> */}
      <Header />
      <Navigation />
   <Products />
    
    </div>
  )
}

export default App;