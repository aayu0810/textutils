
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const[mode,setMode] = useState('light');
 const [alert, setAlert]= useState (null);
 
 const showAlert= (message,type) => {
setAlert ({
  msg: message,
  type :type
})
setTimeout(()=>{
  setAlert(null);
},3000);


 }


const toggleMode = ()=>{
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#0e2f1f';
    showAlert ( "Dark mode has been enabled", "success");
  }
else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
  showAlert ( "Light mode has been enabled", "success");
}
}



  return (
    <>
   <Navbar title ="Textutils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert ={alert}/>
    <div className= "container">
    <TextForm showAlert={showAlert} heading ="ENTER THE TEXT TO ANALYZE BELOW" mode={mode}/>
   {/* <Navbar title ="TextUtils" aboutText ="About TextUtile"/>*/}
    </div>
   
       
    </>
  );
}
  
export default App;
