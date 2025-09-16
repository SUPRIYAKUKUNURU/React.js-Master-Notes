import { useState } from 'react'
import Header from './components/Header';
import Card,{Carousel }from './components/commomComponents';
import Internal from './styles/Internal';
import Inline from './styles/Inline';
import External from './styles/External';
import CompA from './styles/compA/CompA';
import ComB from './styles/comB/ComB';
import Navbar from './Navbar';
import Footer from './Footer';
import HtmlCard from './HtmlCard';


function App() {
  
const course = "Javascript";
  return (
    <>
      {/* <li className='app'>React</li>
      <li style={{color:'green',backgroundColor:'red'}}>Java</li>
      <li>{course}</li>  //to access javascript inside html */}
   <Navbar/>
      <Header/>
      {/* <Footer/> */}
      <Card/>
      <Carousel/>
      <Inline />
      <Internal />
      <External />
      <CompA/>
      <ComB/>
      <HtmlCard/>
      <Footer/>
    </>
  )
}

export default App
