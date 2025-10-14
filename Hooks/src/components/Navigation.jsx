import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Hooks from './Hooks'
import Login from './Login'
import UseState from './UseState'

function Navigation() {
  return (
    <div>
        <Routes>
            <Route path="/hooks" element={<Hooks/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/usestate" element={<UseState/>}/>
        </Routes>
    </div>
  )
}

export default Navigation