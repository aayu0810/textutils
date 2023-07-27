
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



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
    document.title = 'TextUtils - Dark mode';
  }
else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
  showAlert ( "Light mode has been enabled", "success");
  document.title = 'TextUtils - Dark mode';
}
}



  return (
    <> 

<Router>
   <Navbar title ="Textutils" AboutText ="About " mode={mode} toggleMode={toggleMode}/>
   <Alert alert ={alert}/>
    <div className= "container my-3"> 
    <Routes>
    <Route exact path="/About" element={<About />}/>
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading ="ENTER THE TEXT TO ANALYZE BELOW" mode={mode}/>}/>
    </Routes> 
    </div>
 </Router>
   

  
    {/*<Navbar title ="TextUtils" aboutText ="About TextUtiles"/>*/}

   
   </>
       
    
  );
}
  
export default App;
