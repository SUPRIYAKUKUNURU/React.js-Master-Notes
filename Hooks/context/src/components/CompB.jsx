import React, { useContext } from 'react'
import CompC from './CompC'
import { courseContext } from './MyContext'

function CompB({name}) {
    const sub = useContext(courseContext)
  return (
    <div className='border border-danger p-2'>
        <h2>CompB</h2>
        <h1>Course:{sub}</h1>
    
        <CompC name = {name} />
    </div>
  )
}

export default CompB