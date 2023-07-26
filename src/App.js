
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    
    <>
   
    <Navbar title ="Textutils" />
    <div className= "container">
    <TextForm heading ="ENTER THE TEXT TO ANALYZE BELOW"/>
    {/* <About/> */}
    </div>

       
    </>
  );
}

export default App;
