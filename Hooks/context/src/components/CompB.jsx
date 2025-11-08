import React, { useContext } from 'react'
import CompC from './CompC'
import { courseContext } from './MyContext'

function CompB({name}) {
    const subs = useContext(courseContext)
  return (
    <div className='border border-danger p-2'>
        <h2>CompB</h2>
        <h1>Course:{subs}</h1>
    
        <CompC name = {name} />
    </div>
  )
}

export default CompB