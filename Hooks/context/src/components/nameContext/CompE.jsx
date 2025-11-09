import React, { useContext } from 'react'
import CompF from './CompF'
import { nameContext } from '../../App'

function CompE() {
    const name = useContext(nameContext)
  return (
    <>
    <h3>CompE</h3>
    <h1>
        {name}
    </h1>
    <CompF />
    </>
  )
}

export default CompE