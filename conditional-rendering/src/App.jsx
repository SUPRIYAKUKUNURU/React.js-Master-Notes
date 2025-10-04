import React from 'react'
import Conditionals from './components/Conditionals'
import Products from './components/Products'
import data from "./components/data.js"
import Laptop from './components/pages/Laptop'
import SmartPhones from './components/pages/SmartPhones.jsx'
function App() {
  return (
    <div>
      {/* <Conditionals /> */}
      {/* <Products /> */}
      <Laptop data={data} />
      <SmartPhones data={data}/>
    </div>
  )
}

export default App