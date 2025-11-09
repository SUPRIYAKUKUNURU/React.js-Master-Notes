import React from 'react';
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