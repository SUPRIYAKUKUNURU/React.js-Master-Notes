
import './App.css'
import HtmlCard from './HtmlCard'
import JsCard from './JsCard'
import ReactCard from './reactCard';
import html from './assets/html.png';
import js from'./assets/js.jpg';
import react from './assets/react.svg';

function App() {
  

  return (
    <>
      <HtmlCard image ={html} name='Html'/>
      <JsCard image={js} name="JS"/>
      <ReactCard image={react} name="React" />
    </>
  )
}

export default App
