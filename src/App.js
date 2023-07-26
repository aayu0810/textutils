
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const[mode,setMode] = useState('light');


const toggleMode = ()=>{
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#0e2f1f';
  }
else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
}
}



  return (
    <>
   <Navbar title ="Textutils" mode={mode} toggleMode={toggleMode}/>
    <div className= "container">
    <TextForm heading ="ENTER THE TEXT TO ANALYZE BELOW" mode={mode}/>
   {/* <Navbar title ="TextUtils" aboutText ="About TextUtile"/>*/}
    </div>

       
    </>
  );
}
  
export default App;
