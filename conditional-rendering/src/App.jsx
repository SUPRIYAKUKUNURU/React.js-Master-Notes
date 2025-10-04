import React from 'react'
import Conditionals from './components/Conditionals'
import Products from './components/Products'
import data from "./components/data.js"
import Laptop from './components/pages/Laptop'
import SmartPhones from './components/pages/SmartPhones.jsx'
import Headphones from './components/pages/Headphones.jsx'
function App() {
  return (
    <div>
      {/* <Conditionals /> */}
      {/* <Products /> */}
      <Laptop data={data} />
      <SmartPhones data={data}/>
      <Headphones data={data}/>
    </div>
  )
}

export default App