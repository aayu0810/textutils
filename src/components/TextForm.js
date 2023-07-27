import React, { useState } from 'react'

export default function TextForm(props) {


 const handleUpClick = ()=>{
console.log("Uppercase was clicked"+ text); 
let newText = text.toUpperCase();
setText(newText)
props.showAlert("Converted to Uppercase!","success");
 }
 
 const handleOnchange = (event) =>{
    console.log("On change");
    setText(event.target.value)

 }

 const handleClearClick = (event) =>{
    let newText=" ";
    setText(newText)
    props.showAlert("Text has been cleared!","success");
    
  }


   const handleLoClick=() => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success");
       
      }

    


    const handleCapClick = ()=>{
        console.log("Capitalize First Word"+ text); 
        let newText = text.slice(0,1).toUpperCase()+ text.slice(1,text.length);
        setText(newText);
        props.showAlert("First letter has been Capitalized!","success");
  
         }

         const handleCopy = ()=>{
            console.log("Copy the Text"); 
             var text = document.getElementById("myBox");
            text.select();
            text.setSelectionRange(0,9999);
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text has been copied!","success");
             }
            
             
             const[text,setText]= useState('');
  return(
  <>
    <div className="container" style = {{color: props.mode === 'dark'?'white':'#0e2f1f'}}>
     <h2 className = 'mb-4'>{props.heading}</h2>   
<div className="mb-3 ">
  <textarea className="form-control" value={text} onChange = {handleOnchange} style={{backgroundColor : props.mode ==='dark'?'#0f4208':'white' , color : props.mode==='dark'?'white':'#0e2f1f'}}id="myBox" rows="8"></textarea>
</div>
    <button disabled ={text.length===0} className="btn btn-success mx-1 my-1" onClick ={handleUpClick}>Convert to Uppercase</button>  
    <button disabled ={text.length===0} className="btn btn-success mx-1 my-1" onClick ={handleLoClick}>Convert to Lowercase</button> 
    <button disabled ={text.length===0} className="btn btn-success mx-1 my-1" onClick ={handleCapClick}>Capitalize first letter </button> 
    <button disabled ={text.length===0} className="btn btn-success mx-1 my-1" onClick ={handleCopy}>Copy Text </button>   
    <button disabled ={text.length===0} className="btn btn-success mx-1 my-1" onClick ={handleClearClick}>Clear Text </button>      
 </div>
<div className ="container my-2" style = {{color: props.mode === 'dark'?'white':'#0e2f1f'}}>

    <h4> YOUR TEXT SUMMARY</h4>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length } words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes required to read</p>
    <h4> PREVIEW </h4>
    <p>{text.length>0?text: "Nothing to preview"}</p>

</div>

</>

  )
  


  }
