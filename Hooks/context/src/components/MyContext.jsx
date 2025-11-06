import React from 'react'
import { createContext } from 'react'

export const courseContext = createContext();

export default function MyContext({children}) {
     const course = "React.js";
  return (
    <>
    <courseContext.Provider value ={course}>
  {children}
    </courseContext.Provider>
    </>
  )
}

