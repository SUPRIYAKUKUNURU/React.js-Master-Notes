import React from 'react'
import Conditionals from './components/Conditionals'
import Products from './components/Products'
import data from "./components/data.js"
import Laptop from './components/pages/Laptop'
import SmartPhones from './components/pages/SmartPhones.jsx'
import Headphones from './components/pages/Headphones.jsx'
import Header from './components/Header.jsx'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path ="/" element={<Products />}/>
        <Route path ="/laptops" element={<Laptop data={data}/>}/>
        <Route path ="/headphones" element ={<Headphones data={data}/>}/>
        <Route path ="/smartphones" element ={<SmartPhones data={data}/>}/>
        </Routes>
        <Footer />
      
      {/* <Conditionals /> */}
      {/* <Products /> */}
      {/* <Laptop data={data} />
       <SmartPhones data={data}/>
      <Headphones data={data}/> */}
    </div>
  )
}

export default App