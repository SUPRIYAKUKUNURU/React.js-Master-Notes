import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MyContext from './components/MyContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MyContext>
     <App />
   </MyContext>
  </StrictMode>,
)
