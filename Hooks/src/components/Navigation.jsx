import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Hooks from './Hooks'
import Login from './Login'
import UseState from './UseState'
import Signup from './Signup'
import UseEffect from './UseEffect'

function Navigation() {
  return (
    <div>
        <Routes>
            <Route path="/hooks" element={<Hooks/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/usestate" element={<UseState/>}/>
            <Route path ="/useeffect" element ={<UseEffect/>}/>
        </Routes>
    </div>
  )
}

export default Navigation