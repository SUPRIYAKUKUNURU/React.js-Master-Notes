import React from 'react';
import react from './assets/react.svg';
import Cards from './Cards';
import  Emogies  from './EmogiesData';
function App() {

  return (
    <>
    <Cards Emogies={Emogies}/>
    </>
  );
}

export default App