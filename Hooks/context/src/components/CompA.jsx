import React from 'react'
import CompB from './CompB'

function CompA({name}) {
  return (
    <div className='border border-primary'>
        <h2>CompA</h2>
        <CompB name ={name}/>
    </div>
  )
}

export default CompA